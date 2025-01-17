<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
</script>

<ChainedCode
	lang="typescript"
	theme="github-dark"
	class="rounded-lg p-10"
	codes={[
		`const my_task = task(async function*(){
	const res = await fetch('/products');
	yield;
	const products = await res;
	yield;
	return products;
});`,
		`const my_task = task(async function*(){
	const res = yield fetch('/products');
	const products = yield res;
	return products;
});`,
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
