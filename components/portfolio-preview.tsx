import Link from 'next/link';
import { portfolioItems } from '@/content/site-content';
import { PortfolioCard } from '@/components/portfolio-card';
import { SectionHeading } from '@/components/section-heading';

export function PortfolioPreview() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected content across UGC, product and event storytelling"
          description="A curated look at premium social-native content formats."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
        <Link href="/portfolio" className="inline-flex rounded-full border px-5 py-3 text-sm hover:bg-muted">
          Explore full portfolio
        </Link>
      </div>
    </section>
  );
}
