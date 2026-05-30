import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Bebas_Neue } from 'next/font/google';
import { ExperienceShell } from '@/components/providers/ExperienceShell';
import { Observability } from '@/components/providers/Observability';
import { Footer } from '@/components/layout/Footer';
import { SiteNavbar } from '@/components/layout/SiteNavbar';
import { ConversionDock } from '@/components/layout/ConversionDock';
import { createMetadata } from '@/lib/seo';
import { JsonLd, faqSchema, localBusinessSchema, organizationSchema, servicesSchema, websiteSchema } from '@/lib/schema';
import { ResourceHints } from './resource-hints';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#17120c',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} ${bebas.variable}`}>
      <body>
        <ResourceHints />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={servicesSchema()} />
        <JsonLd data={faqSchema()} />
        <SiteNavbar />
        <ExperienceShell>{children}</ExperienceShell>
        <ConversionDock />
        <Footer />
        <Observability />
      </body>
    </html>
  );
}
