<script lang="ts">
	import Header from '$src/components/header.svelte';
	import Releases from '$src/widgets/@archives/releases.svelte';
</script>

<svelte:head>
	<meta itemprop="name" content="Archives | Aguipo Global South Journal" />
	<meta property="og:title" content="Archives | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Archives | Aguipo Global South Journal" />
	<title>Archives | Aguipo Global South Journal</title>
</svelte:head>

<Header background="/images/submission/header.jpg" title="Archives" />
<Releases />
