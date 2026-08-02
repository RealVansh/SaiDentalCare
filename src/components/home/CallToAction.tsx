"use client";

import Link from 'next/link';

export const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-8 bg-gradient-to-br from-primary-900 via-primary-800 to-[#1a1510] grain-overlay">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      {/* Warm gold radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-primary-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          Book your consultation today. From front desk to the dental chair, you are in good hands.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="tel:+917200596749" className="btn-gold w-full sm:w-auto px-8 py-4 text-base hover:scale-105 transform duration-200">
            📞 Call: 72005 96749
          </Link>
          <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full border-2 border-accent-500/50 text-white font-bold hover:border-accent-400 hover:bg-accent-500/10 transition-all hover:scale-105 transform duration-200">
            📅 Request Appointment
          </Link>
        </div>
        
        <p className="text-primary-300 text-sm font-medium">
          ⏰ Mon – Sat: 10:30 AM – 1:00 PM | 5:30 PM – 8:00 PM
        </p>
      </div>
    </section>
  );
};
