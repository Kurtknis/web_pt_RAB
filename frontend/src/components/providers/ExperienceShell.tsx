"use client";

import { LazyMotion, MotionConfig, domAnimation, m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { ReactNode, useEffect, useRef, useState } from "react";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return <AnimatedExperienceShell>{children}</AnimatedExperienceShell>;
}

function AnimatedExperienceShell({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const [cursor, setCursor] = useState({ x: -120, y: -120 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.32 }}>
        <m.div className="scroll-progress" style={{ scaleX }} aria-hidden />
        <div className="cursor-glow" style={{ transform: `translate3d(${cursor.x - 120}px, ${cursor.y - 120}px, 0)` }} aria-hidden />
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
