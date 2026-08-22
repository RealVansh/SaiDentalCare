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
    default: "Sai Dental since 1999 — Premium Dental Clinic",
    template: "%s | Sai Dental since 1999",
  },
  description:
    "Experience world-class dental care with cutting-edge technology and a gentle touch. Sai Dental since 1999 offers comprehensive dental treatments in a comfortable, modern environment.",
  keywords: [
    "dental clinic",
    "dentist",
    "dental care",
    "cosmetic dentistry",
    "orthodontics",
    "dental implants",
  ],
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
