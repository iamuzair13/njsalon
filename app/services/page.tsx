"use client";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Sparkles, Award, Users } from "lucide-react";
import { siteConfig, resolveText } from "@/config/site";
import { fadeInUp, viewportOnce, easeOutExpo, easeOutExpoDelayed } from "@/config/animation";

const { services, business, features, sections } = siteConfig;

export default function ServicesPage() {
  return (
    <>
      {/* Services intro */}
      <section className="bg-brand-cream pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={viewportOnce}
            transition={easeOutExpo}
          >
            <span className="inline-block rounded-full bg-brand-blush px-4 py-1.5 text-sm font-600 uppercase tracking-wider text-brand-primary">
              {sections.services.eyebrow}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-700 leading-tight tracking-tight text-brand-charcoal sm:text-5xl">
              {sections.services.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-charcoal-muted sm:text-lg">
              {resolveText(sections.services.description)}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            viewport={viewportOnce}
            transition={easeOutExpoDelayed(0.15)}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { icon: Award, value: business.experienceYears, label: sections.services.stats[0].label },
              { icon: Sparkles, value: business.projectsCompleted, label: sections.services.stats[1].label },
              { icon: Users, value: business.clientsServed, label: sections.services.stats[2].label },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-[1.25rem] border border-brand-border bg-white px-6 py-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blush">
                  <stat.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <p className="mt-3 font-heading text-3xl font-700 text-brand-charcoal">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-brand-charcoal-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service categories */}
      {features.showServices && services.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={
            catIndex % 2 === 0 ? "bg-white py-16 sm:py-24" : "bg-brand-blush py-16 sm:py-24"
          }
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              viewport={viewportOnce}
              transition={easeOutExpo}
              className="mb-10"
            >
              <SectionHeading
                eyebrow={category.id}
                title={category.title}
                center={false}
              />
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...fadeInUp}
                  viewport={viewportOnce}
                  transition={easeOutExpoDelayed(index * 0.1)}
                >
                  <ServiceCard
                    icon={category.icon}
                    title={service.title}
                    description={service.description}
                    image={category.image}
                    startingPrice={service.price}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
