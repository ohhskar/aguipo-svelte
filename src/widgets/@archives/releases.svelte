<script lang="ts">
	import H3 from '$src/components/h3.svelte';
	import Release from '$src/components/@home/release.svelte';

	const releases = [
		{
			title: 'Volume 2 (2023)',
			link: '/volumes/two'
		},
		{
			title: 'Volume 1 (2022)',
			link: '/volumes/one'
		}
	];
</script>

<section class="container mb-32">
	<H3>Issues</H3>
	{#each releases as release}
		<Release {...release} />
	{/each}
</section>
