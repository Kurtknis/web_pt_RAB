import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { getContentProvider } from '@/providers/contentProvider';

export function ServicesSection() {
  const services = getContentProvider().services();

  return (
    <section className="section section--ivory">
      <div className="luxury-container">
        <SectionHeading
          kicker="Keahlian Studio"
          title="Disciplines that move from concept to completion."
          body="Layanan dibuat static-first, tetapi tetap mudah dikembangkan melalui content TypeScript."
        />
        <div className="service-grid">
          {services.map((service) => (
            <Link className="service-card" href={`/layanan/${service.slug}`} key={service.slug}>
              <Image
                src={service.image}
                alt={`${service.title} PT Cipta Kreasi Buana`}
                width={720}
                height={520}
                sizes="(max-width: 760px) 100vw, 25vw"
                className="service-card__image"
                style={{ width: '100%', height: 'auto' }}
              />
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
