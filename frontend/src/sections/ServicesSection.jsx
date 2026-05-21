import OptimizedImage from '../components/ui/OptimizedImage';
import services from '../content/services';

function ServicesSection() {
  return (
    <section className="luxury-section services-editorial" data-reveal>
      <div className="luxury-container">
        <div className="section-heading">
          <span className="cinematic-kicker">Service expertise</span>
          <h2>One studio language from first sketch to final fit-out.</h2>
        </div>
        <div className="services-editorial__grid">
          {services.map((service) => (
            <article className="service-panel" key={service.id}>
              <OptimizedImage
                src={service.image}
                alt={`${service.title} - layanan PT Cipta Kreasi Buana`}
                width="900"
                height="620"
                sizes="(max-width: 768px) 92vw, 25vw"
              />
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
