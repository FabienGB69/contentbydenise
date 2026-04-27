import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/section-heading';

export async function FaqAccordion({ preview = false }: { preview?: boolean }) {
  const t = await getTranslations('faq');

  type FaqItem = { question: string; answer: string };
  const allItems: FaqItem[] = t.raw('items') as FaqItem[];
  const items = preview ? allItems.slice(0, 4) : allItems;

  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.question} className="card group">
              <summary className="cursor-pointer list-none pr-8 text-base font-medium marker:content-none">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-neutral-700">{item.answer}</p>
            </details>
          ))}
        </div>
        {preview && (
          <Link href="faq" className="inline-flex rounded-full border px-5 py-3 text-sm hover:bg-muted transition-colors">
            {t('viewAll')}
          </Link>
        )}
      </div>
    </section>
  );
}
