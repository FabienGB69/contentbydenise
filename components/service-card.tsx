interface ServiceCardProps {
  title: string;
  description: string;
  includes?: string[];
}

export function ServiceCard({ title, description, includes }: ServiceCardProps) {
  return (
    <article className="card flex flex-col transition-transform hover:-translate-y-1">
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{description}</p>
      {includes && includes.length > 0 && (
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-neutral-600">
              <span className="mt-0.5 text-accent">·</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
