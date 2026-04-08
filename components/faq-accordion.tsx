import { SectionHeading } from '@/components/section-heading';

export const faqItems = [
  {
    question: 'What is UGC content?',
    answer: 'UGC (User-Generated Content style) is social-native content that feels authentic while still being professionally produced for your brand goals.',
  },
  {
    question: 'Do you work with brands outside Belgium?',
    answer: 'Yes. Denise is based in Belgium and works with both local and international brands remotely or on-site when required.',
  },
  {
    question: 'In which languages can you create content?',
    answer: 'French, Dutch, and English.',
  },
  {
    question: 'What types of events do you cover?',
    answer: 'Weddings, hospitality experiences, venue showcases, private events, and premium brand activations.',
  },
  {
    question: 'How fast is delivery?',
    answer: 'Turnaround depends on scope, but fast delivery options are available for campaigns and live events.',
  },
  {
    question: 'Do you offer raw footage?',
    answer: 'Yes, raw footage can be added depending on package and licensing needs.',
  },
  {
    question: 'Can content be used for ads?',
    answer: 'Yes. Ad usage can be included in your agreement with options tailored to campaign duration and channels.',
  },
];

export function FaqAccordion({ preview = false }: { preview?: boolean }) {
  const items = preview ? faqItems.slice(0, 4) : faqItems;

  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
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
      </div>
    </section>
  );
}
