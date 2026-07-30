"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig, getBookingUrl } from "@/config/site";

const bookingUrl = getBookingUrl();
const { sections } = siteConfig;

type HeroProps = {
  variant?: "home" | "inner";
  title?: string;
  subtitle?: string;
  imageSrc?: string;
};

export default function Hero({
  variant = "home",
  title,
  subtitle,
  imageSrc,
}: HeroProps) {
  if (variant === "inner") {
    return (
      <section className="relative flex items-center justify-center bg-brand-blush pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="font-heading text-4xl font-700 text-brand-charcoal sm:text-5xl"
          >
            {title ?? siteConfig.business.tagline}
          </motion.h1>
        </div>
      </section>
    );
  }

  const heroConfig = siteConfig.hero;
  const heroImage = imageSrc ?? heroConfig.backgroundImage ?? "/hero1.png";

  return (
    <section className="relative isolate overflow-hidden bg-brand-blush pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="absolute inset-y-0 right-0 hidden w-[100%] lg:block">
        <Image
          src={heroImage}
          alt={sections.hero.backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blush/30 via-brand-blush/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-blush/30 to-transparent" />
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
            className="max-w-xl text-center lg:py-0 lg:text-left "
          >
           
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-3 font-body text-4xl font-900 leading-[1.2] tracking-[-0.08em] text-brand-charcoal sm:text-5xl lg:text-[70.36px]"
            >
              {title ?? heroConfig.title}
            </motion.h1>
           
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 max-w-lg text-[18px] leading-relaxed text-brand-charcoal-muted mx-auto lg:mx-0"
            >
              {subtitle ?? heroConfig.description}
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href={heroConfig.primaryCTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-600 text-white transition-all duration-200 hover:scale-[1.02] hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                {heroConfig.primaryCTA.label}
              </a>
              {heroConfig.secondaryCTA && (
                <Link
                  href={heroConfig.secondaryCTA.href}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/25 bg-white/70 px-5 py-3 text-sm font-600 text-brand-charcoal transition-all duration-200 hover:scale-[1.02] hover:border-brand-primary hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                >
                  {heroConfig.secondaryCTA.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mt-2 min-h-[360px] overflow-hidden rounded-2xl shadow-lg lg:hidden"
          >
            <Image
              src={heroImage}
              alt={sections.hero.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 0px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
