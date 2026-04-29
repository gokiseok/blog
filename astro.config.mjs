import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://blog.gokiseok.com',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://blog.gokiseok.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/posts/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/categories/')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
    mdx(),
  ],
  output: 'static',
});
