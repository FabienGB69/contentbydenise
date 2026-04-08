import { trustItems } from '@/content/site-content';

export function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="border-y bg-white py-4">
      <div className="container-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <p key={item} className="text-sm font-medium text-neutral-700">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
