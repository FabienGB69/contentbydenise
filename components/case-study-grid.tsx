import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeading } from '@/components/section-heading';

const studies = [
  {
    clientType: 'Beauty Brand',
    challenge: 'Needed elegant ad-ready creative that still felt native to Reels and TikTok.',
    deliverables: 'UGC scripts, product demo videos, and organic cutdowns.',
    outcome: 'The brand gained a cohesive content library for paid testing and daily social publishing.',
  },
  {
    clientType: 'Boutique Hotel',
    challenge: 'Wanted warm hospitality storytelling without over-produced visuals.',
    deliverables: 'Lifestyle footage, room highlights, and short social edits.',
    outcome: 'The team used the assets to communicate experience and atmosphere more clearly online.',
  },
  {
    clientType: 'Wedding Event',
    challenge: 'Required discreet same-day social clips that preserved the premium feeling.',
    deliverables: 'On-site vertical capture and fast-turn highlight edits.',
    outcome: 'Couples and vendors received polished social-ready moments while the day was still unfolding.',
  },
];

export function CaseStudyGrid() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionHeading eyebrow="Case Studies" title="Real projects, clear creative outcomes" />
        <div className="grid gap-5 md:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.clientType} {...study} />
          ))}
        </div>
        <Link href="/case-studies" className="inline-flex rounded-full border px-5 py-3 text-sm hover:bg-white">
          View all case studies
        </Link>
      </div>
    </section>
  );
}
