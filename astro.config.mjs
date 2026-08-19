import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
  ],
  server: {
    port: 8092,
  },
});