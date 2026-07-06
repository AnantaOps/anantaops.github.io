import { useEffect, useRef } from "react";

// Fixed-position so it tracks the cursor across the whole page.
// Ported from the articles-anantaops blog's Spotlight.astro pattern:
// matchMedia(pointer: fine) gate + a self-stopping rAF lerp instead of
// a spring-physics library, so no extra dependency is needed.
export const CursorSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;
    let raf: number | null = null;

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.setProperty("--spot-x", `${currentX}px`);
      el.style.setProperty("--spot-y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="spotlight" />;
};
