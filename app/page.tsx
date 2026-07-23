"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import VideoIntroSection from "@/components/VideoIntroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FAQSection from "@/components/FAQSection";
import { homeServicePreview } from "@/data/services";
import { Star, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="bg-brand-cream py-8">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:gap-6 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-brand-primary text-brand-primary"
                />
              ))}
            </div>
            <span className="text-base font-600 text-brand-charcoal">
              4.9 rated
            </span>
          </div>
          <span className="hidden h-5 w-px bg-brand-border sm:block" />
          <span className="text-base text-brand-charcoal-muted">
            30+ happy clients on Google
          </span>
          <span className="hidden h-5 w-px bg-brand-border sm:block" />
          <span className="flex items-center gap-1.5 text-base text-brand-charcoal-muted">
            <MapPin className="h-4 w-4 text-brand-primary" />
            Johar Town, Lahore
          </span>
        </motion.div>
      </section>

      {/* Services preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow=""
            title="What We Offer"
            subtitle="From everyday haircare to full bridal makeovers, our skilled team offers a full range of beauty services."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServicePreview.map((service, index) => (
              <motion.div
                key={service.id}
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
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-base font-600 text-brand-primary transition-colors hover:text-brand-primary-dark"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-brand-blush py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* TODO: replace with real NJ Beauty Bliss photo */}
            <Image
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=700&fit=crop"
              alt="Salon stylist working with a client"
              width={800}
              height={700}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              eyebrow="About Us"
              title="A Salon That Cares"
              center={false}
            />
            <p className="mt-4 text-lg text-brand-charcoal-muted">
              NJ Beauty Bliss is a trusted beauty salon in the heart of Johar
              Town, Lahore, known for its clean, relaxing atmosphere and skilled
              team of stylists and beauty specialists.
            </p>
            <p className="mt-4 text-base text-brand-charcoal-muted">
              From everyday haircare to full bridal makeovers, every client is
              treated with personal attention and care.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-base font-600 text-brand-primary transition-colors hover:text-brand-primary-dark"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video intro */}
      <VideoIntroSection />

      {/* Before & After results */}
      <BeforeAfterSection />

      {/* Testimonials */}
      <section className="bg-brand-cream py-16 sm:py-24">
        <TestimonialCard />
      </section>

      <FAQSection />

      {/* CTA banner */}
      <CTASection />
    </>
  );
}
