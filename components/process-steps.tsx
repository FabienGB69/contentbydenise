import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/section-heading';

export async function ProcessSteps() {
  const t = await getTranslations('process');

  type Step = { step: string; title: string; description: string };
  const steps: Step[] = t.raw('steps') as Step[];

  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.step} className="card">
              <p className="font-serif text-3xl text-accent">{s.step}</p>
              <p className="mt-3 font-serif text-2xl">{s.title}</p>
              <p className="mt-2 text-sm text-neutral-600">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
