<script lang="ts">
	import H3 from '$src/components/h3.svelte';
	import Position from '$src/components/@home/position.svelte';

	let positions = [
		{
			position: 'Editors-in-Chief',
			officers: [
				{
					name: 'Regletto Aldrich Imbong',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Ian Vincent Manticajon',
					affiliation: 'University of the Philippines Cebu'
				}
			]
		},
		{
			position: 'Associate Editors',
			officers: [
				{
					name: 'Phoebe Zoe Maria Sanchez',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Caroline Schöpf ',
					affiliation: 'Max Weber Foundation and Hong Kong Baptist University'
				},
				{
					name: 'Marie Rose Arong',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Matthew Chew',
					affiliation: 'Hong Kong Baptist University'
				}
			]
		},
		{
			position: 'Managing Editor',
			officers: [
				{
					name: 'Noe Santillan',
					affiliation: 'University of the Philippines Cebu'
				}
			]
		},
		{
			position: 'Copy Editor',
			officers: [
				{
					name: 'Francis Luis Torres',
					affiliation: 'National University of Singapore'
				}
			]
		},
		{
			position: 'International Adivisory Committee',
			officers: [
				{
					name: 'Epifanio San Juan Jr.',
					affiliation: 'University of Connecticut, retired'
				},
				{
					name: 'Geoffrey Pleyers',
					affiliation: 'Université Catholique de Louvain'
				},
				{
					name: 'Sabelo J. Ndlovu-Gatsheni',
					affiliation: 'University of Bayreuth'
				},
				{
					name: 'Salimah Valiani',
					affiliation: 'Independent Researcher'
				},
				{
					name: 'Ramon Guillermo',
					affiliation: 'University of the Philippines Diliman'
				},
				{
					name: 'Tamari Kitossa',
					affiliation: 'Brock University'
				},
				{
					name: 'Leon Moosavi',
					affiliation: 'University of Liverpool'
				}
			]
		}
	];
</script>

<section class="container mx-auto mb-32">
	<H3>Editorial Collective</H3>
	{#each positions as position (position.position)}
		<Position {...position} />
	{/each}
</section>
