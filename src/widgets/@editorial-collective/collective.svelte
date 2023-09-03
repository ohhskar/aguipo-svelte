<script lang="ts">
	import Position from '$src/components/@editorial-collective/position.svelte';

	const positions = [
		{
			position: 'Editor-in-Chief',
			officers: [
				{
					name: 'Regletto Aldrich Imbong',
					affiliation: 'University of the Philippines Cebu'
				}
			]
		},
		{
			position: 'Associate Editors',
			officers: [
				{
					name: 'Ian Vincent Manticajon',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Phoebe Zoe Maria Sanchez',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Caroline Schöpf',
					affiliation: 'Max Weber Foundation and Hong Kong Baptist University'
				},
				{
					name: 'Marie Rose Arong',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Matthew Chew',
					affiliation: 'Hong Kong Baptist University'
				},
				{
					name: 'Jason Baguia',
					affiliation: 'Catholic University of Portugal'
				},
				{
					name: 'Hadje Sadje',
					affiliation: 'Foundation Academy of Amsterdam'
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
			position: 'Copy Editors',
			officers: [
				{
					name: 'Francis Luis Torres',
					affiliation: 'National University of Singapore'
				},
				{
					name: 'Jay Nathan Jore',
					affiliation: 'University of the Philippines Cebu'
				},
				{
					name: 'Brynch Bonachita',
					affiliation: 'University of San Carlos'
				}
			]
		},
		{
			position: 'Art Editor',
			officers: [
				{
					name: 'Vincent Pepito',
					affiliation: 'University of the Philippines Cebu'
				}
			]
		},
		{
			position: 'International Advisory Committee',
			officers: [
				{
					name: 'Epifanio San Juan Jr.',
					affiliation: 'retired, University of Connecticut, USA'
				},
				{
					name: 'Geoffrey Pleyers',
					affiliation: 'Université Catholique de Louvain, Belgium'
				},
				{
					name: 'Sabelo J. Ndlovu-Gatsheni',
					affiliation: 'University of Bayreuth, Germany'
				},
				{
					name: 'Salimah Valiani',
					affiliation: 'Independent Researcher'
				},
				{
					name: 'Ramon Guillermo',
					affiliation: 'University of the Philippines Diliman, Philippines'
				},
				{
					name: 'Tamari Kitossa',
					affiliation: 'Brock University, Canada'
				},
				{
					name: 'Leon Moosavi',
					affiliation: 'University of Liverpool, UK'
				},
				{
					name: 'Peter Hudis',
					affiliation: 'Oakton College, USA'
				},
				{
					name: 'Joshua Moufawad-Paul',
					affiliation: 'York University, Canada'
				},
				{
					name: 'Breno Bringel',
					affiliation: 'State University of Rio de Janeiro, Brazil'
				},
				{
					name: 'Daniel Franklin Pilario',
					affiliation: 'St. John’s University, USA'
				},
				{
					name: 'Syed Farid Alatas',
					affiliation: 'National University of Singapore, Singapore'
				},
				{
					name: 'Charlie Samuya Veric',
					affiliation: 'Ateneo de Manila University, Manila'
				},
				{
					name: 'Seongjin Jeong',
					affiliation: 'Gyeongsang National University, South Korea'
				},
				{
					name: 'Martin Slama',
					affiliation: 'Austrian Academy of Sciences, Austria'
				},
				{
					name: 'Bula Bhadra',
					affiliation: 'Sister Nivedita University; retired, University of Calcutta, India'
				},
				{
					name: 'Kaira Zoe Alburo Cañete',
					affiliation: 'Erasmus University Rotterdam, The Netherlands'
				},
				{
					name: 'Stéphane Dufoix',
					affiliation: 'Université Paris Nanterre; Institut Universitaire de France, France'
				}
			]
		}
	];
</script>

<section class="container mb-32">
	{#each positions as position (position.position)}
		<Position {...position} />
	{/each}
</section>
