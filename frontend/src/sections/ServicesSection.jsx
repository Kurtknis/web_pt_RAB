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
              <img src={service.image} alt={service.title} loading="lazy" />
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
