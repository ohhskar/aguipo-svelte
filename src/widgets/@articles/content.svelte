<script lang="ts">
	export let volume: { link: string; title: string } = { link: '', title: '' };
	export let abstract: string | undefined = undefined;
	export let title = '';
	export let authors: string[] = [];
	export let file = '';
	export let doi = '';
</script>

<main class="container pt-48 pb-24">
	<a href={volume.link} class="inline-block text-sm text-ag-grey mb-8">← {volume.title}</a>
	<h1
		class="font-merriweather
         text-4xl text-ag-black
         mb-4"
	>
		{title}
	</h1>
	<p class="text-2xl text-ag-grey mb-2">{authors.join(', ')}</p>
	<a href={doi} target="_blank" rel="noreferrer" class="block text-sm text-ag-grey mb-4">{doi}</a>
	<hr class="w-1/4 h-0.5 bg-ag-black mb-16" />
	<p class="font-source text-lg text-ag-grey mb-16 whitespace-pre-line">{abstract}</p>
	<a
		href={file}
		download
		class="block font-merriweather font-bold text-sm text-center rounded-full px-6 py-4 w-48 transform-gpu transition active:scale-95 text-ag-white bg-ag-primary hover:bg-ag-primary-dark focus:bg-ag-primary-dark"
		>Download PDF</a
	>
</main>
