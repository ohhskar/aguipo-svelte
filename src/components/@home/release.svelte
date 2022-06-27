<script lang="ts">
	export let title: string;
	export let link: string;
</script>

<a
	class="block font-merriweather
         text-xl text-ag-primary
         mb-6"
	href={link}
>
	{title}
</a>
