<script lang="ts" module>
	let active = $state(false);

	export const props = defineProps({
		in() {
			active = true;
		},
		out() {
			active = false;
		},
	});
</script>

<script lang="ts">
	import Events from '$lib/Events.svelte';
	import { defineProps } from '@animotion/core';
</script>

<Events {active} kind="enqueue" time={2000} />
