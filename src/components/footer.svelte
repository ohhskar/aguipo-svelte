<script lang="ts">
	import Button from '$src/components/button.svelte';

	export let currentPage: string;
</script>

{#if !currentPage.startsWith('/volumes/') && currentPage != '/archives'}
	<section class="w-full bg-ag-offwhite mt-64 border-b border-ag-grey">
		<div class="container py-12">
			<h2
				class="font-merriweather
               text-3xl text-ag-black
               mb-8"
			>
				Read our latest issue
			</h2>
			<Button href="/volumes/two" variation="primary" width="w-64">Volume 2 (2023)</Button>
		</div>
	</section>
{/if}

<footer
	class="max-w-screen-lg px-8
				 mt-auto
         mx-auto py-16
         flex flex-col md:flex-row
         gap-8 md:gap-16 lg:gap-32
         "
>
	<div>
		<img alt="Aguipo Global South Journal (AGSJ)" class="mb-8 h-12" src="/images/logo-full.svg" />
		<p class="published">Published by the All UP Academic Employees Union Cebu Chapter</p>
		<p class="published md:max-w-xl md:mb-4">
			Union Building, University of the Philippines Cebu, Gorordo Avenue, Lahug, Cebu City 6000,
			Philippines
		</p>
		<p class="published hidden md:block">
			© Aguipo {new Date().getFullYear()} — All rights reserved.
		</p>
	</div>
	<div class="flex flex-col gap-2 items-start md:mt-20">
		<a class="a" href="https://aguipoglobalsouthjournal.com" target="_blank" rel="noreferrer"
			>https://aguipoglobalsouthjournal.com</a
		>
		<a class="a" href="mailto:aguipoglobalsouthjournal@gmail.com"
			>aguipoglobalsouthjournal@gmail.com</a
		>
		<a class="a" href="tel:+639175757715">+63 917 575 7715</a>
		<a class="a" href="https://www.facebook.com/AUPAEUCebu" target="_blank" rel="noreferrer"
			>AUPAEU Cebu</a
		>
	</div>
	<p class="published md:hidden">
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
