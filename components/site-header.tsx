import Link from 'next/link';
import { navLinks } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-tight">
          Denise Fabiano
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-neutral-700 hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border bg-foreground px-4 py-2 text-sm text-white hover:bg-neutral-800"
        >
          Book a discovery call
        </Link>
      </div>
    </header>
  );
}
