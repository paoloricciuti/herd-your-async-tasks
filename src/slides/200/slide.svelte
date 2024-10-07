<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	let drawn = $state(0);

	export const props = defineProps({
		out() {
			drawn = 0;
		},
	});
</script>

<script lang="ts">
	import InfoShower from '$lib/InfoShower.svelte';
	import me from './me.jpg';
	import Action from '$lib/Action.svelte';

	const infos = [
		{
			x: 35,
			y: 70,
			angle: 135,
			length: 70,
			info: '🧑🏻‍💻 Paolo Ricciuti',
		},
		{
			x: 50,
			y: 32,
			angle: 65,
			length: 50,
			info: '🍕 Campobasso, Italy',
		},
		{
			x: 80,
			y: 80,
			angle: -30,
			length: 50,
			info: '🐦 @PaoloRicciuti',
		},
		{
			x: 75,
			y: 65,
			angle: 45,
			length: 50,
			info: '🐙 @PaoloRicciuti',
		},
		{
			x: 40,
			y: 85,
			angle: 180 + 55,
			length: 50,
			info: '🔶 Svelte Ambassador',
		},
		{
			x: 55,
			y: 85,
			angle: -60,
			length: 60,
			info: '🧡 Svelte Maintainer',
		},
		{
			x: 35,
			y: 75,
			angle: 170,
			length: 50,
			info: '🤓 Huge nerd',
		},
		{
			x: 39,
			y: 28,
			angle: 115,
			length: 50,
			info: '👴🏻 Senior SWE @Mainmatter',
		},
	];
</script>

{#each infos as _, i}
	<Action
		in={() => {
			drawn = i + 1;
		}}
		out={() => {
			drawn = i;
		}}
	/>
{/each}

<div class="grid place-items-center">
	<div class="grid grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full">
		<InfoShower {drawn} {infos}>
			<img src={me} alt="It's a me Paolo!" />
		</InfoShower>
	</div>
</div>
