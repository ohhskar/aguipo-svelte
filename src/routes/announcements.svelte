<script lang="ts">
	import Header from '$src/components/header.svelte';
	import Call from '$src/widgets/@announcements/call.svelte';
</script>

<svelte:head>
	<meta itemprop="name" content="Announcements | Aguipo Global South Journal" />
	<meta property="og:title" content="Announcements | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Announcements | Aguipo Global South Journal" />
	<title>Announcements | Aguipo Global South Journal</title>
</svelte:head>

<Header background="/images/submission/header.jpg" title="Announcements" />
<Call />
