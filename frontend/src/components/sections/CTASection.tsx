import Link from 'next/link';
import { company } from '@/content/company';

export function CTASection() {
  return (
    <section className="section cta-section">
      <div className="luxury-container cta-section__inner">
        <p className="kicker">Konsultasi</p>
        <h2>Mulai dari brief ruang yang jujur.</h2>
        <p>
          Kirim ukuran ruang, foto kondisi saat ini, dan arah gaya yang Anda inginkan. Tim kami akan membantu merapikan
          kebutuhan menjadi langkah desain yang jelas.
        </p>
        <div className="hero__actions">
          <Link className="button button--light" href={`https://wa.me/${company.whatsapp}`}>
            WhatsApp Studio
          </Link>
          <Link className="button button--ghost" href="/konsultasi">
            Lihat Opsi Konsultasi
          </Link>
        </div>
      </div>
    </section>
  );
}
