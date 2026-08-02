"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const doctors = [
  {
    name: "Dr. Nagaraj",
    credentials: "BDS, MS (IF Germany)",
    specialty: "Dental Surgeon & Implantologist",
    initials: "DN"
  },
  {
    name: "Dr. Priya Nagaraj",
    credentials: "BDS, FDS",
    specialty: "Restorative & Laser Dentist",
    initials: "DP"
  },
  {
    name: "Dr. N.P. Abishek",
    credentials: "BDS (MDS)",
    specialty: "Endodontics & Conservative Dentistry",
    initials: "DA"
  }
];

export const DoctorsPreview = () => {
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
          
          <div className="md:hidden flex justify-end items-center text-accent-300 text-xs uppercase tracking-widest font-bold pr-6">
             Swipe to explore <span className="ml-2 text-lg">→</span>
          </div>
        </div>

        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 mb-8 md:grid md:grid-cols-3 md:gap-8 md:mb-12 md:overflow-visible md:snap-none no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {doctors.map((doc, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="w-[80vw] flex-shrink-0 snap-center md:w-auto bg-white rounded-2xl p-8 text-center border border-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent-400 to-accent-600 mb-6 flex items-center justify-center shadow-lg gold-glow group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-heading font-bold text-white">{doc.initials}</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-1">{doc.name}</h3>
              <p className="text-sm text-neutral-500 mb-3">{doc.credentials}</p>
              <div className="gold-divider w-12 mx-auto mb-3"></div>
              <span className="inline-block px-3 py-1 bg-accent-50 text-accent-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                {doc.specialty}
              </span>
            </motion.div>
          ))}
        </motion.div>

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
            ⏰ Mon – Sat: 10:30 AM – 1:00 PM | 5:30 PM – 8:00 PM
          </p>
        </motion.div>
      </div>
    </section>
    </>
  );
};
