"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [hasAnimated, setHasAnimated] = useState(true);

  useEffect(() => {
    const animated = sessionStorage.getItem("headerAnimated");
    if (!animated) {
      setHasAnimated(false);
      sessionStorage.setItem("headerAnimated", "true");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-green-900 shadow-md">
      <div className="flex items-center justify-between px-6 py-8">
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
              width={83}
              height={83}
              priority
            />
          </Link>
        </motion.div>

        {/* Navigation - Centered */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
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

        {/* Call Now Button */}
        <motion.a
          href="tel:+1234567890"
          className="relative flex items-center gap-2 px-6 py-3 bg-green-700 text-white text-2xl font-bold rounded-lg hover:bg-green-600 transition-all shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7),0_0_50px_rgba(255,255,255,0.5),0_0_80px_rgba(255,255,255,0.3)] mr-12"
          initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Phone className="w-7 h-7" />
          <span>Call Now</span>
        </motion.a>
      </div>
    </header>
  );
}
