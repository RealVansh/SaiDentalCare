"use client";

import { FlaskConical, MapPin, Gem, Monitor, IndianRupee } from 'lucide-react';

const usps = [
  { icon: FlaskConical, label: "Guided by Science" },
  { icon: MapPin, label: "One Convenient Location" },
  { icon: Gem, label: "Unparalleled Quality" },
  { icon: Monitor, label: "Latest Equipment" },
  { icon: IndianRupee, label: "Transparent Pricing" },
];

export const USPStrip = () => {
  return (
    <div className="bg-primary-900 grain-overlay py-8 md:py-6">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const isLastOdd = index === usps.length - 1 && usps.length % 2 !== 0;
            return (
              <div 
                key={index} 
                className={`flex items-center justify-center md:justify-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all cursor-default ${isLastOdd ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/15 flex items-center justify-center text-accent-400">
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-white text-sm md:text-base leading-tight">
                  {usp.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
