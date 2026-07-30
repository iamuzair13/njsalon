import type { Variants, Transition } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 24, filter: "blur(12px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
} as const;

export const fadeInLeft = {
  initial: { opacity: 0, x: -24, filter: "blur(12px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
} as const;

export const fadeInRight = {
  initial: { opacity: 0, x: 24, filter: "blur(12px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
} as const;

export const viewportOnce = { once: true, amount: 0.2 } as const;

export const viewportOnceLow = { once: true, amount: 0.1 } as const;

export const easeOutExpo: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export const easeOutExpoDelayed = (delay: number): Transition => ({
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
  delay,
});

export const easeOutQuick: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

export const easeOutFast: Transition = {
  duration: 0.2,
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
