<script lang="ts">
	import '$src/app.postcss';
	import Navbar from '$src/components/navbar.svelte';
	import Footer from '$src/components/footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
