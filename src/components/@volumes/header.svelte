<script lang="ts">
 export let src: string;
 export let alt: string;
</script>

<header class="h-screen mb-32 bg-ag-offwhite flex items-center justify-center">
    <img {src} {alt} class="h-full sm:h-3/4 w-screen object-contain object-center"/>
</header>
