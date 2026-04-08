interface PortfolioCardProps {
  category: string;
  title: string;
  description: string;
}

export function PortfolioCard({ category, title, description }: PortfolioCardProps) {
  return (
    <article className="card overflow-hidden p-0">
      <div className="h-44 bg-muted" aria-hidden="true" />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{category}</p>
        <h3 className="mt-2 font-serif text-xl">{title}</h3>
        <p className="mt-2 text-sm text-neutral-700">{description}</p>
      </div>
    </article>
  );
}
