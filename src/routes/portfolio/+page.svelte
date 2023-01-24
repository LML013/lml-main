<script lang="ts">
	import Project from './Project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Luis Miguel Luna's Portfolio Projects" />
</svelte:head>

<section>
	<Project projectName={data.projects[0].name} desc={data.projects[0].description} />
	<Project projectName={data.projects[1].name} desc={data.projects[1].description} />
	<Project projectName={data.projects[2].name} desc={data.projects[2].description} />
	<Project projectName={data.projects[3].name} desc={data.projects[3].description} />
</section>
