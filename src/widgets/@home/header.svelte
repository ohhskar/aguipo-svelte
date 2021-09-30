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
	<div class="container min-h-screen flex flex-col justify-center">
		<img alt="" class="w-16 md:w-20 mb-4" src="/images/logo.svg" />
		<h1
			class="font-merriweather font-bold
             text-3xl md:text-5xl
						 text-ag-primary
						 leading-normal
             md:leading-normal
             mb-12"
		>
			Aguipo Global South Journal (AGSJ) for the Social Sciences and Humanities
		</h1>
		<div class="flex flex-col md:flex-row items-start md:items-center">
			<div class="mb-8 md:mr-8 md:mb-0">
				<Button variation="primary" on:click={handleClick}>Learn More</Button>
			</div>
			<Button href="/submission" variation="text">View Submission Guidelines</Button>
		</div>
	</div>
</header>

<style lang="postcss">
	.header {
		@apply h-screen w-full bg-cover bg-right mb-24;

		background-image: url('/images/home/header.jpg');
	}
</style>
