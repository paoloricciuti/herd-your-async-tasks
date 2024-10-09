<script lang="ts">
	import { Action } from '@animotion/core';

	const { actions, undo }: { actions: Array<() => void>; undo: () => void } = $props();
</script>

{#each actions as action, i}
	<Action do={action} undo={i === 0 ? undo : actions[i - 1]} />
{/each}
