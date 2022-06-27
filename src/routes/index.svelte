<script lang="ts">
	import Header from '$src/widgets/@home/header.svelte';
	import About from '$src/widgets/@home/about.svelte';
 import Releases from '$src/widgets/@home/releases.svelte';
	import Collective from '$src/widgets/@home/collective.svelte';
</script>

<svelte:head>
	<meta itemprop="name" content="Aguipo Global South Journal" />
	<meta property="og:title" content="Aguipo Global South Journal" />
	<meta name="twitter:title" content="Aguipo Global South Journal" />
	<title>Aguipo Global South Journal</title>
</svelte:head>

<Header />
<About />
<Releases />
<Collective />
