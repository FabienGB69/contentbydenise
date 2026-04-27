import { getTranslations } from 'next-intl/server';
import { ContactCTA } from '@/components/contact-cta';
import { FaqAccordion } from '@/components/faq-accordion';
import { HeroSection } from '@/components/hero-section';
import { PortfolioPreview } from '@/components/portfolio-preview';
import { PricingPreview } from '@/components/pricing-preview';
import { ProcessSteps } from '@/components/process-steps';
import { ServicesGrid } from '@/components/services-grid';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TrustBar } from '@/components/trust-bar';
import { WeddingsSection } from '@/components/weddings-section';
import { WhyDenise } from '@/components/why-denise';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  const canonical = `${siteConfig.url}/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: {
        'en-BE': `${siteConfig.url}/en`,
        'fr-BE': `${siteConfig.url}/fr`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === 'fr' ? 'fr_BE' : 'en_BE',
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <PortfolioPreview />
      <WeddingsSection />
      <WhyDenise />
      <ProcessSteps />
      <PricingPreview />
      <TestimonialsSection />
      <FaqAccordion preview />
      <ContactCTA />
    </>
  );
}
