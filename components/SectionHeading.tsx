"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce, easeOutExpo } from "@/config/animation";

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
      {...fadeInUp}
      viewport={viewportOnce}
      transition={easeOutExpo}
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
