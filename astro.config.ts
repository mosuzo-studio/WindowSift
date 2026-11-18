import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  output: 'static',
  site: 'https://windowsift.mosuzo.com',
  base: '/',
  i18n: {
    locales: ['en', 'zh-cn'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: { resolve: { alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) } } },
});
