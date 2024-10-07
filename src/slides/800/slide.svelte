<script lang="ts">
	import { Code } from '@animotion/core';
	import Action from '$lib/Action.svelte';

	let code: ReturnType<typeof Code>;
</script>

<Code
	bind:this={code}
	lang="js"
	theme="github-dark"
	class="p-10"
	code={`import fs from 'node:fs';

try{
	const data = fs.readFileSync('my-file.txt', 'utf8');
	console.log(data);
}catch(err){
	console.error(err);
}
console.log('got data');`}
/>

<Action
	in={() => {
		code.update`import fs from 'node:fs';

fs.readFile('my-file.txt', 'utf8', (err, data)=>{
	if(err){
		console.error(err);
		return;
	}
	console.log(data);
});
console.log('got data');`;
	}}
	out={() => {
		code.update`import fs from 'node:fs';

try{
	const data = fs.readFileSync('my-file.txt', 'utf8');
	console.log(data);
}catch(err){
	console.error(err);
}
console.log('got data');`;
	}}
/>
