"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBuilding() {
  return (
    <section className="bg-gray-900 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Box - Why Cleaning Cure */}
          <motion.div 
            className="bg-green-900 p-12 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Cleaning Cure?
            </h2>
            <p className="text-lg text-white leading-relaxed mb-8">
              We believe in providing excellent cleaning solutions directly to Florida from neighbors you can trust while cutting out corporate middlemen providing lower quality and higher priced products. We specialize in just a few cleaning solutions, so you can be sure, we know how to make them well.
            </p>
            
            {/* SDS Sheets Buttons */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Safety Data Sheets:</h3>
              <div className="flex gap-4">
                <Link
                  href="/sds/mildew-stain-remover.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
                  target="_blank"
                >
                  <FileText className="w-5 h-5" />
                  <span>Mildew Stain Remover</span>
                </Link>
                <Link
                  href="/sds/drain-conditioner.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
                  target="_blank"
                >
                  <FileText className="w-5 h-5" />
                  <span>Drain Conditioner</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Box - Placeholder */}
          <motion.div 
            className="bg-green-800 p-12 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Placeholder Title
            </h2>
            <p className="text-lg text-white leading-relaxed">
              This is placeholder content. You can update this section later with the information you want to display here. It could be testimonials, certifications, or any other trust-building content.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
