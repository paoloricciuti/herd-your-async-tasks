<script lang="ts">
	import Loading from '../Loading.svelte';
	import type { Products } from '../products';

	let products = $state<Products>([]);

	let loading = $state(false);

	async function fetch_products() {
		loading = true;
		const res = await fetch('/products');
		products = await res.json();
		loading = false;
	}
</script>

<button onclick={() => fetch_products()}
	>fetch {#if loading}<Loading />{/if}</button
>

<ul>
	{#each products as product}
		<li>{product.title}</li>
	{/each}
</ul>
