<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let currentPage: string;

	let scrollY: number = 0;
	let innerHeight: number = 0;
	let innerWidth: number = 0;

	let showMobile: boolean = false;

	let root: typeof document.body | undefined;
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

<nav
	class="fixed w-full bg-ag-white py-8 transition-opacity opacity-0"
	class:opacity-100={scrollY > innerHeight * 0.75}
>
	<div class="container flex items-center justify-between">
		<a href="/">
			<img
				alt="Aguipo Global South Journal (AGSJ) for the Social Sciences and Humanities"
				class="h-8"
				src="/images/logo-full.svg"
			/>
		</a>
		<ul class="hidden md:flex items-center">
			<li class="mr-8">
				<a class="link text-ag-black" class:text-ag-primary={currentPage === '/'} href="/">Home</a>
			</li>
			<li class="mr-8">
				<a
					class="link text-ag-black"
					class:text-ag-primary={currentPage === '/submission'}
					href="/submission">Submission</a
				>
			</li>
			<li>
				<a
					class="link text-ag-black"
					class:text-ag-primary={currentPage === '/announcements'}
					href="/announcements">Announcements</a
				>
			</li>
		</ul>
		<button
			class="md:hidden w-6 h-3 flex flex-col justify-between"
			on:click={() => (showMobile = true)}
		>
			<hr class="w-full h-0.5 bg-ag-black border-none" />
			<hr class="w-full h-0.5 bg-ag-black border-none" />
			<hr class="w-full h-0.5 bg-ag-black border-none" />
		</button>
	</div>
</nav>

{#if innerWidth < 768 && showMobile}
	<div class="fixed inset-0 bg-ag-white" in:fly={{ y: 200, duration: 200 }}>
		<ul class="flex flex-col h-full w-full items-center justify-center">
			<li class="mb-4">
				<a class="link text-ag-black" class:text-ag-primary={currentPage === '/'} href="/">Home</a>
			</li>
			<li class="mb-4">
				<a
					class="link text-ag-black"
					class:text-ag-primary={currentPage === '/submission'}
					href="/submission">Submission</a
				>
			</li>
			<li>
				<a
					class="link text-ag-black"
					class:text-ag-primary={currentPage === '/announcements'}
					href="/announcements">Announcements</a
				>
			</li>
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

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

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
