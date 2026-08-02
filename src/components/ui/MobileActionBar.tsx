"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-accent-200/30 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden safe-area-bottom">
      <div className="flex items-center justify-around p-3 gap-2">
        <Link 
          href="tel:+917200596749" 
          className="flex flex-col items-center justify-center gap-1 text-primary-700 hover:text-primary-800 transition-colors w-1/3"
        >
          <Phone size={22} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </Link>
        
        <Link 
          href="https://wa.me/917200596749" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#25D366] hover:text-[#128C7E] transition-colors w-1/3"
        >
          <MessageCircle size={22} />
          <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
        </Link>
        
        <Link 
          href="/contact" 
          className="flex flex-col items-center justify-center gap-1 btn-gold rounded-lg py-2.5 w-1/3"
        >
          <Calendar size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Book</span>
        </Link>
      </div>
    </div>
  );
}
