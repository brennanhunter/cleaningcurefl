import { Metadata } from "next";
import MildewContent from "./MildewContent";

export const metadata: Metadata = {
  title: "Mildew Stain Remover - Professional Grade Formula",
  description: "Instantly remove mildew stains from bathroom tile, grout, boats, patio furniture, and more. Professional-grade mildew stain remover that works without scrubbing. Perfect for Florida's humid climate.",
  keywords: ["mildew stain remover", "mildew removal", "how to remove mildew stains", "bathroom mildew cleaner", "boat mildew cleaner", "florida mildew", "cleaning cure mildew"],
};

export default function MildewStainRemoverPage() {
  return <MildewContent />;
}
