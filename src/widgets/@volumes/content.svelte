<script lang="ts">
	import H3 from '$src/components/h3.svelte';
	import Article from '$src/components/@volumes/article.svelte';

	export let editorials: Aguipo.Article[] = [];
	export let featuredArticles: Aguipo.Article[] = [];
	export let articles: Aguipo.Article[] = [];
</script>

<section class="container mb-32">
	{#if editorials.length > 0}
		<H3>Editorial</H3>
		{#each editorials as editorial}
			<Article {...editorial} />
		{/each}
	{/if}
	{#if featuredArticles.length > 0}
		<H3>Featured Article</H3>
		{#each featuredArticles as featuredArticle}
			<Article {...featuredArticle} />
		{/each}
	{/if}
	{#if articles.length > 0}
		<H3>Articles</H3>
		{#each articles as article}
			<Article {...article} />
		{/each}
	{/if}
</section>
