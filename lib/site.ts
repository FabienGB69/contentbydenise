export const siteConfig = {
  name: 'Content by Denise',
  url: 'https://www.contentbydenise.com',
  description:
    'Denise Fabiano creates premium UGC videos and event content for beauty, lifestyle, wedding and premium event brands in Belgium.',
  tagline: 'UGC & Event Content Creator for Premium Brands · Belgium',
  whatsapp: 'https://wa.me/32466445841',
  email: 'denise_fabiano@outlook.com',
  instagram: 'https://www.instagram.com/content.by.denise',
  tiktok: 'https://www.tiktok.com/@content.by.denise',
};

export const navLinks = {
  en: [
    { href: '/en/portfolio', label: 'Portfolio' },
    { href: '/en/packages', label: 'Services' },
    { href: '/en/about', label: 'About' },
    { href: '/en/faq', label: 'FAQ' },
    { href: '/en/contact', label: 'Contact' },
  ],
  fr: [
    { href: '/fr/portfolio', label: 'Portfolio' },
    { href: '/fr/packages', label: 'Services' },
    { href: '/fr/about', label: 'À propos' },
    { href: '/fr/faq', label: 'FAQ' },
    { href: '/fr/contact', label: 'Contact' },
  ],
  'nl-be': [
    { href: '/nl-be/portfolio', label: 'Portfolio' },
    { href: '/nl-be/packages', label: 'Diensten' },
    { href: '/nl-be/about', label: 'Over ons' },
    { href: '/nl-be/faq', label: 'FAQ' },
    { href: '/nl-be/contact', label: 'Contact' },
  ],
};

export function buildHreflang(path: string) {
  const base = siteConfig.url;
  return {
    'en-BE': `${base}/en${path}`,
    'fr-BE': `${base}/fr${path}`,
    'nl-BE': `${base}/nl-be${path}`,
    'x-default': `${base}/en${path}`,
  };
}

const legalPaths: Record<string, Record<string, string>> = {
  en: {
    privacyPolicy: 'privacy-policy',
    legalNotice: 'legal-notice',
    termsOfUse: 'terms-of-use',
    termsAndConditions: 'terms-and-conditions',
    cookiePolicy: 'cookie-policy',
  },
  fr: {
    privacyPolicy: 'politique-confidentialite',
    legalNotice: 'mentions-legales',
    termsOfUse: 'cgu',
    termsAndConditions: 'cgv',
    cookiePolicy: 'politique-cookies',
  },
  'nl-be': {
    privacyPolicy: 'privacybeleid',
    legalNotice: 'wettelijke-vermeldingen',
    termsOfUse: 'gebruiksvoorwaarden',
    termsAndConditions: 'algemene-voorwaarden',
    cookiePolicy: 'cookiebeleid',
  },
};

export function buildLegalLinks(locale: string): Record<string, string> {
  const paths = legalPaths[locale] ?? legalPaths.en;
  return Object.fromEntries(
    Object.entries(paths).map(([key, slug]) => [key, `/${locale}/${slug}`])
  );
}
