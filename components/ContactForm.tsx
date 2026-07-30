"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

const { sections } = siteConfig;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl border border-brand-border bg-brand-blush p-8 text-center"
      >
        <h3 className="font-heading text-2xl font-600 text-brand-charcoal">
          {sections.contactForm.successTitle}
        </h3>
        <p className="mt-3 text-brand-charcoal-muted">
          {sections.contactForm.successMessage}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-600 text-brand-primary hover:text-brand-primary-dark"
        >
          {sections.contactForm.sendAnotherText}
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-brand-border bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-600 text-brand-charcoal"
          >
            {sections.contactForm.fields.name.label}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={sections.contactForm.fields.name.placeholder}
            className="mt-2 w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-charcoal-muted/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-600 text-brand-charcoal"
          >
            {sections.contactForm.fields.phone.label}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder={sections.contactForm.fields.phone.placeholder}
            className="mt-2 w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-charcoal-muted/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-600 text-brand-charcoal"
          >
            {sections.contactForm.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder={sections.contactForm.fields.message.placeholder}
            className="mt-2 w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-charcoal-muted/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-base font-600 text-white transition-all duration-200 hover:bg-brand-primary-dark hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
        >
          <Send className="h-5 w-5" />
          {sections.contactForm.submitButtonText}
        </button>
      </div>
    </form>
  );
}
