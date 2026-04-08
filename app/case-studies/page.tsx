import { CaseStudyGrid } from '@/components/case-study-grid';
import { PageHero } from '@/components/page-hero';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Qualitative case studies across beauty, hospitality, and event content collaborations.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        description="A look at content challenges, deliverables and outcomes across premium collaborations."
      />
      <CaseStudyGrid />
    </>
  );
}
