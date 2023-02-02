<script lang="ts">
	import type { PageData } from './$types';
	import Project from './Project.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Luis Miguel Luna's Projects" />
</svelte:head>

{#each data.projects as project}
	<Project {...project} />
{/each}
