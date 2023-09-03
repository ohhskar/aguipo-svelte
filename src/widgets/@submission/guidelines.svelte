<script lang="ts">
	import H3 from '$src/components/h3.svelte';
</script>

<section class="guidelines">
	<H3>Instructions for authors</H3>
	<p class="guidelines_p">
		All articles will go through an initial review of a member of the editorial collective before
		being forwarded to at least two external and expert anonymous reviewers.
	</p>

	<p class="guidelines_p">
		For efficiency in the review process, authors should check whether their submissions adhere to
		the following submission guidelines.
	</p>

	<ol class="list-alpha pl-4 ml-6">
		<li class="guidelines_li">
			The manuscript has not been previously published nor is it currently under review in another
			journal for publication.
		</li>

		<li class="guidelines_li">
			For articles, the length of the manuscript should be at least 5,000 words but should not
			exceed 8,000 words including footnotes and bibliography; for reviews, reports, and
			commentaries, the length of the manuscript should be at least 1,000 words but should not
			exceed 3,000 words.
		</li>

		<li class="guidelines_li">
			The file should be in Microsoft Office, Open Office, or any plain text format.
		</li>

		<li class="guidelines_li">
			The manuscript should follow the

			<a
				href="https://www.chicagomanualofstyle.org/tools_citationguide/citation-guide-2.html"
				class="guidelines_a"
			>
				Chicago Manual of Style
			</a>
			with the author-date citation. All bibliographic entries should follow the title case (Pook at
			Paninindigan: Kritika ng Pantayong Pananaw) instead of the sentence case (Pook at paninindigan:
			Kritika ng pantayon pananaw).
		</li>

		<li class="guidelines_li">
			An abstract of no more than 250 words and a set of 5-7 keywords should accompany the
			manuscript.
		</li>

		<li class="guidelines_li">
			The manuscript should be prepared for blind review and should not contain the author’s or
			authors’ name/s and identity/identities. A separate document entitled Title Page should be
			attached along with the manuscript. This should contain the name/s of the author/s,
			institutional affiliation, and biographical note/s.
		</li>

		<li class="guidelines_li">
			All manuscripts should be submitted through the journal’s email
			<a href="mailto:aguipoglobalsouthjournal@gmail.com" class="guidelines_a">
				aguipoglobalsouthjournal@gmail.com
			</a>.
		</li>
	</ol>
</section>

<section class="guidelines">
	<H3>Editorial Process</H3>
	<p class="guidelines_p">
		For a smooth and fast process of publication, the following reminders should be diligently
		considered by the authors.
	</p>
	<ol class="list-alpha pl-4 ml-6">
		<li class="guidelines_li">
			Immediately after a manuscript is received, it will be reviewed by a member of the editorial
			collective to assess its quality and to check if it fits well to the aims and scope of the
			journal. Upon initial review, the manuscript will either be immediately rejected or forwarded
			for the next stage of blind review. The blind review process will take one to two months.
		</li>

		<li class="guidelines_li">
			The editor-in-chief will evaluate the reports of the reviewers. The editor-in-chief will
			decide whether the manuscript will be accepted without revisions, accepted pending minor
			revisions, accepted pending major revisions, or rejected.
		</li>

		<li class="guidelines_li">
			Authors of accepted manuscripts are given a maximum of two months to work on the revisions as
			suggested by the reviewers. Failure to comply within the said duration means the non-inclusion
			of the article in the forthcoming issue. However, the article could still be considered for
			publication in the next issue should the author finally comply with the needed revisions and
			the editor-in-chief deems the manuscript still of significance.
		</li>

		<li class="guidelines_li">The AGSJ currently publishes annually, every October.</li>
	</ol>
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
