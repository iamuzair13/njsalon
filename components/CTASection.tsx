"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function CTASection({
  title = "Ready for a Glow-Up?",
  subtitle = "Book your appointment today and let our expert team take care of the rest.",
  buttonText = "Book on WhatsApp",
}: CTASectionProps) {
  return (
    <section className="bg-brand-primary py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-heading text-3xl font-700 text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {subtitle}
        </p>
        <a
          href="https://wa.me/923080815888"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-600 text-brand-primary transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
        >
          <MessageCircle className="h-5 w-5 fill-base" />
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
}
