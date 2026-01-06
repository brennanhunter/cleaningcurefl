"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [hasAnimated, setHasAnimated] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const animated = sessionStorage.getItem("headerAnimated");
    if (!animated) {
      setHasAnimated(false);
      sessionStorage.setItem("headerAnimated", "true");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-green-900 shadow-md">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-8">
        {/* Logo */}
        <motion.div
          initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo-smoke.png"
              alt="Cleaning Cure FL"
              width={60}
              height={60}
              priority
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[83px] lg:h-[83px]"
            />
          </Link>
        </motion.div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-4 xl:gap-8">
          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/mildew-stain-remover"
              className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
            >
              Mildew Stain Remover
            </Link>
          </motion.div>
          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/drain-conditioner"
              className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
            >
              Drain Conditioner
            </Link>
          </motion.div>
          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/about"
              className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
            >
              About
            </Link>
          </motion.div>
          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        {/* Call Now Button - Desktop */}
        <motion.a
          href="tel:+1234567890"
          className="hidden lg:flex relative items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 bg-green-700 text-white text-base md:text-xl lg:text-2xl font-bold rounded-lg hover:bg-green-600 transition-all shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7),0_0_50px_rgba(255,255,255,0.5),0_0_80px_rgba(255,255,255,0.3)]"
          initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-green-800 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/mildew-stain-remover"
                className="text-white text-xl font-bold hover:opacity-70 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mildew Stain Remover
              </Link>
              <Link
                href="/drain-conditioner"
                className="text-white text-xl font-bold hover:opacity-70 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Drain Conditioner
              </Link>
              <Link
                href="/about"
                className="text-white text-xl font-bold hover:opacity-70 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white text-xl font-bold hover:opacity-70 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white text-xl font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
