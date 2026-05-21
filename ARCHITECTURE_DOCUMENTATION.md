# PT Cipta Kreasi Buana Static Frontend Architecture

## Refactor Strategy

The site is now a frontend-only luxury portfolio experience built with React, Vite, static content modules, local public assets, and client-side routing. Runtime data comes from `src/content/*` and `src/data/*`; no server process, database, REST client, admin workflow, authentication, or deployment worker is required.

Primary changes:

- Removed the Django project, SQLite data store, Python virtual environment, API serializers, models, views, URL routing, admin/staticfiles output, and Railway scripts.
- Replaced the consultation POST flow with static contact intents: WhatsApp deep link, mailto brief, Calendly link, Google Form link, Formspree action, and Netlify Forms attributes.
- Added a section-driven cinematic homepage at `src/pages/StaticHome.jsx`.
- Added local content modules for projects, services, testimonials, pricing, gallery, furniture, company profile, and consultation packages.
- Added motion hooks for smooth scrolling, scroll reveal, and parallax.
- Added route-level code splitting with React `lazy` and Vite manual chunks.

## Final Folder Architecture

```txt
frontend/
  index.html
  package.json
  vite.config.js
  public/
    photo_proyek/
    Photo_furnitur/
    sitemap.xml
    robots.txt
  src/
    content/
      projects.js
      services.js
      testimonials.js
      pricing.js
      gallery.js
      furniture.js
      company.js
      consultationPackages.js
    data/
      portfolio/
      gallery/
      hero/
      before-after/
    hooks/
      useParallax.js
      useScrollReveal.js
      useSmoothScroll.js
    sections/
      HeroSection.jsx
      AboutSection.jsx
      PortfolioSection.jsx
      BeforeAfterSection.jsx
      ServicesSection.jsx
      TestimonialSection.jsx
      CTASection.jsx
      ContactSection.jsx
    components/
      layout/
      motion/
      cinematic/
      ui/
    pages/
      StaticHome.jsx
      Portfolio.jsx
      Services.jsx
      Pricing.jsx
      Gallery.jsx
      Furniture.jsx
      Clients.jsx
      Consultation.jsx
      Contact.jsx
```

## Static Content Strategy

Use JavaScript content modules instead of network calls:

```js
import projects from '@/content/projects';
import services from '@/content/services';
import testimonials from '@/content/testimonials';
```

Each content file is editable by non-engineers and can later be moved to MDX, headless CMS export, or generated JSON without changing presentation components.

## Motion Architecture

- Framer Motion handles hero parallax, entrance transitions, and interactive micro-motion.
- GSAP ScrollTrigger powers reveal animations through `useScrollReveal`.
- Lightweight custom `useParallax` handles depth movement without layout thrashing.
- Reduced-motion users are respected by skipping GSAP reveal setup.

## Consultation Architecture

The consultation page is static and deployment-safe:

- WhatsApp CTA with a generated project brief.
- Mailto CTA with the same brief.
- Netlify Forms support through `data-netlify="true"`.
- Formspree-compatible `action`.
- Calendly and Google Form links stored in `src/content/company.js`.

## Image Strategy

- Keep hero and project images in `public/photo_proyek`.
- Prefer WebP for portfolio assets.
- Use `loading="lazy"` for non-critical imagery.
- Preload the homepage hero image in `index.html`.
- Future production pass: batch-compress large JPG/PNG assets to WebP/AVIF and add responsive `srcset` variants.

## SEO Strategy

- Static `index.html` includes title, meta description, canonical URL, Open Graph, Twitter card, and LocalBusiness JSON-LD.
- `sitemap.xml` and `robots.txt` remain under `public`.
- Each route should eventually add per-page metadata with a small client-side metadata helper or a static prerender pass if desired.

## Vite Optimization

- `vite.config.js` defines `@` as an alias to `src`.
- Build output splits `vendor` and `motion` chunks.
- Route components are lazy-loaded through React Suspense.
- CSS code splitting is enabled.

## Recommended Dependencies

Production dependencies:

- `react`, `react-dom`, `react-router-dom`
- `framer-motion`
- `gsap`
- `lucide-react`

Optional future dependencies:

- `vite-plugin-image-optimizer` for build-time image compression.
- `vite-plugin-sitemap` for generated sitemap output.
- `@fontsource/*` if fonts should be self-hosted instead of loaded from Google Fonts.

## Deployment

The project deploys as a static Vite site:

```bash
cd frontend
npm install
npm run build
```

Deploy `frontend/dist` to Vercel, Netlify, Cloudflare Pages, or any static host. No environment variables are required for normal runtime.

## Premium UI Sections

Homepage flow:

1. Hero Section
2. Brand Philosophy
3. Featured Projects
4. Before/After Transformations
5. Service Expertise
6. Premium Materials Showcase
7. Client Testimonials
8. Architectural Statistics
9. Consultation CTA
10. Footer and Contact

## Production Recommendations

- Replace placeholder Calendly, Google Form, and Formspree URLs with live account URLs.
- Convert remaining legacy pages to use the new `src/content/*` modules directly.
- Add a small metadata helper per route.
- Optimize oversized JPG/PNG assets into responsive WebP/AVIF variants.
- Run Lighthouse after image compression and tune font loading if needed.
