"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Service categories for the mega-dropdown ── */
const serviceCategories = [
  {
    title: "Surgical & Restorative",
    items: [
      { label: "Implantology", href: "/services#implantology" },
      { label: "Root Canal Treatment", href: "/services#root-canal" },
      { label: "Deep Caries Management", href: "/services#deep-caries" },
    ],
  },
  {
    title: "Cosmetic & Alignment",
    items: [
      { label: "Smile Designing", href: "/services#smile-designing" },
      { label: "Crowns & Bridges", href: "/services#crowns-bridges" },
      { label: "Orthodontics", href: "/services#orthodontics" },
      { label: "Aligners", href: "/services#aligners" },
    ],
  },
  {
    title: "Preventive Care",
    items: [
      { label: "Deep Scaling", href: "/services#deep-scaling" },
      { label: "Pediatric Dentistry", href: "/services#pediatric" },
    ],
  },
  {
    title: "Specialized Care",
    items: [
      { label: "Laser Dentistry", href: "/services#laser-dentistry" },
      { label: "Sedation Dentistry", href: "/services#sedation" },
      { label: "Dentures", href: "/services#dentures" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close dropdown on click outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-accent-200/30"
            : "bg-white"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-20">
          {/* ── Logo ── */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-xl sm:text-2xl font-heading font-bold gradient-text">
              SAI Dental Care
            </span>
            <span className="text-[10px] font-medium tracking-widest text-accent-500 uppercase">
              Since 1999
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                ref={link.hasDropdown ? dropdownRef : undefined}
              >
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent-500 after:transition-all after:duration-300 ${
                        pathname.startsWith("/services")
                          ? "text-primary-600 after:w-full"
                          : "text-neutral-600 hover:text-primary-600 after:w-0 hover:after:w-full"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* ── Mega Dropdown ── */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[560px] bg-white rounded-2xl shadow-xl border border-neutral-100 p-6 grid grid-cols-2 gap-6"
                        >
                          {serviceCategories.map((cat) => (
                            <div key={cat.title}>
                              <h4 className="text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-3">
                                {cat.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {cat.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setServicesOpen(false)}
                                      className="block text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg px-3 py-1.5 transition-all duration-150"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {/* View all link */}
                          <div className="col-span-2 pt-4 border-t border-neutral-100">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent-500 after:transition-all after:duration-300 ${
                      pathname === link.href
                        ? "text-primary-600 after:w-full"
                        : "text-neutral-600 hover:text-primary-600 after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917200596749"
              className="btn-gold text-sm px-5 py-2.5"
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 overflow-hidden"
            >
              <div className="section-container py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className="w-full flex items-center justify-between text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors py-3"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pb-2"
                            >
                              {serviceCategories.map((cat) => (
                                <div key={cat.title} className="mb-3">
                                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1.5">
                                    {cat.title}
                                  </p>
                                  {cat.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="block text-sm text-neutral-500 hover:text-primary-600 py-1.5 pl-2 transition-colors"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                              <Link
                                href="/services"
                                className="block text-sm font-medium text-primary-600 py-1.5 pl-2"
                              >
                                View All Services →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors py-3"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <a
                  href="tel:+917200596749"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-black text-sm font-medium rounded-full hover:bg-primary-700 transition-all duration-200 mt-4"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile Floating Call Button ── */}
      <a
        href="tel:+917200596749"
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105"
        aria-label="Call to book appointment"
      >
        <Phone className="w-5 h-5" />
      </a>
    </>
  );
}
