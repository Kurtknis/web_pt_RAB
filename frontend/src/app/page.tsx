import { CTASection } from '@/components/sections/CTASection';
import { HeroSection } from '@/components/sections/HeroSection';
import { LocalSeoSection } from '@/components/sections/LocalSeoSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { TrustArchitectureSection } from '@/components/sections/TrustArchitectureSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <TrustArchitectureSection />
      <LocalSeoSection />
      <CTASection />
    </main>
  );
}
