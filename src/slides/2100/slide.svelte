<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import { defineProps } from '@animotion/core';
	import before from '../../routes/previews/cancelling/+page.svelte?raw';
	import after from '../../routes/previews/sheepdog/+page.svelte?raw';
</script>

<ChainedCode
	data-id="code"
	class="rounded-lg p-10 text-sm!"
	lang="svelte"
	theme="github-dark"
	codes={[before, after]}
/>
