"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mt-4 flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "fill-brand-primary text-brand-primary"
              : "fill-brand-border text-brand-border"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialFigure({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative w-[300px] shrink-0 rounded-2xl border border-brand-border bg-white py-6 pl-5 pr-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[340px] sm:pl-16">
      {/* TODO: replace with real NJ Beauty Bliss client photo */}
      <Image
        src={testimonial.avatar}
        alt={testimonial.author}
        width={80}
        height={80}
        className="mb-4 h-12 w-12 rounded-full border-2 border-brand-border object-cover sm:absolute sm:-left-10 sm:top-0 sm:bottom-0 sm:my-auto sm:h-20 sm:w-20"
      />
      <figcaption>
        <p className="text-sm font-600 text-brand-charcoal">{testimonial.author}</p>
        <span className="mt-0.5 block text-xs text-brand-charcoal-muted">
          {testimonial.label}
        </span>
      </figcaption>
      <blockquote className="mt-4">
        <p className="text-sm leading-relaxed text-brand-charcoal-muted">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      <StarRating rating={testimonial.rating} />
    </figure>
  );
}

export default function TestimonialCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 5);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 340 + 24;
    el.scrollBy({
      left: direction === "prev" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-3 md:items-end">
          <div className="col-span-2">
            <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
              Client Love
            </span>
            <h2 className="mt-2 font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
              What Our Happy Clients Say
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-charcoal-muted">
              See what our happy clients have to say. They&apos;ve shared how
              our services helped them look and feel their best.
            </p>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-end justify-start gap-3 md:justify-end">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => scroll("prev")}
              disabled={!canScrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white transition-all duration-200 hover:bg-brand-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-default disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4 text-brand-charcoal" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary bg-brand-primary transition-all duration-200 hover:bg-brand-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-default disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="overflow-x-auto px-2 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-6 sm:gap-14">
            {testimonials.map((testimonial, index) => (
              <TestimonialFigure key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
