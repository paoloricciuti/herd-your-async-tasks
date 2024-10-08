<script lang="ts">
	import { task } from '@sheepdog/svelte';
	import Loading from '../Loading.svelte';
	import type { Products } from '../products';

	const products = task(async () => {
		const res = await fetch('/products');
		const products = (await res.json()) as Products;
		return products;
	});
</script>

<button onclick={() => products.perform()}
	>fetch {#if $products.isRunning}<Loading />{/if}</button
>
<button
	onclick={() => {
		products.cancelAll();
	}}>cancel</button
>

<ul>
	{#each $products.lastSuccessful?.value ?? [] as product}
		<li>{product.title}</li>
	{/each}
</ul>
