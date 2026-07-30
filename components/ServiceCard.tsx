"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const { sections } = siteConfig;

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
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="group rounded-[1.75rem] border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-[50%] border-2 border-brand-border transition-all duration-500 ease-in-out group-hover:h-40 group-hover:w-full group-hover:rounded-2xl">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-blush transition-colors duration-300">
            <Icon className="h-8 w-8 text-brand-primary transition-all duration-300 group-hover:h-10 group-hover:w-10" />
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center border border-brand-primary/20 justify-center rounded-full bg-white">
          <Icon className="h-5 w-5 text-brand-primary" />
        </div>
        <h3 className="font-heading text-xl font-600 text-brand-charcoal">
          {title}
        </h3>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-brand-charcoal-muted">
        {description}
      </p>

      {startingPrice && (
        <p className="mt-3 text-sm font-600 text-brand-primary">
          {sections.serviceCard.startingFromText} {startingPrice}
        </p>
      )}
    </motion.div>
  );
}
