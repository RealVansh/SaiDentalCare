"use client";

import { motion } from 'framer-motion';
import { Syringe, Orbit, Scissors, Sparkles, Smile, ScanFace } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Syringe,
    name: "Implantology",
    description: "No cut, no bleeding, no discomfort. Immediate crown fixation available.",
    href: "/services#implantology",
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    icon: Sparkles,
    name: "Laser Dentistry",
    description: "No pain, no antibiotics, no suturing. Safe for all ages including pregnancy.",
    href: "/services#laser-dentistry",
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    icon: Scissors,
    name: "Orthodontics",
    description: "By India's top orthodontist with 35 years experience. All modern systems.",
    href: "/services#orthodontics",
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    icon: Orbit,
    name: "Aligners",
    description: "AI-guided, virtually invisible, personalized treatment with 3D simulation.",
    href: "/services#aligners",
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    icon: Smile,
    name: "Smile Designing",
    description: "Correction of alignment, gaps, gummy smiles, and discoloration.",
    href: "/services#smile-designing",
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  },
  {
    icon: ScanFace,
    name: "Crowns & Bridges",
    description: "Digitally scanned & crafted. Premium Zirconia and Ceramic prosthesis.",
    href: "/services#crowns-bridges",
    color: "text-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "group-hover:border-t-accent-400"
  }
];

export const ServicesPreview = () => {
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

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow-label mx-auto">Our Specializations</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mt-4 mb-4">Comprehensive Dental Care</h2>
          <p className="text-neutral-600 text-lg">We offer a full range of advanced dental services under one roof, using state-of-the-art technology to ensure your comfort and safety.</p>
        </div>

        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="w-[85vw] flex-shrink-0 snap-center md:w-auto">
                <Link href={service.href} className="block h-full">
                  <div className={`p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-neutral-100 group border-t-2 border-t-transparent ${service.borderColor}`}>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.bgColor} ${service.color} transition-transform group-hover:scale-110`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">{service.name}</h3>
                    <p className="text-neutral-600 mb-6 flex-grow">{service.description}</p>
                    <div className="text-neutral-500 font-medium flex items-center group-hover:text-neutral-900 transition-colors">
                      Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
