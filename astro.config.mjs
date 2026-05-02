import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://huongminri.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'zh', 'ko', 'de', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude root redirect page from sitemap; localized pages are the canonical entries.
        try {
          const u = new URL(page);
          return u.pathname !== '/';
        } catch {
          return true;
        }
      },
      i18n: {
        defaultLocale: 'vi',
        locales: {
          vi: 'vi-VN',
          en: 'en-US',
          zh: 'zh-CN',
          ko: 'ko-KR',
          de: 'de-DE',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
