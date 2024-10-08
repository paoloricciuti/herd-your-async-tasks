<script lang="ts">
	import { Code, Action } from '@animotion/core';
	import { confetti } from '@neoconfetti/svelte';
	let throw_confetti = $state(false);
</script>

<div class="relative">
	{#if throw_confetti}
		<div class="absolute left-1/2" use:confetti></div>
	{/if}
	<Code
		lang="bash"
		class="rounded-lg p-10 text-6xl!"
		theme="github-dark"
		code="pnpm i @sheepdog/svelte"
	/>
</div>

<Action
	do={() => {
		throw_confetti = true;
	}}
	undo={() => {
		throw_confetti = false;
	}}
/>
