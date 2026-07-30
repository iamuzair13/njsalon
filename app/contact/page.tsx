"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, getBookingUrl } from "@/config/site";
import { fadeInLeft, fadeInRight, viewportOnce, easeOutExpo } from "@/config/animation";

const { contact, business, features, sections } = siteConfig;
const bookingUrl = getBookingUrl();

export default function ContactPage() {
  return (
    <>

      <section className="bg-white py-26 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact details */}
            <motion.div
              {...fadeInLeft}
              viewport={viewportOnce}
              transition={easeOutExpo}
            >
              <SectionHeading
                eyebrow={contact.subHeading}
                title={contact.heading}
                center={false}
              />
              <p className="mt-4 text-lg text-brand-charcoal-muted">
                {contact.description}
              </p>

              <div className="mt-8 space-y-6">
                {contact.cards.map((card, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary-light">
                      <card.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-600 text-brand-charcoal">
                        {card.title}
                      </h3>
                      {card.details.map((detail, di) => (
                        <p key={di} className="mt-1 text-sm text-brand-charcoal-muted">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-600 text-white transition-all duration-200 hover:bg-whatsapp-dark hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                {siteConfig.booking.buttonText}
              </a>

              {/* Google Maps embed */}
              {features.showMap && (
                <div className="mt-8 overflow-hidden rounded-xl border border-brand-border shadow-sm">
                  <iframe
                    src={business.googleMapEmbed}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${business.businessName} location map`}
                  />
                </div>
              )}
            </motion.div>

            {/* Contact form */}
            <motion.div
              {...fadeInRight}
              viewport={viewportOnce}
              transition={easeOutExpo}
            >
              <SectionHeading
                eyebrow={sections.contact.formEyebrow}
                title={sections.contact.formTitle}
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
