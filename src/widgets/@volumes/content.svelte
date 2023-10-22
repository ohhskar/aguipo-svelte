<script lang="ts">
	import H3 from '$src/components/h3.svelte';
	import Article from '$src/components/@volumes/article.svelte';
	import type { TVolume } from '$src/types/volume';

	export let items: TVolume = {};
</script>

<section class="container mb-16">
	{#each Object.entries(items) as [header, content]}
		<H3>{header}</H3>
		{#each content as content}
			<Article {...content} />
		{/each}
	{/each}
</section>
