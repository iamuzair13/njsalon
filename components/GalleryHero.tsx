"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroCTA,
  HeroSecondaryButton,
  heroStaggerVariants,
  heroItemVariants,
  heroTransition,
} from "@/components/hero-typography";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream pb-16 pt-28 sm:pb-20 sm:pt-36">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute left-0 top-60 h-96 w-96 rounded-full bg-brand-blush/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroStaggerVariants}
            className="max-w-xl text-center lg:py-0 lg:text-left"
          >
            <HeroBadge>Beauty Moments</HeroBadge>

            <HeroTitle>
              Where Every Look <br />
              Becomes <em className="font-heading font-500 italic tracking-[-0.06em]">Art</em>
            </HeroTitle>

            <HeroSubtitle>
              From breathtaking bridal transformations to everyday elegance —
              explore the artistry and precision that defines every visit to
              NJ Beauty Bliss.
            </HeroSubtitle>

            <HeroCTA>
              <HeroSecondaryButton href="#gallery-grid" icon={ArrowRight}>
                Explore Our Work
              </HeroSecondaryButton>
            </HeroCTA>
          </motion.div>

          {/* Right: Layered image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Soft gradient backdrop */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blush to-brand-primary/10 blur-2xl" />

            {/* Main large image */}
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] shadow-xl">
              <Image
                src="https://images.pexels.com/photos/32647179/pexels-photo-32647179.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop"
                alt="Bridal makeup transformation by NJ Beauty Bliss"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 via-transparent to-transparent" />
            </div>

            {/* Floating image card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="absolute -right-3 -top-4 h-24 w-24 overflow-hidden rounded-2xl border-4 border-brand-cream shadow-lg sm:-right-6 sm:h-32 sm:w-32"
            >
              <Image
                src="https://images.pexels.com/photos/38264838/pexels-photo-38264838.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Intricate nail art design"
                fill
                className="object-cover"
                sizes="128px"
              />
            </motion.div>

            {/* Floating image card — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
              className="absolute -left-3 bottom-6 h-28 w-28 overflow-hidden rounded-2xl border-4 border-brand-cream shadow-lg sm:-left-6 sm:h-36 sm:w-36"
            >
              <Image
                src="https://images.pexels.com/photos/7389078/pexels-photo-7389078.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Hair coloring and highlights"
                fill
                className="object-cover"
                sizes="144px"
              />
            </motion.div>

            {/* Floating stat badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="absolute -right-3 bottom-8 rounded-2xl border border-brand-border bg-white/90 p-3.5 shadow-lg backdrop-blur-sm sm:-right-6"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blush">
                  <Sparkles className="h-4 w-4 text-brand-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg font-700 leading-none text-brand-charcoal">500+</p>
                  <p className="mt-0.5 text-xs text-brand-charcoal-muted">Transformations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
