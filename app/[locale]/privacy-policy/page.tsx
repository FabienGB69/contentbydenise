import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/page-hero';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });
  return { title: t('title'), description: t('description') };
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('privacy');

  type Section = { title: string; content: string };
  const sections: Section[] = t.raw('sections') as Section[];

  return (
    <>
      <PageHero title={t('title')} description={t('description')} />
      <section className="section-space">
        <div className="container-shell max-w-3xl space-y-8">
          <p className="text-sm text-neutral-500">
            {t('lastUpdated')}: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-sm leading-relaxed text-neutral-700">{t('intro')}</p>
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-medium text-base">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
