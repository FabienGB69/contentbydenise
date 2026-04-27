import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/page-hero';
import { FaqAccordion } from '@/components/faq-accordion';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.faq' });
  return { title: t('title'), description: t('description') };
}

export default async function FaqPage() {
  const t = await getTranslations('faq');

  return (
    <>
      <PageHero title={t('title')} description="" />
      <FaqAccordion />
    </>
  );
}
