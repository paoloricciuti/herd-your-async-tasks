<script lang="ts" module>
	import { defineProps, Action } from '@animotion/core';
	import dramatic_chipmunk from './dramatic-chipmunk-gif.gif';
	import { fly } from 'svelte/transition';
	import { elasticOut, quadIn } from 'svelte/easing';
	let show = $state(false);

	export const props = defineProps({
		image: dramatic_chipmunk,
		out() {
			show = false;
		},
	});

	function spin(node: HTMLElement, { duration }: { duration: number }) {
		return {
			duration,
			css: (t: number) => {
				const eased = quadIn(t);

				return `
					transform: scale(${eased}) rotate(${eased * 360}deg);
					`;
			},
		};
	}
</script>

<Action
	do={() => {
		show = true;
	}}
/>

{#if show}
	<h1
		transition:spin={{ duration: 1500 }}
		class="rotate-[10deg] font-sans text-9xl font-bold text-red-600"
	>
		A̴͉̩̓̇̒͝S̶̷̮̪̜̜̏͆̐̊̆ͬ̾ͨ̋ͨ͝Y̴̢͍͉̲͔̖͈͚̲̺͛ͧ̊͋ͨ̓̊̐͐͘̕͡͡͡N̸̡̬̺̲͖ͨ͌̿́͝͞C̶̵̢̛̱͈͕̻͙̘̼̪̳͕̤͌ͮ̓͂͊̅ͥ̈́ͫ̒́͟͡ C̷̷̸̸̷̨̛̤̟̹̼̰̹̤͉͇̪̘̍ͪ̔̄͋ͪͤͦ͗ͧ̈̈͢͢ͅO͕̰̥̪̝̫̣̊ͧ́̊̉́̔̌ͬ̏̽͜D̶̨̛̛̞̫̣̜̜͓̘͈͈̩͇͙̱͔̫̼̓̓́ͤͤ̽̓̂ͬ̑ͮ̓̑̈̐̽͋͆E̩̮̣̤̖̲͌͂ͤ͑ͮ̔ͬ̄̊̂̐ͯ͟!͈̯̹͔͈̤͒̔̀ͥͪ̐͢͝ͅ
	</h1>
{/if}

<style>
	h1 {
		filter: drop-shadow(0px 0px 5px #ff3e00) drop-shadow(0px 0px 15px black);
	}
</style>
