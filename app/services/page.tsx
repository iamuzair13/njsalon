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
      {/* Services intro */}
      <section className="bg-white pb-8 pt-24 sm:pb-12 sm:pt-26">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
              Our Services
            </span>
            <h2 className="mt-2 font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
              Beauty Crafted with Precision & Care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal-muted sm:text-lg">
              At NJ Beauty Bliss, we offer a comprehensive range of beauty services
              tailored to your unique needs. From everyday haircare to luxurious
              bridal makeovers, our expert team combines skill, premium products,
              and a relaxing atmosphere to deliver results you&apos;ll love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
          >
            <div className="text-center">
              <p className="font-heading text-2xl font-700 text-brand-primary sm:text-3xl">5+</p>
              <p className="mt-1 text-xs text-brand-charcoal-muted sm:text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-700 text-brand-primary sm:text-3xl">20+</p>
              <p className="mt-1 text-xs text-brand-charcoal-muted sm:text-sm">Beauty Services</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-700 text-brand-primary sm:text-3xl">1k+</p>
              <p className="mt-1 text-xs text-brand-charcoal-muted sm:text-sm">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </section>

      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          className={
            catIndex % 2 === 0 ? "bg-white py-16 sm:py-24" : "bg-brand-blush py-16 sm:py-24"
          }
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                  key={service.name}
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
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
