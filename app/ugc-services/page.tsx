import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'UGC Services',
  description: 'UGC video production, product content, short-form assets, and ad creatives for premium brands.',
  path: '/ugc-services',
});

export default function UgcServicesPage() {
  return (
    <>
      <PageHero
        title="UGC Services"
        description="UGC videos, product content, short-form assets, ad creatives, and organic social deliverables for premium brands."
        actions={<Link href="/contact" className="rounded-full bg-foreground px-5 py-3 text-sm text-white">Book a discovery call</Link>}
      />
      <section className="section-space">
        <div className="container-shell space-y-10">
          <SectionHeading title="What’s included" />
          <div className="grid gap-5 md:grid-cols-2">
            {['UGC videos', 'Product content', 'Short-form content', 'Ad creatives', 'Organic social assets', 'Custom deliverables'].map((item) => (
              <article key={item} className="card text-sm text-neutral-700">{item}</article>
            ))}
          </div>
          <SectionHeading title="Who it is for" description="Lifestyle, beauty, hospitality, event, and wedding-focused brands looking for native, credible creative." />
          <SectionHeading title="Process" description="Briefing, production, and delivery with clear communication and fast execution." />
        </div>
      </section>
    </>
  );
}
