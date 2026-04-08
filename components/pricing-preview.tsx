import { PricingCard } from '@/components/pricing-card';
import { SectionHeading } from '@/components/section-heading';

const plans = [
  {
    tier: 'Starter',
    subtitle: '€…',
    features: ['1 short-form concept', 'Script support', 'Edited social-ready delivery'],
    idealFor: 'Single campaign test or monthly content refresh.',
  },
  {
    tier: 'Growth',
    subtitle: '€…',
    features: ['Multiple concepts', 'UGC + product coverage', 'Organic and ad variations'],
    idealFor: 'Brands building consistent content and testing creative angles.',
  },
  {
    tier: 'Premium / Event Day',
    subtitle: '€…',
    features: ['On-site event coverage', 'Fast-turn recap edits', 'Optional raw footage handover'],
    idealFor: 'Weddings, venues, launches, and high-touch brand events.',
  },
];

export function PricingPreview() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading eyebrow="Packages" title="Flexible packages aligned with your campaign goals" />
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.tier} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
