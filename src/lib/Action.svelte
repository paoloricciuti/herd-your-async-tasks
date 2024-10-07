<script lang="ts">
	type ActionProps = {
		order?: number;
		do?: () => void;
		in?: () => void;
		out?: () => void;
	};

	let { order, ...props }: ActionProps = $props();
	let el: HTMLDivElement;

	const noop = () => {};
	const action = () => props?.do?.() ?? noop();
	const in_fn = () => props?.in?.() ?? noop();
	const out = () => props?.out?.() ?? noop();

	$effect(() => {
		el.addEventListener('current', action);
		el.addEventListener('in', in_fn);
		el.addEventListener('out', out);

		return () => {
			el.removeEventListener('current', action);
			el.removeEventListener('in', in_fn);
			el.removeEventListener('out', out);
		};
	});
</script>

<div bind:this={el} class="fragment hidden" data-fragment-index={order}></div>
