<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
</script>

<ChainedCode
	lang="typescript"
	theme="github-dark"
	class="rounded-lg p-10"
	codes={[
		`import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
});
`,
		`import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { asyncTransform } from '@sheepdog/svelte/vite';

export default defineConfig({
	plugins: [sveltekit(), asyncTransform()],
});
`,
	]}
/>

<ChainedCode
	lang="typescript"
	theme="github-dark"
	class="place-self-start rounded-lg p-10"
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
