import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: {
    default: "Cleaning Cure | Professional Cleaning Solutions in Florida",
    template: "%s | Cleaning Cure"
  },
  description: "The Cleaning Cure provides professional-grade cleaning solutions for Florida's hospitality and commercial industries. Bulk cleaning products, wholesale cleaning supplies, mildew stain removers and drain conditioners that work.",
  keywords: ["cleaning cure", "the cleaning cure", "cleaning cure florida", "bulk cleaning products", "wholesale cleaning supplies", "bulk cleaning supplies", "commercial cleaning products bulk", "mildew stain remover", "drain conditioner", "florida cleaning products", "mildew removal", "drain opener", "commercial cleaning", "hospitality cleaning", "bulk cleaner", "wholesale cleaning products florida"],
  authors: [{ name: "Cleaning Cure" }],
  openGraph: {
    title: "Cleaning Cure | Professional Cleaning Solutions in Florida",
    description: "Professional-grade cleaning solutions for Florida's hospitality and commercial industries. Bulk cleaning products available.",
    url: "https://cleaningcurefl.com",
    siteName: "Cleaning Cure",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} font-sans antialiased overflow-x-hidden cursor-default`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
