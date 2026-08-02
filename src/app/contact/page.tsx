"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, MapPin, Clock, CheckCircle2, MessageCircle, ChevronDown } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 digits").regex(/^[0-9+\-\s()]*$/, "Invalid phone number"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const servicesList = [
  "General Consultation",
  "Implantology",
  "Root Canal Treatment",
  "Deep Caries Management",
  "Smile Designing",
  "Crowns & Bridges",
  "Orthodontics",
  "Aligners",
  "Deep Scaling",
  "Pediatric Dentistry",
  "Laser Dentistry",
  "Sedation Dentistry",
  "Dentures",
  "Other"
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: []
    }
  });

  const selectedServices = watch("services") || [];

  // Parse URL query on mount to auto-select services
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service');
      
      if (serviceParam) {
        // Find matching service name ignoring case
        const matchedService = servicesList.find(s => 
          s.toLowerCase() === serviceParam.toLowerCase() || 
          serviceParam.toLowerCase().includes(s.toLowerCase())
        );
        
        if (matchedService) {
          setValue('services', [matchedService], { shouldValidate: true });
        } else {
          // If it doesn't perfectly match, add it to "Other" or just push the raw string
          setValue('services', [serviceParam], { shouldValidate: true });
        }
      }
    }
  }, [setValue]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset({ services: [] });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 grain-overlay">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Get in <span className="gradient-text-gold">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto font-body">
            We'd love to hear from you. Book an appointment or visit us today.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 glass-card p-8 rounded-2xl shadow-xl shadow-primary-900/5 bg-white/80 backdrop-blur-sm border border-neutral-100 border-t-2 border-t-accent-400">
              <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-6">Request an Appointment</h2>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center p-8 text-center h-[400px] animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Sent Successfully!</h3>
                  <p className="text-neutral-600">Our team will get back to you shortly to confirm your appointment.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2 bg-primary-50 text-primary-600 font-medium rounded-full hover:bg-primary-100 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 animate-fade-in">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                    <input
                      id="fullName"
                      {...register("fullName")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-neutral-200 focus:border-primary-500 focus:ring-primary-500'} focus:ring-2 focus:outline-none transition-shadow`}
                      placeholder="Enter Your Name"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-neutral-200 focus:border-primary-500 focus:ring-primary-500'} focus:ring-2 focus:outline-none transition-shadow`}
                        placeholder="Enter Phone Number"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-700 mb-1">Date of Visit</label>
                      <div className="relative">
                        <input
                          id="preferredDate"
                          type="date"
                          {...register("preferredDate")}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-700 mb-1">Time of Visit</label>
                      <div className="relative">
                        <select
                          id="preferredTime"
                          {...register("preferredTime")}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow appearance-none bg-white"
                        >
                          <option value="">Select Time</option>
                          <option value="10:30 AM – 1:00 PM">10:30 AM – 1:00 PM</option>
                          <option value="5:30 PM – 8:00 PM">5:30 PM – 8:00 PM</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Multi-select Service Pills */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Services Needed *</label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => {
                              if (isSelected) {
                                setValue('services', selectedServices.filter(s => s !== srv), { shouldValidate: true });
                              } else {
                                setValue('services', [...selectedServices, srv], { shouldValidate: true });
                              }
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                              isSelected 
                                ? 'bg-accent-500 text-white shadow-md shadow-accent-500/20' 
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                    {/* Render any unrecognized service parameter as a selected pill */}
                    {selectedServices.filter(s => !servicesList.includes(s)).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                         {selectedServices.filter(s => !servicesList.includes(s)).map((customSrv) => (
                           <button
                             key={customSrv}
                             type="button"
                             onClick={() => {
                               setValue('services', selectedServices.filter(s => s !== customSrv), { shouldValidate: true });
                             }}
                             className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-accent-500 text-white shadow-md shadow-accent-500/20"
                           >
                             {customSrv}
                           </button>
                         ))}
                      </div>
                    )}
                    {errors.services && <p className="mt-2 text-sm text-red-500">{errors.services.message}</p>}
                  </div>



                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow resize-none"
                      placeholder="Tell us about your dental concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 btn-gold rounded-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <span>Send Request</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Info */}
            <div className="lg:col-span-5 space-y-8 lg:mt-8">
              <div>
                <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-6">Clinic Information</h2>
                <p className="text-neutral-600 mb-8 font-body">
                  Our state-of-the-art clinic is conveniently located in West Tambaram. We provide a comfortable, welcoming environment for all your dental needs.
                </p>
              </div>

              <div className="space-y-4">
                {/* Contact Card */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone Numbers</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:7200596749" className="text-neutral-600 hover:text-primary-600 transition-colors">72005 96749</a>
                      <a href="tel:04422261644" className="text-neutral-600 hover:text-primary-600 transition-colors">044-2226 1644</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">WhatsApp</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="https://wa.me/917200596749" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-green-600 transition-colors">Message us on WhatsApp</a>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <a href="https://maps.google.com/?q=SAI+Dental+Care,+Kakkan+Street,+West+Tambaram,+Chennai" target="_blank" rel="noopener noreferrer" className="text-neutral-600 leading-relaxed hover:text-primary-600 transition-colors block">
                      No. 22, 2nd Floor, Kakkan Street,<br />
                      West Tambaram, Chennai – 600045
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Consultation Hours</h3>
                    <ul className="space-y-1 text-neutral-600">
                      <li className="flex justify-between items-center gap-8">
                        <span>Mon - Sat</span>
                        <span className="font-medium text-neutral-900">10:30 AM – 1:00 PM<br/>5:30 PM – 8:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center gap-8 pt-2 border-t border-neutral-100">
                        <span>Sunday</span>
                        <span className="font-medium text-red-500">Closed</span>
                      </li>
                    </ul>
                  </div>
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
              src="https://maps.google.com/maps?q=West+Tambaram+Chennai&output=embed" 
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
