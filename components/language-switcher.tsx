'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'nl-be', label: 'NL' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: string) {
    const newPath = pathname.replace(`/${locale}`, `/${target}`);
    router.push(newPath);
  }

  return (
    <div className="flex items-center gap-1">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          disabled={locale === code}
          className={`rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            locale === code
              ? 'bg-accent text-white cursor-default'
              : 'text-neutral-600 hover:text-foreground hover:bg-neutral-100'
          }`}
          aria-label={`Switch to ${label}`}
          aria-current={locale === code ? 'true' : undefined}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
