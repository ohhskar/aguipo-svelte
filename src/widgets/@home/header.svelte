<script lang="ts">
	import Button from '$src/components/button.svelte';
</script>

<header class="header">
	<div class="container h-full flex flex-col justify-center">
		<img alt="" class="w-16 md:w-20 mb-4" src="/images/logo.svg" />
		<h1
			class="font-merriweather font-bold
             text-3xl md:text-5xl
						 text-ag-primary
						 leading-normal
             md:leading-normal
             mb-12"
		>
			Aguipo Global South Journal (AGSJ)
		</h1>
		<div class="flex flex-col md:flex-row items-start md:items-center">
			<div class="mb-8 md:mr-8 md:mb-0">
				<Button variation="primary" href="/volumes/one">Read Volume 1</Button>
			</div>
			<Button href="/submission" variation="text">View Submission Guidelines</Button>
		</div>
	</div>
</header>

<style lang="postcss">
	.header {
		@apply w-full bg-cover bg-right mb-24;

		height: 80vh;
		background-image: url('/images/home/header.jpg');
	}
</style>
