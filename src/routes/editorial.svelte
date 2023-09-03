<script lang="ts">
	import Header from '$src/components/header.svelte';
	import Collective from '$src/widgets/@editorial-collective/collective.svelte';
</script>

<svelte:head>
	<meta itemprop="name" content="Editiorial Collective | Aguipo Global South Journal" />
	<meta property="og:title" content="Editiorial Collective | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Editiorial Collective | Aguipo Global South Journal" />
	<title>Editiorial Collective | Aguipo Global South Journal</title>
</svelte:head>

<Header background="/images/submission/header.jpg" title="Editiorial Collective" />
<Collective />
