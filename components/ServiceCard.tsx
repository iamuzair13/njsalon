"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  startingPrice?: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  startingPrice,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
    >
      {/* Image Area — Fixed aspect ratio, clean zoom effect */}
      <div className="relative h-44 w-full overflow-hidden bg-brand-blush">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            {/* Subtle overlay darkens slightly on hover for depth */}
            <div className="absolute inset-0 bg-brand-charcoal/0 transition-colors duration-500 group-hover:bg-brand-charcoal/10" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
            <Icon className="h-10 w-10 text-brand-primary/40" />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-primary/10 bg-brand-primary/5 transition-colors duration-300 group-hover:border-brand-primary/20 group-hover:bg-brand-primary/10">
            <Icon className="h-5 w-5 text-brand-primary transition-transform duration-500 group-hover:scale-110" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-brand-charcoal">
            {title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-brand-charcoal-muted">
          {description}
        </p>

        {startingPrice && (
          <div className="mt-4 pt-4 border-t border-brand-border/50">
            <p className="text-sm font-semibold text-brand-primary">
              Starting from {startingPrice}
            </p>
          </div>
        )}
      </div>

      {/* Bottom accent line — animates width on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-primary transition-all duration-500 ease-out group-hover:w-full" />
    </motion.div>
  );
}