import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const topServices = [
  { label: "Implantology", href: "/services#implantology" },
  { label: "Laser Dentistry", href: "/services#laser-dentistry" },
  { label: "Orthodontics", href: "/services#orthodontics" },
  { label: "Smile Designing", href: "/services#smile-designing" },
  { label: "Aligners", href: "/services#aligners" },
  { label: "Crowns & Bridges", href: "/services#crowns-bridges" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 grain-overlay">
      {/* Gold gradient divider at top */}
      <div className="gold-divider" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ── Brand ── */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                SAI Dental Care
              </h3>
              <p className="text-xs text-accent-500 tracking-wider uppercase mt-0.5">
                Since 1999
              </p>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Full Mouth Rehabilitation Centre. Our mission is ensuring patient
              comfort and delivering outstanding, long-lasting results with the
              latest technology.
            </p>
            <p className="text-xs text-neutral-500 italic">
              3 generations of trusted care and counting.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold text-accent-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-accent-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Top Services ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold text-accent-400 uppercase tracking-wider">
              Top Services
            </h4>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-400 hover:text-accent-300 transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold text-accent-400 uppercase tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <div className="text-sm text-neutral-400">
                  <a
                    href="tel:+917200596749"
                    className="hover:text-white transition-colors"
                  >
                    72005 96749
                  </a>
                  <br />
                  <a
                    href="tel:+914422261644"
                    className="hover:text-white transition-colors"
                  >
                    044-2226 1644
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <span className="text-sm text-neutral-400">
                  No. 22, 2nd Floor, Kakkan Street,
                  <br />
                  West Tambaram, Chennai – 600045
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <div className="text-sm text-neutral-400">
                  <p>Mon – Sat</p>
                  <p>10:30 AM – 1:00 PM</p>
                  <p>5:30 PM – 8:00 PM</p>
                  <p className="text-neutral-500 mt-1">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-neutral-800">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} SAI Dental Care. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Ethics · Excellence · Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
