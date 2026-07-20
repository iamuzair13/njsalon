"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are recommended so we can reserve the right time and stylist for you. Walk-ins are welcomed too.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "The quickest way to book is by WhatsApp. Send us your preferred service, date, and time, and our team will confirm your appointment.",
  },
  {
    question: "Do you offer bridal makeup trials?",
    answer:
      "Yes. We recommend a bridal trial so you can discuss your preferred look, test the makeup, and plan every detail before your event.",
  },
  {
    question: "What should I do before a facial or skin treatment?",
    answer:
      "Please let our team know about any skin sensitivities, allergies, or products you are currently using. We will recommend the most suitable treatment for you.",
  },
  {
    question: "Are your products and tools hygienic?",
    answer:
      "Absolutely. We maintain a clean salon environment and use carefully sanitised tools and quality products for every service.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
            Need to Know
          </span>
          <h2 className="mt-2 font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-brand-charcoal-muted">
            Everything you need to know before your visit to NJ Beauty Bliss.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
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

        <p className="mt-8 text-center text-sm text-brand-charcoal-muted">
          Still have questions? Contact us on WhatsApp and our team will be happy
          to help.
        </p>
      </div>
    </section>
  );
}
