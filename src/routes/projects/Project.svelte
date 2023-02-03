<script>
	export let name = '',
		desc = '',
		link = '',
		github = '';
</script>

<h2><a href={link}>{name}</a></h2>
<p>{desc}</p>
{#if github}
	<a href={github}><i class="fa-brands fa-github" /></a>
{/if}
