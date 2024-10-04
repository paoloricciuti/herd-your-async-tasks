<script lang="ts">
	import '../styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Herd your async tasks!</title>
</svelte:head>

{@render children()}
