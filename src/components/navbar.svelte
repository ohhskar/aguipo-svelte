<script lang="ts">
	let scrollY: number = 0;
</script>

<nav
	class="fixed w-full bg-ag-white py-8 transition-opacity opacity-0"
	class:opacity-100={scrollY > window.innerHeight * 0.75}
>
	<div class="container mx-auto flex items-center justify-between">
		<a href="/">
			<img
				alt="Aguipo Global South Journal (AGSJ) for the Social Sciences and Humanities"
				class="h-8"
				src="/images/logo-full.svg"
			/>
		</a>
		<ul class="flex items-center">
			<li class="mr-8">
				<a class="link" href="/">Home</a>
			</li>
			<li class="mr-8">
				<a class="link" href="/">Submission</a>
			</li>
			<li class="mr-8">
				<a class="link" href="/">Announcements</a>
			</li>
		</ul>
	</div>
</nav>

<svelte:window bind:scrollY />

<style lang="postcss">
	.link {
		@apply block
     font-merriweather
     text-sm text-ag-black
     transform-gpu
     transition
     hover:text-ag-primary
     focus:text-ag-primary
     active:scale-95;
	}
</style>
