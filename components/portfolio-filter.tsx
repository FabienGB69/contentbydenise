'use client';

import { useState } from 'react';
import { PortfolioCard } from '@/components/portfolio-card';

interface PortfolioItem {
  category: string;
  title: string;
  description: string;
  objective?: string;
  deliverable?: string;
}

interface Props {
  items: PortfolioItem[];
  filters: { key: string; label: string }[];
  watchVideoLabel: string;
  noItemsLabel: string;
}

export function PortfolioFilter({ items, filters, watchVideoLabel, noItemsLabel }: Props) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? items
    : items.filter((item) => item.category.toLowerCase() === active.toLowerCase());

  return (
    <div className="space-y-8">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Portfolio filters">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === key
                ? 'bg-foreground text-white border-foreground'
                : 'bg-white hover:bg-muted'
            }`}
            aria-pressed={active === key}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-500">{noItemsLabel}</p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard
              key={item.title}
              {...item}
              watchVideoLabel={watchVideoLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
