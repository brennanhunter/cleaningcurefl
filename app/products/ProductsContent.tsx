"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsContent() {
  return (
    <div className="min-h-screen bg-black py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Professional-grade cleaning solutions designed for Florida's hospitality and commercial industries.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Mildew Stain Remover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/mildew-stain-remover" className="group block">
              <motion.div
                className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors animate-float-subtle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[400px] mb-6">
                  <Image
                    src="/images/mildew-cleaner.png"
                    alt="Mildew Stain Remover"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                  Mildew Stain Remover
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                  Powerful formula that instantly removes mildew stains from bathroom tile, grout, shower stalls, outdoor furniture, and more. No scrubbing required.
                </p>
                <span className="inline-flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  Learn More →
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Drain Conditioner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/drain-conditioner" className="group block">
              <motion.div
                className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors animate-float-subtle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[400px] mb-6">
                  <Image
                    src="/images/drain-conditioner.png"
                    alt="Drain Conditioner"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                  Drain Conditioner
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                  Advanced drain maintenance solution that keeps drains flowing freely. Perfect for commercial kitchens, hotels, and high-traffic facilities.
                </p>
                <span className="inline-flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  Learn More →
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
