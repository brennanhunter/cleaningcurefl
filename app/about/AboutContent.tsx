"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Service Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
              Service You Can Rely On
            </h2>
            <motion.hr 
              className="border-green-600 border-t-2 mb-8"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                At Cleaning Cure, we are here for you. Based in Florida and understanding the unique cleaning challenges of our environment, we provide professional-grade cleaning solutions with unmatched service and quality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                We work with hospitality and commercial customers to deliver the powerful, effective products you need to keep your property clean and protected.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="italic text-green-400 text-xl md:text-2xl"
              >
                Cleaning Cure. Your Remedy For Stains.
              </motion.p>
            </div>
          </motion.section>

          {/* Quality Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
              Quality You Trust
            </h2>
            <motion.hr 
              className="border-green-600 border-t-2 mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our products are formulated with professional-grade ingredients to deliver exceptional results you can count on. We understand that when it comes to cleaning, quality matters.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Whether you're tackling stubborn mildew stains or maintaining clear-flowing drains, Cleaning Cure provides solutions that work effectively and efficiently, giving you more time to enjoy Florida living.
              </motion.p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
