<script lang="ts">
	import type { Products } from '../products';
	let products = $state<Products>({ products: [] });

	async function fetch_products() {
		const res = await fetch('https://dummyjson.com/products');
		products = await res.json();
	}
</script>

<button onclick={() => fetch_products()}>fetch</button>

<ul>
	{#each products.products as product}
		<li>{product.title}</li>
	{/each}
</ul>
