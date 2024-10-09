<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import { subscribe_events } from './events.svelte.js';
	import { task, timeout } from '@sheepdog/svelte';
	import { Code } from '@animotion/core';

	type HandlerType = 'default' | 'drop' | 'enqueue' | 'keepLatest' | 'restart';

	type Event = {
		name: any;
		position: {
			x: number;
			y: number;
		};
		size: number;
		started: number;
		current: number;
		invoked: number;
	};

	let {
		active = false,
		kind = 'default',
		time = 10000,
	}: { active: boolean; kind?: HandlerType; time?: number } = $props();

	let events = $state<SvelteSet<Event>>(new SvelteSet());

	const formatter = new Intl.RelativeTimeFormat('en', { style: 'short' });

	const push_task = task(
		async (
			{
				name,
				controller,
				invoked,
			}: {
				name: string;
				controller: AbortController;
				invoked: number;
			},
			{ signal },
		) => {
			let size = Math.random() * 20 + 20;
			const event = $state({
				name,
				position: {
					x: Math.random() * (100 - size),
					y: Math.random() * (100 - size),
				},
				size,
				started: Date.now(),
				current: Date.now(),
				invoked,
			});
			let interval = setInterval(() => {
				event.current = Date.now();
			});
			events.add(event);
			let timeout_id = setTimeout(() => {
				events.delete(event);
				clearInterval(interval);
			}, time);
			controller?.signal.addEventListener('abort', () => {
				events.delete(event);
				clearTimeout(timeout_id);
				clearInterval(interval);
			});
			signal.addEventListener('abort', () => {
				events.delete(event);
				clearTimeout(timeout_id);
				clearInterval(interval);
			});
			await timeout(time);
		},
		{ kind },
	);

	subscribe_events(
		'ping',
		async (e, controller) => {
			try {
				await push_task.perform({ name: e.data, controller, invoked: Date.now() });
			} catch {}
		},
		() => active,
	);
</script>

<Code
	lang="ts"
	theme="github-dark"
	class="rounded-lg p-10 text-3xl!"
	code={`task${kind !== 'default' ? `.${kind}` : ''}(async (event: Event)=> { 
	events.add(event)
})`}
/>

{#each events as event}
	<div
		style:--x="{event.position.x}%"
		style:--y="{event.position.y}%"
		style:--size="{event.size}%"
		style:--percent={(event.current - event.started) / time}
		class="fixed top-[--y] left-[--x] grid aspect-square w-[--size] place-content-center place-items-center gap-5 overflow-hidden rounded-full bg-orange-200/75 text-orange-950 drop-shadow-2xl"
	>
		{event.name}
		<small class="text-xs!"
			>sent {formatter.format(Math.floor((event.invoked - event.current) / 1000), 'seconds')}</small
		>
	</div>
{/each}

<style>
	div::after {
		content: '';
		position: absolute;
		inset: 0;
		--fill: calc(var(--percent) * 100%);
		background-image: conic-gradient(rgb(0 0 0 / 0.2) var(--fill), transparent var(--fill));
	}
</style>
