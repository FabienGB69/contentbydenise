import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Denise Fabiano',
  url: 'https://www.denisefabiano.com',
  description:
    'UGC Creator & Event Content Creator for premium brands in Belgium. Native, aesthetic and high-converting content for lifestyle, beauty, hospitality and event brands.',
  tagline: 'UGC Creator & Event Content Creator for premium brands in Belgium',
};

export const navLinks = [
  { href: '/ugc-services', label: 'UGC Services' },
  { href: '/event-content-creation', label: 'Event Content' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      // TODO: connect hreflang strategy when multilingual routes are live.
      languages: {
        'en-BE': canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: 'en_BE',
      type: 'website',
      // TODO: add branded OG image in /public and map image URL here.
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // TODO: add branded Twitter image once available.
    },
  };
}
