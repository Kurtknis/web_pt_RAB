import Image from 'next/image';

const principles = [
  {
    title: 'Tenang sebelum dekoratif',
    body: 'Kami merancang ruang yang terasa tenang, proporsional, dan mudah dihuni sebelum menambahkan elemen visual.',
  },
  {
    title: 'Detail yang bekerja',
    body: 'Setiap garis, finishing, pencahayaan, dan bayangan harus mendukung cara orang benar-benar hidup dan bekerja.',
  },
  {
    title: 'Editorial, tetapi presisi',
    body: 'Pendekatan studio terasa editorial dalam presentasi, namun tetap disiplin dalam material, ukuran, dan eksekusi.',
  },
];

export function BrandPhilosophySection() {
  return (
    <section className="section section--ivory brand-philosophy" aria-labelledby="brand-philosophy-title">
      <div className="luxury-container brand-philosophy__grid">
        <div className="brand-philosophy__copy">
          <p className="kicker">Filosofi Brand</p>
          <h2 id="brand-philosophy-title">Calm rooms, exact details.</h2>
          <p>
            PT Cipta Kreasi Buana membangun pengalaman interior yang hangat, rapi, dan bernilai, dari konsep desain
            sampai eksekusi lapangan.
          </p>
        </div>
        <figure className="brand-philosophy__flyer">
          <Image
            src="/design-interior-flyer.png"
            alt="Flyer jasa design interior modern PT Cipta Kreasi Buana untuk modular kitchen dan interior premium Tangerang"
            width={723}
            height={1024}
            sizes="(max-width: 760px) 76vw, 24vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
        <div className="principles" aria-label="Prinsip desain PT Cipta Kreasi Buana">
          {principles.map((item, index) => (
            <article className="principle-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
