"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function DrainConditioner() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="min-h-screen bg-black flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full px-4 md:px-8 py-12 md:py-24">
        {/* Left section - Content */}
        <motion.div 
          className="flex-1 text-white max-w-2xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-green-500"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Drain Opener & Conditioner
          </motion.h1>
          
          <motion.hr 
            className="border-green-600 border-t-2 mb-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Our Non-Acid Drain Opener & Conditioner is a fast-acting, odorless, and extremely effective solution that saves you both time and money. It's formulated to tackle the toughest drain blockages with professional-grade power.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              This powerful formula contains a carefully balanced combination of caustic soda and potassium hydroxide, designed to quickly dissolve grease, hair, soap scum, and other organic materials that cause drain clogs. Perfect for use in kitchens, bathrooms, and commercial facilities.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              With regular use, your drains will remain blockage-free and flowing smoothly. Trust Cleaning Cure for a non-acid formula that's tough on clogs but safe for your pipes when used as directed.
            </motion.p>
          </div>
          
          <motion.hr 
            className="border-green-600 border-t-2 mb-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link
              href="/sds/drain-conditioner.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-500 transition-colors shadow-lg"
            >
              <FileText className="w-6 h-6" />
              View SDS
            </Link>
          </motion.div>
        </motion.div>

        {/* Right section - Product Image */}
        <motion.div 
          className="relative w-full lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0 animate-float"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.08, x: -10 }}
        >
          <Image
            src="/images/drain-conditioner.png"
            alt="Drain Opener & Conditioner Product"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
