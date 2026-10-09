import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const spring = { type: "spring", stiffness: 420, damping: 32, mass: 0.8 } as const;

// Page sections rise in once; lists stagger their rows.
export const rise = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: ease.out } },
};

export const stagger = (step = 0.05, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

// False until mounted, so the first render never depends on the visitor's setting.
export function useReducedMotionSafe() {
  const prefers = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(prefers);
}
