import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Event Content Creation',
  description: 'On-site event content creation for weddings, venues, hospitality and premium brand events.',
  path: '/event-content-creation',
});

export default function EventContentCreationPage() {
  return (
    <>
      <PageHero
        title="Event Content Creation"
        description="Social-first event coverage for weddings, premium events, venues, hospitality and brand activations."
        actions={<Link href="/contact" className="rounded-full bg-foreground px-5 py-3 text-sm text-white">Inquire for your event</Link>}
      />
      <section className="section-space">
        <div className="container-shell space-y-8">
          <SectionHeading title="What is captured" description="Guest moments, ambiance, details, candid interactions, and key highlights in vertical-first format." />
          <SectionHeading title="How coverage works" description="Pre-event planning, on-site filming with a discreet approach, and post-event edits aligned with your channels." />
          <SectionHeading title="Turnaround" description="Fast turnaround options available, including same-day or next-day social cuts depending on scope." />
          <SectionHeading title="Value for social media" description="You receive polished social assets while the event is still relevant and top-of-mind for your audience." />
        </div>
      </section>
    </>
  );
}
