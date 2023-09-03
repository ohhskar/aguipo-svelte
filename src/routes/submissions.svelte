<script lang="ts">
	import Header from '$src/components/header.svelte';
	import Guidelines from '$src/widgets/@submission/guidelines.svelte';
</script>

<svelte:head>
	<meta itemprop="name" content="Submission Guidelines | Aguipo Global South Journal" />
	<meta property="og:title" content="Submission Guidelines | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Submission Guidelines | Aguipo Global South Journal" />
	<title>Submission Guidelines | Aguipo Global South Journal</title>
</svelte:head>

<Header background="/images/submission/header.jpg" title="Submissions" />
<Guidelines />
