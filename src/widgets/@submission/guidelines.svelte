<script lang="ts">
	import H3 from '$src/components/h3.svelte';
</script>

<section class="guidelines">
	<H3>Author Guidelines</H3>
	<p class="guidelines_p">
		AGSJ is a peer-reviewed journal of the social sciences and the humanities. All articles will be
		assessed by the editorial collective before being reviewed by at least two of the editorial
		consultants.
	</p>
	<p class="guidelines_p">
		AGSJ accepts contributions from scholars, academics, educators, and activists that analyze
		Global South issues from the perspectives of sociology, psychology, anthropology, philosophy,
		political science, gender studies, history, literature, political economy, communication
		studies, theology, and other related fields. Undergraduate and graduate students are encouraged
		to submit to the journal.
	</p>
	<p class="guidelines_p">
		As a journal for the Global South, Aguipo accepts contributions that theorize local issues using
		local languages, especially Bisaya and Filipino.
	</p>
</section>

<section class="guidelines">
	<H3>Submission Preparation List</H3>
	<p class="guidelines_p">
		For efficiency in the review process, authors should check whether their submissions adhere to
		the following submission guidelines.
	</p>
	<ol class="list-alpha pl-4 ml-6">
		<li class="guidelines_li">
			The manuscript has not been previously published nor has it been under review in another
			journal for publication.
		</li>
		<li class="guidelines_li">
			For articles, the length of the manuscript should be at least 5,000 words but should not
			exceed 8,000 words including footnotes and bibliography; for reviews, reports, and
			commentaries, the length of the manuscript should be at least 1,000 words but should not
			exceed 3,000 words.
		</li>
		<li class="guidelines_li">The file should be in Microsoft Office or Open Office format.</li>
		<li class="guidelines_li">
			The manuscript should follow the
			<a
				href="https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html"
				class="guidelines_a"
			>
				Chicago Manual of Style
			</a> with the author-date citation.
		</li>
		<li class="guidelines_li">
			An abstract of no more than 250 words and a set of 7 keywords should accompany the manuscript.
		</li>
		<li class="guidelines_li">
			The manuscript should be prepared for blind review and should not contain the author’s or
			authors’ name/s and identity/identities.
		</li>
	</ol>
</section>

<section class="guidelines">
	<H3>Rules for publication</H3>
	<p class="guidelines_p">
		For a smooth and fast process of publication, the following reminders should be diligently
		considered by the authors.
	</p>
	<ol class="list-alpha pl-4 ml-6">
		<li class="guidelines_li">
			All manuscripts should be submitted through the email (<a
				href="mailto:aguipoglobalsouthjournal@gmail.com"
				class="guidelines_a"
			>
				aguipoglobalsouthjournal@gmail.com
			</a>). In the subject heading, indicate whether it is an article, report, review, or
			commentary submission and your family name (e.g., article submission – De la Cruz). In the
			body of your email, include the following: a cover letter, complete name, institutional
			affiliation, official email address, and the title of your submission.
		</li>
		<li class="guidelines_li">
			Immediately after a manuscript is received by the editorial collective, an initial review
			process will immediately begin. The initial review process will be done by the
			editors-in-chief to assess the paper’s worthiness for the blind review process. The blind
			review process shall take one to two months. The editors-in-chief have the prerogative of
			either accepting or rejecting submitted manuscripts, both in the initial and in the blind
			review processes.
		</li>
		<li class="guidelines_li">
			Authors of accepted manuscripts are given two months to work on the revisions as suggested by
			the reviewers. Failure to comply within the said duration means the non-inclusion of the
			article in the forthcoming issue. However, the article could still be considered for
			publication in the next issue should the author finally comply with the needed revisions and
			the editors deem the manuscript still of significance.
		</li>
		<li class="guidelines_li">Aguipo currently publishes annually, every 15th day of April.</li>
	</ol>
</section>

<section class="guidelines">
	<H3>Copyright Notice</H3>
	<p class="guidelines_p">
		Aguipo supports the Open Access Movement. The copyright published in the journal remains in the
		author. Republications of a particular article may be allowed provided that Aguipo is
		acknowledged as the original publisher.
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
