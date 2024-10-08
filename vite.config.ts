import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { asyncTransform } from '@sheepdog/svelte/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), asyncTransform()],
});
