<script lang="ts">
	import Header from '$src/components/@volumes/header.svelte';
	import Content from '$src/widgets/@volumes/content.svelte';
	import Footer from '$src/widgets/@volumes/footer.svelte';

	import { VolumeOne } from '$src/constants/volume-one';
</script>

<svelte:head>
	<meta itemprop="name" content="Volume One | Aguipo Global South Journal" />
	<meta property="og:title" content="Volume One | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Volume One | Aguipo Global South Journal" />
	<title>Volume One | Aguipo Global South Journal</title>
</svelte:head>

<Header src="/images/volumes/one.jpg" alt="AGSJ Volume 1 Cover" />
<Content items={VolumeOne} />
<Footer file="/files/one/aguipo-volume-one.zip" />
