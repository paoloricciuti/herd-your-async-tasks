<script lang="ts">
	import { Action, Code } from '@animotion/core';
	import pm from './pm.gif';

	let code: ReturnType<typeof Code>;
</script>

<img src={pm} class="w-[70%]" alt="project manager" />

<Code
	bind:this={code}
	lang="js"
	theme="github-dark"
	class="rounded-lg p-10"
	code={`new Promise((fulfil, reject)=>{

});`}
/>

<Action
	do={() => {
		code.selectToken`new Promise`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code.selectToken`fulfil`;
	}}
	undo={() => {
		code.selectToken`new Promise`;
	}}
/>

<Action
	do={() => {
		code.selectToken`reject`;
	}}
	undo={() => {
		code.selectToken`fulfil`;
	}}
/>
