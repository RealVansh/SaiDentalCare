"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const doctors = [
  {
    id: "nagaraj",
    name: "Dr. Nagaraj",
    credentials: "BDS, MS (IF Germany)",
    specialty: "Dental Surgeon & Implantologist",
    desc: "Leading expert in advanced implantology and oral surgery with decades of experience. Dr. Nagaraj is renowned for his precision in full mouth rehabilitations.",
    initials: "DN"
  },
  {
    id: "priya",
    name: "Dr. Priya Nagaraj",
    credentials: "BDS, FDS",
    specialty: "Restorative & Laser Dentist",
    desc: "Specializes in smile design, restorative procedures and pain-free laser dentistry for optimal patient comfort.",
    initials: "DP"
  },
  {
    id: "abishek",
    name: "Dr. N.P. Abishek",
    credentials: "BDS (MDS)",
    specialty: "Endodontics & Conservative Dentistry",
    desc: "Dedicated to saving natural teeth through precision endodontics and conservative treatments. Utilizing the latest rotary endodontics and magnification technology. Dr. Abishek brings a gentle touch to every procedure, focusing on minimal intervention and maximizing the preservation of natural tooth structure.",
    initials: "DA"
  }
];

export const DoctorsPreview = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
    <section className="pt-16 pb-8 bg-primary-900 grain-overlay overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="eyebrow-label-light">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold !text-white text-white mt-4 mb-6 md:mb-0">Meet Our Expert Doctors</h2>
          
          <div className="md:hidden flex justify-center items-center text-accent-300 text-xs uppercase tracking-widest font-bold">
             Swipe to explore <span className="ml-2 text-lg">→</span>
          </div>
        </div>

        {/* Mobile: horizontal scroll cards (vertical expand on tap) */}
        <div className="md:hidden">
          <motion.div 
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 mb-8 no-scrollbar -mx-6 px-6 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {doctors.map((doc) => {
              const isExpanded = expandedId === doc.id;
              return (
                <motion.div 
                  key={doc.id} 
                  variants={itemVariants}
                  className="w-[80vw] flex-shrink-0 snap-center"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : doc.id)}
                    className="w-full text-left"
                  >
                    <div className={`bg-white rounded-2xl p-8 text-center border shadow-lg transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'border-accent-300 shadow-2xl ring-2 ring-accent-200/50' : 'border-neutral-100'
                    }`}>
                      <div className={`mx-auto rounded-full bg-gradient-to-br from-accent-400 to-accent-600 mb-6 flex items-center justify-center shadow-lg gold-glow transition-all duration-400 ${
                        isExpanded ? 'w-28 h-28' : 'w-24 h-24'
                      }`}>
                        <span className={`font-heading font-bold text-white ${isExpanded ? 'text-4xl' : 'text-3xl'}`}>{doc.initials}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-900 mb-1">{doc.name}</h3>
                      <p className="text-sm text-neutral-500 mb-3">{doc.credentials}</p>
                      <div className="gold-divider w-12 mx-auto mb-3"></div>
                      <span className="inline-block px-3 py-1 bg-accent-50 text-accent-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                        {doc.specialty}
                      </span>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-neutral-100 text-left">
                              <div className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                                <p className="text-neutral-700 text-base leading-relaxed font-medium">{doc.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop: grid with horizontal expansion */}
        <div className="hidden md:block mb-12">
          <motion.div 
            className="flex gap-6 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {doctors.map((doc) => {
              const isExpanded = expandedId === doc.id;
              const hasExpanded = expandedId !== null;
              const isOther = hasExpanded && !isExpanded;

              return (
                <motion.div
                  key={doc.id}
                  variants={itemVariants}
                  layout
                  animate={{
                    flex: isExpanded ? 2.5 : isOther ? 0.75 : 1,
                    opacity: isOther ? 0.55 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="min-w-0"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : doc.id)}
                    className="w-full text-left h-full"
                  >
                    <div className={`bg-white rounded-2xl h-full border shadow-lg transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? 'border-accent-300 shadow-2xl ring-2 ring-accent-200/50' 
                        : 'border-neutral-100 hover:shadow-xl hover:-translate-y-1'
                    }`}>
                      <div className={`flex h-full ${isExpanded ? 'flex-row items-center' : 'flex-col items-center justify-center'} p-8`}>
                        {/* Avatar + Basic Info */}
                        <div className={`flex flex-col items-center ${isExpanded ? 'pr-8 border-r border-neutral-100 min-w-[200px]' : ''}`}>
                          <div className={`rounded-full bg-gradient-to-br from-accent-400 to-accent-600 mb-4 flex items-center justify-center shadow-lg gold-glow transition-all duration-400 ${
                            isExpanded ? 'w-28 h-28' : 'w-24 h-24'
                          }`}>
                            <span className={`font-heading font-bold text-white transition-all duration-400 ${
                              isExpanded ? 'text-4xl' : 'text-3xl'
                            }`}>{doc.initials}</span>
                          </div>
                          <h3 className={`font-heading font-bold text-neutral-900 mb-1 text-center transition-all duration-300 ${
                            isExpanded ? 'text-xl' : isOther ? 'text-base' : 'text-xl'
                          }`}>{doc.name}</h3>
                          <p className={`text-neutral-500 mb-3 text-center ${isOther ? 'text-xs' : 'text-sm'}`}>{doc.credentials}</p>
                          <div className="gold-divider w-12 mx-auto mb-3"></div>
                          <span className={`inline-block px-3 py-1 bg-accent-50 text-accent-800 font-semibold rounded-full uppercase tracking-wider text-center ${isOther ? 'text-[10px]' : 'text-xs'}`}>
                            {doc.specialty}
                          </span>

                          {/* Collapsed hint */}
                          {!isExpanded && (
                            <div className={`mt-4 flex items-center gap-1 font-medium transition-colors ${
                              isOther ? 'text-neutral-300 text-xs' : 'text-neutral-400 text-sm'
                            }`}>
                              <span>Know more</span>
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>

                        {/* Expanded Description (horizontal) */}
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35, delay: 0.15 }}
                            className="flex-1 pl-8 overflow-hidden"
                          >
                            <div className="min-w-[280px]">
                              <div className="flex items-start gap-3 mb-6">
                                <Award className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                                <p className="text-neutral-700 text-lg leading-relaxed font-medium">{doc.desc}</p>
                              </div>
                              <div className="flex items-center gap-2 text-accent-600 text-sm font-semibold">
                                <span>Tap to collapse</span>
                                <ChevronRight className="w-4 h-4 rotate-180" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-primary-200 mb-4 font-medium">+ 7 more specialists</p>
          <Link href="/about" className="inline-flex items-center justify-center text-accent-400 font-semibold hover:text-accent-300 transition-colors hover:underline underline-offset-4">
            View Full Team <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Separate CTA Section with Light Champagne Gold Theme */}
    <section className="bg-gradient-to-br from-accent-50 via-[#f9f3e9] to-accent-100/60 py-16 relative overflow-hidden border-t border-accent-200">
      {/* Ambient warm gold glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-label mx-auto mb-3">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4 mt-2">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Book your consultation today. From front desk to the dental chair, you are in good hands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="tel:+917200596749" className="btn-gold w-full sm:w-auto px-8 py-3.5 text-base shadow-md hover:shadow-lg">
              📞 Call: 72005 96749
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-full border-2 border-accent-600/40 text-accent-900 font-bold hover:border-accent-600 hover:bg-white/80 transition-all shadow-sm">
              📅 Request Appointment
            </Link>
          </div>
          
          <p className="text-accent-900/70 text-sm font-semibold tracking-wide">
            ⏰ Mon – Sat: 10:00 AM – 1:30 PM | 5:00 PM – 8:30 PM
          </p>
        </motion.div>
      </div>
    </section>
    </>
  );
};
