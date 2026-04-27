import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { PortfolioCard } from '@/components/portfolio-card';
import { SectionHeading } from '@/components/section-heading';
import { portfolioItems } from '@/content/site-content';

export async function PortfolioPreview() {
  const t = await getTranslations('portfolio');
  const locale = await getLocale();

  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <PortfolioCard key={item.title} {...item} watchVideoLabel={t('watchVideo')} />
          ))}
        </div>
        <Link
          href={`/${locale}/portfolio`}
          className="inline-flex rounded-full border px-5 py-3 text-sm hover:bg-muted transition-colors"
        >
          {locale === 'fr' ? 'Voir le portfolio complet' : 'Explore full portfolio'}
        </Link>
      </div>
    </section>
  );
}
