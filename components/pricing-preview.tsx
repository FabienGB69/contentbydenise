import { getTranslations } from 'next-intl/server';
import { PricingCard } from '@/components/pricing-card';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';

export async function PricingPreview() {
  const t = await getTranslations('packages');

  type Plan = {
    tier: string;
    subtitle: string;
    description: string;
    features: string[];
    idealFor: string;
    cta: string;
  };
  const plans: Plan[] = t.raw('plans') as Plan[];

  return (
    <section className="section-space bg-white" id="packages">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.tier}
              {...plan}
              ctaHref={siteConfig.whatsapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
