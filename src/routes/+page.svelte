<svelte:options runes />

<script lang="ts">
	import { browser } from '$app/environment';
	import Presenter from '$lib/Presenter.svelte';
	import { Slide as OgSlide, Presentation } from '@animotion/core';
	import type { Component, ComponentProps } from 'svelte';

	const slides = Object.entries(
		import.meta.glob<{
			default: Component;
			component?: Component;
			props?: ComponentProps<typeof OgSlide>;
		}>('../slides/**/slide.svelte', {
			eager: true,
		}),
	)
		.map(([filename, exports]) => {
			const matches = filename.match(/slides\/(?<number>\d+)\/slide.svelte/);
			return [+matches!.groups!.number, exports] as const;
		})
		.sort(([num_a], [num_b]) => num_a - num_b);

	let size = $state(0);
	// svelte-ignore state_referenced_locally
	let x = $state<number>();
	// svelte-ignore state_referenced_locally
	let y = $state<number>();

	if (browser) {
		move_orb();
	}

	function move_orb() {
		size = (Math.random() * 30 + 30 * window.innerWidth) / 100;
		x = (Math.random() * 100 * window.innerWidth) / 100;
		y = (Math.random() * 100 * window.innerHeight) / 100;
	}
</script>

<div style:--size={size} style:--x="{x}px" style:--y="{y}px" class="orb"></div>

<Presenter />

<Presentation
	options={{
		history: true,
		height: '100%',
		transition: 'slide',
		controls: true,
		progress: true,
		disableLayout: false,
	}}
>
	{#each slides as [_, slide]}
		{@const Wrapper = slide.component ?? OgSlide}
		<Wrapper
			class="h-full {slide.props?.class ?? ''}"
			{...slide.props ?? {}}
			in={() => {
				(slide.props ?? {}).in?.();
				move_orb();
			}}
		>
			<div class="grid h-full place-items-center">
				<slide.default></slide.default>
			</div>
		</Wrapper>
	{/each}
</Presentation>

<style>
	.orb {
		width: 1px;
		aspect-ratio: 1;
		background-color: #ff3e00;
		position: fixed;
		top: 0;
		left: 0;
		filter: blur(0.9px);
		transform: translateX(var(--x)) translateY(var(--y)) scale(var(--size));
		transition: transform 350ms;
		pointer-events: none;
	}
</style>
