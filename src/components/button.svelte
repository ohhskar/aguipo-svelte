<script lang="ts">
	export let variation: 'primary' | 'text' | 'primary-white' | 'text-white';
	export let width: string = 'w-48';
	export let href: string = '';
</script>

{#if href !== ''}
	<a
		class="block
         font-merriweather font-bold
         text-sm text-center
         rounded-full
         px-6 py-4
         {width}
         transform-gpu
         transition
         active:scale-95
         {variation}
           "
		class:primary={variation === 'primary'}
		class:text={variation === 'text'}
		{href}
		on:click
	>
		<slot>Click Me!</slot>
	</a>
{:else}
	<button
		class="block
         font-merriweather font-bold
         text-sm text-center
         rounded-full
         px-6 py-4
         {width}
         transform-gpu
         transition
         active:scale-95
           {variation}
           "
		on:click
	>
		<slot>Click Me!</slot>
	</button>
{/if}

<style lang="postcss">
	.primary {
		@apply text-ag-white
      bg-ag-primary
      hover:bg-ag-primary-dark
      focus:bg-ag-primary-dark;
	}

	.primary-white {
		@apply text-ag-primary
      bg-white
      hover:bg-ag-offwhite
      focus:bg-ag-offwhite;
	}

	.text {
		@apply text-ag-black
      bg-transparent
      hover:text-ag-primary
      focus:text-ag-primary;
	}

	.text-white {
		@apply text-ag-white
      bg-transparent
      hover:text-ag-offwhite
      focus:text-ag-offwhite;
	}
</style>
