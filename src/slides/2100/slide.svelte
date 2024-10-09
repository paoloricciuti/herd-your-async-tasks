<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import before from '../../routes/previews/cancelling/+page.svelte?raw';
	import after from '../../routes/previews/sheepdog/+page.svelte?raw';
</script>

<ChainedCode
	class="rounded-lg p-10 text-sm!"
	lang="svelte"
	theme="github-dark"
	codes={[before, after]}
/>
