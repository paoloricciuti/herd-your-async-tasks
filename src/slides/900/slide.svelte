<script lang="ts">
	import { Action, Code } from '@animotion/core';
	import devil from './devil.png';

	let code: ReturnType<typeof Code>;
	let satan = $state(false);
</script>

<div class="relative">
	<img
		class:hello={satan}
		src={devil}
		alt="satan"
		class="absolute right-0 bottom-36 w-36 transition"
	/>
	<Code
		bind:this={code}
		lang="js"
		theme="github-dark"
		class="bigger-tabs rounded-lg p-10"
		code={`import fs from 'node:fs';

fs.readFile('name.txt', 'utf8', (err, name)=>{
	if(err){
		console.error(err);
		return;
	}
});`}
	/>
	{#if satan}
		<small class="absolute right-3 bottom-3">Thanks to freepik for Satan!</small>
	{/if}
</div>

<Action
	do={() => {
		code.update`import fs from 'node:fs';

fs.readFile('name.txt', 'utf8', (err, name)=>{
	if(err){
		console.error(err);
		return;
	}
	fs.readFile(name+'.txt', (err, to_read)=>{
		if(err){
			console.error(err);
			return;
		}
	});
});`;
	}}
	undo={() => {
		code.update`import fs from 'node:fs';

fs.readFile('name.txt', 'utf8', (err, name)=>{
	if(err){
		console.error(err);
		return;
	}
});`;
	}}
/>

<Action
	do={() => {
		code.update`import fs from 'node:fs';

fs.readFile('name.txt', 'utf8', (err, name)=>{
	if(err){
		console.error(err);
		return;
	}
	fs.readFile(name+'.txt', (err, to_read)=>{
		if(err){
			console.error(err);
			return;
		}
		fs.readFile(to_read, (err, file)=>{
			if(err){
				console.error(err);
				return;
			}
			console.log(file);
		});
	});
});`;
	}}
	undo={() => {
		code.update`import fs from 'node:fs';

fs.readFile('name.txt', 'utf8', (err, name)=>{
	if(err){
		console.error(err);
		return;
	}
	fs.readFile(name+'.txt', (err, to_read)=>{
		if(err){
			console.error(err);
			return;
		}
	});
});`;
	}}
/>

<Action
	do={() => {
		satan = true;
	}}
	undo={() => {
		satan = false;
	}}
/>

<style>
	img {
		transition: transform 250ms;
	}
	img.hello {
		transform: translateX(80%) rotate(45deg);
	}
</style>
