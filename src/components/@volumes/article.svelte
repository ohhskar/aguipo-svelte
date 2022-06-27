<script lang="ts">
	export let title: string;
	export let author: string;
	export let link: string;
	export let startingPage: string;
	export let doi: string | undefined = undefined;
</script>

<div class="mb-16">
	<a href={link} download>
		<span class="block font-merriweather text-sm text-ag-grey pb-2">{startingPage}</span>
		<span class="block font-merriweather text-lg text-ag-black pb-2">{title}</span>
		<span class="block font-merriweather text-lg text-ag-grey pb-4">
			{author}
		</span>
	</a>
	{#if doi}
		<a href={doi} class="font-merriweather">{doi}</a>
	{/if}
</div>
