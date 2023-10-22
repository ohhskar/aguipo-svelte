<script lang="ts">
	export let file: string;
</script>

<section class="w-full bg-ag-primary border-b border-ag-grey">
	<div class="container py-12">
		<h2
			class="font-merriweather
               text-3xl text-ag-white
               mb-8"
		>
			Read the volume
		</h2>
		<a
			href={file}
			download
			class="block font-merriweather font-bold text-sm text-center rounded-full px-6 py-4 w-48 transform-gpu transition active:scale-95 text-ag-primary bg-white hover:bg-ag-offwhite focus:bg-ag-offwhite"
			>Download PDFs
		</a>
	</div>
</section>
