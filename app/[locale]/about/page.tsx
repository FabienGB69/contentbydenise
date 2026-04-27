import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });
  return { title: t('title'), description: t('description') };
}

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <>
      <PageHero
        title={t('title')}
        description={t('description')}
      />
      <section className="section-space">
        <div className="container-shell space-y-8">
          <SectionHeading title={t('positioning')} description={t('positioningText')} />
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-700">
            {t('bio')}
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-white hover:bg-neutral-800 transition-colors"
          >
            {t('whatsapp')}
          </a>
        </div>
      </section>
    </>
  );
}
