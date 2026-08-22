"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  Shield, 
  Smile,
  Target,
  ArrowRight,
  X
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedServiceId && stageRef.current) {
      setTimeout(() => {
        stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [expandedServiceId]);

  const serviceCategories = [
    {
      title: "Surgical & Restorative",
      services: [
        {
          id: "implantology",
          title: "Implantology",
          desc: "Implants for everyone, for any given condition. You'll be smiling, speaking and chewing in no time.",
          fullDesc: "We make dental implant process the easiest experience possible. You'll be smiling, speaking and chewing in no time and for years to come.",
          bullets: [
            "Contemporary implants",
            "Minimally invasive",
            "Immediate fixation of crowns",
            "Can be done for medically compromised patients, especially diabetic"
          ]
        },
        {
          id: "root-canal",
          title: "Root Canal Treatment",
          desc: "Saving severely damaged or infected teeth with precision care, alleviating pain and preserving your natural teeth.",
          fullDesc: "Root canals are specialized procedure aimed at saving severely damaged or infected teeth. We perform root canal procedure with precision and care, alleviating pain and preserving your natural teeth.",
          bullets: []
        }
      ]
    },
    {
      title: "Cosmetic & Alignment",
      services: [
        {
          id: "smile-designing",
          title: "Smile Designing",
          desc: "Correction of alignment, gaps, gummy smiles, and discoloration for the perfect smile.",
          fullDesc: "Involves correction of alignment, tooth gaps, missing teeth, gummy smiles, tooth discoloration. Midline space closure with veneer or fillings are done based on patient's requirement.",
          bullets: []
        },
        {
          id: "crowns-bridges",
          title: "Crowns & Bridges",
          desc: "Digitally scanned and crafted. Premium Zirconia and Ceramic prosthesis matching global standards.",
          fullDesc: "Digitally scanned and digitally crafted crowns and bridges are fabricated. We provide premium quality Zirconia and Ceramic prosthesis matching global standards.",
          bullets: []
        },
        {
          id: "orthodontics",
          title: "Orthodontics",
          desc: "By India's top orthodontist with 35 years experience. All modern systems available.",
          fullDesc: "Done by India's one of the top most orthodontist with 35 years of experience. It's never too late to correct your teeth. Orthodontic treatment not only gives you a more beautiful smile, but can also improve your oral health.",
          bullets: [
            "All types of modernized systems provided",
            "Jaw growth correction between age 6-10 for enhanced facial appearance"
          ]
        },
        {
          id: "aligners",
          title: "Aligners",
          desc: "AI-guided, virtually invisible, personalized treatment with 3D simulation preview.",
          fullDesc: "Aligner is a revolutionary teeth alignment that's more discreet than traditional braces.",
          bullets: [
            "Virtually invisible, lightweight, comfortable, removable",
            "Hassle-free and quicker",
            "Customized and personalized treatment plan",
            "AI-guided simulation",
            "Patient can view treatment outcome",
            "3D model demonstrated to analyze outcome from every angle"
          ]
        }
      ]
    },
    {
      title: "Preventive Care",
      services: [
        {
          id: "deep-caries",
          title: "Deep Caries Management",
          desc: "Arresting decay while preserving tooth vitality, avoiding root canal wherever possible.",
          fullDesc: "We aim in arresting the decay, while preserving tooth vitality by avoiding root canal treatment wherever possible, thereby extending the life of the tooth.",
          bullets: []
        },
        {
          id: "deep-scaling",
          title: "Deep Scaling",
          desc: "Gentle and thorough cleaning of teeth, gums, and bone — not just aesthetic cleaning.",
          fullDesc: "Involves gentle and thorough cleaning of teeth, gums, bone — not just aesthetic cleaning.",
          bullets: []
        },
        {
          id: "pediatric",
          title: "Pediatric Dentistry",
          desc: "Full mouth pediatric rehabilitation with chair-side anti-anxiety therapy for children.",
          fullDesc: "We at Sai Dental since 1999 specialize in full mouth pediatric rehabilitation and chair-side treatments with anti-anxiety therapy.",
          bullets: []
        }
      ]
    },
    {
      title: "Specialized Care",
      services: [
        {
          id: "laser-dentistry",
          title: "Laser Dentistry",
          desc: "No pain, no antibiotics, no suturing. Safe for all ages including pregnancy.",
          fullDesc: "Lasers are modern, safe, and can be used for all ages.",
          bullets: [
            "No pain, no antibiotics, no blood",
            "No suturing required",
            "Quick healing",
            "Can be done during pregnancy"
          ]
        },
        {
          id: "sedation",
          title: "Sedation Dentistry",
          desc: "Relaxed, comfortable dental procedures designed for patients with dental anxiety.",
          fullDesc: "We at Sai Dental since 1999 understand that dental anxiety can be overwhelming. Our sedation dentistry services are designed to help you feel relaxed and comfortable during your dental procedure.",
          bullets: []
        },
        {
          id: "dentures",
          title: "Dentures",
          desc: "Top-of-the-line materials to restore your ability to chew, speak, and smile confidently.",
          fullDesc: "We provide dentures created with top-of-the-line materials to help restore your ability to chew, speak, and smile.",
          bullets: []
        }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Section 1: Page Hero */}
      <section className="bg-primary-900 grain-overlay pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="section-container text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="gradient-text-gold">Treatments</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto"
          >
            Comprehensive, personalized dental treatments for the whole family.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Treatment Categories */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-24 last:mb-0">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="font-heading text-3xl md:text-4xl font-bold mb-12 pb-4 border-b border-accent-200/50"
              >
                <span className="gradient-text-gold">{category.title}</span>
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, i) => (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    onClick={() => setExpandedServiceId(expandedServiceId === service.id ? null : service.id)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { delay: (i % 3) * 0.1 } }
                    }}
                    className={`group relative rounded-2xl p-8 border border-neutral-100 bg-white hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-accent-300/50 overflow-hidden ${
                      expandedServiceId === service.id
                        ? 'ring-2 ring-accent-500 shadow-lg border-accent-300/50'
                        : expandedServiceId && category.services.some(s => s.id === expandedServiceId)
                          ? 'opacity-40 scale-[0.97]'
                          : ''
                    }`}
                  >
                    {/* Gold top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <h3 className="font-heading text-xl font-bold text-accent-600 mb-3">{service.title}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-5">{service.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 group-hover:text-accent-700 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Glassmorphism Centered Modal for Expanded Service */}
      <AnimatePresence>
        {expandedServiceId && (() => {
          const service = serviceCategories.flatMap(c => c.services).find(s => s.id === expandedServiceId);
          if (!service) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
                onClick={() => setExpandedServiceId(null)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-primary-900/90 to-primary-800/90 backdrop-blur-md p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 relative md:pr-24">
                  <button
                    onClick={() => setExpandedServiceId(null)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1">
                      <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-primary-100 text-base md:text-lg">Premium Dental Care</p>
                    </div>

                  <div className="mt-2 md:mt-0 md:ml-auto">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="btn-gold py-2.5 px-6 whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center font-medium">
                      Book Consultation
                    </Link>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 md:p-10">
                  <p className="text-neutral-700 text-lg md:text-xl mb-10 leading-relaxed font-medium">{service.fullDesc}</p>
                  
                  {service.id === 'root-canal' || service.id === 'deep-caries' || service.id === 'deep-scaling' || service.id === 'pediatric' || service.id === 'sedation' || service.id === 'dentures' ? null : service.id === 'implantology' || service.id === 'orthodontics' || service.id === 'laser-dentistry' ? (
                    <div className="bg-neutral-50/50 rounded-2xl p-6 md:p-8 border border-neutral-100/50 max-w-3xl mx-auto">
                      <h5 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3 border-b border-neutral-200/60 pb-4">
                        <Sparkles className="w-6 h-6 text-accent-500" /> Our Treatment Approach
                      </h5>
                      <ul className="space-y-5">
                        {service.bullets.map((bullet: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-500 mt-2 flex-shrink-0 shadow-sm" />
                            <span className="text-neutral-700 font-medium text-lg leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className={`grid gap-10 ${service.id === 'smile-designing' || service.id === 'crowns-bridges' || service.id === 'aligners' ? 'grid-cols-1 max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
                      {/* How We Do It / Our Treatment Approach */}
                      <div className="bg-neutral-50/50 rounded-2xl p-6 md:p-8 border border-neutral-100/50">
                        <h5 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3 border-b border-neutral-200/60 pb-4">
                          <Sparkles className="w-6 h-6 text-accent-500" /> Our Treatment Approach
                        </h5>
                        <p className="text-neutral-600 mb-6 text-base leading-relaxed">
                          We utilize a systematic, precise approach tailored to your individual anatomy. Using 3D scanning and digital planning, we ensure predictable, beautiful results.
                        </p>
                        {service.bullets.length > 0 && (
                          <ul className="space-y-4">
                            {service.bullets.map((bullet: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0 shadow-sm" />
                                <span className="text-neutral-700 font-medium">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Safety & Tech */}
                      {!(service.id === 'smile-designing' || service.id === 'crowns-bridges' || service.id === 'aligners') && (
                        <div className="bg-neutral-50/50 rounded-2xl p-6 md:p-8 border border-neutral-100/50 flex flex-col">
                          <h5 className="font-heading text-xl font-bold text-neutral-900 mb-5 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-accent-500" /> Safety & Technology
                          </h5>
                          <ul className="space-y-5 mb-8">
                            <li className="flex gap-4">
                              <Sparkles className="w-6 h-6 text-primary-500 flex-shrink-0" />
                              <span className="text-neutral-600 font-medium">Stringent multi-step sterilization protocols surpassing international standards.</span>
                            </li>
                            <li className="flex gap-4">
                              <Smile className="w-6 h-6 text-primary-500 flex-shrink-0" />
                              <span className="text-neutral-600 font-medium">Focus on pain-free procedures utilizing advanced anesthetics and laser technology.</span>
                            </li>
                            <li className="flex gap-4">
                              <Target className="w-6 h-6 text-primary-500 flex-shrink-0" />
                              <span className="text-neutral-600 font-medium">German-engineered equipment for unparalleled precision and durability.</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* Section 3: CTA Banner */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white grain-overlay">
        <div className="section-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 !text-white text-white">Ready to experience the difference at Sai Dental since 1999?</h2>
            <p className="text-primary-200 text-lg mb-8">Book your consultation today and take the first step towards a healthier, brighter smile.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold px-8 py-3 text-base">
                Book an Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="tel:+917200596749" className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-colors">
                Call Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
