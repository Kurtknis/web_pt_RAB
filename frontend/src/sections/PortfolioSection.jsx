import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '../content/projects';

function PortfolioSection() {
  const featured = projects.slice(0, 6);

  return (
    <section className="luxury-section luxury-section--charcoal portfolio-editorial" data-reveal>
      <div className="luxury-container">
        <div className="section-heading section-heading--light">
          <span className="cinematic-kicker">Featured projects</span>
          <h2>Visual portfolio shaped for atmosphere and function.</h2>
          <Link to="/portfolio">Explore portfolio <ArrowRight size={18} /></Link>
        </div>
        <div className="portfolio-rhythm">
          {featured.map((project, index) => (
            <article className="portfolio-rhythm__item" key={project.id}>
              <img src={project.coverImage} alt={project.title} loading={index < 2 ? 'eager' : 'lazy'} />
              <div>
                <span>{project.category} / {project.location}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
