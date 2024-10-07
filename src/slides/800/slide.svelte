<script lang="ts">
	import { Code, Action } from '@animotion/core';

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
	do={() => {
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
	undo={() => {
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
