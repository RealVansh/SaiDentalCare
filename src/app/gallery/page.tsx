"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Actual gallery images (renamed to completely bust cache)
const galleryItems = [
  { id: 2, title: "Reception Area", aspect: "aspect-[4/3]", image: "/images/clinic/clinic-reception.jpg" },
  { id: 1, title: "Waiting Lounge", aspect: "aspect-[4/3]", image: "/images/clinic/clinic-waiting.jpg" },
  { id: 3, title: "Treatment Room 1", aspect: "aspect-[4/3]", image: "/images/clinic/treatment-room-1.jpg" },
  { id: 4, title: "Treatment Room 2", aspect: "aspect-[4/3]", image: "/images/clinic/treatment-room-2.jpg" },
  { id: 5, title: "Treatment Room 3", aspect: "aspect-[4/3]", image: "/images/clinic/treatment-room-3.jpg" },
  { id: 6, title: "Treatment Room 4", aspect: "aspect-[4/3]", image: "/images/clinic/treatment-room-4.jpg" }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 grain-overlay">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Our <span className="gradient-text-gold">Clinic</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto font-body">
            State-of-the-art facilities designed for your comfort and safety.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="section-container">
          
          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 bg-white cursor-pointer"
                >
                  {/* Actual Image */}
                  <div className={`w-full ${item.aspect} relative`}>
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-6 py-2 bg-white/20 text-white border border-white/40 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Image
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent-500 transition-colors z-[110] bg-black/50 p-2 rounded-full"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[4/3] max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Enlarged view" 
                fill 
                className="object-contain bg-black/50"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Experience Our Facilities?</h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Book a consultation today and see why thousands of patients trust Sai Dental since 1999 for their smiles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-3 rounded-full text-base font-bold shadow-lg shadow-accent-600/20">
              Book Appointment
              <Calendar className="w-4 h-4 ml-2 inline-block" />
            </Link>
            <Link href="tel:+917200596749" className="px-8 py-3 rounded-full text-base font-bold border-2 border-primary-700 hover:bg-primary-800 transition-colors">
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
