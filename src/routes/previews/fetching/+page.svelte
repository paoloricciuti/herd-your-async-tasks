<script lang="ts">
	import type { Products } from '../products';
	let products = $state<Products>([]);

	async function fetch_products() {
		const res = await fetch('/products');
		products = await res.json();
	}
</script>

<button onclick={() => fetch_products()}>fetch</button>

<ul>
	{#each products as product}
		<li>{product.title}</li>
	{/each}
</ul>
