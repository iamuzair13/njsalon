"use client";

import ContactForm from "@/components/ContactForm";
import { HeroBadge, HeroTitle, HeroSubtitle, HeroCTA, HeroPrimaryButton, heroStaggerVariants, heroItemVariants, heroTransition } from "@/components/hero-typography";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["Block J, Johar Town Phase 2", "Lahore, Pakistan"] },
  { icon: Phone, title: "Call Us", lines: ["+92 308 0815888"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 10am – 8pm", "Sunday: 12pm – 6pm"] },
];

export default function ContactPage() {
  return (
    <>

      {/* Contact Hero */}
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
              <HeroBadge>Get in Touch</HeroBadge>

              <HeroTitle>
                We&apos;d Love to <em className="font-heading font-500 italic tracking-[-0.06em]">Hear</em> From You
              </HeroTitle>

              <HeroSubtitle>
                Visit us, call us, or send a message — we&apos;re here to help
                you look and feel your best. Book your appointment today.
              </HeroSubtitle>

              {/* Contact highlights */}
              <motion.div
                variants={heroItemVariants}
                transition={heroTransition}
                className="mt-7 space-y-4 text-left"
              >
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-brand-border">
                      <info.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-600 text-brand-charcoal">{info.title}</p>
                      {info.lines.map((line, j) => (
                        <p key={j} className="mt-0.5 text-sm text-brand-charcoal-muted">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              <HeroCTA>
                <HeroPrimaryButton href="https://wa.me/923080815888" icon={MessageCircle}>
                  Book on WhatsApp
                </HeroPrimaryButton>
              </HeroCTA>
            </motion.div>

            {/* Right: Glass contact card + form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Gradient backdrop */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blush to-brand-primary/10 blur-2xl" />

              {/* Glass card */}
              <div className="relative rounded-[1.75rem] border border-brand-border bg-white/80 p-6 shadow-xl backdrop-blur-md sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="font-heading text-xl font-700 text-brand-charcoal">
                      Send a Message
                    </h2>
                    <p className="mt-1 text-sm text-brand-charcoal-muted">
                      We&apos;ll get back to you shortly.
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blush">
                    <Mail className="h-5 w-5 text-brand-primary" />
                  </div>
                </div>

                <ContactForm />
              </div>

              {/* Floating hours card — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="absolute -right-3 -top-4 hidden rounded-2xl border border-brand-border bg-white/90 p-3.5 shadow-lg backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-600 text-brand-charcoal">Open Now</p>
                    <p className="text-xs text-brand-charcoal-muted">Mon–Sat 10–8</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Map strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-16 overflow-hidden rounded-[1.75rem] border border-brand-border shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps?q=31.473231,74.257807&z=16&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NJ Beauty Bliss location map"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
