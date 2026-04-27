import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';

export async function WeddingsSection() {
  const t = await getTranslations('weddings');
  const items: string[] = t.raw('items') as string[];

  return (
    <section className="section-space bg-white" id="weddings">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Inclusions list */}
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="card flex items-center gap-3 text-sm font-medium"
              >
                <span className="text-accent text-lg leading-none">·</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA block */}
          <div className="card bg-muted flex flex-col justify-between gap-6">
            <div>
              <p className="font-serif text-2xl leading-snug">
                Weddings, brand launches, hospitality & private events.
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                On-site vertical content with a discreet, editorial approach. Available across Belgium.
              </p>
            </div>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-white hover:bg-neutral-800 transition-colors"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
