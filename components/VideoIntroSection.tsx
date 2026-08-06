"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "@/components/VideoModal";

export default function VideoIntroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <section className="bg-brand-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <div className="text-center">
            <span className="text-sm font-600 uppercase tracking-wider text-brand-primary">
              See Us in Action
            </span>
            <h2 className="mt-2 font-heading text-3xl font-700 text-brand-charcoal sm:text-4xl">
              Your Path to{" "}
              <em className="italic">Effortless</em> Beauty
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-charcoal-muted">
              Step inside NJ Beauty Bliss and see what makes every visit
              special.
            </p>
          </div>

          {/* Video thumbnail */}
          <div className="relative mt-10">
            <button
              ref={playButtonRef}
              onClick={handleOpen}
              onKeyDown={handleKeyDown}
              aria-label="Play video introduction"
              className="group relative block w-full overflow-hidden rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
            >
              <video
                
                muted
                loop
                playsInline
                className="aspect-video w-full object-cover"
              >
                <source src="/vidssave.com INTRO_ make up & hair _ A cinematic B-roll 1080P.mp4" type="video/mp4" />
              </video>

              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-200 group-hover:bg-black/30" />

              {/* Rotating circular badge — top-left */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute left-4 top-4 flex h-15 w-15 items-center justify-center rounded-full bg-brand-charcoal/60 backdrop-blur-sm sm:h-28 sm:w-28"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                >
                  <defs>
                    <path
                      id="circle-path"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="fill-white text-[9px] uppercase tracking-wider sm:text-[10px]">
                    <textPath href="#circle-path">
                      PLAY INTRO • PLAY INTRO • PLAY INTRO • PLAY INTRO
                    </textPath>
                  </text>
                </svg>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute flex items-center justify-center"
                >
                  <Play className="h-4 w-4 fill-white text-white sm:h-6 sm:w-6" style={{ marginLeft: "2px" }} />
                </motion.div>
              </motion.div>

              {/* Center play button */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 group-hover:scale-108 group-hover:shadow-xl sm:h-18 sm:w-18">
                  <Play
                    className="h-7 w-7 fill-brand-charcoal text-brand-charcoal sm:h-8 sm:w-8"
                    style={{ marginLeft: "3px" }}
                  />
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={handleClose}
        videoSrc="/vidssave.com INTRO_ make up & hair _ A cinematic B-roll 1080P.mp4"
      />
    </section>
  );
}
