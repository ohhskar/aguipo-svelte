import path from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		scss: { includePaths: ['src', 'node_modules'] }
	}),

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$src: path.resolve('./src/'),
					$static: path.resolve('./static/')
				}
			}
		}
	}
};

export default config;
