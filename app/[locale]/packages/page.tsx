import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/page-hero';
import { PricingPreview } from '@/components/pricing-preview';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.packages' });
  return { title: t('title'), description: t('description') };
}

export default async function PackagesPage() {
  const t = await getTranslations('packages');

  return (
    <>
      <PageHero
        title={t('title')}
        description={t('description')}
      />
      <PricingPreview />
    </>
  );
}
