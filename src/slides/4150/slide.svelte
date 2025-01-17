<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
</script>

<div>
	<pre class="bg-zinc-900"><span class="rounded-t-lg bg-zinc-800 p-4">ASvelteComponent.svelte</span
		></pre>
	<ChainedCode
		lang="typescript"
		theme="github-dark"
		class="rounded-lg p-10"
		codes={[
			`const my_task = task(async () => {
		const res = await fetch('/products');
		const products = await res;
		return products;
	});`,
			`const my_task = task(async function*(){
		const res = yield fetch('/products');
		const products = yield res;
		return products;
	});`,
		]}
	/>
</div>
<div class="self-baseline">
	<pre class="bg-zinc-900"><span class="rounded-t-lg bg-zinc-800 p-4">ATypescriptFile.ts</span
		></pre>
	<ChainedCode
		lang="typescript"
		theme="github-dark"
		class="rounded-lg p-10"
		codes={[
			`import { transform } from '@sheepdog/svelte/utils';
			
		const my_task = transform(async () => {
			const res = await fetch('/products');
			const products = await res;
			return products;
		});`,
			`const my_task = async function*(){
			const res = yield fetch('/products');
			const products = yield res;
			return products;
		};`,
		]}
	/>
</div>
