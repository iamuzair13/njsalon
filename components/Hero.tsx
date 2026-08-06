"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { HeroTitle, HeroSubtitle, HeroCTA, HeroPrimaryButton, HeroSecondaryButton, heroStaggerVariants } from "@/components/hero-typography";

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
            {title}
          </motion.h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-brand-blush pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="absolute inset-y-0 right-0 hidden w-[100%] lg:block">
        <Image
          src="/hero1.png"
          alt="Client receiving a skincare treatment"
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
            variants={heroStaggerVariants}
            className="max-w-xl text-center lg:py-0 lg:text-left"
          >
            <HeroTitle>
              Where <em className="font-heading font-500 italic tracking-[-0.06em]">Beauty,</em>
              <br />
              Meets Elegance.
            </HeroTitle>

            <HeroSubtitle>
              Personalised beauty consultations, premium treatments, and a
              relaxing salon experience designed around you.
            </HeroSubtitle>

            <HeroCTA>
              <HeroPrimaryButton href="https://wa.me/923080815888" icon={MessageCircle}>
                Book Consultation
              </HeroPrimaryButton>
              <HeroSecondaryButton href="/services" icon={ArrowRight}>
                Explore Services
              </HeroSecondaryButton>
            </HeroCTA>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mt-2 min-h-[360px] overflow-hidden rounded-2xl shadow-lg lg:hidden"
          >
            <Image
              src="/hero1.png"
              alt="Client receiving a skincare treatment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 0px"
              className="object-cover"
            />
          </motion.div>
        </div>
{/* 
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
        </motion.div> */}
      </div>
    </section>
  );
}
