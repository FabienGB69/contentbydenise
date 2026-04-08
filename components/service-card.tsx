interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="card transition-transform hover:-translate-y-1">
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{description}</p>
    </article>
  );
}
