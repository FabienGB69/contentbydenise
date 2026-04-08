import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'About Denise Fabiano',
  description: 'Meet Denise Fabiano, a Belgium-based multilingual UGC and event content creator for premium brands.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Denise"
        description="Creative, premium-oriented, and multilingual. Denise helps brands translate their image into social-native content people genuinely watch."
      />
      <section className="section-space">
        <div className="container-shell space-y-8">
          <SectionHeading title="Positioning" description="UGC Creator & Event Content Creator for premium brands in Belgium." />
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-700">
            Based in Belgium, Denise works in French, Dutch, and English. Her approach combines creative direction,
            clean visual storytelling, and platform-native editing to deliver content that supports both brand image and
            social performance.
          </p>
        </div>
      </section>
    </>
  );
}
