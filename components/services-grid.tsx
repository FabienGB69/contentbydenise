import { ServiceCard } from '@/components/service-card';
import { SectionHeading } from '@/components/section-heading';

const services = [
  { title: 'UGC Videos', description: 'Short-form videos designed to feel native to social platforms while staying aligned with your brand.' },
  { title: 'Product Content', description: 'Premium product visuals that blend lifestyle storytelling and editorial framing for campaigns.' },
  { title: 'Event Content', description: 'On-site vertical coverage for weddings, brand events, and hospitality moments with fast delivery.' },
];

export function ServicesGrid() {
  return (
    <section className="section-space" id="services">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="Premium content services built for social performance"
          description="Flexible support for lifestyle, beauty, hospitality, wedding, and event brands."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
