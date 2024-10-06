<script lang="ts" module>
	let running = $state<'none' | 'sync' | 'async'>('none');

	export const props = defineProps({
		in() {
			running = 'none';
		},
	});
</script>

<script lang="ts">
	import { Action, defineProps } from '@animotion/core';
</script>

<div class="grid aspect-video w-full grid-cols-2 gap-4 rounded-2xl bg-stone-900/70 p-4">
	<ul class:running={running === 'sync'} class="grid list-none grid-rows-9 gap-4 bg-stone-800 p-4">
		<li class="text-left font-mono text-2xl">Sync</li>
		{#each { length: 8 } as _, i}
			<li
				style:--stagger={i * 1000 + (i > 3 ? 2000 : 0)}
				class:slow={i === 3}
				class:ml-16={i > 1 && i < 5}
				class="bg-stone-700"
			></li>
		{/each}
	</ul>
	<ul class:running={running === 'async'} class="grid list-none grid-rows-9 gap-4 bg-stone-800 p-4">
		<li class="text-left font-mono text-2xl">Async</li>
		{#each { length: 8 } as _, i}
			<li
				style:--stagger={i * 1000 + (i === 4 ? 5000 : i > 4 ? -2000 : 0)}
				class:slow-async={i === 3}
				class:ml-16={i > 1 && i < 5}
				class="bg-stone-700"
			></li>
		{/each}
	</ul>
</div>

<Action
	do={() => {
		running = 'sync';
	}}
/>

<Action
	do={() => {
		running = 'async';
	}}
/>

<style>
	.running {
		li {
			animation: light 1000ms calc(var(--stagger) * 1ms);
		}
		.slow {
			animation-duration: 3000ms;
			animation-name: light-slow;
		}
		.slow-async {
			animation-duration: 6000ms;
			animation-name: light-slow-async;
		}
	}

	@keyframes light {
		to,
		50% {
			background-color: yellow;
		}
	}

	@keyframes light-slow {
		to,
		16.6% {
			background-color: orange;
		}
	}

	@keyframes light-slow-async {
		to,
		8% {
			background-color: orange;
		}
	}
</style>
