import { motion as Motion } from 'framer-motion';
import OptimizedImage from '../components/ui/OptimizedImage';

function AboutSection() {
  const philosophy = [
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
      body: 'Pendekatan studio kami terasa editorial dalam presentasi, namun tetap disiplin dalam material, ukuran, dan eksekusi.',
    },
  ];

  return (
    <section className="luxury-section luxury-section--ivory brand-philosophy-section" data-reveal aria-labelledby="brand-philosophy-title">
      <div className="luxury-container brand-philosophy-layout">
        <div className="brand-philosophy-copy">
          <span className="cinematic-kicker">Filosofi Brand</span>
          <h2 id="brand-philosophy-title">Ruang yang tenang. Detail yang presisi. Nilai yang bertahan.</h2>
          <p>
            PT Cipta Kreasi Buana membangun pengalaman interior yang hangat, rapi, dan bernilai,
            dari konsep desain sampai eksekusi lapangan.
          </p>
        </div>
        <Motion.figure
          className="brand-philosophy-flyer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <OptimizedImage
            src="/design-interior-flyer.png"
            alt="Flyer jasa design interior modern PT Cipta Kreasi Buana untuk modular kitchen dan interior premium Tangerang"
            width="723"
            height="1024"
            sizes="(max-width: 768px) 84vw, 24vw"
          />
        </Motion.figure>
        <div className="philosophy-stack" aria-label="Prinsip desain PT Cipta Kreasi Buana">
          {philosophy.map((item, index) => (
            <Motion.article
              key={item.title}
              className="philosophy-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
