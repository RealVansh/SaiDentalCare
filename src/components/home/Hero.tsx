"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = easeOutExpo(step / steps);
            setCount(Math.round(end * progress));
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-heading font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const Hero = () => {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-background to-white flex flex-col overflow-hidden relative">
      
      {/* ── Layered background effects ── */}
      {/* Warm radial glow — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-accent-200/25 rounded-full blur-[100px] pointer-events-none" />
      {/* Secondary glow — top right */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-primary-100/40 rounded-full blur-[80px] pointer-events-none" />
      {/* Tertiary glow — bottom left */}
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-accent-100/30 rounded-full blur-[60px] pointer-events-none" />

      <div className="section-container flex-grow flex flex-col justify-center items-center py-12 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >

          {/* ── "SAI Dental" — top ── */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold gradient-text leading-tight mb-6">
            SAI Dental
          </motion.h1>

          {/* ── Logo Centerpiece with floating badges ── */}
          <motion.div 
            variants={itemVariants}
            className="relative my-4 md:my-6"
          >
            {/* Decorative gold ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border border-accent-300/30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] md:w-[365px] md:h-[365px] lg:w-[405px] lg:h-[405px] rounded-full border border-accent-200/15 pointer-events-none" />

            {/* Glowing orb behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-tr from-accent-200/40 to-accent-300/30 rounded-full blur-[60px] animate-pulse-subtle" />

            {/* The Gold Logo */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 animate-float z-10">
              <Image
                src="/images/gold-logo-transparent.png"
                alt="SAI Dental Gold Logo"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(214,163,101,0.25)]"
                priority
              />
            </div>

            {/* ── Floating Badge: Ethics — top-left ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-3 -left-16 md:-left-24 z-20 glass-card px-5 py-2.5 rounded-2xl shadow-xl animate-float"
            >
              <span className="font-heading font-bold text-accent-600 tracking-wide text-sm">Ethics</span>
            </motion.div>

            {/* ── Floating Badge: Excellence — top-right ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-3 -right-16 md:-right-28 z-20 glass-card px-5 py-2.5 rounded-2xl shadow-xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <span className="font-heading font-bold text-accent-600 tracking-wide text-sm">Excellence</span>
            </motion.div>

            {/* ── Floating Badge: Experience — bottom-center ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 glass-card px-5 py-2.5 rounded-2xl shadow-xl animate-float"
              style={{ animationDelay: '2s' }}
            >
              <span className="font-heading font-bold text-accent-600 tracking-wide text-sm">Experience</span>
            </motion.div>
          </motion.div>

          {/* ── "SINCE 1999" — below logo ── */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6 mb-3">
            <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-accent-400" />
            <span className="text-lg md:text-xl font-medium tracking-[0.25em] text-accent-600 uppercase">
              SINCE 1999
            </span>
            <span className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-accent-400" />
          </motion.div>

          {/* ── "Full Mouth Rehabilitation Centre" — below since 1999 ── */}
          <motion.span variants={itemVariants} className="eyebrow-label mb-8">
            Full Mouth Rehabilitation Centre
          </motion.span>
          
          {/* ── Description ── */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl leading-relaxed px-4">
            <span className="font-semibold text-neutral-900">Close to three decades</span> of experienced dentists, guided by science. Comprehensive care, one convenient location.
          </motion.p>
          
          {/* ── Action Buttons ── */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <Link href="tel:+917200596749" className="btn-gold text-base px-8 py-3.5 shadow-lg hover:shadow-xl transition-shadow">
              Book Appointment
            </Link>
            <Link href="/treatments" className="inline-flex justify-center items-center px-8 py-3.5 rounded-full border-2 border-neutral-200 text-neutral-700 font-medium hover:border-accent-400 hover:text-accent-700 transition-all duration-300">
              Our Treatments
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats Strip ── */}
      <motion.div
        className="section-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 py-8 border-t border-neutral-200 text-center md:text-left relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="stat-item flex flex-col items-center md:items-start">
          <Counter end={27} suffix="+" />
          <p className="text-sm text-neutral-600 mt-1 font-medium">Years Experience</p>
        </div>
        <div className="stat-item flex flex-col items-center md:items-start">
          <Counter end={3} />
          <p className="text-sm text-neutral-600 mt-1 font-medium">Generations of Trust</p>
        </div>
        <div className="stat-item flex flex-col items-center md:items-start">
          <Counter end={10} suffix="+" />
          <p className="text-sm text-neutral-600 mt-1 font-medium">Expert Doctors</p>
        </div>
      </motion.div>
    </section>
  );
};
