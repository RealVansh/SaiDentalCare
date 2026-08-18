import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 grain-overlay">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Get in <span className="gradient-text-gold">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto font-body">
            We'd love to hear from you. Visit our clinic or call us today.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding">
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6">Clinic Information</h2>
            <p className="text-neutral-600 font-body max-w-2xl mx-auto">
              Our state-of-the-art clinic is conveniently located in West Tambaram. We provide a comfortable, welcoming environment for all your dental needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg shadow-primary-900/5 border border-neutral-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl font-heading text-neutral-900 mb-4">Phone Numbers</h3>
              <div className="flex flex-col space-y-2">
                <a href="tel:7200596749" className="text-neutral-600 hover:text-primary-600 transition-colors">72005 96749</a>
                <a href="tel:04422261644" className="text-neutral-600 hover:text-primary-600 transition-colors">044-2226 1644</a>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg shadow-primary-900/5 border border-neutral-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl font-heading text-neutral-900 mb-4">Location</h3>
              <a href="https://www.google.com/maps/place/Sai+dental+full+rehabilition+centre/@12.9270837,80.1114093,19z/data=!3m1!4b1!4m6!3m5!1s0x3a525f003f322e7d:0x2d4b87662812f94!8m2!3d12.9270824!4d80.112053!16s%2Fg%2F11z2k9h5pr?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-neutral-600 leading-relaxed hover:text-primary-600 transition-colors">
                No. 22, 2nd Floor, Kakkan Street,<br />
                West Tambaram, Chennai – 600045
              </a>
            </div>

            {/* Hours Card */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg shadow-primary-900/5 border border-neutral-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl font-heading text-neutral-900 mb-4">Consultation Hours</h3>
              <div className="space-y-2 text-neutral-600 w-full">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-medium text-neutral-900 mb-1">Mon - Sat</span>
                  <span>10:00 AM – 1:30 PM</span>
                  <span>5:00 PM – 8:30 PM</span>
                </div>
                <div className="pt-3 mt-3 border-t border-neutral-100">
                  <span className="font-medium text-red-500">Sunday Holiday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-50 border-t border-neutral-100">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-neutral-900 mb-8 text-center">Find Us on the Map</h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-200">
            <iframe 
              src="https://maps.google.com/maps?q=Sai+dental+full+rehabilition+centre&t=&z=19&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-125"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
