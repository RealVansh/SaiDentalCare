"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface Facility {
  title: string;
  desc: string;
  image: string;
}

export const FacilitiesStickyScroll = ({ facilities }: { facilities: Facility[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Each item gets 150vh of scroll. The middle 60% is a "dwell zone" where
  // the index stays locked, so accidental scrolls don't skip items.
  const VH_PER_ITEM = 150;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const sectionTop = -rect.top;
          const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

          if (sectionTop < 0 || sectionTop > sectionHeight) {
            ticking = false;
            return;
          }

          const progress = Math.min(Math.max(sectionTop / sectionHeight, 0), 1);
          const index = Math.min(
            Math.floor(progress * facilities.length),
            facilities.length - 1
          );

          setActiveIndex(index);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [facilities.length]);

  const handleItemClick = (index: number) => {
    if (!sectionRef.current) return;
    const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const progress = (index + 0.5) / facilities.length; // Land in the middle of the segment
    const targetScrollY = sectionRef.current.offsetTop + progress * sectionHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <>
    <section
      ref={sectionRef}
      style={{ height: `${facilities.length * 150}vh` }}
      className="relative w-full hidden md:block"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Blurred background — using a separate div with backdrop approach */}
        <div className="absolute inset-0 -m-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{ filter: "blur(40px) brightness(0.4) saturate(1.4)", transform: "scale(1.15)" }}
            >
              <Image
                src={facilities[activeIndex].image}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority
                aria-hidden="true"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Extra overlay for depth */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">

            {/* Desktop layout */}
            <div className="hidden md:flex items-center gap-12 lg:gap-20">

              {/* Left: Text */}
              <div className="w-1/2 lg:w-5/12 flex flex-col">

                {/* Section title */}
                <h2 className="text-lg lg:text-xl font-bold uppercase tracking-[0.2em] text-accent-500 mb-8">State-of-the-Art Facilities</h2>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-8">
                  {facilities.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleItemClick(index)}
                      className="group flex items-center gap-2 cursor-pointer focus:outline-none"
                      aria-label={`View facility ${index + 1}`}
                    >
                      <div className="relative">
                        {activeIndex === index && (
                          <motion.div
                            layoutId="dotRing"
                            className="absolute -inset-1.5 rounded-full border-2 border-accent-500"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                        <div
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                            activeIndex === index
                              ? "bg-accent-500"
                              : index < activeIndex
                              ? "bg-white/50"
                              : "bg-white/25 group-hover:bg-white/40"
                          }`}
                        />
                      </div>
                    </button>
                  ))}
                  <span className="ml-3 text-xs font-medium tracking-widest uppercase text-white/40">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(facilities.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="min-h-[100px] relative w-full mb-5">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`title-${activeIndex}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.1] tracking-tight"
                    >
                      {facilities[activeIndex].title}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                {/* Description */}
                <div className="min-h-[70px] relative w-full">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`desc-${activeIndex}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="text-lg lg:text-xl leading-relaxed text-white/70 max-w-md"
                    >
                      {facilities[activeIndex].desc}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right: Clean image */}
              <div className="w-1/2 lg:w-7/12 flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] max-w-2xl rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`img-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={facilities[activeIndex].image}
                        alt={facilities[activeIndex].title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Mobile Vertical Stack */}
    <section className="w-full md:hidden py-16 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 to-black"></div>
      <div className="relative z-10 max-w-sm mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-500 text-center mb-10">State-of-the-Art Facilities</h2>
        
        <div className="flex flex-col gap-12">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center gap-5"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                  {facility.title}
                </h3>
                <p className="text-base leading-relaxed text-white/70">
                  {facility.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
