import { ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import company from '../content/company';
import hero from '../data/hero';

function HeroSection() {
  return (
    <section className="cinematic-hero">
      <picture>
        <source srcSet={hero.imageAvif} type="image/avif" />
        <source srcSet={hero.imageWebp} type="image/webp" />
        <img
          className="cinematic-hero__image"
          src={hero.image}
          alt="Calm luxury residential interior design by PT Cipta Kreasi Buana in Tangerang"
          width="862"
          height="1824"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      <div className="cinematic-hero__shade" />
      <div className="cinematic-hero__grain" />
      <div className="cinematic-hero__content cinematic-hero__content--enter">
        <span className="cinematic-kicker">Interior, architecture, furniture, build</span>
        <h1>Designing calm spaces for modern living.</h1>
        <p>
          {company.name} shapes homes, apartments, and commercial interiors through warm materials,
          disciplined detailing, and cinematic spatial storytelling.
        </p>
        <div className="cinematic-hero__actions">
          <Link className="luxury-button luxury-button--primary" to="/portfolio">
            View projects <ArrowRight size={18} />
          </Link>
          <Link className="luxury-button luxury-button--ghost" to="/konsultasi">
            Consultation <CalendarDays size={18} />
          </Link>
        </div>
      </div>
      <a
        className="floating-cta"
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Halo PT Cipta Kreasi Buana, saya ingin konsultasi proyek interior.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Start WhatsApp consultation"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </section>
  );
}

export default HeroSection;
