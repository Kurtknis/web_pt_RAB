import { beforeAfterPairs } from '../content/homeContent';
import OptimizedImage from '../components/ui/OptimizedImage';

function BeforeAfterSection() {
  return (
    <section className="luxury-section before-after" data-reveal aria-labelledby="before-after-title">
      <div className="luxury-container">
        <div className="section-heading">
          <span className="cinematic-kicker">Sebelum dan Sesudah</span>
          <h2 id="before-after-title">Transformasi ruang yang terlihat, terukur, dan bernilai.</h2>
        </div>
        <div className="before-after__grid">
          {beforeAfterPairs.map((pair) => (
            <article className="before-after__item" key={pair.title} aria-label={`Studi transformasi ${pair.title}`}>
              <div className="before-after__images">
                <OptimizedImage src={pair.before} alt={`${pair.title} sebelum renovasi interior PT Cipta Kreasi Buana`} width="720" height="520" sizes="(max-width: 768px) 46vw, 20vw" />
                <OptimizedImage src={pair.after} alt={`${pair.title} sesudah renovasi interior PT Cipta Kreasi Buana`} width="720" height="520" sizes="(max-width: 768px) 46vw, 20vw" />
              </div>
              <h3>{pair.title}</h3>
              <p>{pair.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
