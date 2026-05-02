import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { siteConfig, buildLegalLinks } from '@/lib/site';

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const locale = await getLocale();
  const year = new Date().getFullYear();
  const legal = buildLegalLinks(locale);

  const navT = await getTranslations('nav');
  const navLinks = [
    { href: `/${locale}/portfolio`, label: 'Portfolio' },
    { href: `/${locale}/packages`, label: navT('services') },
    { href: `/${locale}/about`, label: navT('about') },
    { href: `/${locale}/faq`, label: 'FAQ' },
    { href: `/${locale}/contact`, label: navT('contact') },
  ];

  return (
    <footer className="border-t bg-white pt-12 pb-6">
      <div className="container-shell">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10">

          {/* Col 1 — Brand */}
          <div>
            <Link href={`/${locale}`} className="font-serif text-xl hover:text-accent transition-colors">
              Content by Denise
            </Link>
            <p className="mt-2 text-sm text-neutral-500">{t('tagline')}</p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-foreground transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-neutral-400 hover:text-foreground transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {t('navigation')}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-neutral-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {t('legal')}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-neutral-600">
              <li><Link href={legal.legalNotice} className="hover:text-foreground transition-colors">{t('legalNotice')}</Link></li>
              <li><Link href={legal.termsOfUse} className="hover:text-foreground transition-colors">{t('termsOfUse')}</Link></li>
              <li><Link href={legal.termsAndConditions} className="hover:text-foreground transition-colors">{t('termsAndConditions')}</Link></li>
              <li><Link href={legal.privacyPolicy} className="hover:text-foreground transition-colors">{t('privacy')}</Link></li>
              <li><Link href={legal.cookiePolicy} className="hover:text-foreground transition-colors">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {t('socialContact')}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-neutral-600">
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col items-center gap-2 text-xs text-neutral-400 sm:flex-row sm:justify-between">
          <p>© {year} Content by Denise — {t('rights')}</p>
          <p>
            {t('madeWith')}{' '}
            <span aria-hidden="true">❤️</span>{' '}
            {t('by')}{' '}
            <a
              href="https://pixeloria.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-500 hover:text-foreground transition-colors"
            >
              Pixeloria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}
