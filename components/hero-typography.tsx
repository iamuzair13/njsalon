"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const heroStaggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const heroTransition = { duration: 0.5, ease: "easeOut" as const };

export function HeroBadge({ children }: { children: ReactNode }) {
  return (
    <motion.span
      variants={heroItemVariants}
      transition={heroTransition}
      className="inline-block rounded-full bg-brand-blush px-4 py-1.5 text-sm font-600 uppercase tracking-wider text-brand-primary"
    >
      {children}
    </motion.span>
  );
}

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h1
      variants={heroItemVariants}
      transition={heroTransition}
      className="mt-3 font-body text-4xl font-400 leading-[1.2] tracking-[-0.08em] text-brand-charcoal sm:text-5xl lg:text-[70.36px]"
    >
      {children}
    </motion.h1>
  );
}

export function HeroSubtitle({ children }: { children: ReactNode }) {
  return (
    <motion.p
      variants={heroItemVariants}
      transition={heroTransition}
      className="mt-4 max-w-lg text-[18px] leading-relaxed text-brand-charcoal-muted mx-auto lg:mx-0"
    >
      {children}
    </motion.p>
  );
}

export function HeroCTA({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={heroItemVariants}
      transition={heroTransition}
      className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
    >
      {children}
    </motion.div>
  );
}

export function HeroPrimaryButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon?: React.ComponentType<{ className?: string; fill?: string }>;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-600 text-white transition-all duration-200 hover:scale-[1.02] hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
    >
      {Icon && <Icon className="h-4 w-4 fill-white" />}
      {children}
    </a>
  );
}

export function HeroSecondaryButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/25 bg-white/70 px-5 py-3 text-sm font-600 text-brand-charcoal transition-all duration-200 hover:scale-[1.02] hover:border-brand-primary hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
    >
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </a>
  );
}
