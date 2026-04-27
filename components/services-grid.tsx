import { getTranslations } from 'next-intl/server';
import { ServiceCard } from '@/components/service-card';
import { SectionHeading } from '@/components/section-heading';

export async function ServicesGrid() {
  const t = await getTranslations('services');

  const services = [
    {
      title: t('ugcVideos.title'),
      description: t('ugcVideos.description'),
      includes: t.raw('ugcVideos.includes') as string[],
    },
    {
      title: t('productContent.title'),
      description: t('productContent.description'),
      includes: t.raw('productContent.includes') as string[],
    },
    {
      title: t('weddingsEvents.title'),
      description: t('weddingsEvents.description'),
      includes: t.raw('weddingsEvents.includes') as string[],
    },
  ];

  return (
    <section className="section-space" id="services">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
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
