"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const AboutPreview = () => {
  const points = [
    "27 years of trusted clinical excellence",
    "3 generations of loyal patients",
    "German-trained implantologist",
    "Latest laser & digital scanning technology"
  ];

  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Main image with floating frame */}
            <div className="floating-frame">
              <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden relative shadow-xl bg-neutral-100">
                <Image 
                  src="/images/clinic/room1.jpg" 
                  alt="State of the art treatment room" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Secondary image — offset behind for layered collage */}
            <div className="absolute -bottom-8 -right-4 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <Image 
                src="/images/clinic/reception.jpg" 
                alt="SAI Dental since 1999 reception" 
                fill 
                className="object-cover"
                sizes="200px"
              />
            </div>
            
            {/* Floating decorative badge */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-accent-200 hidden md:block animate-float gold-glow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white font-bold text-xl">
                  27
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">Years of</p>
                  <p className="text-xs text-neutral-500">Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-label mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mt-4 mb-6">Why Choose SAI Dental since 1999?</h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Our mission and passion is all about ensuring patient comfort and delivering outstanding results that are functional, esthetic, and long lasting.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-500 flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-neutral-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-gold text-base">
              Meet Our Team <span className="ml-2">→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
