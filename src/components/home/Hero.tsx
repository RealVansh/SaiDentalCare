"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SceneCanvas = dynamic(() => import('@/components/3d/SceneCanvas').then(mod => mod.SceneCanvas), { ssr: false, loading: () => <div className="w-full h-full bg-neutral-100 animate-pulse rounded-2xl" /> });

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-3xl font-heading font-bold gradient-text-gold">
      {count}{suffix}
    </div>
  );
};

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-background to-white flex flex-col justify-center overflow-hidden relative">
      {/* Subtle warm radial glow behind 3D area */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-200/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container flex-grow flex flex-col justify-center py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="eyebrow-label mb-6">
              Full Mouth Rehabilitation Centre
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold gradient-text leading-tight mb-4 pb-2">
              SAI Dental Care
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-heading font-bold text-neutral-600 mb-6">
              <span className="text-accent-600">Your Smile,</span> Our Passion
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed">
              27 years of experienced dentists, guided by science. Comprehensive care, one convenient location.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+917200596749" className="btn-gold text-base px-8 py-3.5 shadow-lg hover:shadow-xl transition-shadow">
                Book Appointment
              </Link>
              <Link href="/services" className="inline-flex justify-center items-center px-8 py-3.5 rounded-full border-2 border-neutral-200 text-neutral-700 font-medium hover:border-accent-400 hover:text-accent-700 transition-all duration-300">
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          <div className="w-full h-[400px] lg:h-[600px] relative flex items-end justify-center">
            {/* Glowing Orb Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-primary-200 to-accent-300 rounded-full blur-[80px] opacity-60 animate-pulse-subtle"></div>
            
            {/* The Doctor Portrait Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-[80%] h-[90%] bg-gradient-to-b from-neutral-200/50 to-neutral-300/80 rounded-t-full border-4 border-b-0 border-white shadow-2xl overflow-hidden flex items-end justify-center"
            >
               {/* This is a visual placeholder for the transparent cutout */}
               <div className="text-center pb-12 opacity-50 px-4">
                 <p className="font-heading font-bold text-neutral-600 text-xl lg:text-2xl mb-2">Doctor Portrait</p>
                 <p className="text-sm font-medium text-neutral-500">(Transparent PNG)</p>
               </div>
               
               {/* Note: When ready, replace the div above with an actual img tag like this: */}
               {/* <img src="/images/doctor-cutout.png" alt="Dr. Nagaraj" className="absolute inset-0 w-full h-full object-cover object-bottom" /> */}
            </motion.div>

            {/* Floating Glass Badge 1: Experience */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-1/4 -right-4 lg:-right-8 z-20 glass-card px-5 py-3.5 rounded-2xl flex items-center gap-4 shadow-xl animate-float"
            >
              <div className="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center text-accent-600 font-bold text-xl shadow-inner">
                27
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-neutral-900 leading-none">Years of</span>
                <span className="text-xs font-medium text-neutral-600 mt-1">Excellence</span>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2: Award */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-1/4 -left-4 lg:-left-8 z-20 glass-card px-5 py-3.5 rounded-2xl flex items-center gap-4 shadow-xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 text-2xl shadow-inner">
                🏆
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-neutral-900 leading-none">Award Winning</span>
                <span className="text-xs font-medium text-neutral-600 mt-1">Dental Care</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 py-8 border-t border-neutral-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-item flex flex-col">
            <Counter end={27} suffix="+" />
            <p className="text-sm text-neutral-600 mt-1 font-medium">Years Experience</p>
          </div>
          <div className="stat-item flex flex-col">
            <Counter end={3} suffix="" />
            <p className="text-sm text-neutral-600 mt-1 font-medium">Generations of Trust</p>
          </div>
          <div className="stat-item flex flex-col">
            <Counter end={12} suffix="+" />
            <p className="text-sm text-neutral-600 mt-1 font-medium">Treatments</p>
          </div>
          <div className="stat-item flex flex-col">
            <Counter end={10} suffix="+" />
            <p className="text-sm text-neutral-600 mt-1 font-medium">Expert Doctors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
