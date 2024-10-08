<script lang="ts">
	import Loading from '../Loading.svelte';
	import type { Products } from '../products';

	let products = $state<Products>([]);

	let loading = $state(false);
	let canceled = false;

	function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T {
		let timeout: ReturnType<typeof setTimeout>;
		return ((...args: Parameters<T>) => {
			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => {
				fn(...args);
			}, ms);
		}) as T;
	}

	const fetch_products = debounce(async () => {
		loading = true;
		const res = await fetch('/products');
		if (canceled) {
			canceled = false;
			loading = false;
			return;
		}
		products = await res.json();
		loading = false;
	}, 1000);
</script>

<button onclick={() => fetch_products()}
	>fetch {#if loading}<Loading />{/if}</button
>
<button
	onclick={() => {
		if (loading) {
			canceled = true;
		}
	}}>cancel</button
>

<ul>
	{#each products as product}
		<li>{product.title}</li>
	{/each}
</ul>
