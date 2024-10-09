<script lang="ts">
	import Actions from '$lib/Actions.svelte';
	import ChainedCode from '$lib/ChainedCode.svelte';
	import before from '../../routes/previews/debouncing/+page.svelte?raw';
	import after from '../../routes/previews/sheepdog-debounce/+page.svelte?raw';
	import middle from '../../routes/previews/sheepdog/+page.svelte?raw';

	let code: ReturnType<typeof ChainedCode>;
</script>

<ChainedCode
	bind:this={code}
	class="max-h-[600px] overflow-auto rounded-lg p-10 text-sm!"
	lang="svelte"
	theme="github-dark"
	codes={[before, middle, after]}
/>

<Actions
	undo={() => {
		code.get_code().selectLines`*`;
	}}
	actions={[
		() => {
			code.get_code().selectLines`2`;
		},
		() => {
			code.get_code().selectToken`6 task. restart`;
		},
		() => {
			code.get_code().selectLines`7`;
		},
		() => {
			code.get_code().selectLines`*`;
		},
	]}
/>
