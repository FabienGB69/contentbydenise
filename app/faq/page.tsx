import { FaqAccordion } from '@/components/faq-accordion';
import { PageHero } from '@/components/page-hero';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'FAQ',
  description: 'Answers about UGC, languages, delivery speed, usage rights and event content creation.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" description="Everything you need before planning your next content collaboration." />
      <FaqAccordion />
    </>
  );
}
