interface CaseStudyCardProps {
  clientType: string;
  challenge: string;
  deliverables: string;
  outcome: string;
}

export function CaseStudyCard({ clientType, challenge, deliverables, outcome }: CaseStudyCardProps) {
  return (
    <article className="card space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{clientType}</p>
      <p className="text-sm text-neutral-700"><strong>Challenge:</strong> {challenge}</p>
      <p className="text-sm text-neutral-700"><strong>Deliverables:</strong> {deliverables}</p>
      <p className="text-sm text-neutral-700"><strong>Outcome:</strong> {outcome}</p>
    </article>
  );
}
