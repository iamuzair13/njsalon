"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export type BeforeAfterItem = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
};

type BeforeAfterSliderProps = {
  item: BeforeAfterItem;
};

export default function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging.current && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    },
    [updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-xl border border-brand-border shadow-sm"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="slider"
      aria-label={`Before and after comparison for ${item.label}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After image (full, bottom layer) */}
      <div className="absolute inset-0">
        {/* TODO: replace with real NJ Beauty Bliss after-treatment photo */}
        <Image
          src={item.afterSrc}
          alt={item.afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-brand-charcoal/70 px-3 py-1 text-xs font-600 uppercase tracking-wider text-white backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Before image (clipped, top layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {/* TODO: replace with real NJ Beauty Bliss before-treatment photo */}
        <Image
          src={item.beforeSrc}
          alt={item.beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-brand-charcoal/70 px-3 py-1 text-xs font-600 uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-0.5 bg-white shadow-md" />
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-primary shadow-lg">
          <MoveHorizontal className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}
