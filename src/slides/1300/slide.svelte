<script lang="ts">
	import ChainedCode from '$lib/ChainedCode.svelte';
	import { Action } from '@animotion/core';
	import waiting from './waiting-gif.gif';
	import { fade } from 'svelte/transition';

	let show = $state(false);
</script>

<Action
	do={() => {
		show = true;
	}}
	undo={() => {
		show = false;
	}}
/>

<Action
	do={() => {
		show = false;
	}}
	undo={() => {
		show = true;
	}}
/>

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

const value = await promise;`,
		`const promise = new Promise((resolve)=>{
	resolve(21);
});

const value = await promise;
const double = value * 2;`,
		`const promise = new Promise((resolve)=>{
	resolve(21);
});

try{
	const value = await promise;
	const double = value * 2;
}catch(err){
	console.error(err);
}
`,
	]}
/>

{#if show}
	<img
		transition:fade={{ duration: 250 }}
		src={waiting}
		class="absolute inset-0 top-1/2 w-full -translate-y-1/2"
		alt="we're waiting"
	/>
{/if}
