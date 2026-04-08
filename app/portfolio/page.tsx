import { portfolioItems } from '@/content/site-content';
import { PageHero } from '@/components/page-hero';
import { PortfolioCard } from '@/components/portfolio-card';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Portfolio',
  description: 'Browse UGC, product, wedding, event and hospitality content examples by Denise Fabiano.',
  path: '/portfolio',
});

const filters = ['All', 'UGC', 'Product', 'Event', 'Wedding', 'Hospitality'];

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfolio" description="A curated selection of native, aesthetic and premium content formats." />
      <section className="section-space">
        <div className="container-shell space-y-8">
          <div className="flex flex-wrap gap-2" aria-label="Portfolio filters (static placeholder)">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm ${index === 0 ? 'bg-foreground text-white' : 'bg-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
