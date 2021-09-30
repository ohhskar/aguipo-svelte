<script lang="ts">
	export let background: string;
	export let title: string;
</script>

<header class="header" style="--bg-image: url({background})">
	<div class="h-full container flex items-center">
		<h2 class="font-merriweather text-4xl text-ag-offwhite">{title}</h2>
	</div>
</header>

<style lang="postcss">
	.header {
		@apply w-full
      bg-cover
      mb-32;

		height: 70vh;
		background-image: var(--bg-image);
	}
</style>
