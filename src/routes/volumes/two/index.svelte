<script lang="ts">
	import Header from '$src/components/@volumes/header.svelte';
	import Content from '$src/widgets/@volumes/content.svelte';
	import Footer from '$src/widgets/@volumes/footer.svelte';

	import { VolumeTwo } from '$src/constants/volume-two';
</script>

<svelte:head>
	<meta itemprop="name" content="Volume Two | Aguipo Global South Journal" />
	<meta property="og:title" content="Volume Two | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Volume Two | Aguipo Global South Journal" />
	<title>Volume Two | Aguipo Global South Journal</title>
</svelte:head>

<Header src="/images/volumes/two.jpg" alt="AGSJ Volume 1 Cover" />
<Content items={VolumeTwo} />
<Footer file="/files/two/aguipo-volume-two.zip" />
