<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';

	const time = 10000;

	let { active = false } = $props();
	let events = $state<
		SvelteSet<{
			name: string;
			started: number;
			current: number;
			position: { x: number; y: number };
			size: number;
		}>
	>(new SvelteSet());

	$effect(() => {
		let controller: AbortController | undefined;
		if (active) {
			controller = new AbortController();
			const event_source = new EventSource('/live/sse');
			event_source.addEventListener(
				'message',
				(e) => {
					let size = Math.random() * 20 + 20;
					const event = $state({
						name: e.data,
						position: {
							x: Math.random() * (100 - size),
							y: Math.random() * (100 - size),
						},
						size,
						started: Date.now(),
						current: Date.now(),
					});
					let interval = setInterval(() => {
						event.current = Date.now();
					});
					events.add(event);
					let timeout = setTimeout(() => {
						events.delete(event);
						clearInterval(interval);
					}, time);
					controller?.signal.addEventListener('abort', () => {
						clearTimeout(timeout);
						clearInterval(interval);
					});
				},
				{
					signal: controller.signal,
				},
			);
		}
		return () => {
			controller?.abort();
		};
	});
</script>

{#each events as event}
	<div
		style:--x="{event.position.x}%"
		style:--y="{event.position.y}%"
		style:--size="{event.size}%"
		style:--percent={(event.current - event.started) / time}
		class="fixed top-[--y] left-[--x] grid aspect-square w-[--size] place-items-center overflow-hidden rounded-full bg-orange-200 text-orange-950 drop-shadow-2xl"
	>
		{event.name}
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
