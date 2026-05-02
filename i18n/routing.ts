import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'nl-be'],
  defaultLocale: 'en',
  pathnames: {
    '/privacy-policy': {
      en: '/privacy-policy',
      fr: '/politique-confidentialite',
      'nl-be': '/privacybeleid',
    },
    '/legal-notice': {
      en: '/legal-notice',
      fr: '/mentions-legales',
      'nl-be': '/wettelijke-vermeldingen',
    },
    '/terms-of-use': {
      en: '/terms-of-use',
      fr: '/cgu',
      'nl-be': '/gebruiksvoorwaarden',
    },
    '/terms-and-conditions': {
      en: '/terms-and-conditions',
      fr: '/cgv',
      'nl-be': '/algemene-voorwaarden',
    },
    '/cookie-policy': {
      en: '/cookie-policy',
      fr: '/politique-cookies',
      'nl-be': '/cookiebeleid',
    },
  },
});
