import { SectionHeading } from '@/components/section-heading';

const steps = ['Brief', 'Production', 'Delivery'];

export function ProcessSteps() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Process"
          title="Simple workflow, clear expectations"
          description="A streamlined production process to keep campaigns and events moving fast."
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li key={step} className="card">
              <p className="text-sm text-neutral-500">Step {idx + 1}</p>
              <p className="mt-2 font-serif text-2xl">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
