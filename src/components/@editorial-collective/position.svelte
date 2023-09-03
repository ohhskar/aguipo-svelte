<script lang="ts">
	import H3 from '$src/components/h3.svelte';
	export let position: string;
	export let officers: {
		name: string;
		affiliation: string;
	}[];
</script>

<H3>
	{position}
</H3>
<div class="mb-24">
	{#each officers as officer (officer.name)}
		<p class="mb-2">
			<span class="font-sans text-ag-black">
				{officer.name}
			</span>
			<span class="font-sans text-ag-grey italic ml-2">
				{officer.affiliation}
			</span>
		</p>
	{/each}
</div>
