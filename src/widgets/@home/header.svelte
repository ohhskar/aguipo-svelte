<script lang="ts">
	import Button from '$src/components/button.svelte';

	function handleClick() {
		window.scrollBy({
			top: window.innerHeight,
			left: 0,
			behavior: 'smooth'
		});
	}
</script>

<header class="header">
	<div class="container h-full mx-auto flex flex-col justify-center">
		<img alt="" class="w-20 mb-4" src="/images/logo.svg" />
		<h1
			class="font-merriweather font-bold
             text-5xl text-ag-primary
             leading-normal
             mb-12"
		>
			Aguipo Global South Journal (AGSJ) for the Social Sciences and Humanities
		</h1>
		<div class="flex items-center">
			<div class="mr-8">
				<Button variation="primary" on:click={handleClick}>Learn More</Button>
			</div>
			<Button variation="text">View Submission Guidelines</Button>
		</div>
	</div>
</header>

<style lang="postcss">
	.header {
		@apply h-screen w-full bg-cover bg-right mb-24;

		background-image: url('/images/home/header.jpg');
	}
</style>
