import Image from 'next/image';
import Link from 'next/link';

const metrics = [
  { value: '120+', label: 'Ruang selesai' },
  { value: '8+', label: 'Tahun pengalaman' },
  { value: '95%', label: 'Kepuasan klien' },
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="luxury-container hero__grid">
        <div className="hero__content">
          <p className="kicker">Interior Design / Architecture / Design Build</p>
          <h1>Ruang tenang untuk hidup modern.</h1>
          <p>
            PT Cipta Kreasi Buana merancang interior, arsitektur, renovasi premium, dan furniture custom dengan ritme
            editorial, detail presisi, dan eksekusi yang mudah diikuti.
          </p>
          <div className="hero__actions">
            <Link className="button button--light" href="/portfolio">
              Lihat Portofolio
            </Link>
            <Link className="button button--ghost" href="/konsultasi">
              Konsultasi Sekarang
            </Link>
          </div>
          <div className="hero__metrics" aria-label="PT Cipta Kreasi Buana project metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-label="Interior premium PT Cipta Kreasi Buana">
          <Image
            src="/backgroundC1.webp"
            alt="Interior premium dengan pencahayaan hangat karya PT Cipta Kreasi Buana"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 48vw"
            className="hero__image"
          />
          <div className="hero__visual-card">
            <span>Featured Studio Work</span>
            <strong>Tangerang Selatan</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
