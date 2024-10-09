<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import { Code } from '@animotion/core';
</script>

<ChainedCode
	lang="js"
	theme="github-dark"
	class="bigger-tabs rounded-lg p-10"
	codes={[
		`const promise = new Promise((resolve)=>{
	resolve(21);
});

promise.then((value)=>{
	return value * 2;
})`,
		`const promise = new Promise((resolve)=>{
	resolve(21);
});

promise.then((value)=>{
	return value * 2;
}).then((double)=>{
	return double.toString();
})`,
		`const promise = new Promise((resolve)=>{
	resolve(21);
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
