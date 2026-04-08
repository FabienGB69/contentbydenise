import { CaseStudyGrid } from '@/components/case-study-grid';
import { ContactCTA } from '@/components/contact-cta';
import { FaqAccordion } from '@/components/faq-accordion';
import { HeroSection } from '@/components/hero-section';
import { PortfolioPreview } from '@/components/portfolio-preview';
import { PricingPreview } from '@/components/pricing-preview';
import { ProcessSteps } from '@/components/process-steps';
import { ServicesGrid } from '@/components/services-grid';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TrustBar } from '@/components/trust-bar';
import { WhyDenise } from '@/components/why-denise';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'UGC & Event Content for Premium Brands in Belgium',
  description:
    'Native, aesthetic and high-converting content for lifestyle, beauty, hospitality and event brands in Belgium.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <PortfolioPreview />
      <WhyDenise />
      <ProcessSteps />
      <CaseStudyGrid />
      <PricingPreview />
      <TestimonialsSection />
      <FaqAccordion preview />
      <ContactCTA />
    </>
  );
}
