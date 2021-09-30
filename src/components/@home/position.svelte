<script lang="ts">
	export let position: string;
	export let officers: {
		name: string;
		affiliation: string;
	}[];
</script>

<h4
	class="font-merriweather
         text-xl text-ag-black
         mb-6"
>
	{position}
</h4>
<div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 mb-12">
	{#each officers as officer (officer.name)}
		<div>
			<h5
				class="font-sans
               text-lg text-ag-black
               mb-1"
			>
				{officer.name}
			</h5>
			<p
				class="font-sans
               text-sm text-ag-grey
               m-0"
			>
				{officer.affiliation}
			</p>
		</div>
	{/each}
</div>
