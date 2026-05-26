'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { Icon } from '@/components/icons';
import type { Project } from '@/types/content';

type PortfolioCategory = 'All' | 'Residential' | 'Apartment' | 'Commercial' | 'Interior' | 'Renovation';

const categories: PortfolioCategory[] = ['All', 'Residential', 'Apartment', 'Commercial', 'Interior', 'Renovation'];

const categoryMap: Record<string, PortfolioCategory[]> = {
  'apartemen-collins': ['Apartment', 'Interior', 'Renovation'],
  'park-avenue-serpong': ['Apartment', 'Interior'],
  'cendana-residence-blok-c1': ['Residential', 'Interior', 'Renovation'],
  'facade-kampung-sawah': ['Residential', 'Renovation'],
  'namo-seafood-pik': ['Commercial', 'Interior'],
  'rumah-gunung-sindur': ['Residential', 'Interior'],
};

const detailMap: Record<string, { type: string; timeline: string; area: string; philosophy: string; before: string; after: string }> = {
  'apartemen-collins': {
    type: 'Apartment Interior',
    timeline: '6 minggu',
    area: '42 m2',
    philosophy: 'Compact urban living with warm storage, calm lighting, and a disciplined daily rhythm.',
    before: '/projects/apartemen-collins/image-01.webp',
    after: '/projects/apartemen-collins/image-04.webp',
  },
  'park-avenue-serpong': {
    type: 'Apartment Styling',
    timeline: '5 minggu',
    area: '36 m2',
    philosophy: 'A lighter apartment language built around efficient storage and soft visual continuity.',
    before: '/projects/apartment-park-avenue/image-01.webp',
    after: '/projects/apartment-park-avenue/image-09.webp',
  },
  'cendana-residence-blok-c1': {
    type: 'Residential Renovation',
    timeline: '10 minggu',
    area: '118 m2',
    philosophy: 'A family home reorganized through proportion, muted material contrast, and warmer circulation.',
    before: '/projects/cendana-residence-blok-c1/image-01.webp',
    after: '/projects/cendana-residence-blok-c1/image-13.webp',
  },
  'facade-kampung-sawah': {
    type: 'Facade Renovation',
    timeline: '8 minggu',
    area: '96 m2',
    philosophy: 'A cleaner facade composition that sharpens the house profile without losing residential warmth.',
    before: '/projects/facade-kampung-sawah/image-01.webp',
    after: '/projects/facade-kampung-sawah/image-04.webp',
  },
  'namo-seafood-pik': {
    type: 'Commercial Interior',
    timeline: '14 minggu',
    area: '310 m2',
    philosophy: 'A restaurant environment shaped for operational clarity, memorable arrival, and layered guest experience.',
    before: '/projects/namo-seafood-pik/image-before.webp',
    after: '/projects/namo-seafood-pik/image-01.webp',
  },
  'rumah-gunung-sindur': {
    type: 'Residential Build',
    timeline: '16 minggu',
    area: '240 m2',
    philosophy: 'A complete residential composition balancing scale, durable finishes, and quiet premium detailing.',
    before: '/projects/rumah-gunung-sindur/image-01.webp',
    after: '/projects/rumah-gunung-sindur/image-08.webp',
  },
};

