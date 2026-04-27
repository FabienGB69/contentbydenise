interface PricingCardProps {
  tier: string;
  subtitle: string;
  description?: string;
  features: string[];
  idealFor: string;
  cta: string;
  ctaHref: string;
}

export function PricingCard({ tier, subtitle, description, features, idealFor, cta, ctaHref }: PricingCardProps) {
  return (
    <article className="card flex h-full flex-col">
      <h3 className="font-serif text-2xl">{tier}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">{subtitle}</p>
      {description && (
        <p className="mt-3 text-sm text-neutral-700">{description}</p>
      )}
      <ul className="mt-4 space-y-2 text-sm text-neutral-700 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="text-accent mt-0.5">·</span>
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-neutral-500 italic">
        {idealFor}
      </p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-fit rounded-full border px-4 py-2 text-sm hover:bg-muted transition-colors"
      >
        {cta}
      </a>
    </article>
  );
}
