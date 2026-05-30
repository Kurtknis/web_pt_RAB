import Link from 'next/link';
import { company } from '@/content/company';
import { serviceAreas } from '@/content/locations';

const mapQuery = encodeURIComponent(company.address);

export function LocalSeoSection() {
  return (
    <section className="section section--ivory local-seo" aria-labelledby="local-seo-title">
      <div className="luxury-container local-seo__grid">
        <div>
          <p className="kicker">Area Layanan</p>
          <h2 id="local-seo-title">Studio interior untuk Jakarta, Tangerang Selatan, BSD, Bintaro, Alam Sutera, dan Serpong.</h2>
          <p>
            PT Cipta Kreasi Buana melayani desain interior, renovasi interior, arsitektur, design build, dan custom
            furniture untuk rumah, apartemen, studio apartment, restoran, kantor, dan ruang komersial di Jabodetabek.
          </p>
          <address>
            {company.name}
            <br />
            {company.address}
            <br />
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a> /{' '}
            <a href={`https://wa.me/${company.whatsapp}`}>WhatsApp Studio</a>
          </address>
        </div>
        <div className="local-seo__links" aria-label="Halaman area layanan interior">
          {serviceAreas.map((area) => (
            <Link href={`/area/${area.slug}`} key={area.slug}>
              <span>{area.name}</span>
              <p>{area.headline}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="luxury-container local-seo__map">
        <iframe
          title="Lokasi PT Cipta Kreasi Buana di Tangerang Selatan"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
