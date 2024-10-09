<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import { Code } from '@animotion/core';
</script>

<ChainedCode
	lang="typescript"
	theme="github-dark"
	class="rounded-lg p-10 text-4xl!"
	codes={[
		`async function my_task(){
	const res = await fetch("/products");
	const products = await res.json();

	/** 
	 * if the user cancel here how do i 
	 * stop the execution?
	 */
	
	for(let product of products){
		very_expensive_calculation(product);
	}
}`,
		`async function* my_task(){
	const res = await fetch("/products");
	yield;
	const products = await res.json();
	yield;

	/** 
	 * if the user cancel here how do i 
	 * stop the execution?
	 */
	
	for(let product of products){
		very_expensive_calculation(product);
	}
}`,
	]}
/>
