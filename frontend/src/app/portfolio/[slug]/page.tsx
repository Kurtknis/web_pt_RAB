import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { getProjectBySlug, parseSlugParam } from '@/services/content';
import { CTASection } from '@/components/sections/CTASection';
import { getContentProvider } from '@/providers/contentProvider';
import { getCaseStudyDetail } from '@/content/case-studies';
import { MediaViewer } from '@/features/portfolio/MediaViewer';

export const dynamicParams = false;

export function generateStaticParams() {
  return getContentProvider().portfolio().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = parseSlugParam(await params);
  if (!slug) return createMetadata({ title: 'Portofolio | Cipta Kreasi Buana', path: '/portfolio' });

  const project = getProjectBySlug(slug);
  if (!project) return createMetadata({ title: 'Portofolio | Cipta Kreasi Buana', path: '/portfolio' });

  return createMetadata({
    title: `${project.title} | Portofolio Cipta Kreasi Buana`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = parseSlugParam(await params);
  if (!slug) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const caseStudy = getCaseStudyDetail(project.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }, { name: project.title, path: `/portfolio/${project.slug}` }])} />
      <main className="project-detail">
        <section className="project-hero">
          <Image src={project.image} alt={project.title} fill priority sizes="100vw" />
          <div className="project-hero__content luxury-container">
            <p className="kicker">
              {project.category} / {project.location}
            </p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </section>
        <section className="section section--ivory">
          <div className="luxury-container project-story">
            <div>
              <p className="kicker">Case Study</p>
              <h2>Project narrative</h2>
            </div>
            <article>
              <span>Challenge</span>
              <p>{caseStudy.challenge}</p>
            </article>
            <article>
              <span>Approach</span>
              <p>{caseStudy.approach}</p>
            </article>
            <article>
              <span>Result</span>
              <p>{caseStudy.result}</p>
            </article>
          </div>
          <div className="luxury-container project-specs">
            <div>
              <h2>Timeline</h2>
              <ol>
                {caseStudy.timeline.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div>
              <h2>Material direction</h2>
              <ul>
                {caseStudy.materials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="material-palette" aria-label="Material color palette">
                {caseStudy.palette.map((color) => (
                  <span key={color} style={{ background: color }} title={color} />
                ))}
              </div>
            </div>
          </div>
          <div className="luxury-container">
            <MediaViewer images={project.gallery} title={project.title} />
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
