<script lang="ts">
	import Button from '$src/components/button.svelte';

	export let currentPage: string;
</script>

{#if currentPage != '/volumes/one' && currentPage != '/archives'}
	<section class="w-full mb-16 bg-ag-offwhite mt-64">
		<div class="container py-12">
			<h2
				class="font-merriweather
               text-3xl text-ag-black
               mb-8"
			>
				Read our maiden issue
			</h2>
			<!-- <p
				   class="text-source
           text-sm text-ag-grey
           mb-12"
			     >
				   Learn how to submit a paper and be included in the next volume of the journal
			     </p> -->
			<Button href="/volumes/one" variation="primary" width="w-64">Volume 1 (2022)</Button>
		</div>
	</section>
{/if}

<footer
	class="container
         mx-auto mb-16 pt-8
         border-t border-ag-grey
         flex flex-col
         gap-8
         "
>
	<div>
		<img
			alt="Aguipo Global South Journal (AGSJ)"
			class="mb-6"
			src="/images/logo-full.svg"
		/>
		<p class="published">Published by the All UP Academic Employees Union Cebu Chapter</p>
		<p class="published md:max-w-xl">
			Union Building, University of the Philippines Cebu, Gorordo Avenue, Lahug, Cebu City 6000,
			Philippines
		</p>
	</div>
	<div class="flex flex-col gap-2 items-start">
		<a class="a" href="https://aguipoglobalsouthjournal.com" target="_blank" rel="noreferrer"
			>https://aguipoglobalsouthjournal.com</a
		>
		<a class="a" href="mailto:aguipoglobalsouthjournal@gmail.com">aguipoglobalsouthjournal@gmail.com</a>
		<a class="a" href="tel:+639175757715">+63 917 575 7715</a>
		<a class="a" href="https://www.facebook.com/AUPAEUCebu" target="_blank" rel="noreferrer">AUPAEU Cebu</a>
	</div>
	<p
		class="published"
	>
		© Aguipo {new Date().getFullYear()} — All rights reserved.
	</p>
</footer>

<style lang="postcss">
 .published {
     @apply text-sm font-sans text-ag-grey;
 }

 .a {
		@apply text-ag-grey hover:text-ag-white
           text-sm
           border-b border-ag-primary
           hover:bg-ag-primary
           transition-colors;
 }
</style>
