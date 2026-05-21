import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { priceRanges, pricingProjects, pricingPackages } from '../content/pricingPageContent';
import OptimizedImage from '../components/ui/OptimizedImage';
import '../styles/pricing-editorial.css';

function Pricing() {
  const [activePackage, setActivePackage] = useState(0);
  const active = pricingPackages[activePackage] || pricingPackages[0];

  const projectExamples = useMemo(() => {
    if (!active?.projectExampleIds) return [];
    return active.projectExampleIds.map((id) => pricingProjects.find((project) => project.id === id)).filter(Boolean);
  }, [active]);

  return (
    <main className="pricing-editorial-page">
      <section className="pricing-editorial-hero">
        <div className="luxury-container">
          <span className="cinematic-kicker">Service investment</span>
          <h1>Pricing as a proposal, not a spreadsheet.</h1>
          <p>
            Transparent starting points for design interior modern, kontraktor interior premium,
            custom furniture, and design-build projects in Tangerang and Jakarta.
          </p>
        </div>
      </section>

      <section className="pricing-editorial-section">
        <div className="luxury-container">
          <div className="package-strip" role="tablist" aria-label="Premium package selector">
            {pricingPackages.map((pkg, index) => (
              <button
                key={pkg.id}
                type="button"
                role="tab"
                aria-selected={index === activePackage}
                className={index === activePackage ? 'active' : ''}
                onClick={() => setActivePackage(index)}
              >
                <span>0{index + 1}</span>
                {pkg.name}
              </button>
            ))}
          </div>

          <Motion.article
            key={active.id}
            className="package-stage"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="package-stage__copy">
              <span className="package-stage__label"><Sparkles size={16} /> Selected service</span>
              <h2>{active.name}</h2>
              <p className="package-stage__price">Mulai {active.startingPrice}</p>
              <ul>
                {active.includedServices.map((service) => (
                  <li key={service}><Check size={16} /> {service}</li>
                ))}
              </ul>
              <Link to="/konsultasi" className="luxury-button luxury-button--primary">
                Request project brief <ArrowRight size={18} />
              </Link>
            </div>

            <div className="package-stage__projects">
              {projectExamples.map((project, index) => (
                <figure key={project.id} className={index === 0 ? 'large' : ''}>
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title}, ${project.location} interior project`}
                    width="900"
                    height="680"
                    sizes="(max-width: 768px) 92vw, 28vw"
                  />
                  <figcaption>
                    <span>{project.location}</span>
                    <strong>{project.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Motion.article>
        </div>
      </section>

      <section className="pricing-ranges-editorial">
        <div className="luxury-container">
          <span className="cinematic-kicker">Area-based estimates</span>
          <h2>Calm ranges for early budgeting.</h2>
          <div className="pricing-ranges-editorial__grid">
            {priceRanges.map((range) => (
              <article key={`${range.sqmMin}-${range.sqmMax || 'up'}`}>
                <span>{range.sqmMin} m2 {range.sqmMax ? `- ${range.sqmMax} m2` : 'up'}</span>
                <strong>{range.pricePerSqm}/m2</strong>
                <p>{range.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
