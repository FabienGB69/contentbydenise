import { PageHero } from '@/components/page-hero';
import { PricingPreview } from '@/components/pricing-preview';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Packages',
  description: 'Starter, Growth, and Premium/Event Day content packages tailored to campaign and event needs.',
  path: '/packages',
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Packages"
        description="Flexible package structures for campaign content, recurring social assets, and event-day coverage."
      />
      <PricingPreview />
    </>
  );
}
