import { SectionHeading } from '@/components/section-heading';
import { TestimonialCard } from '@/components/testimonial-card';

const testimonials = [
  {
    quote:
      'Denise delivered aesthetic social assets that felt premium and completely in tune with our brand tone.',
    author: 'Brand Marketing Manager',
    role: 'Beauty Client',
  },
  {
    quote: 'The event coverage was elegant, fast, and easy to publish while the experience was still fresh.',
    author: 'Event Planner',
    role: 'Hospitality Partner',
  },
  {
    quote: 'Clear communication, fast turnaround, and content that looked native instead of forced.',
    author: 'Founder',
    role: 'Lifestyle Brand',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionHeading eyebrow="Testimonials" title="Trusted by premium-focused teams" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author + testimonial.role} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
