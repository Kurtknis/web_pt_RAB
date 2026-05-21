import { beforeAfterPairs } from '../content/homeContent';

function BeforeAfterSection() {
  return (
    <section className="luxury-section before-after" data-reveal>
      <div className="luxury-container">
        <div className="section-heading">
          <span className="cinematic-kicker">Before and after</span>
          <h2>Transformation as a visible design argument.</h2>
        </div>
        <div className="before-after__grid">
          {beforeAfterPairs.map((pair) => (
            <article className="before-after__item" key={pair.title}>
              <div className="before-after__images">
                <img src={pair.before} alt={`${pair.title} before`} loading="lazy" />
                <img src={pair.after} alt={`${pair.title} after`} loading="lazy" />
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
