import { getTranslations } from 'next-intl/server';
import { LegalPageTemplate } from '@/components/legal-page-template';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.legalNotice' });
  return { title: t('title'), description: t('description') };
}

export default async function LegalNoticePage() {
  const t = await getTranslations('legalNotice');

  type Section = { title: string; content?: string; list?: string[]; note?: string };
  const sections: Section[] = t.raw('sections') as Section[];

  return (
    <LegalPageTemplate
      title={t('title')}
      description={t('description')}
      lastUpdated={t('lastUpdated')}
      sections={sections}
    />
  );
}
