import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CEOSection from '../sections/CEOSection';
import PortfolioSection from '../sections/PortfolioSection';
import BeforeAfterSection from '../sections/BeforeAfterSection';
import ServicesSection from '../sections/ServicesSection';
import TestimonialSection from '../sections/TestimonialSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';
import useScrollReveal from '../hooks/useScrollReveal';
import useSmoothScroll from '../hooks/useSmoothScroll';

function StaticHome() {
  useSmoothScroll();
  useScrollReveal();

  return (
    <>
      <HeroSection />
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
    </>
  );
}

export default StaticHome;
