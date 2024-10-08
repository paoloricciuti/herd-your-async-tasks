<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
</svelte:head>

<div class="grid gap-4 p-10">
	{@render children()}
</div>

<style>
	:global(body) {
		scrollbar-gutter: stable;
	}
</style>
