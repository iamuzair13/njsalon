"use client";

import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { HeroBadge, HeroTitle, HeroSubtitle, HeroCTA, HeroPrimaryButton, HeroSecondaryButton, heroStaggerVariants } from "@/components/hero-typography";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, MessageCircle, ArrowRight, Sparkles, Heart, Award, Users } from "lucide-react";

const team = [
  {
    name: "Ayesha Khan",
    specialty: "Senior Hair Stylist & Bridal Makeup",
    image: "https://images.pexels.com/photos/30468651/pexels-photo-30468651.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
  },
  {
    name: "Fatima Riaz",
    specialty: "Facials & Skin Care Specialist",
    image: "https://images.pexels.com/photos/34207040/pexels-photo-34207040.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
  },
  {
    name: "Zainab Malik",
    specialty: "Nail Art & Care Expert",
    image: "https://images.pexels.com/photos/31956079/pexels-photo-31956079.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>

      {/* About Hero */}
      <section className="relative overflow-hidden bg-brand-cream pb-16 pt-28 sm:pb-20 sm:pt-36">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-brand-blush/40 blur-3xl" />
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
              <HeroBadge>About NJ Beauty Bliss</HeroBadge>

              <HeroTitle>
                Where Beauty Meets <em className="font-heading font-500 italic tracking-[-0.06em]">Elegance</em>
              </HeroTitle>

              <HeroSubtitle>
                NJ Beauty Bliss is a trusted beauty salon in the heart of Johar
                Town, Lahore — known for its clean, relaxing atmosphere and skilled
                team of stylists and beauty specialists.
              </HeroSubtitle>

              <HeroCTA>
                <HeroPrimaryButton href="https://wa.me/923080815888" icon={MessageCircle}>
                  Book Consultation
                </HeroPrimaryButton>
                <HeroSecondaryButton href="/services" icon={ArrowRight}>
                  View Services
                </HeroSecondaryButton>
              </HeroCTA>

              {/* Decorative line */}
              <motion.div
                variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="mx-auto mt-10 h-px w-32 origin-center bg-gradient-to-r from-transparent via-brand-border to-transparent lg:mx-0"
              />
            </motion.div>

            {/* Right: Image with floating stats */}
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
                  src="https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop"
                  alt="NJ Beauty Bliss salon interior"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Floating stat — top left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="absolute -left-3 top-8 rounded-2xl border border-brand-border bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:-left-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blush">
                    <Award className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-700 leading-none text-brand-charcoal">5+</p>
                    <p className="mt-0.5 text-xs text-brand-charcoal-muted">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
                className="absolute -right-3 bottom-8 rounded-2xl border border-brand-border bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:-right-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blush">
                    <Sparkles className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-700 leading-none text-brand-charcoal">4.9★</p>
                    <p className="mt-0.5 text-xs text-brand-charcoal-muted">Client Rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {[
              { icon: Award, value: "5+", label: "Years Experience" },
              { icon: Users, value: "1k+", label: "Happy Clients" },
              { icon: Sparkles, value: "20+", label: "Premium Treatments" },
              { icon: Heart, value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-2xl border border-brand-border bg-white px-4 py-6 text-center shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blush">
                  <stat.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <p className="mt-3 font-heading text-2xl font-700 text-brand-charcoal sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-charcoal-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-brand-blush py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-brand-border bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-light">
                <Target className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mt-4 font-heading text-2xl font-600 text-brand-charcoal">
                Our Mission
              </h3>
              <p className="mt-3 text-base  text-brand-charcoal-muted">
                To provide every client with a premium beauty experience in a
                clean, relaxing environment — delivering results that exceed
                expectations every single time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="rounded-xl border border-brand-border bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-light">
                <Eye className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mt-4 font-heading text-2xl font-600 text-brand-charcoal">
                Our Vision
              </h3>
              <p className="mt-3 text-base text-brand-charcoal-muted">
                To be the most loved and trusted beauty salon in Lahore, known
                for quality service, hygiene, and a genuinely caring approach to
                every client who walks through our doors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the Stylists"
            subtitle="Our skilled team of beauty professionals is here to make you look and feel your best."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.specialty}`}
                  width={600}
                  height={600}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-600 text-brand-charcoal">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-primary">
                    {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
