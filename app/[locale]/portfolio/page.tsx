import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/page-hero';
import { PortfolioFilter } from '@/components/portfolio-filter';
import { portfolioItems } from '@/content/site-content';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.portfolio' });
  return { title: t('title'), description: t('description') };
}

export default async function PortfolioPage() {
  const t = await getTranslations('portfolio');

  const filters = [
    { key: 'all', label: t('filters.all') },
    { key: 'beauty', label: t('filters.beauty') },
    { key: 'lifestyle', label: t('filters.lifestyle') },
    { key: 'wedding', label: t('filters.wedding') },
    { key: 'event', label: t('filters.event') },
    { key: 'product', label: t('filters.product') },
  ];

  return (
    <>
      <PageHero title={t('title')} description={t('description')} />
      <section className="section-space">
        <div className="container-shell">
          <PortfolioFilter
            items={portfolioItems}
            filters={filters}
            watchVideoLabel={t('watchVideo')}
            noItemsLabel={t('noItems')}
          />
        </div>
      </section>
    </>
  );
}
