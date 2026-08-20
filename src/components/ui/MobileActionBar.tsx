"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function MobileActionBar() {
  return (
    <Link
      href="tel:+917200596749"
      className="fixed bottom-6 right-6 z-50 md:hidden w-[60px] h-[60px] rounded-full flex items-center justify-center active:scale-90 transition-transform duration-200"
      aria-label="Call Sai Dental"
      style={{
        background: "linear-gradient(135deg, var(--color-accent-500), var(--color-accent-700))",
        boxShadow: "0 8px 24px rgba(214, 163, 101, 0.45), 0 2px 8px rgba(0,0,0,0.12)",
      }}
    >
      <Phone size={26} color="#fff" strokeWidth={2} />
    </Link>
  );
}
