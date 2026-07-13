import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, fullName } from '../consts';

// Blog RSS feed at /rss.xml — lets readers subscribe.
export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `${fullName} - Blog`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: `<language>en</language>`,
  });
}
