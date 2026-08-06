"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider, { type BeforeAfterItem } from "@/components/BeforeAfterSlider";

const beforeAfterItems: BeforeAfterItem[] = [
  {
    label: "Hair Coloring",
    beforeSrc: "https://images.pexels.com/photos/7389078/pexels-photo-7389078.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    afterSrc: "https://images.pexels.com/photos/32856321/pexels-photo-32856321.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    beforeAlt: "Hair before coloring treatment",
    afterAlt: "Hair after coloring treatment",
  },
  {
    label: "Facial Treatment",
    beforeSrc: "https://images.pexels.com/photos/29908196/pexels-photo-29908196.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    afterSrc: "https://images.pexels.com/photos/7446666/pexels-photo-7446666.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    beforeAlt: "Skin before facial treatment",
    afterAlt: "Skin after facial treatment",
  },
  {
    label: "Bridal Makeup",
    beforeSrc: "https://images.pexels.com/photos/28742353/pexels-photo-28742353.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    afterSrc: "https://images.pexels.com/photos/32647179/pexels-photo-32647179.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    beforeAlt: "Client before bridal makeup",
    afterAlt: "Client after bridal makeup",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Results"
          title="Before & After"
          subtitle="Drag the slider to see the transformation our treatments deliver. Real results from real clients."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
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
