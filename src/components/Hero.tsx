import React from 'react';
import { ChevronRight, ShieldCheck, Paintbrush, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/paintsData.ts';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative w-full bg-[#17191B] text-white overflow-hidden max-w-full">
      {/* Background Architectural Image with subtle gradient scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/hero_modern_home_1793509020126.jpg"
          alt="Modern painted home architecture in Rajasthan"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform transition-transform duration-1000"
        />
        {/* Measured scrim according to frontend-design §1.F: 4.5:1 legibility without hiding architecture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17191B] via-[#17191B]/65 to-[#17191B]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#17191B]/30 to-[#17191B]/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 flex flex-col justify-end min-h-[75vh] sm:min-h-[82vh] w-full">
        <div className="max-w-3xl w-full">
          {/* Subtle Location & Dealership Kicker (Responsive wrapping) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] font-semibold text-[#A6A9AD] mb-4 max-w-full">
            <span className="flex items-center gap-1.5 text-white/90 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              Nai Abadi, Banswara
            </span>
            <span aria-hidden="true" className="text-white/40 hidden sm:inline">·</span>
            <span className="text-neutral-300">Authorized Dealer & Franchise</span>
          </div>

          {/* Primary Brand Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-4 uppercase leading-[1.08] break-words">
            Nafees Paints
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-3xl lg:text-4xl font-light text-white/95 mb-3 sm:mb-4 tracking-tight break-words">
            “Colours That Transform Your Space.”
          </p>

          {/* Short Supporting Line */}
          <p className="text-sm sm:text-lg text-neutral-300 font-normal max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            Quality paints, beautiful finishes, and painting solutions for your home.
          </p>

          {/* Action Buttons: Full width on mobile, inline on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#17191B] bg-white hover:bg-[#F4F4F2] active:scale-[0.99] transition-all shadow-lg text-center"
            >
              <span>Explore Our Products</span>
              <ChevronRight className="w-4 h-4 text-[#17191B] shrink-0" />
            </a>

            <a
              href="#gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-transparent border border-white/60 hover:bg-white/10 hover:border-white active:scale-[0.99] transition-all backdrop-blur-sm text-center"
            >
              <span>View Our Work</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Trust credentials with responsive wrapping */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-neutral-300 max-w-full">
          <div className="flex items-center gap-2.5 min-w-0">
            <ShieldCheck className="w-4 h-4 text-white/80 shrink-0" />
            <span className="break-words">Authorized Asian Paints & Nerolac Dealer</span>
          </div>
          <div className="flex items-center gap-2.5 min-w-0">
            <Paintbrush className="w-4 h-4 text-white/80 shrink-0" />
            <span className="break-words">Official Birla Opus Franchise Center</span>
          </div>
          <div className="flex items-center gap-2.5 sm:justify-end min-w-0">
            <span className="text-[#A6A9AD] shrink-0">Call Store:</span>
            <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-white hover:underline truncate">
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
