<svelte:options runes />

<script lang="ts">
	import { Presentation, Slide as OgSlide } from '@animotion/core';
	import type { Component } from 'svelte';
	import type { Props } from '../slides/types';

	const slides = Object.entries(
		import.meta.glob<{
			default: Component;
			component?: Component;
			props?: Props;
		}>('../slides/**/slide.svelte', {
			eager: true,
		}),
	)
		.map(([filename, exports]) => {
			const matches = filename.match(/slides\/(?<number>\d+)\/slide.svelte/);
			return [+matches!.groups!.number, exports] as const;
		})
		.sort(([num_a], [num_b]) => num_a - num_b);
</script>

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
		<Wrapper class="h-full {slide.props?.class ?? ''}" {...slide.props ?? {}}>
			<div class="grid h-full place-items-center">
				<slide.default></slide.default>
			</div>
		</Wrapper>
	{/each}
</Presentation>
