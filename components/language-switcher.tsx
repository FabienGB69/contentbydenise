'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const targetLocale = locale === 'en' ? 'fr' : 'en';
  const targetLabel = locale === 'en' ? 'FR' : 'EN';

  function handleSwitch() {
    // Replace the locale segment in the current path
    const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);
    router.push(newPath);
  }

  return (
    <button
      onClick={handleSwitch}
      className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-700 hover:border-accent hover:text-foreground transition-colors"
      aria-label={`Switch to ${targetLocale === 'en' ? 'English' : 'Français'}`}
    >
      {targetLabel}
    </button>
  );
}
