<script lang="ts" module>
	import { defineProps, Action } from '@animotion/core';
	import drumroll from './drumroll.gif';
	import suspense_1 from './suspense-1.gif';
	import suspense_2 from './suspense-2.gif';
	import suspense_3 from './suspense-3.gif';
	import suspense_4 from './suspense-4.gif';

	export const props = defineProps({
		image: drumroll,
	});

	let imgs = [suspense_1, suspense_2, suspense_3, suspense_4];

	let shown = $state(0);
</script>

{#each { length: shown } as _, i}
	<img
		style:--w="{(i + 1) * 20}%"
		style:--a="{-30 + (i + 1) * 10}deg"
		class="absolute w-[--w] rotate-[--a]"
		src={imgs[i]}
		alt="suspense"
	/>
{/each}

{#each imgs as _, i}
	<Action
		do={() => {
			shown = i + 1;
		}}
		undo={() => {
			shown = i;
		}}
	/>
{/each}
