"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceCategories } from "@/data/services";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <Hero variant="inner" title="Our Services" breadcrumb="Services" />

      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          className={
            catIndex % 2 === 0 ? "bg-white py-16 sm:py-24" : "bg-brand-blush py-16 sm:py-24"
          }
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-10 flex items-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary-light">
                <category.icon className="h-7 w-7 text-brand-primary" />
              </div>
              <div>
                <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
                  Category
                </span>
                <h2 className="font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
                  {category.title}
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <ServiceCard
                    icon={category.icon}
                    title={service.name}
                    description={service.description}
                    startingPrice={service.startingPrice}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Ready to Book?"
        buttonText="Book on WhatsApp"
      />
    </>
  );
}
