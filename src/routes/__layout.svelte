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

<svelte:head>
	<!-- Scheme.org Markup -->
	<meta itemprop="name" content="Aguipo Global South Journal" />
	<meta
		itemprop="description"
		content="The Aguipo Global South Journal (AGSJ) publishes articles that advance theoretical, empirical, and methodological studies "
	/>
	<meta itemprop="image" content="https://aguipoglobalsouthjournal.com/images/seo-new.png" />

	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@abstractdigitalph" />
	<meta name="twitter:title" content="Aguipo Global South Journal" />
	<meta
		name="twitter:description"
		content="The Aguipo Global South Journal (AGSJ) publishes articles that advance theoretical, empirical, and methodological studies "
	/>
	<meta
		name="twitter:image:src"
		content="https://aguipoglobalsouthjournal.com/images/seo-new.png"
	/>

	<!-- Open Graph data -->
	<meta property="og:title" content="Aguipo Global South Journal" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://www.abstract.ph/" />
	<meta property="og:image" content="https://aguipoglobalsouthjournal.com/images/seo-new.png" />
	<meta
		property="og:description"
		content="The Aguipo Global South Journal (AGSJ) publishes articles that advance theoretical, empirical, and methodological studies "
	/>
	<meta property="og:site_name" content="Aguipo Global South Journal" />
</svelte:head>

<Navbar {currentPage} />
<slot />
<Footer {currentPage} />
