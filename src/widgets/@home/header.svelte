<script lang="ts">
	import Button from '$src/components/button.svelte';
</script>

<header class="header">
	<div class="container h-full flex flex-col justify-center">
		<img alt="" class="w-16 md:w-20 mb-4" src="/images/logo-white.svg" />
		<h1
			class="font-merriweather font-bold
             text-3xl md:text-5xl
						 text-white
						 leading-normal
             md:leading-normal
             mb-12"
		>
			Aguipo Global South Journal (AGSJ)
		</h1>
		<div class="flex flex-col md:flex-row items-start md:items-center">
			<div class="mb-8 md:mr-8 md:mb-0">
				<Button variation="primary-white" href="/volumes/one">Read Volume 1</Button>
			</div>
			<Button href="/submission" variation="text-white">View Submission Guidelines</Button>
		</div>
	</div>
</header>

<style lang="postcss">
	.header {
		@apply w-full mb-24;

		height: 80vh;
		background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.60)),
			url('/images/home/hero-2.jpg');
		background-size: cover;
		background-position: 75% 40%;
	}
</style>
