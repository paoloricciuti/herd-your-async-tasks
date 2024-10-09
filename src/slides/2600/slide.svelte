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
	import { subscribe_events } from '$lib/events.svelte.js';
	import LiveQrCode from '$lib/LiveQrCode.svelte';
	import { defineProps } from '@animotion/core';

	let logged_in = $state(0);

	subscribe_events(
		'login',
		() => {
			logged_in++;
		},
		() => active,
	);

	subscribe_events(
		'logout',
		() => {
			logged_in = Math.max(0, logged_in - 1);
		},
		() => active,
	);
</script>

<div class="flex gap-10">
	<div class="grid place-items-center gap-10">
		<LiveQrCode />
		<div class="inline-flex items-center gap-2 rounded-2xl border p-2 px-4 font-mono text-2xl">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				width="24"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
				data-slot="icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
				/>
			</svg>
			{logged_in}
		</div>
	</div>
	<iframe
		class="aspect-[9/16] min-w-[400px] rounded-2xl border-2 border-stone-500 shadow-orange-100"
		src="/live"
		title="voting"
	></iframe>
</div>
