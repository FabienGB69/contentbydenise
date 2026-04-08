import Link from 'next/link';

export function ContactCTA() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="card bg-foreground text-white">
          <h2 className="font-serif text-3xl leading-tight">
            Ready to create content your audience actually wants to watch?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-neutral-200">
            Let’s discuss your brand, your campaign or your event.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm text-foreground hover:bg-neutral-100">
            Book a discovery call
          </Link>
        </div>
      </div>
    </section>
  );
}
