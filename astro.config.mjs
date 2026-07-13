// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkHeadingId from 'remark-heading-id';

// https://astro.build/config
export default defineConfig({
  // Live site URL. Kept in sync with SITE.url in src/consts.ts.
  site: 'https://jairaghav.netlify.app',
  // Supports `## Heading {#custom-id}` anchors used by in-post Tables of Contents.
  // MDX inherits this markdown config (extendMarkdownConfig defaults true).
  markdown: {
    remarkPlugins: [remarkHeadingId],
  },
  integrations: [mdx(), sitemap()],
  vite: {
    // @ts-expect-error — Tailwind's Vite plugin is typed against a different
    // Vite copy than Astro's bundled one (duplicate install); harmless at runtime.
    plugins: [tailwindcss()],
  },
});
