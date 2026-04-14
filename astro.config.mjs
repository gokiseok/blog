import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://blog.gokiseok.com',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  output: 'static',
});
