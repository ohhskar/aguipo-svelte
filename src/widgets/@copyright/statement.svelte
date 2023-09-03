<script lang="ts">
	import H3 from '$src/components/h3.svelte';
</script>

<section class="statement">
	<H3>Publication Ethics and Publication Malpractice Statement</H3>
	<p class="statement_p">
		Aguipo Global South Journal adheres to the highest ethical standards in research and
		publication. It is guided by the following responsibilities:
	</p>
	<p class="statement_p">
		The Aguipo Global South Journal (AGSJ) is currently inviting papers from a wide
		interdisciplinary and theoretical perspectives. Submissions are organized into the streams
		listed below but not limited to:
	</p>
	<ol class="list-alpha pl-4 ml-6">
		<li class="statement_li">
			Responsibilities of the Editorial Collective
			<br />
			<br />
			The Editorial Collective is guided by the principles of democratic and collective leadership and
			ensures the timely review and publication of manuscripts. The journal follows two sets of review,
			the initial and peer review stages. The editor-in-chief or anyone in the Editorial Collective initially
			evaluates the worthiness of a submitted manuscript. If evaluated positively, the manuscript will
			be forwarded to the peer review stage. The journal follows a double-blind peer review, which means
			that both author/s and reviewers are anonymized in the entire review process. Upon the evaluation
			of nominated expert reviewers, the Editorial Collective, through the editor-in-chief, will decide
			whether a manuscript is accepted without revisions, accepted with minor revisions, accepted with
			major revisions, or rejected. The Editorial Collective reserves the right to reject a manuscript
			that violates provisions on copyright, originality, and libel or if a manuscript is found to be
			simultaneously submitted and reviewed in another journal or publishing platform. The journal does
			not require any fee from its authors.
		</li>

		<li class="statement_li">
			Responsibilities of the Referee
			<br />
			<br />
			A referee is chosen by the Editorial collective based on his/her expertise. Using the journal’s
			prescribed refereeing report, the reviewer will give an expert evaluation concerning the worthiness
			of the paper. The reviewer’s evaluation will help the Editorial Collective decide whether to accept,
			accept pending minor revisions, accept pending major revisions, or reject a manuscript.
		</li>

		<li class="statement_li">
			Responsibilities of the Author
			<br />
			<br />
			An author must prepare his/her manuscript for blind review. He/she must ensure that no violation
			on legal provisions on copyright, originality, and libel are committed by the submitted manuscript.
			All sources must be cited properly according to the journal’s formatting style. An author must
			ensure that the submitted manuscript is not simultaneously submitted to other publishing platforms.
			The author must comply with all the editorial concerns required both by the editor/s and the reviewers.
		</li>
	</ol>

	<div class="flex gap-4 flex-col mt-24">
		<img
			alt="Aguipo Global South Journal (AGSJ)"
			class="mb-2"
			src="/images/cc-by-nc-nd-4.png"
			width={88}
			height={31}
		/>
		<p class="statement_license">
			All works published by Aguipo Global South Journal is licensed under a <a
				class="statement_a"
				rel="license"
				href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
				>Creative Commons Attribution-Non-commercialNoDerivatives 4.0 International License</a
			>.
		</p>
	</div>
</section>

<style lang="postcss">
	.statement {
		@apply container
           mx-auto mb-16;
	}
	.statement_p {
		@apply font-source
           text-lg text-ag-grey
           mb-4;
	}

	.statement_license {
		@apply font-source
           text-lg text-ag-grey;
	}

	.statement_li {
		@apply font-source
           text-lg text-ag-grey
           pl-2 mb-4;
	}
	.statement_a {
		@apply text-ag-primary hover:text-ag-white
           border-b border-ag-primary
           hover:bg-ag-primary
           transition-colors;
	}
</style>
