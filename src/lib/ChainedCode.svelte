<script lang="ts">
	import { Code, Action } from '@animotion/core';
	import type { ComponentProps } from 'svelte';

	type ChainedCodeProps = Omit<ComponentProps<typeof Code>, 'code'> & {
		codes: [string, ...string[]];
	};

	const { codes, ...rest }: ChainedCodeProps = $props();

	let code: ReturnType<typeof Code>;
</script>

<Code bind:this={code} code={codes[0]} {...rest} />

{#each codes as _, i}
	{#if codes[i + i]}
		<Action
			do={() => {
				code.update`${codes[i + 1]}`;
			}}
			undo={() => {
				code.update`${codes[i]}`;
			}}
		/>
	{/if}
{/each}
