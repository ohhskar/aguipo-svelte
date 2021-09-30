<script lang="ts" context="module">
	export async function load({ page }) {
		return {
			props: {
				currentPage: page.path
			}
		};
	}
</script>

<script lang="ts">
	import '$src/app.postcss';
	import Navbar from '$src/components/navbar.svelte';
	import Footer from '$src/components/footer.svelte';

	export let currentPage: string;
</script>

<Navbar {currentPage} />
<slot />
<Footer {currentPage} />
