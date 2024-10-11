<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import { Action, Code } from '@animotion/core';
	import before from '../../routes/previews/cancelling/+page.svelte?raw';
	import after from '../../routes/previews/sheepdog/+page.svelte?raw';

	let on_top = $state(false);
</script>

<div
	class:new-on-top={on_top}
	class="grid grid-cols-1 items-start gap-10 transition-all *:col-start-1 *:col-end-1 *:row-start-1 *:row-end-1"
>
	<Code class="scale-0 rounded-lg p-10 text-sm!" lang="svelte" theme="github-dark" code={after} />
	<Code class="rounded-lg p-10 text-sm!" lang="svelte" theme="github-dark" code={before} />
</div>

<Action
	do={() => {
		on_top = true;
	}}
	undo={() => {
		on_top = false;
	}}
/>

<style>
	div > :global(*) {
		transition:
			transform 500ms,
			scale 500ms;
	}
	.new-on-top > :global(:nth-child(1)) {
		transform: translateX(55%);
		scale: 1;
	}

	.new-on-top > :global(:nth-child(2)) {
		transform: translateX(-70%);
	}
</style>
