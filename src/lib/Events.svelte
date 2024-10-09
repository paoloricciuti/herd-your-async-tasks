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
		color: string;
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

	const colors = ['#ef4444', '#84cc16', '#0ea5e9', '#ec4899', '#ff3e00', '#facc15'];

	function get_color(name: string) {
		let color_idx = 0;
		for (let char of [...name]) {
			color_idx += char.charCodeAt(0);
		}
		return colors[color_idx % colors.length];
	}

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
				color: get_color(name),
				size,
				started: Date.now(),
				current: Date.now(),
				invoked,
			});
			let interval = setInterval(() => {
				event.current = Date.now();
			});
			events.add(event);
			controller?.signal.addEventListener('abort', () => {
				events.delete(event);
				clearInterval(interval);
			});
			signal.addEventListener('abort', () => {
				events.delete(event);
				clearInterval(interval);
			});
			await timeout(time).then(() => {
				events.delete(event);
				clearInterval(interval);
			});
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

<div class="flex gap-10">
	<Code
		lang="ts"
		theme="github-dark"
		class="place-self-center rounded-lg p-10 text-2xl!"
		code={`task${kind !== 'default' ? `.${kind}` : ''}(async (event: Event)=> { 
	events.add(event);
	await timeout(time).then(()=>{
		events.delete(event);
	});
})`}
	/>
	{#if active}
		<iframe
			class="fixed top-1/2 left-full aspect-[9/16] min-w-[400px] -translate-x-[30%] -translate-y-1/2 rounded-2xl border-2 border-stone-500 shadow-orange-100"
			src="/live"
			title="voting"
		></iframe>
	{/if}
</div>

{#each events as event}
	<div
		style:--x="{event.position.x}%"
		style:--y="{event.position.y}%"
		style:--size="{event.size}%"
		style:--percent={(event.current - event.started) / time}
		style:--bg={event.color}
		class="pointer-events-none fixed top-[--y] left-[--x] z-50 grid aspect-square w-[--size] place-content-center place-items-center gap-5 overflow-hidden rounded-full bg-[--bg]/75 text-orange-950 drop-shadow-2xl"
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
