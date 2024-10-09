<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import thanks from './thanks.mp4';

	export const props = defineProps({
		video: thanks,
	});
</script>
