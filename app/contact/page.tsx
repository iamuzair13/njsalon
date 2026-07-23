"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>

      <section className="bg-white py-26 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeading
                eyebrow="Get in Touch"
                title="Visit Our Salon"
                center={false}
              />
              <p className="mt-4 text-lg text-brand-charcoal-muted">
                We&apos;d love to hear from you. Visit us, call us, or send a
                message — we&apos;re here to help you look and feel your best.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary-light">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-600 text-brand-charcoal">
                      Address
                    </h3>
                    <p className="mt-1 text-sm text-brand-charcoal-muted">
                      Block J, Johar Town Phase 2, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary-light">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-600 text-brand-charcoal">
                      Phone
                    </h3>
                    <p className="mt-1 text-sm text-brand-charcoal-muted">
                      +92 308 0815888
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary-light">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-600 text-brand-charcoal">
                      Hours
                    </h3>
                    <p className="mt-1 text-sm text-brand-charcoal-muted">
                      Monday – Saturday: 10am – 8pm
                    </p>
                    <p className="text-sm text-brand-charcoal-muted">
                      Sunday: 12pm – 6pm
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923080815888"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-600 text-white transition-all duration-200 hover:bg-whatsapp-dark hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                Book on WhatsApp
              </a>

              {/* Google Maps embed */}
              <div className="mt-8 overflow-hidden rounded-xl border border-brand-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=31.473231,74.257807&z=16&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NJ Beauty Bliss location map"
                />
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeading
                eyebrow="Send a Message"
                title="We'd Love to Hear From You"
                center={false}
              />
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
