"use client";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { HeroBadge, HeroTitle, HeroSubtitle, HeroCTA, HeroPrimaryButton, HeroSecondaryButton, heroStaggerVariants } from "@/components/hero-typography";
import { serviceCategories } from "@/data/services";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Award, Check, Scissors, Hand, Heart, MessageCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="relative overflow-hidden bg-brand-cream pb-16 pt-28 sm:pb-20 sm:pt-36">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute left-0 top-60 h-96 w-96 rounded-full bg-brand-blush/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left: Text content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroStaggerVariants}
              className="max-w-xl text-center lg:py-0 lg:text-left"
            >
              <HeroBadge>Our Services</HeroBadge>

              <HeroTitle>
                Confidence Starts <br /><em className="font-heading font-500 italic tracking-[-0.06em]">Here</em>
              </HeroTitle>

              <HeroSubtitle>
                From everyday haircare to luxurious bridal makeovers, our expert
                team combines skill, premium products, and a relaxing atmosphere
                to deliver results you&apos;ll love.
              </HeroSubtitle>

              {/* Service category badges */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                {[
                  { icon: Scissors, label: "Hair Dressing" },
                  { icon: Sparkles, label: "Skin Care" },
                  { icon: Hand, label: "Nails" },
                  { icon: Heart, label: "Special Events" },
                ].map((cat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3.5 py-1.5 text-xs font-600 text-brand-charcoal"
                  >
                    <cat.icon className="h-3.5 w-3.5 text-brand-primary" />
                    {cat.label}
                  </span>
                ))}
              </motion.div>

              <HeroCTA>
                <HeroPrimaryButton href="https://wa.me/923080815888" icon={MessageCircle}>
                  Book Appointment
                </HeroPrimaryButton>
                <HeroSecondaryButton href="/gallery" icon={ArrowRight}>
                  View Gallery
                </HeroSecondaryButton>
              </HeroCTA>
            </motion.div>

            {/* Right: Image with feature cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Gradient backdrop */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blush to-brand-primary/10 blur-2xl" />

              {/* Main image */}
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/37273222/pexels-photo-37273222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop"
                  alt="NJ Beauty Bliss services"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Floating feature card — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="absolute -left-3 bottom-6 rounded-2xl border border-brand-border bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:-left-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blush">
                    <Award className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-700 leading-none text-brand-charcoal">20+</p>
                    <p className="mt-0.5 text-xs text-brand-charcoal-muted">Beauty Services</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature highlights row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: "Certified Professionals", desc: "Skilled stylists with years of training." },
              { title: "Premium Products", desc: "Ammonia-free and skin-friendly products." },
              { title: "Personalized Care", desc: "Every treatment tailored to your needs." },
              { title: "Relaxing Experience", desc: "A calm, hygienic, and welcoming space." },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-brand-border bg-white px-5 py-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-600 text-brand-charcoal">{feature.title}</p>
                  <p className="mt-0.5 text-xs text-brand-charcoal-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
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
                    image={service.image}
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
