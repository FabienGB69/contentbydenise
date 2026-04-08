import { SectionHeading } from '@/components/section-heading';

const points = [
  'Authentic content',
  'Premium visual taste',
  'Multilingual creator',
  'Fast delivery',
  'Social-native formats',
];

export function WhyDenise() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Why Denise"
          title="A premium partner for modern brand content"
          description="Creative direction, production and editing tailored to the way people consume social media."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((point) => (
            <li key={point} className="card text-sm font-medium">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
