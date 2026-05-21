import { useEffect } from 'react';

export function useScrollReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let ctx;
    let cancelled = false;

    async function initReveal() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.utils.toArray(selector).forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: element, start: 'top 82%' },
            }
          );
        });
      });
    }

    initReveal();

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [selector]);
}

export default useScrollReveal;
