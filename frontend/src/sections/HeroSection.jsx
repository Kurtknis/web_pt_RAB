import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import company from '../content/company';
import hero from '../data/hero';

function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 120]);
  const imageScale = useTransform(scrollY, [0, 700], [1.04, 1.12]);
  const textY = useTransform(scrollY, [0, 700], [0, -70]);

  return (
    <section className="cinematic-hero">
      <Motion.img
        className="cinematic-hero__image"
        src={hero.image}
        alt="Calm luxury residential interior design by PT Cipta Kreasi Buana in Tangerang"
        fetchPriority="high"
        style={{ y: imageY, scale: imageScale }}
      />
      <div className="cinematic-hero__shade" />
      <div className="cinematic-hero__grain" />
      <Motion.div
        className="cinematic-hero__content"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </Motion.div>
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
