<script lang="ts">
	import H3 from '$src/components/h3.svelte';
</script>

<section class="guidelines">
	<H3>Author Guidelines</H3>
	<p class="guidelines_p">
		The editorial collective of the AGSJ is in close collaboration with the organizing committee of
		the international extramural Decolonial Perspectives: Reclaiming our Rights as People of the
		Global South. The said extramural is primarily organized by the College of Social Sciences and
		the Central Visayas Studies Center of the University of the Philippines Cebu. Kindly follow the
		link for the details of the
		<a
			href="https://css.upcebu.edu.ph/up-cebu-college-of-social-sciences-and-central-visayas-studies-center-hold-an-extramural/"
			class="guidelines_a"
			>extramural
		</a>.
	</p>
	<p class="guidelines_p">
		AGSJ is accepting papers presented in the extramural for the journal’s maiden issue scheduled to
		be published in April 2022. For interested authors, kindly refer to the submissions tab of the
		website.
	</p>
</section>

<style lang="postcss">
	.guidelines {
		@apply container
           mx-auto mb-16;
	}
	.guidelines_p {
		@apply font-source
           text-lg text-ag-grey
           mb-4;
	}

	.guidelines_li {
		@apply font-source
           text-lg text-ag-grey
           pl-2 mb-4;
	}
	.guidelines_a {
		@apply text-ag-primary hover:text-ag-white
           border-b border-ag-primary
           hover:bg-ag-primary
           transition-colors;
	}
</style>
