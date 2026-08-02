"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ScanLine, Scan, HeartPulse, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FacilitiesStickyScroll } from "@/components/about/FacilitiesStickyScroll";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [expandedDoctorId, setExpandedDoctorId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedDoctorId && stageRef.current) {
      setTimeout(() => {
        stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [expandedDoctorId]);

  const principalDoctors = [
    {
      id: "nagaraj",
      name: "Dr. Nagaraj",
      creds: "BDS, MS (IF Germany)",
      role: "Dental Surgeon & Implantologist",
      desc: "Leading expert in advanced implantology and oral surgery with decades of experience. Dr. Nagaraj is renowned for his precision in full mouth rehabilitations and guided implant surgeries. His philosophy centers around restoring not just function, but the confidence of his patients.",
      initials: "DN"
    },
    {
      id: "priya",
      name: "Dr. Priya Nagaraj",
      creds: "BDS, FDS",
      role: "Restorative & Laser Dentist",
      desc: "Specializes in restorative procedures and pain-free laser dentistry for optimal patient comfort. Dr. Priya brings a gentle touch to every procedure, focusing on minimal intervention and maximizing the preservation of natural tooth structure.",
      initials: "DP"
    },
    {
      id: "abishek",
      name: "Dr. N.P. Abishek",
      creds: "BDS (MDS)",
      role: "Endodontics & Conservative Dentistry",
      desc: "Dedicated to saving natural teeth through precision endodontics and conservative treatments. Utilizing the latest rotary endodontics and magnification technology, Dr. Abishek ensures root canal therapies are highly successful and painless.",
      initials: "DA"
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
            About <span className="gradient-text-gold">SAI Dental Care</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto"
          >
            Full Mouth Rehabilitation Centre — Since 1999
          </motion.p>
        </div>
      </section>

      {/* Section 2: Our Story / Mission */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="rounded-2xl aspect-square overflow-hidden relative shadow-lg bg-neutral-100"
            >
              <Image 
                src="/images/clinic/reception.jpg" 
                alt="SAI Dental Care Reception" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Mission
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our mission and passion is all about ensuring patient comfort and delivering outstanding results that are functional, esthetic, and long lasting. We use the latest of technology and in giving back to the community through our philanthropic work.
              </motion.p>
              <motion.div variants={fadeInUp} className="pl-6 border-l-4 border-primary-500 italic text-xl text-neutral-700 py-2">
                "From front desk to the dental chair, you can rest assured that you are in good hands."
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Full Team Section */}
      <section className="section-padding bg-neutral-50">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Expert care from our highly qualified dental professionals.</p>
          </motion.div>

          {/* Principal Doctors */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl font-bold text-neutral-800 mb-6 text-center">Principal Doctors</h3>
            
            <div className="md:hidden flex justify-end items-center text-accent-500 text-xs uppercase tracking-widest font-bold mb-4 pr-6">
               Swipe to explore <span className="ml-2 text-lg">→</span>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
              {principalDoctors.map((doc, i) => (
                <div
                  key={doc.id}
                  onClick={() => setExpandedDoctorId(prev => prev === doc.id ? null : doc.id)}
                  className={`w-[85vw] flex-shrink-0 snap-center md:w-auto glass-card rounded-2xl p-8 text-center flex flex-col items-center cursor-pointer hover:shadow-lg transition-all ${
                    expandedDoctorId && expandedDoctorId !== doc.id ? 'opacity-40 scale-[0.97]' : ''
                  } ${expandedDoctorId === doc.id ? 'ring-2 ring-accent-500 shadow-lg' : ''}`}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-3xl font-bold text-primary-700 mb-6 flex-shrink-0">
                    {doc.initials}
                  </div>
                  <h4 className="font-heading text-xl font-bold text-neutral-900 mb-1">{doc.name}</h4>
                  <p className="text-sm text-neutral-500 mb-3">{doc.creds}</p>
                  <span className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {doc.role}
                  </span>
                  <p className="text-neutral-600 text-sm line-clamp-3">{doc.desc}</p>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {expandedDoctorId && (() => {
                const doc = principalDoctors.find(d => d.id === expandedDoctorId);
                if (!doc) return null;
                return (
                  <motion.div
                    ref={stageRef}
                    key={doc.id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 bg-white rounded-2xl border border-neutral-200 shadow-lg p-8 md:p-10 flex flex-col md:flex-row gap-8">
                      {/* Left: Avatar + info */}
                      <div className="md:w-1/3 flex flex-col items-center text-center">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-4xl font-bold text-primary-700 mb-4">
                          {doc.initials}
                        </div>
                        <h4 className="font-heading text-2xl font-bold text-neutral-900 mb-1">{doc.name}</h4>
                        <p className="text-sm text-neutral-500 mb-3">{doc.creds}</p>
                        <span className="inline-block bg-accent-50 text-accent-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                          {doc.role}
                        </span>
                      </div>
                      {/* Right: Bio + expertise + CTA */}
                      <div className="md:w-2/3 relative">
                        <button
                          onClick={() => setExpandedDoctorId(null)}
                          className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-500 hover:text-neutral-900"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <h5 className="text-lg font-heading font-bold text-neutral-900 mb-4">About the Doctor</h5>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                          {doc.desc}
                        </p>
                        <div className="bg-neutral-50 rounded-xl p-5 mb-6 border border-neutral-100">
                          <h6 className="font-semibold text-neutral-900 mb-2">Areas of Expertise</h6>
                          <ul className="text-neutral-600 text-sm space-y-2 list-disc list-inside">
                            <li>Comprehensive Treatment Planning</li>
                            <li>Advanced Diagnostics & Consultations</li>
                            <li>Patient-centric Gentle Care</li>
                          </ul>
                        </div>
                        <Link href="/contact" className="btn-gold px-6 py-3 inline-flex">
                          Book Consultation
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Associate Doctors */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl font-bold text-neutral-800 mb-8 text-center">Associate Doctors</h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:flex-wrap justify-start md:justify-center md:gap-8 md:overflow-visible md:snap-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
              {[
                { name: "Dr. Abhirami", creds: "BDS", initials: "DA" },
                { name: "Dr. Abarna Shivani", creds: "BDS", initials: "DS" }
              ].map((doc, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                  }}
                  className="w-[70vw] snap-center flex-shrink-0 md:w-64 glass-card rounded-xl p-6 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-xl font-bold text-neutral-600 mb-4">
                    {doc.initials}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-neutral-900 mb-1">{doc.name}</h4>
                  <p className="text-sm text-neutral-500">{doc.creds}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialty Consultants */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-neutral-800 mb-8 text-center">Specialty Consultants</h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:flex-wrap justify-start md:justify-center md:gap-6 md:overflow-visible md:snap-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
              {[
                { name: "Dr. R.V. Murali", creds: "MDS", role: "Orthodontist", initials: "RM" },
                { name: "Dr. Hariharan", creds: "MDS", role: "Pedodontist", initials: "DH" },
                { name: "Dr. Manikandan", creds: "MDS", role: "Pedodontist", initials: "DM" },
                { name: "Dr. Karthikeyan", creds: "MDS", role: "Periodontist", initials: "DK" },
                { name: "Dr. A.R. Saravanan", creds: "MD", role: "Anaesthetist", initials: "AS" },
              ].map((doc, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                  }}
                  className="w-[60vw] snap-center flex-shrink-0 md:w-56 bg-white border border-neutral-200 rounded-lg p-5 text-center hover:shadow-md transition-shadow"
                >
                  <h4 className="font-heading text-base font-bold text-neutral-900 mb-1">{doc.name}</h4>
                  <p className="text-xs text-neutral-500 mb-2">{doc.creds}</p>
                  <span className="text-xs font-medium text-accent-600">{doc.role}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Facilities */}
      <FacilitiesStickyScroll facilities={[
        {
          title: "Ortho Pantamogram (OPG)",
          desc: "Complete dental imaging in-house for accurate diagnosis and treatment planning. Experience instant, low-radiation panoramic scans of your entire jaw.",
          image: "/images/facilities/opg.jpeg"
        },
        {
          title: "Intra-oral Scanner",
          desc: "Digital impressions ensuring precision results and eliminating messy traditional molds. See your new smile in 3D before treatment even begins.",
          image: "/images/facilities/intra-oral-scanner.jpg"
        },
        {
          title: "Chair-side Sedation Unit",
          desc: "Comfortable sedation options for completely anxiety-free treatments. We prioritize your peace of mind with advanced monitoring systems.",
          image: "/images/facilities/sedation-unit.jpg"
        }
      ]} />

      {/* Section 5: CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white grain-overlay">
        <div className="section-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 !text-white text-white">Ready to experience the SAI Dental difference?</h2>
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
