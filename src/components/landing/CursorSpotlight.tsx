import { useCallback, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

// Fixed-position so it tracks the cursor across the whole page, not just one section.
export const CursorSpotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const spotlightBg = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(var(--spotlight-rgb), 0.13), transparent 70%)`;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{ background: spotlightBg }}
    />
  );
};
