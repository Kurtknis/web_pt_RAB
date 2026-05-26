import { companyTimeline, faqs, serviceGuarantees } from "@/content/corporate";

export function TrustArchitectureSection() {
  return (
    <section className="section section--ivory trust-architecture" aria-labelledby="trust-architecture-title">
      <div className="luxury-container trust-architecture__grid">
        <div>
          <p className="kicker">Trust System</p>
          <h2 id="trust-architecture-title">Dibangun untuk keputusan proyek yang lebih tenang.</h2>
          <p>
            Platform ini menyiapkan alur konsultasi, quotation, dan dokumentasi proyek agar calon klien mendapat
            konteks yang jelas sebelum mengambil keputusan.
          </p>
        </div>
        <div className="trust-architecture__panel">
          <h3>Service guarantees</h3>
          <ul>
            {serviceGuarantees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="luxury-container company-timeline" aria-label="Perjalanan perusahaan">
        {companyTimeline.map((item) => (
          <article key={item.year}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <div className="luxury-container faq-grid" aria-label="Pertanyaan umum">
        {faqs.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
