<script lang="ts">
	import Content from '$src/widgets/@articles/content.svelte';

	import { VolumeTwo } from '$src/constants/volume-two';

	const volume = { link: '/volumes/two', title: 'Volume 2 (2023)' };
	const content = VolumeTwo['Book Review'][0];
</script>

<svelte:head>
	<meta itemprop="name" content="{content.title} | Aguipo Global South Journal" />
	<meta property="og:title" content="{content.title} | Aguipo Global South Journal" />
	<meta name="twitter:title" content="{content.title} | Aguipo Global South Journal" />
	<title>{content.title} | Aguipo Global South Journal</title>
</svelte:head>

<Content {...content} {volume} />
