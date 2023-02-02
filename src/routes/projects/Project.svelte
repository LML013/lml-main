<script>
	export let name = '';
	export let desc = '';
	export let link = '';
	export let github = '';
</script>

<h2><a href={link}>{name}</a></h2>
<p>{desc}</p>
{#if github}
<a href={github}><i class="fa-brands fa-github"></i></a>
{/if}