import { InquiryForm } from '@/components/inquiry-form';
import { PageHero } from '@/components/page-hero';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Send a premium content inquiry for UGC, events, weddings, and hospitality projects.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Share your project and timeline. You’ll receive a tailored response with next steps."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-3xl">Premium inquiry form</h2>
            <p className="mt-3 text-sm text-neutral-700">
              For brand campaigns, hospitality collaborations, and event-day content creation.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
