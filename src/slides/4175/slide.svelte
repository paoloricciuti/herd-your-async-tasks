<script lang="ts" module>
	import pr from './pr.png';
</script>

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
		class="rounded-lg p-10 text-4xl!"
		theme="github-dark"
		code="pnpm i @sheepdog/vanilla"
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

<img
	src={pr}
	alt="screenshot of the pr to initialize sheepdog vanilla"
	class="w-[50vw] place-self-start"
/>
