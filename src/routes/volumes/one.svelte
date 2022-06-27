<script lang="ts">
	import Header from '$src/components/@volumes/header.svelte';
	import Content from '$src/widgets/@volumes/content.svelte';

	const editorials: Aguipo.Article[] = [
		{
			title: 'Aguipo Global South Journal: Introduction to the Maiden Issue',
			author: 'Regletto Aldrich Imbong',
			link: '/files/one/AGSJ2022Editorial.pdf',
			startingPage: '1'
		}
	];

	const featuredArticles: Aguipo.Article[] = [
		{
			title: 'Global Pandemic, Duterte’s Plague: A Dispatch from the “Belly of the Beast”',
			author: 'E. San Juan Jr.',
			link: '/files/one/AGSJ2022FA1.pdf',
			startingPage: '3'
		}
	];

	const articles: Aguipo.Article[] = [
		{
			title:
				'A Symbol of Anti-Marcos Resistance: The 1971 Diliman Commune in the Philippine’s Global Sixties',
			author:
				'Karlo Mikhail Mongaya, Orly Van Andre Putong, Alec Joshua Paradeza, Ryan Cezar Alcarde',
			link: '/files/one/AGSJ202201.pdf',
			startingPage: '19'
		},
		{
			title:
				'Decolonizing Racialized Media Scripts in the Global South: Analysis of Sports News Reports From the Philippines and Tweets From Kenyans',
			author: 'Satwinder Rehal',
			link: '/files/one/AGSJ202202.pdf',
			startingPage: '49'
		},
		{
			title: 'Pope of the Global South? Toward a Decolonial Reading of the Francis Papacy',
			author: 'Mar Louie Vincent Reyes',
			link: '/files/one/AGSJ202203.pdf',
			startingPage: '73'
		},
		{
			title:
				'The Changing Aesthetic Standard and Affirmative Participation of the Filipina in the Event of Ideal Whiteness and the Commodified Beauty',
			author: 'Christine T. Cerezo',
			link: '/files/one/AGSJ202204.pdf',
			startingPage: '97'
		},
		{
			title: 'Praxis in the Global South: The Worldliness of Literature and Theory',
			author: 'Antonette Arogo',
			link: '/files/one/AGSJ202205.pdf',
			startingPage: '118'
		}
	];
</script>

<svelte:head>
	<meta itemprop="name" content="Volume One | Aguipo Global South Journal" />
	<meta property="og:title" content="Volume One | Aguipo Global South Journal" />
	<meta name="twitter:title" content="Volume One | Aguipo Global South Journal" />
	<title>Volume One | Aguipo Global South Journal</title>
</svelte:head>

<Header src="/images/volumes/one.jpg" alt="AGSJ Volume 1 Cover" />
<Content {editorials} {featuredArticles} {articles} />
