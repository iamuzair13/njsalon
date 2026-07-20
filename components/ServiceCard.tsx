"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  startingPrice?: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  startingPrice,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-brand-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDEEF1]">
        <Icon className="h-6 w-6 text-brand-primary" />
      </div>
      <h3 className="mt-4 font-heading text-xl font-600 text-brand-charcoal">
        {title}
      </h3>
      <p className="mt-2 text-sm text-brand-charcoal-muted">{description}</p>
      {startingPrice && (
        <p className="mt-3 text-sm font-600 text-brand-primary">
          Starting from {startingPrice}
        </p>
      )}
    </motion.div>
  );
}
