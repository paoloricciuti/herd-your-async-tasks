<script lang="ts">
	import Actions from '$lib/Actions.svelte';
	import { Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Code
	bind:this={code}
	lang="typescript"
	theme="github-dark"
	class="rounded-lg p-10"
	code={`async function* my_generator(){
	// do some stuff
	yield;
	// do other stuff
	yield 42;
	// do yet other stuff
	let value = yield Math.random();
	console.log(value);
	return;
}

const generator = my_generator();
await generator.next();
const the_answer = (await generator.next()).value;
const random = (await generator.next()).value;
const retval = await generator.next(the_answer * random);
console.log(retval.done); // true
`}
/>

<Actions
	undo={() => {
		code.selectLines`*`;
	}}
	actions={[
		() => {
			code.selectLines`12`;
		},
		() => {
			code.selectLines`13`;
		},
		() => {
			code.selectLines`3`;
		},
		() => {
			code.selectLines`14`;
		},
		() => {
			code.selectLines`5`;
		},
		() => {
			code.selectLines`15`;
		},
		() => {
			code.selectLines`7`;
		},
		() => {
			code.selectLines`16`;
		},
		() => {
			code.selectLines`8`;
		},
		() => {
			code.selectLines`17`;
		},
	]}
/>
