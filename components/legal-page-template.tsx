import { PageHero } from '@/components/page-hero';

type Section = {
  title: string;
  content?: string;
  list?: string[];
  note?: string;
};

type Props = {
  title: string;
  description: string;
  lastUpdated: string;
  intro?: string;
  sections: Section[];
};

export function LegalPageTemplate({ title, description, lastUpdated, intro, sections }: Props) {
  return (
    <>
      <PageHero title={title} description={description} />
      <section className="section-space">
        <div className="container-shell max-w-3xl space-y-8">
          <p className="text-sm text-neutral-400">{lastUpdated}</p>
          {intro && (
            <p className="text-sm leading-relaxed text-neutral-700 whitespace-pre-line">{intro}</p>
          )}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-medium text-base text-foreground">{section.title}</h2>
                {section.content && (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700 whitespace-pre-line">
                    {section.content}
                  </p>
                )}
                {section.list && section.list.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {section.list.map((item) => (
                      <li key={item} className="text-sm text-neutral-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{section.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
