import { lazy, Suspense } from 'react';
import HeroSection from '../sections/HeroSection';
import useScrollReveal from '../hooks/useScrollReveal';
import useSmoothScroll from '../hooks/useSmoothScroll';

const AboutSection = lazy(() => import('../sections/AboutSection'));
const CEOSection = lazy(() => import('../sections/CEOSection'));
const PortfolioSection = lazy(() => import('../sections/PortfolioSection'));
const BeforeAfterSection = lazy(() => import('../sections/BeforeAfterSection'));
const ServicesSection = lazy(() => import('../sections/ServicesSection'));
const TestimonialSection = lazy(() => import('../sections/TestimonialSection'));
const CTASection = lazy(() => import('../sections/CTASection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

function StaticHome() {
  useSmoothScroll();
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <CEOSection />
        <PortfolioSection />
        <BeforeAfterSection />
        <ServicesSection />
        <section className="luxury-section materials-showcase" data-reveal>
          <div className="luxury-container">
            <span className="cinematic-kicker">Premium materials</span>
            <h2>Walnut warmth, ivory planes, stone texture, and soft gold accents.</h2>
            <div className="material-strip" aria-label="Material palette">
              <span style={{ background: '#7a4f2a' }} />
              <span style={{ background: '#f4eee3' }} />
              <span style={{ background: '#8f8a80' }} />
              <span style={{ background: '#c8a45d' }} />
            </div>
          </div>
        </section>
        <TestimonialSection />
        <CTASection />
        <ContactSection />
      </Suspense>
    </>
  );
}

export default StaticHome;
