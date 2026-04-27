import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/site';

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white py-12">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl">Content by Denise</p>
            <p className="mt-2 text-sm text-neutral-600">{t('tagline')}</p>
            {/* Social links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-foreground transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-neutral-500 hover:text-foreground transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2 text-sm text-neutral-700">
            <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              WhatsApp
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              {t('contact')}
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              {t('privacy')}
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-neutral-500 md:text-right">
            <p>© {year} Content by Denise</p>
            <p>{t('rights')}</p>
          </div>
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
