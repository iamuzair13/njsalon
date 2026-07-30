"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types/site";
import { siteConfig } from "@/config/site";
import { fadeInUp, viewportOnce, easeOutExpo } from "@/config/animation";

const testimonials: Testimonial[] = siteConfig.testimonials;
const { sections } = siteConfig;

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
    <figure className="relative flex w-[300px] shrink-0 snap-center flex-col items-center justify-center rounded-2xl border border-brand-border bg-white px-6 py-8 text-center shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[340px] sm:snap-start">
      {/* Avatar */}
      <Image
        src={testimonial.image}
        alt={testimonial.author}
        width={80}
        height={80}
        className="h-16 w-16 rounded-full border-2 border-brand-border object-cover"
      />

      {/* Name */}
      <figcaption className="mt-4">
        <p className="text-sm font-600 text-brand-charcoal">{testimonial.author}</p>
      </figcaption>

      {/* Quote with decorative marks */}
      <blockquote className="relative z-10 mt-5 px-4">
        <span className="pointer-events-none absolute -left-1 -top-4 font-heading text-5xl leading-none text-brand-primary/20 sm:text-6xl">
          &ldquo;
        </span>
        <p className="text-sm leading-relaxed text-brand-charcoal-muted">
          {testimonial.review}
        </p>
        <span className="pointer-events-none absolute -bottom-10 -right-[-20px] font-heading text-5xl leading-none text-brand-primary/20 sm:text-6xl">
          &rdquo;
        </span>
      </blockquote>

      <StarRating rating={testimonial.rating} />
    </figure>
  );
}

export default function TestimonialCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeDirection, setActiveDirection] = useState<"prev" | "next">("next");

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 5);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const track = el.firstElementChild as HTMLElement | null;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 0 : 0;
    const cardWidth = (firstCard?.getBoundingClientRect().width ?? 300) + gap;

    if (direction === "next") {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
    setActiveDirection(direction);
  };

  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportOnce}
      transition={easeOutExpo}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="mb-10 text-start md:mb-14 md:text-center ">
          <div className="text-center">
            <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
              {sections.testimonials.eyebrow}
            </span>
            <h2 className="mt-2 font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
              {sections.testimonials.title}
            </h2>
            <p className="mt-4  text-base leading-relaxed text-brand-charcoal-muted mx-auto md:mx-0">
              {sections.testimonials.subtitle}
            </p>
          </div>
        </div>

        {/* Slider with side nav buttons */}
        <div className="relative flex items-center">
          {/* Left button */}
          <button
            type="button"
            aria-label={sections.testimonials.prevAriaLabel}
            onClick={() => scroll("prev")}
            disabled={!canScrollPrev}
            className={`absolute -left-2 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-default disabled:opacity-40 sm:-left-6 ${
              activeDirection === "prev"
                ? "border-brand-primary bg-brand-primary hover:bg-brand-primary-dark"
                : "border-brand-border bg-white hover:bg-brand-blush"
            }`}
          >
            <ChevronLeft className={`h-5 w-5 ${activeDirection === "prev" ? "text-white" : "text-brand-charcoal"}`} />
          </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="w-full min-w-0 snap-x snap-mandatory overflow-x-auto scroll-smooth px-10 [scrollbar-width:none] sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-6 sm:gap-14">
              {testimonials.map((testimonial, index) => (
                <TestimonialFigure key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Right button */}
          <button
            type="button"
            aria-label={sections.testimonials.nextAriaLabel}
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
            className={`absolute -right-2 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-default disabled:opacity-40 sm:-right-6 ${
              activeDirection === "next"
                ? "border-brand-primary bg-brand-primary hover:bg-brand-primary-dark"
                : "border-brand-border bg-white hover:bg-brand-blush"
            }`}
          >
            <ChevronRight className={`h-5 w-5 ${activeDirection === "next" ? "text-white" : "text-brand-charcoal"}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