function MagneticAction({
  href,
  children,
  onClick,
  tone = 'light',
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  tone?: 'light' | 'dark';
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 190, damping: 18 });
  const springY = useSpring(y, { stiffness: 190, damping: 18 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const className = `portfolio-action portfolio-action--${tone}`;
  const content = (
    <>
      <span>{children}</span>
      <Icon name="arrow-up-right" size={15} />
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={className} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={reset}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={className} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={reset} onClick={onClick}>
      {content}
    </motion.button>
  );
}

function ProjectComparison({ project }: { project: Project }) {
  const [value, setValue] = useState(52);
  const details = detailMap[project.slug];

  return (
    <div className="project-comparison" style={{ '--split': `${value}%` } as React.CSSProperties}>
      <Image src={details.before} alt={`Before condition of ${project.title}`} fill sizes="(max-width: 980px) 100vw, 52vw" className="comparison-image" />
      <div className="project-comparison__after">
        <Image src={details.after} alt={`After transformation of ${project.title}`} fill sizes="(max-width: 980px) 100vw, 52vw" className="comparison-image" />
      </div>
      <div className="project-comparison__labels" aria-hidden>
        <span>Before</span>
        <span>After</span>
      </div>
      <div className="project-comparison__handle" aria-hidden>
        <Icon name="move-horizontal" size={18} />
      </div>
      <input
        type="range"
        min="12"
        max="88"
        value={value}
        aria-label={`Compare before and after for ${project.title}`}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}

export function PortfolioExperience({ projects, showIntro = true }: { projects: readonly Project[]; showIntro?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const featured = projects.find((project) => project.slug === 'namo-seafood-pik') ?? projects[0];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => categoryMap[project.slug]?.includes(activeCategory));
  }, [activeCategory, projects]);

  const comparisonProjects = projects.filter((project) => detailMap[project.slug]).slice(0, 3);

  return (
    <section className="portfolio-premium section" id="portfolio" aria-labelledby="portfolio-premium-title">
      <div className="luxury-container">
        {showIntro ? (
          <div className="portfolio-premium__intro">
            <div>
              <p className="kicker">Portfolio</p>
              <h1 id="portfolio-premium-title">Transformasi Ruang</h1>
            </div>
            <p>
              A curated view of residential, apartment, commercial, interior, and renovation work shaped through proportion,
              restraint, and execution discipline.
            </p>
          </div>
        ) : null}

        <motion.article
          className="featured-project"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={featured.image} alt={`Featured project ${featured.title}`} fill priority sizes="100vw" className="featured-project__image" />
          <div className="featured-project__overlay" />
          <div className="featured-project__content">
            <span>Featured Project / {featured.location}</span>
            <h3>{featured.title}</h3>
            <p>{detailMap[featured.slug]?.philosophy ?? featured.description}</p>
            <MagneticAction href={`/portfolio/${featured.slug}`} tone="dark">Explore Project</MagneticAction>
          </div>
        </motion.article>

        <div className="portfolio-toolbar" aria-label="Portfolio filter">
          <div>
            <Icon name="sliders-horizontal" size={18} />
            <span>Filter project</span>
          </div>
          <div className="portfolio-tabs" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? 'is-active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="portfolio-mosaic" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const details = detailMap[project.slug];

              return (
                <motion.article
                  className={`portfolio-project-card ${index % 5 === 0 ? 'is-wide' : ''}`}
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.42, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button type="button" className="portfolio-project-card__image" onClick={() => setModalProject(project)} aria-label={`Open fullscreen image for ${project.title}`}>
                    <Image src={project.image} alt={`${project.title} in ${project.location}`} fill sizes="(max-width: 760px) 100vw, 34vw" />
                    <span>
                      <Icon name="maximize" size={15} />
                      View image
                    </span>
                  </button>
                  <div className="portfolio-project-card__content">
                    <span>{details?.type ?? project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{details?.philosophy ?? project.description}</p>
                    <dl>
                      <div>
                        <dt>Location</dt>
                        <dd>{project.location}</dd>
                      </div>
                      <div>
                        <dt>Timeline</dt>
                        <dd>{details?.timeline ?? project.year}</dd>
                      </div>
                      <div>
                        <dt>Area</dt>
                        <dd>{details?.area ?? 'By proposal'}</dd>
                      </div>
                    </dl>
                    <div className="portfolio-card-actions">
                      {details ? <a href="#before-after">Before after</a> : null}
                      <Link href={`/portfolio/${project.slug}`}>View project</Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="portfolio-comparison-row" id="before-after" aria-labelledby="before-after-showcase-title">
          <div className="portfolio-premium__intro portfolio-premium__intro--compact">
            <div>
              <p className="kicker">Before After</p>
              <h2 id="before-after-showcase-title">Renovasi yang bisa dibaca secara visual.</h2>
            </div>
            <p>Drag the line to compare the original spatial condition with the final design language.</p>
          </div>
          <div className="comparison-grid">
            {comparisonProjects.map((project) => (
              <article className="comparison-card" key={project.slug}>
                <ProjectComparison project={project} />
                <div>
                  <span>{detailMap[project.slug].type}</span>
                  <h3>{project.title}</h3>
                  <p>{detailMap[project.slug].philosophy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalProject ? (
          <motion.div className="portfolio-image-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" className="portfolio-image-modal__close" onClick={() => setModalProject(null)} aria-label="Close fullscreen project image">
              <Icon name="close" size={22} />
            </button>
            <motion.figure initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }}>
              <Image src={modalProject.image} alt={`Fullscreen view of ${modalProject.title}`} fill sizes="100vw" />
              <figcaption>
                <span>{modalProject.location}</span>
                <strong>{modalProject.title}</strong>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
