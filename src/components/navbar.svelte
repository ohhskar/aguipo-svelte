<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let currentPage: string;

	let showMobile: boolean = false;

	let root: typeof document.body | undefined;

	const pages: { title: string; link: string }[] = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'Current Issue',
			link: '/volumes/one'
		},
		{
			title: 'Submissions',
			link: '/submissions'
		},
		{
			title: 'Archives',
			link: '/archives'
		},
		{
			title: 'Copyright and Ethics',
			link: '/copyright'
		},
		{
			title: 'Editorial Collective',
			link: '/editorial'
		}
	];

	onMount(() => {
		root = document.body;
	});

	$: {
		if (root) {
			root.style.overflow = showMobile ? 'hidden' : 'initial';
		}
	}

	$: showMobile = !currentPage;
</script>

<nav class="fixed w-full bg-ag-white py-8">
	<div class="container flex items-center justify-between">
		<a href="/">
			<img alt="Aguipo Global South Journal (AGSJ)" class="h-8" src="/images/logo-full.svg" />
		</a>
		<button class="w-6 h-3 flex flex-col justify-between" on:click={() => (showMobile = true)}>
			<hr class="w-full h-0.5 bg-ag-black border-none" />
			<hr class="w-full h-0.5 bg-ag-black border-none" />
			<hr class="w-full h-0.5 bg-ag-black border-none" />
		</button>
	</div>
</nav>

{#if showMobile}
	<div class="fixed inset-0 bg-ag-white" in:fly={{ y: 200, duration: 200 }}>
		<ul class="flex flex-col h-full w-full items-center justify-center">
			{#each pages as { title, link } (link)}
				<li class="my-2">
					<a class="link text-ag-black" class:text-ag-primary={currentPage === link} href={link}
						>{title}</a
					>
				</li>
			{/each}
		</ul>
		<button
			class="absolute
             right-8 top-11
             w-6 h-6
             border-none
             transform-gpu
             text-ag-black
             hover:text-ag-primary focus:text-ag-primary
             active:scale-95
             transition"
			on:click={() => (showMobile = false)}
		>
			<hr
				class="absolute
               top-1/2 left-1/2
               w-full h-0.5
               bg-current border-none
               transform-gpu
               rotate-45
               -translate-x-1/2 -translate-y-1/2"
			/>
			<hr
				class="absolute
               top-1/2 left-1/2
               w-full h-0.5
               bg-current border-none
               transform-gpu
               -rotate-45
               -translate-x-1/2 -translate-y-1/2"
			/>
		</button>
	</div>
{/if}

<style lang="postcss">
	.link {
		@apply block
     font-merriweather
     text-sm
     transform-gpu
     transition
     hover:text-ag-primary
     focus:text-ag-primary
     active:scale-95;
	}
</style>
