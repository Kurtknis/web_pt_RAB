import { MapPin, Phone } from 'lucide-react';
import company from '../content/company';

function ContactSection() {
  return (
    <section className="luxury-section contact-editorial" data-reveal>
      <div className="luxury-container split-editorial">
        <div>
          <span className="cinematic-kicker">Studio contact</span>
          <h2>{company.location}</h2>
        </div>
        <div className="contact-editorial__links">
          <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`}><Phone size={18} /> {company.contact.phone}</a>
          <a href={company.contact.mapLink} target="_blank" rel="noreferrer"><MapPin size={18} /> {company.contact.address}</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
