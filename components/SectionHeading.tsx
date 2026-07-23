"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={center ? "text-center" : "text-center lg:text-left"}
    >
      {eyebrow && (
        <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-brand-charcoal-muted ${
            center ? "mx-auto max-w-2xl" : "mx-auto max-w-2xl lg:mx-0"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
