<script lang="ts">
	import Loading from '../Loading.svelte';
	import type { Products } from '../products';

	let products = $state<Products>({ products: [] });

	let loading = $state(false);

	async function fetch_products() {
		loading = true;
		const res = await fetch('https://dummyjson.com/products');
		products = await res.json();
		loading = false;
	}
</script>

<button onclick={() => fetch_products()}
	>fetch {#if loading}<Loading />{/if}</button
>

<ul>
	{#each products.products as product}
		<li>{product.title}</li>
	{/each}
</ul>
