import { Metadata } from "next";
import DrainContent from "./DrainContent";

export const metadata: Metadata = {
  title: "Drain Opener & Conditioner - Fast-Acting Non-Acid Formula",
  description: "Professional non-acid drain opener that quickly dissolves grease, hair, and soap scum. Safe for pipes, perfect for kitchens, bathrooms, and commercial facilities. Keep drains blockage-free.",
  keywords: ["drain opener", "drain conditioner", "clogged drain", "drain cleaner", "non-acid drain opener", "commercial drain cleaner", "how to unclog drain", "cleaning cure drain"],
};

export default function DrainConditionerPage() {
  return <DrainContent />;
}
