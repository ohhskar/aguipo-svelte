<script lang="ts">
	import Content from '$src/widgets/@articles/content.svelte';

	import { VolumeOne } from '$src/constants/volume-one';

	const volume = { link: '/volumes/one', title: 'Volume 1 (2022)' };
	const content = VolumeOne['Articles'][2];
</script>

<svelte:head>
	<meta itemprop="name" content="{content.title} | Aguipo Global South Journal" />
	<meta property="og:title" content="{content.title} | Aguipo Global South Journal" />
	<meta name="twitter:title" content="{content.title} | Aguipo Global South Journal" />
	<title>{content.title} | Aguipo Global South Journal</title>
</svelte:head>

<Content {...content} {volume} />
