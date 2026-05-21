import testimonials from '../content/testimonials';
import company from '../content/company';

function TestimonialSection() {
  return (
    <section className="luxury-section luxury-section--stone testimonials-editorial" data-reveal>
      <div className="luxury-container">
        <div className="stats-row">
          {company.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.project}>
              <p>"{item.quote}"</p>
              <cite>{item.name} / {item.project}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
