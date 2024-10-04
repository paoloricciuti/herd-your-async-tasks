<script lang="ts">
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<main class="grid h-screen place-content-center">
	{#if data.username}
		<form method="post" action="?/send" class="grid place-items-center gap-5" use:enhance>
			<button class="pushable">
				<span class="shadow"></span>
				<span class="edge"></span>
				<span class="front"></span>
			</button>
			<button
				class="rounded-xl border-0 bg-gradient-to-b from-orange-500 to-orange-600 py-2 px-4 text-lg"
				formaction="?/logout">log out</button
			>
		</form>
	{:else}
		<form method="post" action="?/login" class="grid place-items-center gap-5 p-4" use:enhance>
			<input name="username" class="rounded-xl bg-orange-100 p-2 text-xl" />
			<button
				class="rounded-xl border-0 bg-gradient-to-b from-orange-500 to-orange-600 py-2 px-4 text-lg"
				>log in</button
			>
		</form>
	{/if}
	<p class="text-center text-lg text-red-500">{form?.message}</p>
</main>

<!-- https://www.joshwcomeau.com/animation/3d-button/ -->

<style>
	:global(body) {
		background-color: var(--r-background-color);
		color: var(--r-main-color);
		font-family: var(--r-main-font);
		font-size: var(--r-main-font-size);
		font-weight: normal;
	}
	.pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		border-radius: 100vmax;
		outline-offset: 4px;
		aspect-ratio: 1;
		transition: filter 250ms;
	}
	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 1;
		border-radius: 100vmax;
		height: 100%;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 1;
		border-radius: 100vmax;
		height: 100%;
		background: linear-gradient(
			to left,
			hsl(340deg 100% 16%) 0%,
			hsl(340deg 100% 32%) 8%,
			hsl(340deg 100% 32%) 92%,
			hsl(340deg 100% 16%) 100%
		);
	}
	.front {
		display: grid;
		place-items: center;
		position: relative;
		padding: 180px;
		border-radius: 100vmax;
		aspect-ratio: 1;
		font-size: 3rem;
		color: white;
		background: hsl(345deg 100% 47%);
		will-change: transform;
		transform: translateY(-8px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.pushable:hover {
		filter: brightness(110%);
	}
	.pushable:hover .front {
		transform: translateY(-12px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	.pushable:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	.pushable:focus:not(:focus-visible) {
		outline: none;
	}
</style>
