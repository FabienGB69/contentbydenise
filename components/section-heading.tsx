interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-neutral-700">{description}</p> : null}
    </div>
  );
}
