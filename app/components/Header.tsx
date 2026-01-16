"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [hasAnimated, setHasAnimated] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const animated = sessionStorage.getItem("headerAnimated");
    if (!animated) {
      setHasAnimated(false);
      sessionStorage.setItem("headerAnimated", "true");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-green-900 shadow-md">
      <div className="flex items-end justify-between px-4 md:px-6 py-4 md:py-6">
        {/* Logo */}
        <motion.div
          initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ 
                filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logos/logo-smoke.png"
                alt="Cleaning Cure FL"
                width={60}
                height={60}
                priority
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[83px] lg:h-[83px]"
              />
            </motion.div>
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
        <nav className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 pb-2 -mt-2 max-w-[calc(100%-200px)]">
          {/* Tagline above nav items */}
          <p className="text-white text-center text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-bold mb-2 whitespace-nowrap">
            Distributor of High Quality Cleaning Solutions
          </p>
          
          {/* Nav items */}
          <div className="flex gap-4 xl:gap-8">
          {/* Products Dropdown */}
          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              className="text-white text-base font-bold hover:opacity-70 transition-opacity select-none flex items-center gap-1"
            >
              <span className={`nav-link ${pathname === '/products' || pathname === '/mildew-stain-remover' || pathname === '/drain-conditioner' ? 'nav-link-active' : ''}`}>
                Products
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {productsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 bg-green-800 rounded-lg shadow-lg overflow-hidden min-w-[220px]"
                >
                  <Link
                    href="/products"
                    className="block px-4 py-3 text-white text-base font-semibold hover:bg-green-700 transition-colors"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/mildew-stain-remover"
                    className="block px-4 py-3 text-white text-base font-semibold hover:bg-green-700 transition-colors"
                  >
                    Mildew Stain Remover
                  </Link>
                  <Link
                    href="/drain-conditioner"
                    className="block px-4 py-3 text-white text-base font-semibold hover:bg-green-700 transition-colors"
                  >
                    Drain Conditioner
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/about"
              className="text-white text-base font-bold hover:opacity-70 transition-opacity select-none"
            >
              <span className={`nav-link ${pathname === '/about' ? 'nav-link-active' : ''}`}>About</span>
            </Link>
          </motion.div>
          <motion.div
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="text-white text-base font-bold hover:opacity-70 transition-opacity select-none"
            >
              <span className={`nav-link ${pathname === '/contact' ? 'nav-link-active' : ''}`}>Contact</span>
            </Link>
          </motion.div>
          </div>
        </nav>

        {/* Call Now Button - Desktop */}
        <motion.a
          href="tel:+14073121732"
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
              {/* Products Section */}
              <div>
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="text-white text-xl font-bold hover:opacity-70 transition-opacity py-2 flex items-center justify-between w-full"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {productsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 pt-2 space-y-2"
                    >
                      <Link
                        href="/mildew-stain-remover"
                        className="block text-white text-lg hover:opacity-70 transition-opacity py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Mildew Stain Remover
                      </Link>
                      <Link
                        href="/drain-conditioner"
                        className="block text-white text-lg hover:opacity-70 transition-opacity py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Drain Conditioner
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                href="tel:+14073121732"
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
