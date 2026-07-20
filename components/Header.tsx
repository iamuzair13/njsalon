"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`mx-auto max-w-7xl rounded-2xl border border-brand-border/70 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : "bg-brand-cream/95 shadow-sm backdrop-blur-sm"
        }`}
      >
        <nav className="flex h-14 items-center justify-between px-5 sm:px-7">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
          >
            <Link
              href="/"
              className="font-heading text-lg font-700 tracking-tight text-brand-charcoal sm:text-xl"
            >
              NJ Beauty Bliss
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-md font-500 transition-colors hover:text-brand-primary ${
                    pathname === link.href
                      ? "text-brand-primary"
                      : "text-brand-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>

          <motion.a
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.25 }}
            href="https://wa.me/923080815888"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-xs font-600 text-white transition-all duration-200 hover:scale-[1.02] hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-white" />
            Book Now
          </motion.a>

          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
            className="flex h-9 w-9 items-center justify-center rounded-full text-brand-charcoal transition-colors hover:bg-brand-blush sm:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>
        </nav>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden sm:hidden"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                }}
                className="border-t border-brand-border px-5 pb-5 pt-4"
              >
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.href}
                      variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-xl px-3 py-2.5 text-sm font-500 transition-colors hover:bg-brand-blush hover:text-brand-primary ${
                          pathname === link.href
                            ? "bg-brand-primary-light text-brand-primary"
                            : "text-brand-charcoal"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                    className="pt-3"
                  >
                    <motion.a
                      href="https://wa.me/923080815888"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-600 text-white transition-colors hover:bg-brand-primary-dark"
                    >
                      <MessageCircle className="h-4 w-4 fill-white" />
                      Book Appointment
                    </motion.a>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
