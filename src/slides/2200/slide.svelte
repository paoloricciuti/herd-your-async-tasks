<script lang="ts" module>
	import Preview from '$lib/Preview.svelte';
	import { Action } from '@animotion/core';
	import type { ComponentExports } from '../types';

	let preview: ReturnType<typeof Preview>;
</script>

<Preview bind:this={preview} url="/sheepdog" />

<Action
	do={() => {
		preview.get_code().selectLines`6-10`;
	}}
	undo={() => {
		preview.get_code().selectLines`*`;
	}}
/>

<Action
	do={() => {
		preview.get_code().selectToken`13 onclick ={() products. perform ()}`;
	}}
	undo={() => {
		preview.get_code().selectLines`6-10`;
	}}
/>

<Action
	do={() => {
		preview.get_code().selectToken`14 if $products.isRunning}< Loading />{/`;
	}}
	undo={() => {
		preview.get_code().selectToken`13 onclick ={() products. perform ()}`;
	}}
/>

<Action
	do={() => {
		preview.get_code().selectLines`18`;
	}}
	undo={() => {
		preview.get_code().selectToken`14 if $products.isRunning}< Loading />{/`;
	}}
/>

<Action
	do={() => {
		preview.get_code().selectToken`$products.lastSuccessful?.value`;
	}}
	undo={() => {
		preview.get_code().selectLines`18`;
	}}
/>
