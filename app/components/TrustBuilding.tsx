"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBuilding() {
  return (
    <section className="bg-gray-900 py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Box - Why Cleaning Cure */}
          <motion.div 
            className="bg-green-900 p-6 md:p-12 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Why Cleaning Cure?
            </h2>
            <p className="text-lg text-white leading-relaxed">
              We believe in providing excellent cleaning solutions directly to Florida from neighbors you can trust while cutting out corporate middlemen providing lower quality and higher priced products. We specialize in just a few cleaning solutions, so you can be sure, we know how to make them well.
            </p>
          </motion.div>

          {/* Right Box - Explore Products */}
          <motion.div 
            className="bg-green-900 p-6 md:p-12 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 text-center">
              Explore our products:
            </h2>
            <p className="text-lg text-white leading-relaxed mb-6 text-center">
              We invite you to try our cleaning solutions.
            </p>
            
            {/* Stocked Locally Badge */}
            <motion.div 
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-block px-5 py-2 bg-green-800/60 border border-green-600/40 rounded-lg">
                <p className="text-base md:text-lg font-semibold text-white">
                  Stocked right here, locally, in Volusia County
                </p>
              </div>
            </motion.div>
            
            {/* Overlapping Product Images */}
            <div className="flex justify-center items-center mb-8 relative">
              {/* Mildew Cleaner - Left */}
              <motion.div 
                className="relative z-10 animate-float-subtle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/mildew-cleaner.png"
                  alt="Mildew Stain Remover"
                  width={250}
                  height={350}
                  className="object-contain"
                />
              </motion.div>
              
              {/* Drain Conditioner - Right (overlapping) */}
              <motion.div 
                className="relative z-20 -ml-[150px] animate-float-subtle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ animationDelay: '0.5s' }}
              >
                <Image
                  src="/images/drain-conditioner.png"
                  alt="Drain Conditioner"
                  width={250}
                  height={350}
                  className="object-contain"
                />
              </motion.div>
              
              {/* Product Catalog Button - Centered Over Images */}
              <motion.div
                className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-md text-white text-lg md:text-xl font-bold rounded-lg hover:bg-white/25 transition-all shadow-xl border border-white/40"
                >
                  Product Catalog
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
