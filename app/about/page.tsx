"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const team = [
  {
    name: "Stylist 1",
    specialty: "Hair & Bridal Makeup",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Stylist 2",
    specialty: "Facials & Skin Care",
    image: "https://images.unsplash.com/photo-1580489944761-15a32d82e9d7?w=400&h=400&fit=crop",
  },
  {
    name: "Stylist 3",
    specialty: "Nail Art & Care",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>

      {/* Salon story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-sm:pt-6 flex max-w-7xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* TODO: replace with real NJ Beauty Bliss photo */}
            <Image
              src="/about.jfif"
              alt="NJ Beauty Bliss salon interior"
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
              eyebrow="Our Story"
              title="Beauty with a Personal Touch"
              center={false}
            />
            <p className="mt-4 text-lg text-brand-charcoal-muted text-center sm:text-start">
              NJ Beauty Bliss is a trusted beauty salon in the heart of Johar
              Town, Lahore, known for its clean, relaxing atmosphere and skilled
              team of stylists and beauty specialists. From everyday haircare to
              full bridal makeovers, every client is treated with personal
              attention and care.
            </p>
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
                {/* TODO: replace with real NJ Beauty Bliss team photo */}
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
                    {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-charcoal-muted">
            Team details will be updated with real staff photos and names.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
