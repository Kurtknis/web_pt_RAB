import Image from 'next/image';

export function CEOSection() {
  return (
    <section className="section section--ivory ceo-section" aria-labelledby="ceo-title">
      <div className="luxury-container ceo-section__grid">
        <figure>
          <Image
            src="/ceo-radika.png"
            alt="Radika, CEO PT Cipta Kreasi Buana"
            width={900}
            height={1200}
            sizes="(max-width: 760px) 88vw, 38vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
        <div>
          <p className="kicker">Meet Our CEO</p>
          <h2 id="ceo-title">A calm vision for precise spaces.</h2>
          <blockquote>{'"Ruang yang baik tidak perlu berteriak. Ia cukup terasa benar, rapi, dan mendukung kehidupan di dalamnya."'}</blockquote>
          <p>
            Di bawah arahan Radika, studio menggabungkan ketenangan visual dengan disiplin eksekusi. Setiap proyek
            dibaca sebagai cerita material, fungsi, dan kepercayaan klien.
          </p>
        </div>
      </div>
    </section>
  );
}
