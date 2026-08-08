import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config.ts';
import { sortItemsByDateDesc } from '../utils/data-utils.ts';

export async function GET(context) {
    const posts = (await getCollection('blog')).filter(({ data }) => data.lang === 'en').sort(sortItemsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/Blog/blog/${item.data.permalink}/`,
            pubDate: item.data.publishDate
        }))
    });
}
