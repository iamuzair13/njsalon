"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import VideoIntroSection from "@/components/VideoIntroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FAQSection from "@/components/FAQSection";
import Counter from "@/components/Counter";
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
      <section className="bg-brand-cream px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <span className="inline-block rounded-full bg-brand-primary px-4 py-1.5 text-sm font-600 text-white">About us</span>
              <h2 className="mt-3 max-w-lg font-heading text-4xl font-700 leading-[1.08] tracking-tight text-brand-charcoal sm:text-5xl">
                Your Beauty, Our Passion
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-brand-charcoal-muted sm:text-base lg:mx-0">
                At NJ Beauty Bliss, we believe every visit should leave you feeling
                confident, cared for, and beautifully yourself. Our expert team
                creates personalised beauty experiences with thoughtful detail.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-7 text-left sm:mt-10">
                <div className="border-t-2 border-brand-primary-light pt-3">
                  <p className="font-body text-[20px] font-700 text-brand-charcoal sm:text-[28px]">
                    <Counter to={5} suffix="+" /> Years
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-charcoal-muted">of beauty expertise</p>
                </div>
                <div className="border-t-2 border-brand-primary-light pt-3">
                  <p className="font-body text-[20px] font-700 text-brand-charcoal sm:text-[28px]">
                    <Counter to={20} suffix="+" /> Services
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-charcoal-muted">tailored to your needs</p>
                </div>
                <div className="border-t-2 border-brand-primary-light pt-3">
                  <p className="font-body text-[20px] font-700 text-brand-charcoal sm:text-[28px]">
                    <Counter to={999} suffix="+" /> Clients
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-charcoal-muted">who trust our care</p>
                </div>
                <div className="border-t-2 border-brand-primary-light pt-3">
                  <p className="font-body text-[20px] font-700 text-brand-charcoal sm:text-[28px]">
                    <Counter to={4.9} decimals={1} /> Rating
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-charcoal-muted">from happy guests</p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-base font-600 text-brand-primary transition-colors hover:text-brand-primary-dark"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-xl"
            >
              {/* TODO: replace with real NJ Beauty Bliss photo */}
              <Image
                src="/about4.jpg"
                alt="Salon stylist working with a client"
                width={800}
                height={700}
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-lg lg:aspect-[4/4.65]"
              />
            </motion.div>
          </div>
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
