import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="container-shell grid gap-8 md:grid-cols-2">
        <div>
          <p className="font-serif text-xl">Denise Fabiano</p>
          <p className="mt-3 max-w-md text-sm text-neutral-600">
            UGC Creator & Event Content Creator for premium brands in Belgium.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-neutral-700 md:justify-end">
          <Link href="/privacy-policy">Privacy (coming soon)</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
