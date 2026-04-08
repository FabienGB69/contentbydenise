import Link from 'next/link';

interface PricingCardProps {
  tier: string;
  subtitle: string;
  features: string[];
  idealFor: string;
}

export function PricingCard({ tier, subtitle, features, idealFor }: PricingCardProps) {
  return (
    <article className="card flex h-full flex-col">
      <h3 className="font-serif text-2xl">{tier}</h3>
      <p className="mt-2 text-sm text-neutral-600">Starting from {subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-neutral-700"><strong>Ideal for:</strong> {idealFor}</p>
      <Link href="/contact" className="mt-6 inline-flex rounded-full border px-4 py-2 text-sm hover:bg-muted">
        Inquire now
      </Link>
    </article>
  );
}
