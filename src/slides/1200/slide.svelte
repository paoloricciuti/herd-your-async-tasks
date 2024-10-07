<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<ChainedCode
	lang="js"
	theme="github-dark"
	class="bigger-tabs p-10"
	codes={[
		`const promise = new Promise((resolve)=>{
	return 21;
});

promise.then((value)=>{
	return value * 2;
})`,
		`const promise = new Promise((resolve)=>{
	return 21;
});

promise.then((value)=>{
	return value * 2;
}).then((double)=>{
	return double.toString();
})`,
		`const promise = new Promise((resolve)=>{
	return 21;
});

promise.then((value)=>{
	return value * 2;
}).then((double)=>{
	return double.toString();
}).catch((err)=>{
	console.error(err);
})`,
	]}
/>
