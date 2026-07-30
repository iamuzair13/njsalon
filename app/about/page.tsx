"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInLeft, fadeInRight, fadeInUp, viewportOnce, easeOutExpo, easeOutExpoDelayed } from "@/config/animation";

const { about, business, team, features, sections } = siteConfig;

export default function AboutPage() {
  return (
    <>

      {/* Story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              {...fadeInLeft}
              viewport={viewportOnce}
              transition={easeOutExpo}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lg">
                <Image
                  src={about.image}
                  alt={business.businessName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-brand-primary px-6 py-4 text-white shadow-xl sm:block">
                <p className="font-heading text-3xl font-700 leading-none">{business.experienceYears}</p>
                <p className="mt-1 text-sm font-500 text-white/90">{sections.about.experienceBadgeLabel}</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInRight}
              viewport={viewportOnce}
              transition={easeOutExpo}
            >
              <span className="inline-block rounded-full bg-brand-blush px-4 py-1.5 text-sm font-600 uppercase tracking-wider text-brand-primary">
                {about.subHeading}
              </span>
              <h2 className="mt-4 font-heading text-3xl font-700 leading-tight tracking-tight text-brand-charcoal sm:text-4xl">
                {about.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-charcoal-muted sm:text-lg">
                {about.story}
              </p>

              <div className="mt-8 space-y-4">
                {about.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blush">
                      <div className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    </div>
                    <div>
                      <p className="font-600 text-brand-charcoal">{feature.title}</p>
                      <p className="mt-0.5 text-sm text-brand-charcoal-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-brand-blush py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              {...fadeInUp}
              viewport={viewportOnce}
              transition={easeOutExpo}
              className="rounded-xl border border-brand-border bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-light">
                <Target className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mt-4 font-heading text-2xl font-600 text-brand-charcoal">
                {sections.about.missionTitle}
              </h3>
              <p className="mt-3 text-base  text-brand-charcoal-muted">
                {business.mission}
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              viewport={viewportOnce}
              transition={easeOutExpoDelayed(0.1)}
              className="rounded-xl border border-brand-border bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-light">
                <Eye className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mt-4 font-heading text-2xl font-600 text-brand-charcoal">
                {sections.about.visionTitle}
              </h3>
              <p className="mt-3 text-base text-brand-charcoal-muted">
                {business.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      {features.showTeam && (
      <section className="bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={sections.about.team.eyebrow}
            title={sections.about.team.title}
            subtitle={sections.about.team.subtitle}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                viewport={viewportOnce}
                transition={easeOutExpoDelayed(index * 0.1)}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-600 text-brand-charcoal">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-primary">
                    {member.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      <CTASection />
    </>
  );
}
