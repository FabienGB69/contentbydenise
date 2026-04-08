import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const routes = [
  '',
  '/ugc-services',
  '/event-content-creation',
  '/portfolio',
  '/case-studies',
  '/about',
  '/packages',
  '/faq',
  '/contact',
  '/ugc-creator-belgium',
  '/ugc-creator-brussels',
  '/event-content-creator-belgium',
  '/wedding-content-creator-belgium',
  '/multilingual-ugc-creator-belgium',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
