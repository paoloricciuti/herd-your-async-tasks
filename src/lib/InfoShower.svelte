<script lang="ts">
	import type { Snippet } from 'svelte';
	import { draw, fade } from 'svelte/transition';

	const {
		drawn = 0,
		infos,
		children,
	}: {
		infos: Array<{
			x: number;
			y: number;
			angle: number;
			length: number;
			info: string;
		}>;
		drawn: number;
		children: Snippet;
	} = $props();

	const drawn_infos = $derived(infos.slice(0, drawn));

	function get_start(angle: number) {
		return {
			x: Math.cos(angle) > 0 ? 0 : 100,
			y: Math.sin(angle) > 0 ? 100 : 0,
		};
	}
</script>

<div class="relative">
	{#each drawn_infos as info}
		{@const radians = (info.angle / 180) * Math.PI}
		{@const start = get_start(radians)}
		{@const second_point = {
			x: start.x + Math.cos(radians) * info.length,
			y: start.y - Math.sin(radians) * info.length,
		}}
		{@const info_x = Math.cos(radians) > 0 ? 95 : 5}
		{@const text_x = Math.cos(radians) > 0 ? 90 - info.info.length * 2.5 : 10}
		<svg
			style:--top="{(Math.sin(radians) > 0 ? -100 : 0) + info.y}%"
			style:--left="{(Math.cos(radians) > 0 ? 0 : -100) + info.x}%"
			class="absolute top-[--top] left-[--left] w-full"
			fill="transparent"
			viewBox="0 0 100 100"
		>
			<polyline
				transition:draw={{ duration: 1000 }}
				stroke="white"
				points="{start.x} {start.y} {second_point.x} {second_point.y} {info_x} {second_point.y} {info_x} {second_point.y -
					20} {second_point.x} {second_point.y - 20}"
			/>
			<g transition:fade={{ duration: 250, delay: 1000 }}>
				<text y={second_point.y - 8} x={text_x}>{info.info}</text>
			</g>
		</svg>
	{/each}
	{@render children()}
</div>

<style>
	text {
		fill: white;
		font-size: 0.25rem;
		font-family: monospace;
	}
</style>
