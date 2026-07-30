"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider, { type BeforeAfterItem } from "@/components/BeforeAfterSlider";
import { siteConfig } from "@/config/site";
import { fadeInUp, viewportOnce, easeOutExpo, easeOutExpoDelayed } from "@/config/animation";

const beforeAfterItems: BeforeAfterItem[] = siteConfig.beforeAfter.map((item) => ({
  label: item.title,
  beforeSrc: item.beforeImage,
  afterSrc: item.afterImage,
  beforeAlt: item.beforeAlt,
  afterAlt: item.afterAlt,
}));
const { sections } = siteConfig;

export default function BeforeAfterSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={sections.beforeAfter.eyebrow}
          title={sections.beforeAfter.title}
          subtitle={sections.beforeAfter.subtitle}
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterItems.map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              viewport={viewportOnce}
              transition={easeOutExpoDelayed(index * 0.1)}
            >
              <p className="mb-3 text-center text-sm font-600 uppercase tracking-wider text-brand-primary">
                {item.label}
              </p>
              <BeforeAfterSlider item={item} />
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
}
