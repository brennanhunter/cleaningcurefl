import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Cleaning Cure for professional cleaning solutions. Serving Volusia County and Florida. Call (407) 312-1732 or email cleaningcurefl@gmail.com.",
};

export default function ContactPage() {
  return <ContactContent />;
}