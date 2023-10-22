<script lang="ts">
	export let title: string;
	export let authors: string[];
	export let link: string;
</script>

<div class="mb-16">
	<a href={link}>
		<span class="block font-merriweather text-lg text-ag-black pb-2">{title}</span>
		<span class="block font-merriweather text-lg text-ag-grey pb-4">
			{authors.join(', ')}
		</span>
	</a>
</div>
