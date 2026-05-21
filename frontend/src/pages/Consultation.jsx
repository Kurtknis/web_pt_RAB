import { useMemo, useState } from 'react';
import { CalendarDays, CheckCircle, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import company from '../content/company';
import consultationPackages from '../content/consultationPackages';
import '../styles/cinematic.css';
import '../styles/static-consultation.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Interior Design',
  budget: '',
  timeline: '',
  message: '',
};

function Consultation() {
  const [formData, setFormData] = useState(initialForm);

  const whatsappHref = useMemo(() => {
    const brief = [
      `Nama: ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Telepon: ${formData.phone || '-'}`,
      `Tipe proyek: ${formData.projectType || '-'}`,
      `Budget: ${formData.budget || '-'}`,
      `Timeline: ${formData.timeline || '-'}`,
      `Catatan: ${formData.message || '-'}`,
    ].join('\n');
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Halo PT Cipta Kreasi Buana, saya ingin konsultasi proyek.\n\n${brief}`)}`;
  }, [formData]);

  const mailHref = useMemo(() => {
    const body = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value || '-'}`)
      .join('\n');
    return `mailto:${company.contact.email}?subject=${encodeURIComponent('Project Consultation Brief')}&body=${encodeURIComponent(body)}`;
  }, [formData]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return (
    <main className="static-consultation">
      <section className="static-consultation__hero">
        <div className="luxury-container">
          <span className="cinematic-kicker">Static consultation system</span>
          <h1>Start with a considered brief. Continue on the channel you prefer.</h1>
          <p>
            No server queue, database, or admin workflow. Your inquiry can open directly in WhatsApp,
            email, Calendly, Google Forms, Formspree, or Netlify Forms.
          </p>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container consultation-layout">
          <form
            className="static-form"
            name="consultation"
            method="POST"
            data-netlify="true"
            action={company.formspreeEndpoint}
          >
            <input type="hidden" name="form-name" value="consultation" />
            <div className="static-form__grid">
              <label>
                Name
                <input name="name" value={formData.name} onChange={onChange} autoComplete="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={onChange} autoComplete="email" required />
              </label>
              <label>
                Phone
                <input name="phone" value={formData.phone} onChange={onChange} autoComplete="tel" required />
              </label>
              <label>
                Project Type
                <select name="projectType" value={formData.projectType} onChange={onChange}>
                  <option>Interior Design</option>
                  <option>Architecture</option>
                  <option>Design and Build</option>
                  <option>Custom Furniture</option>
                  <option>Commercial Space</option>
                </select>
              </label>
              <label>
                Budget
                <input name="budget" value={formData.budget} onChange={onChange} placeholder="Example: Rp 200 juta" />
              </label>
              <label>
                Timeline
                <input name="timeline" value={formData.timeline} onChange={onChange} placeholder="Example: 3 months" />
              </label>
            </div>
            <label>
              Project Notes
              <textarea name="message" value={formData.message} onChange={onChange} rows="6" placeholder="Tell us about the room, location, style references, and scope." required />
            </label>

            <div className="static-form__actions">
              <a className="luxury-button luxury-button--primary" href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Send via WhatsApp
              </a>
              <a className="luxury-button luxury-button--ghost static-form__dark" href={mailHref}>
                <Mail size={18} /> Send email brief
              </a>
              <button className="luxury-button luxury-button--primary" type="submit">
                <Send size={18} /> Submit static form
              </button>
            </div>
          </form>

          <aside className="consultation-aside">
            {consultationPackages.map((item) => (
              <article key={item.id}>
                <CheckCircle size={18} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
            <div className="consultation-aside__links">
              <a href={company.calendlyUrl} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Calendly</a>
              <a href={company.googleFormUrl} target="_blank" rel="noreferrer"><Send size={18} /> Google Form</a>
              <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`}><Phone size={18} /> {company.contact.phone}</a>
              <a href={company.contact.mapLink} target="_blank" rel="noreferrer"><MapPin size={18} /> Visit studio</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Consultation;
