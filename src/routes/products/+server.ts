import { timeout } from '@sheepdog/svelte';
import { json } from '@sveltejs/kit';

export const prerender = false;

export async function GET({ fetch }) {
	await timeout(2000);
	const res = await fetch('https://dummyjson.com/products');
	return json((await res.json()).products);
}
