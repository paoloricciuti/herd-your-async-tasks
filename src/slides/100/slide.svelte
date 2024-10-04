<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import type { Props } from '../types';
	import loop from './loop.gif';

	export const props = defineProps({
		image: loop,
	});
</script>

<h1 class="font-calistoga absolute bottom-16 left-10 bg-orange-100 p-16 text-orange-950">
	Herd you async tasks
</h1>
