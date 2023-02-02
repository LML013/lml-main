//TODO: Make this work

import type { PageServerLoad } from './$types';

export const load = (async () => {
	//get projects from database
    //currently temp static data
    const projects = {"projects":[
            {
                name: 'LuisMiguelLuna.com',
                desc: 'This website. Currently being built with HTML, CSS, JS, and Svelte. Deployed using GitHub and Netlify.',
                link: 'https://luismiguelluna.com',
                github: 'https://github.com/LML013/lml-main'
            },

            {
                name: 'Green Saber Games',
                desc: 'Tabletop gaming blog & content hub made with Wordpress.',
                link: 'https://greensabergames.com',
                github: ''
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
        ]
    };

	//TODO: Turn this into a Github GraphQL API call for Pinned repos

	return projects;
}) satisfies PageServerLoad;
