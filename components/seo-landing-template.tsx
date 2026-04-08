import Link from 'next/link';

export function SeoLandingTemplate({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="section-space">
      <div className="container-shell max-w-4xl">
        <h1 className="font-serif text-4xl leading-tight">{title}</h1>
        <p className="mt-5 text-base leading-relaxed text-neutral-700">{intro}</p>
        <p className="mt-4 text-sm text-neutral-600">
          This landing page is intentionally lightweight and can be expanded later with localized case studies,
          testimonials and FAQs.
        </p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-foreground px-5 py-3 text-sm text-white">
          Book a discovery call
        </Link>
      </div>
    </section>
  );
}
