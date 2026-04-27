import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const base = siteConfig.url;
const locales = ['en', 'fr'];
const routes = ['', '/portfolio', '/packages', '/about', '/faq', '/contact', '/privacy-policy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }
  return entries;
}
