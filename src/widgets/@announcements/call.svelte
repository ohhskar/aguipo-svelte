<script lang="ts">
	import H3 from '$src/components/h3.svelte';
</script>

<section class="call">
	<H3>Call for Papers</H3>
	<h4 class="font-merriweather text-xl text-ag-black mb-6">
		SAVE OUR SCHOOLS: 21st Century Education and the Neoliberal, Pandemic, and Authoritarian Threats
	</h4>
	<p class="call_p">
		COVID-19 has been a cause for critical reflection. Global politics, social, cultural, and
		economic changes have reshaped the education system during and after COVID-19. At the same time,
		as the reemergence of authoritarian threats show, rethinking education in light of these global
		challenges is necessary. As complex, yet fascinating, this call for papers welcomes
		contributions from intellectuals, philosophers, political scientists, researchers, educators,
		anthropologists, sociologists, theologians, activists, and policymakers to explore the
		intersectionality between education, neoliberal, pandemic, and authoritarian threats and define
		its impact on contemporary society from different theoretical, multi-disciplinary, and
		methodological perspectives.
	</p>
	<p class="call_p">
		The Aguipo Global South Journal (AGSJ) is currently inviting papers from a wide
		interdisciplinary and theoretical perspectives. Submissions are organized into the streams
		listed below but not limited to:
	</p>
	<ul class="list-disc pl-6">
		<li class="call_li">public education in pandemic times</li>
		<li class="call_li">global higher education and the neoliberal policy regime</li>
		<li class="call_li">neoliberal education and pandemic</li>
		<li class="call_li">education equity and inequity</li>
		<li class="call_li">education laws, practices, trends, and issues in pandemic times</li>
		<li class="call_li">professional ethics and values education in pandemic times</li>
		<li class="call_li">learning theories and teaching innovations in pandemic times</li>
		<li class="call_li">
			philosophy of education principles and techniques of teaching in pandemic times
		</li>
		<li class="call_li">the role of education in taming authoritarian threats</li>
		<li class="call_li">decolonizing curriculum and educational research</li>
		<li class="call_li">indigenous education</li>
		<li class="call_li">
			original research into the ongoing political, social, economic and educational impacts of the
			pandemic
		</li>
	</ul>
	<p class="call_p">
		Please send your abstracts of 250 words to <a
			class="call_a"
			href="mailto:aguipoglobalsouthjournal@gmail.com"
		>
			aguipoglobalsouthjournal@gmail.com
		</a>. Deadline of abstract submissions will be on August 10, 2022.
	</p>
</section>

<style lang="postcss">
	.call {
		@apply container
           mx-auto mb-16;
	}
	.call_p {
		@apply font-source
           text-lg text-ag-grey
           mb-4;
	}

	.call_li {
		@apply font-source
           text-lg text-ag-grey
           pl-4 mb-4;
	}
	.call_a {
		@apply text-ag-primary hover:text-ag-white
           border-b border-ag-primary
           hover:bg-ag-primary
           transition-colors;
	}
</style>
