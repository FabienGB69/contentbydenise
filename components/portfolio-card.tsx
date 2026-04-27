interface PortfolioCardProps {
  category: string;
  title: string;
  description: string;
  objective?: string;
  deliverable?: string;
  watchVideoLabel?: string;
}

export function PortfolioCard({ category, title, description, objective, deliverable, watchVideoLabel }: PortfolioCardProps) {
  return (
    <article className="card overflow-hidden p-0">
      {/* Vertical video placeholder */}
      <div className="relative h-64 bg-muted" aria-hidden="true">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-xs text-neutral-500">Vertical video</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{category}</p>
        <h3 className="mt-2 font-serif text-xl">{title}</h3>
        <p className="mt-2 text-sm text-neutral-700">{description}</p>
        {objective && (
          <p className="mt-2 text-xs text-neutral-500"><strong>Objective:</strong> {objective}</p>
        )}
        {deliverable && (
          <p className="mt-1 text-xs text-neutral-500"><strong>Deliverable:</strong> {deliverable}</p>
        )}
        {watchVideoLabel && (
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs hover:bg-muted transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {watchVideoLabel}
          </button>
        )}
      </div>
    </article>
  );
}
