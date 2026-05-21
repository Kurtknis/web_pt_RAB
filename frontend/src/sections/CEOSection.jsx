import { motion as Motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CEOSection() {
  return (
    <section className="ceo-editorial" data-reveal>
      <div className="luxury-container ceo-editorial__grid">
        <Motion.figure
          className="ceo-editorial__portrait"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/ceo-radika.png" alt="Radika, CEO PT Cipta Kreasi Buana" loading="lazy" />
        </Motion.figure>
        <Motion.div
          className="ceo-editorial__story"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cinematic-kicker">Meet our CEO</span>
          <h2>Radika builds spaces from listening first.</h2>
          <blockquote>
            "A beautiful room is quiet. It works before it speaks, and it remembers the people who live inside it."
          </blockquote>
          <p>
            Under Radika's direction, PT Cipta Kreasi Buana approaches every project as a personal study of rhythm,
            material, light, and daily ritual. The studio brings together interior design, architecture, custom furniture,
            and construction execution with one calm visual language.
          </p>
          <div className="ceo-editorial__signature">Radika</div>
          <Link className="luxury-button luxury-button--primary" to="/konsultasi">
            Begin a consultation <ArrowRight size={18} />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}

export default CEOSection;
