"use client";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import SmokeShow from "./SmokeShow";
import TrustBuilding from "./components/TrustBuilding";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="min-h-screen relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full px-4 md:px-8 py-8 md:py-12">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-green-900 via-green-950 to-black animate-gradient" />
        
        {/* Left column with title and logo */}
        <div className="flex-1 flex flex-col items-start w-full max-w-3xl">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Supplier of High Quality Cleaning Solutions for Floridians
          </motion.h1>
          
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex-shrink-0">
            <SmokeShow />
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <Image
                src="/logos/logo-transparentbg.png"
                alt="Cleaning Cure FL Logo"
                width={400}
                height={400}
                priority
                className="drop-shadow-2xl w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Right column with checklist */}
        <div className="flex-1 text-white max-w-2xl w-full">
          <div className="space-y-3 md:space-y-6 mb-6 md:mb-12">
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-base md:text-lg lg:text-xl">
                Family Business Supporting Volusia
              </p>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-base md:text-lg lg:text-xl">
                High Quality Products at Great Prices that work!
              </p>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-base md:text-lg lg:text-xl">
                Trustworthy & Reliable with Direct Support From Owners
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Link
              href="/contact"
              className="px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white text-lg md:text-xl font-bold rounded-lg hover:bg-green-500 transition-colors shadow-lg text-center"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-green-600 text-white text-lg md:text-xl font-bold rounded-lg hover:bg-green-600 transition-colors text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trust Building Section */}
      <TrustBuilding />
    </div>
  );
}
