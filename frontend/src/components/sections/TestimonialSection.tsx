import { SectionHeading } from '@/components/SectionHeading';
import { getContentProvider } from '@/providers/contentProvider';

export function TestimonialSection() {
  const testimonials = getContentProvider().testimonials();

  return (
    <section className="section section--charcoal">
      <div className="luxury-container">
        <SectionHeading kicker="Klien" title="Trust built through detailed execution." light />
        <div className="testimonial-grid">
          {testimonials.slice(0, 3).map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p>{`"${item.quote}"`}</p>
              <div>
                <strong>{item.name}</strong>
                <span>
                  {item.role} / {item.project}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
