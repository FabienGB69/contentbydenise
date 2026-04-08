interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="card">
      <p className="text-sm leading-relaxed text-neutral-700">“{quote}”</p>
      <p className="mt-4 text-sm font-medium">{author}</p>
      <p className="text-xs text-neutral-500">{role}</p>
    </article>
  );
}
