import type { PageServerLoad } from './$types';

export const load = (async () => {
	//get projects from database
	const project = {
		projects: [
			{
				name: 'LuisMiguelLuna.com',
				description:
					'This website. Currently being built with HTML, CSS, JS, and Svelte. Deployed using GitHub and Netlify.'
			},
			{
				name: 'Green Saber Games',
				description: 'Tabletop gaming blog & content hub made with Wordpress.'
			},
			{
				name: 'Phoenix Squadron',
				description:
					'Splash page for information about playing Star Wars X-wing in the Phoenix Area'
			},
			{
				name: 'Loruki',
				description:
					"An implementation of Brad Traversy's Build a Responsive Website | HTML, CSS Grid, Flexbox & More tutorial video. Deployed using GitHub and Netlify.${<a href='https://github.com/LML013/loruki-website'>}test ${</a>}"
			}
		]
	};

	return project;
}) satisfies PageServerLoad;
