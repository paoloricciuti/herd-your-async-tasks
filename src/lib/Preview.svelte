<script lang="ts">
	import { Code } from '@animotion/core';

	const { url }: { url: string } = $props();

	let code: ReturnType<typeof Code>;

	const previews = import.meta.glob<string>('../routes/previews/*/+page.svelte', {
		eager: true,
		query: 'raw',
		import: 'default',
	});

	export function get_code() {
		return code;
	}
</script>

<div class="grid grid-cols-3 gap-4">
	<Code
		bind:this={code}
		lang="svelte"
		class="col-span-2 max-h-[600px] max-w-full overflow-auto rounded-lg p-10 text-sm!"
		theme="github-dark"
		code={previews[`../routes/previews${url}/+page.svelte`]}
	/>

	<iframe class="h-full w-full border-0 bg-white" src="/previews{url}" title="preview"></iframe>
</div>
