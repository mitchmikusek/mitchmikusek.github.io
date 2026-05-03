import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mitchmikusek.com',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
