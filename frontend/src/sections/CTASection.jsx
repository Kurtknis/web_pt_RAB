import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import company from '../content/company';

function CTASection() {
  const message = 'Halo PT Cipta Kreasi Buana, saya ingin konsultasi proyek interior.';

  return (
    <section className="luxury-section cta-editorial" data-reveal>
      <div className="luxury-container cta-editorial__inner">
        <span className="cinematic-kicker">Consultation</span>
        <h2>Bring the room, the budget, and the ambition. We will shape the path.</h2>
        <div className="cinematic-hero__actions">
          <a className="luxury-button luxury-button--primary" href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
            WhatsApp <MessageCircle size={18} />
          </a>
          <a className="luxury-button luxury-button--ghost" href={`mailto:${company.contact.email}?subject=Project Consultation&body=${encodeURIComponent(message)}`}>
            Email brief <Mail size={18} />
          </a>
          <Link className="luxury-button luxury-button--text" to="/konsultasi">
            Full consultation page <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
