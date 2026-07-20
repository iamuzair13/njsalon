"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

type HeroProps = {
  variant?: "home" | "inner";
  title?: string;
  subtitle?: string;
  breadcrumb?: string;
  imageSrc?: string;
};

export default function Hero({
  variant = "home",
  title,
  subtitle,
  breadcrumb,
  imageSrc,
}: HeroProps) {
  if (variant === "inner") {
    return (
      <section className="relative flex items-center justify-center bg-brand-blush pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-sm text-brand-charcoal-muted">
              <Link href="/" className="hover:text-brand-primary transition-colors">
                Home
              </Link>
              {" / "}
              <span className="text-brand-primary">{breadcrumb}</span>
            </span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="font-heading text-4xl font-700 text-brand-charcoal sm:text-5xl"
          >
            {title}
          </motion.h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-brand-blush pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&h=1000&fit=crop"
          alt="Client receiving a skincare treatment"
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blush via-brand-blush/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[530px] items-center lg:grid-cols-[48%_52%] lg:py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-xl py-8 lg:py-0"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm font-600 uppercase tracking-[0.18em] text-brand-primary"
            >
              NJ Beauty Bliss
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-3 font-heading text-4xl font-700 leading-[1.04] tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl"
            >
              Your <em className="font-500 italic">Glow,</em>
              <br />
              Our Science
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-5 text-base font-500 text-brand-charcoal sm:text-lg"
            >
              Expert beauty care at your fingertips.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 max-w-sm text-sm leading-relaxed text-brand-charcoal-muted"
            >
              Personalised beauty consultations, premium treatments, and a
              relaxing salon experience designed around you.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href="https://wa.me/923080815888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-600 text-white transition-all duration-200 hover:scale-[1.02] hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                Book Consultation
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/25 bg-white/70 px-5 py-3 text-sm font-600 text-brand-charcoal transition-all duration-200 hover:scale-[1.02] hover:border-brand-primary hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mt-2 min-h-[360px] overflow-hidden rounded-2xl shadow-lg lg:hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&h=800&fit=crop"
              alt="Client receiving a skincare treatment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 0px"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="relative mx-auto mt-5 max-w-md rounded-xl bg-brand-charcoal/80 p-5 text-white shadow-xl backdrop-blur-md lg:absolute lg:bottom-6 lg:right-8 lg:mt-0"
        >
          <p className="text-sm font-600">Ready to reveal your best self?</p>
          <p className="mt-2 text-xs leading-relaxed text-white/80">
            Book a personalised consultation and discover the treatment made for you.
          </p>
          <a
            href="https://wa.me/923080815888"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-600 text-brand-charcoal transition-transform duration-200 hover:scale-[1.02]"
          >
            Meet Your Expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
