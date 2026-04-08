import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  actions?: ReactNode;
}

export function PageHero({ title, description, actions }: PageHeroProps) {
  return (
    <section className="section-space border-b bg-white">
      <div className="container-shell">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700">{description}</p>
        {actions ? <div className="mt-6">{actions}</div> : null}
      </div>
    </section>
  );
}
