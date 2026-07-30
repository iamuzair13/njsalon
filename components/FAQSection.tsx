"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig, resolveText } from "@/config/site";
import { fadeInUp, viewportOnce, easeOutExpo, easeOutExpoDelayed } from "@/config/animation";

const faqs = siteConfig.faqs;
const { sections } = siteConfig;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-primary py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          viewport={viewportOnce}
          transition={easeOutExpo}
          className="text-center"
        >
          
          <h2 className="mt-2 font-heading text-3xl font-700 text-white sm:text-4xl">
            {sections.faq.title}
          </h2>
          <p className="mt-4 text-base text-white">
            {resolveText(sections.faq.subtitle)}
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          viewport={viewportOnce}
          transition={easeOutExpoDelayed(0.1)}
          className="mt-10 space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary sm:px-6"
                >
                  <span className="text-sm font-600 text-brand-charcoal sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-brand-charcoal-muted sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-sm text-white">
          {sections.faq.footerText}
        </p>
      </div>
    </section>
  );
}
