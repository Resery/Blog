import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://resery.github.io/Blog/',
    title: 'Resery Blog',
    subtitle: 'Notes on software, ideas, and making things',
    description: 'Resery Blog — notes on software, ideas, and making things.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [],
    socialLinks: [],
    hero: {
        title: 'Thinking, building, and writing.',
        text: 'A quiet place for notes on software, ideas, and the things I learn along the way.',
        actions: [
            {
                text: 'Read the blog',
                href: '/blog'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: '',
        text: '',
        form: { action: '#' }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
