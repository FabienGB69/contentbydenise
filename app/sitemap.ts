import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const base = siteConfig.url;
const locales = ['en', 'fr', 'nl-be'];
const legalRoutes: Record<string, string> = {
  en: '/privacy-policy,/legal-notice,/terms-of-use,/terms-and-conditions,/cookie-policy',
  fr: '/politique-confidentialite,/mentions-legales,/cgu,/cgv,/politique-cookies',
  'nl-be': '/privacybeleid,/wettelijke-vermeldingen,/gebruiksvoorwaarden,/algemene-voorwaarden,/cookiebeleid',
};
const baseRoutes = ['', '/portfolio', '/packages', '/about', '/faq', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of baseRoutes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
    for (const route of legalRoutes[locale].split(',')) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      });
    }
  }
  return entries;
}
