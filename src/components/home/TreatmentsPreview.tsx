"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Syringe, Orbit, Scissors, Sparkles, Smile, ScanFace, X } from 'lucide-react';
import Link from 'next/link';

const treatments = [
  {
    id: "implantology",
    icon: Syringe,
    name: "Implantology",
    description: "Implants for everyone, for any given condition.",
    fullDesc: "We make dental implant process the easiest experience possible. You'll be smiling, speaking and chewing in no time and for years to come.",
    bullets: [
      "Contemporary implants",
      "Minimally invasive",
      "Immediate fixation of crowns",
      "Can be done for medically compromised patients, especially diabetic"
    ],
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    id: "laser-dentistry",
    icon: Sparkles,
    name: "Laser Dentistry",
    description: "No pain, no antibiotics, no suturing. Safe for all ages including pregnancy.",
    fullDesc: "Lasers are modern, safe, and can be used for all ages.",
    bullets: [
      "No pain, no antibiotics, no blood",
      "No suturing required",
      "Quick healing",
      "Can be done during pregnancy"
    ],
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    id: "orthodontics",
    icon: Scissors,
    name: "Orthodontics",
    description: "By India's top orthodontist with 35 years experience. All modern systems.",
    fullDesc: "Done by India's one of the top most orthodontist with 35 years of experience. It's never too late to correct your teeth. Orthodontic treatment not only gives you a more beautiful smile, but can also improve your oral health.",
    bullets: [
      "All types of modernized systems provided",
      "Jaw growth correction between age 6-10 for enhanced facial appearance"
    ],
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    id: "aligners",
    icon: Orbit,
    name: "Aligners",
    description: "AI-guided, virtually invisible, personalized treatment with 3D simulation.",
    fullDesc: "Aligner is a revolutionary teeth alignment that's more discreet than traditional braces.",
    bullets: [
      "Virtually invisible, lightweight, comfortable, removable",
      "Hassle-free and quicker",
      "Customized and personalized treatment plan",
      "AI-guided simulation",
      "Patient can view treatment outcome",
      "3D model demonstrated to analyze outcome from every angle"
    ],
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    id: "smile-designing",
    icon: Smile,
    name: "Smile Designing",
    description: "Correction of alignment, gaps, gummy smiles, and discoloration.",
    fullDesc: "Involves correction of alignment, tooth gaps, missing teeth, gummy smiles, tooth discoloration. Midline space closure with veneer or fillings are done based on patient's requirement.",
    bullets: [],
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    id: "crowns-bridges",
    icon: ScanFace,
    name: "Crowns & Bridges",
    description: "Digitally scanned & crafted. Premium Zirconia and Ceramic prosthesis.",
    fullDesc: "Digitally scanned and digitally crafted crowns and bridges are fabricated. We provide premium quality Zirconia and Ceramic prosthesis matching global standards.",
    bullets: [],
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  }
];

export const TreatmentsPreview = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const selectedTreatment = treatments.find(t => t.id === expandedId);

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow-label mx-auto">Our Specializations</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mt-4 mb-4">Comprehensive Dental Care</h2>
          <p className="text-neutral-600 text-lg">We offer a full range of advanced dental treatments under one roof, using state-of-the-art technology to ensure your comfort and safety.</p>
        </div>

        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="w-[85vw] flex-shrink-0 snap-center md:w-auto">
                <button onClick={() => setExpandedId(treatment.id)} className="block h-full w-full text-left">
                  <div className={`p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-neutral-100 group border-t-2 border-t-transparent ${treatment.borderColor}`}>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${treatment.bgColor} ${treatment.color} transition-transform group-hover:scale-110`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">{treatment.name}</h3>
                    <p className="text-neutral-600 mb-6 flex-grow">{treatment.description}</p>
                    <div className="text-neutral-500 font-medium flex items-center group-hover:text-neutral-900 transition-colors">
                      Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-8">
          <Link href="/treatments" className="inline-flex items-center justify-center text-accent-700 font-semibold hover:text-accent-900 transition-colors hover:underline underline-offset-4">
            View All Treatments <span className="ml-2">→</span>
          </Link>
        </div>
      </div>

      {/* Treatment Detail Modal */}
      <AnimatePresence>
        {selectedTreatment && (() => {
          const Icon = selectedTreatment.icon;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
                onClick={() => setExpandedId(null)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto no-scrollbar bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-primary-900/90 to-primary-800/90 backdrop-blur-md p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 relative md:pr-24">
                  <button
                    onClick={() => setExpandedId(null)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-accent-50/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">{selectedTreatment.name}</h3>
                      <p className="text-primary-100 text-base md:text-lg">Premium Dental Care</p>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-0 md:ml-auto">
                    <Link href={`/contact?service=${encodeURIComponent(selectedTreatment.name)}`} className="btn-gold py-2.5 px-6 whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center font-medium">
                      Book Consultation
                    </Link>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 md:p-10">
                  <p className="text-neutral-700 text-lg md:text-xl mb-8 leading-relaxed font-medium">{selectedTreatment.fullDesc}</p>
                  
                  {selectedTreatment.bullets.length > 0 && (
                    <div className="bg-neutral-50/50 rounded-2xl p-6 md:p-8 border border-neutral-100/50 max-w-3xl mx-auto">
                      <h5 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3 border-b border-neutral-200/60 pb-4">
                        <Sparkles className="w-6 h-6 text-accent-500" /> Our Treatment Approach
                      </h5>
                      <ul className="space-y-5">
                        {selectedTreatment.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-500 mt-2 flex-shrink-0 shadow-sm" />
                            <span className="text-neutral-700 font-medium text-lg leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 text-center">
                    <Link href="/treatments" className="inline-flex items-center text-accent-700 font-semibold hover:text-accent-900 transition-colors hover:underline underline-offset-4">
                      Browse All Treatments <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
