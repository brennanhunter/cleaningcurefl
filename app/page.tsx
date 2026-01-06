import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import SmokeShow from "./SmokeShow";
import TrustBuilding from "./components/TrustBuilding";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-between p-8 gap-16">
        {/* Left section with SmokeShow and logo */}
        <div className="relative w-[1000px] h-[700px] overflow-hidden flex-shrink-0">
          <SmokeShow />
          <div className="absolute inset-0 z-10 flex items-center justify-center p-8 pointer-events-none">
            <Image
              src="/logos/logo-transparentbg.png"
              alt="Cleaning Cure FL Logo"
              width={600}
              height={600}
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right section with content */}
        <div className="flex-1 text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-12 leading-tight">
            High Quality Cleaning Solutions Made in Florida, for Floridians
          </h1>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-xl">
                Family Business Supporting Main Street
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-xl">
                High Quality Products at Great Prices
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-xl">
                Trustworthy & Reliable with Direct Support From Owners
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-500 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Building Section */}
      <TrustBuilding />
    </>
  );
}
