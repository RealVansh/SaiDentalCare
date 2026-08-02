"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Filter categories
const categories = ["All", "Clinic", "Equipment", "Team", "Procedures"];

// Dummy data for gallery
const galleryItems = [
  { id: 1, category: "Clinic", title: "Reception", aspect: "aspect-[3/4]", image: "/images/clinic/reception.jpg" },
  { id: 2, category: "Clinic", title: "Waiting Lounge", aspect: "aspect-video", image: "/images/clinic/waiting-area.jpg" },
  { id: 3, category: "Clinic", title: "Treatment Room 1", aspect: "aspect-[4/3]", image: "/images/clinic/room1.jpg" },
  { id: 13, category: "Clinic", title: "Treatment Room 2", aspect: "aspect-square", image: "/images/clinic/room2.jpg" },
  { id: 14, category: "Clinic", title: "Treatment Room 3", aspect: "aspect-[3/4]", image: "/images/clinic/room3.jpg" },
  { id: 15, category: "Clinic", title: "Treatment Room 4", aspect: "aspect-video", image: "/images/clinic/room4.jpg" },
  { id: 4, category: "Equipment", title: "Ortho Pantamogram (OPG)", aspect: "aspect-[4/3]", image: "/images/facilities/opg.jpg" },
  { id: 5, category: "Equipment", title: "Intra-oral Scanner", aspect: "aspect-[4/3]", image: "/images/facilities/intra-oral-scanner.jpg" },
  { id: 6, category: "Equipment", title: "Chair-side Sedation Unit", aspect: "aspect-[4/3]", image: "/images/facilities/sedation-unit.jpg" },
  { id: 7, category: "Team", title: "Dr. SAI Team", aspect: "aspect-video", gradient: "from-accent-50 to-accent-100" },
  { id: 8, category: "Team", title: "Dental Assistants", aspect: "aspect-square", gradient: "from-primary-50 to-primary-100" },
  { id: 9, category: "Team", title: "Specialists Consult", aspect: "aspect-[3/4]", gradient: "from-accent-50 to-accent-100" },
  { id: 10, category: "Procedures", title: "Smile Design Result", aspect: "aspect-square", gradient: "from-primary-50 to-primary-100" },
  { id: 11, category: "Procedures", title: "Implant Placement", aspect: "aspect-video", gradient: "from-accent-50 to-accent-100" },
  { id: 12, category: "Procedures", title: "Aligners Setup", aspect: "aspect-[4/3]", gradient: "from-primary-50 to-primary-100" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

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
          
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-10 gap-3 md:justify-center scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === category 
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/20' 
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:border-accent-300 hover:text-accent-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 bg-white break-inside-avoid`}
                >
                  {/* Placeholder or Actual Image */}
                  <div className={`w-full ${item.image ? '' : 'bg-gradient-to-br'} ${item.gradient || ''} ${item.aspect} flex flex-col items-center justify-center p-6 text-center relative`}>
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    ) : (
                      <>
                        <Camera className="w-10 h-10 text-neutral-400 mb-3 opacity-50" />
                        <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{item.category}</span>
                        <h3 className="text-xl font-bold font-heading text-neutral-800 mt-1">{item.title}</h3>
                      </>
                    )}
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

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Want to see our clinic in person?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            Experience our premium facilities and advanced dental care firsthand.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-full font-semibold hover:bg-primary-50 transition-colors shadow-xl shadow-black/10 hover:scale-105 duration-300">
            <Calendar className="w-5 h-5" />
            Book a Visit Today
          </Link>
        </div>
      </section>
    </main>
  );
}
