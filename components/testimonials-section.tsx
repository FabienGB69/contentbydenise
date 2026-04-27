import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';

export async function TestimonialsSection() {
  const t = await getTranslations('testimonials');

  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
        />
        <div className="card bg-muted text-center py-12">
          <p className="text-sm text-neutral-600 max-w-lg mx-auto">{t('comingSoon')}</p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border px-5 py-3 text-sm hover:bg-white transition-colors"
          >
            {t('ctaLabel')}
          </a>
        </div>
      </div>
    </section>
  );
}
