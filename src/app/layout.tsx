import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saidentalsince1999.in"),
  title: {
    default: "Sai Dental since 1999 | Premium Dental Care in Tambaram, Chennai",
    template: "%s | Sai Dental since 1999",
  },
  description:
    "Sai Dental since 1999 is a premium Full Mouth Rehabilitation Centre in Tambaram, Chennai. Experience world-class dental care, implants, and cosmetic dentistry.",
  keywords: [
    "Sai Dental",
    "Sai Dental since 1999",
    "Sai Dental Chennai",
    "Sai Dental Tambaram",
    "Best dentist in Chennai",
    "Best dentist in Tambaram",
    "Dental clinic in West Tambaram",
    "Full mouth rehabilitation Chennai",
    "Dental implants Chennai",
    "Cosmetic dentistry Chennai",
    "Top dental clinic near me",
  ],
  authors: [{ name: "Sai Dental" }],
  creator: "Sai Dental",
  publisher: "Sai Dental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sai Dental since 1999 | Premium Dental Care",
    description: "Experience world-class dental care at our Full Mouth Rehabilitation Centre in Tambaram, Chennai.",
    url: "https://saidentalsince1999.in",
    siteName: "Sai Dental since 1999",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dental since 1999 | Tambaram, Chennai",
    description: "Premium Full Mouth Rehabilitation Centre in Tambaram, Chennai. Book your consultation today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { MobileActionBar } from "@/components/ui/MobileActionBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
