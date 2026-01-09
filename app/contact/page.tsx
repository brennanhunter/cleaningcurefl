"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Cleaning Cure for professional cleaning solutions. Serving Volusia County and Florida. Call (407) 312-1732 or email cleaningcurefl@gmail.com.",
};

export default function Contact() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-green-500 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>

          <motion.hr 
            className="border-green-600 border-t-2 mb-12"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Phone */}
              <motion.div
                className="bg-green-900/30 border-2 border-green-600 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-1">Phone</h3>
                    <a href="tel:+14073121732" className="text-lg hover:text-green-300 transition-colors">
                      (407) 312-1732
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="bg-green-900/30 border-2 border-green-600 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-1">Email</h3>
                    <a href="mailto:cleaningcurefl@gmail.com" className="text-lg hover:text-green-300 transition-colors">
                      cleaningcurefl@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                className="bg-green-900/30 border-2 border-green-600 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-1">Location</h3>
                    <p className="text-lg">
                      Volusia County, FL
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-lg font-semibold text-green-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-green-900/20 border-2 border-green-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] focus:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all"
                    placeholder="Your Name"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="phone" className="block text-lg font-semibold text-green-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-green-900/20 border-2 border-green-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] focus:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all"
                    placeholder="(123) 456-7890"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label htmlFor="email" className="block text-lg font-semibold text-green-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-green-900/20 border-2 border-green-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] focus:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-lg font-semibold text-green-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-green-900/20 border-2 border-green-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] focus:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-500 transition-colors shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
