<script lang="ts">
	import Button from '$src/components/button.svelte';

	export let currentPage: string;
</script>

{#if currentPage !== '/submission'}
	<section class="w-full mb-16 bg-ag-offwhite">
		<div class="container py-12">
			<h2
				class="font-merriweather
               text-3xl text-ag-black
               mb-4"
			>
				Do you have a paper?
			</h2>
			<p
				class="text-source
              text-sm text-ag-grey
              mb-12"
			>
				Learn how to submit a paper and be included in the next volume of the journal
			</p>
			<Button href="/submission" variation="primary" width="w-64">
				View Submission Guidelines
			</Button>
		</div>
	</section>
{/if}

<footer
	class="container
         mx-auto mb-16 pt-8
         border-t border-ag-grey
         flex flex-col md:flex-row
				 items-center justify-between"
>
	<img
		alt="Aguipo Global South Journal (AGSJ)"
		class="mb-6 md:mb-0"
		src="/images/logo-full.svg"
	/>
	<p
		class="font-merriweather
           text-sm text-ag-grey"
	>
		© Aguipo {new Date().getFullYear()} — All rights reserved.
	</p>
</footer>
