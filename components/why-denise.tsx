import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/section-heading';

export async function WhyDenise() {
  const t = await getTranslations('whyDenise');

  type Point = { title: string; description: string };
  const points: Point[] = t.raw('points') as Point[];

  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((point) => (
            <li key={point.title} className="card">
              <p className="font-medium text-sm">{point.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
