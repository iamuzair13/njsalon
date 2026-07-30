"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig, getBookingUrl } from "@/config/site";
import { fadeInUp, viewportOnce, easeOutExpo } from "@/config/animation";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function CTASection({
  title,
  subtitle,
  buttonText,
}: CTASectionProps) {
  const cta = siteConfig.cta;
  const bookingUrl = getBookingUrl();

  return (
    <section className="bg-while py-16 sm:py-24">
      <motion.div
        {...fadeInUp}
        viewport={viewportOnce}
        transition={easeOutExpo}
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-heading text-3xl font-700 text-brand-primary sm:text-4xl">
          {title ?? cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-charcoal/90">
          {subtitle ?? cta.description}
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-base font-600 text-white transition-all duration-200 hover:bg-whatsapp-dark hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
        >
          <MessageCircle className="h-5 w-5 fill-white" />
          {buttonText ?? cta.buttonText}
        </a>
      </motion.div>
    </section>
  );
}
