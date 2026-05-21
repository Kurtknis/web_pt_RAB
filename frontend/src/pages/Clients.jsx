import { motion as Motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clientsList } from '../content/clientsContent';
import OptimizedImage from '../components/ui/OptimizedImage';
import '../styles/clients-editorial.css';

function Clients() {
  const clientItems = clientsList.map((client, index) => ({
    id: index + 1,
    ...client,
    initials: client.name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase(),
  }));

  return (
    <main className="clients-editorial-page">
      <section className="clients-editorial-hero">
        <div className="luxury-container">
          <span className="cinematic-kicker">Trust and transformation</span>
          <h1>Client stories that read like case studies.</h1>
          <p>
            From desain rumah minimalis to interior apartemen mewah, each testimonial reflects a transformation in how a space looks, works, and feels.
          </p>
          <div className="clients-editorial-stats">
            <div><strong>{clientItems.length}+</strong><span>Stories</span></div>
            <div><strong>4.9</strong><span>Avg. rating</span></div>
            <div><strong>95%</strong><span>On-time rhythm</span></div>
          </div>
        </div>
      </section>

      <section className="clients-masonry-section">
        <div className="luxury-container clients-masonry">
          {clientItems.map((client, index) => (
            <Motion.article
              key={client.id}
              className={`client-story-card ${index % 3 === 0 ? 'feature' : ''}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
            >
              {client.photo ? (
                <OptimizedImage
                  src={client.photo}
                  alt={`${client.name}, ${client.project} client`}
                  width="720"
                  height="520"
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              ) : (
                <div className="client-story-card__initials">{client.initials}</div>
              )}
              <div className="client-story-card__content">
                <div className="client-story-card__stars" aria-label={`${client.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={15} className={starIndex < client.rating ? 'filled' : ''} />
                  ))}
                </div>
                <blockquote>{client.testimonial}</blockquote>
                <div className="client-story-card__meta">
                  <strong>{client.name}</strong>
                  <span>{client.project}</span>
                  <small>{client.location} / {client.timeline}</small>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Clients;
