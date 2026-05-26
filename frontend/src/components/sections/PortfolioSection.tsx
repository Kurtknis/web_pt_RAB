import dynamic from 'next/dynamic';
import { getContentProvider } from '@/providers/contentProvider';

const PortfolioExperience = dynamic(() =>
  import('@/features/portfolio/PortfolioExperience').then((mod) => mod.PortfolioExperience),
);

export function PortfolioSection({ all = false }: { all?: boolean }) {
  const content = getContentProvider();
  const projects = all ? content.portfolio() : content.featuredPortfolio();

  return <PortfolioExperience projects={projects} />;
}
