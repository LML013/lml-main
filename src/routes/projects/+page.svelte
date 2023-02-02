<script lang="ts">
	import type { PageData } from './$types';
	import Project from './Project.svelte';

	export let data: PageData;

	const projects = [
		{
			name: 'LuisMiguelLuna.com',
			desc: 'This website. Currently being built with HTML, CSS, JS, and Svelte. Deployed using GitHub and Netlify.',
			link: 'https://luismiguelluna.com',
			github: 'https://github.com/LML013/lml-main'
		},

		{
			name: 'Green Saber Games',
			desc: 'Tabletop gaming blog & content hub made with Wordpress.',
			link: 'https://greensabergames.com'
		},
		{
			name: 'Phoenix Squadron',
			desc: 'Splash page for information about playing Star Wars X-wing in the Phoenix Area',
			link: 'https://phoenixsquadronaz.com',
			github: 'https://github.com/LML013/phoenix-nest'
		},
		{
			name: 'Loruki',
			desc: "An implementation of Brad Traversy's Build a Responsive Website | HTML, CSS Grid, Flexbox & More tutorial video. Deployed using GitHub and Netlify.",
			link: 'https://luismiguelluna.com',
			github: 'https://github.com/LML013/loruki-website'
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Luis Miguel Luna's Projects" />
</svelte:head>

<section>
	{#each projects as project}
		<Project {...project} />
	{/each}
</section>
