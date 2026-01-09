import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - Professional Cleaning Solutions",
  description: "Cleaning Cure provides professional-grade cleaning solutions for Florida's hospitality and commercial industries. Quality products you can trust.",
};

export default function AboutPage() {
  return <AboutContent />;
}
