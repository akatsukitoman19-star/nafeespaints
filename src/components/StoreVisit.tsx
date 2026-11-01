import React from 'react';
import { BUSINESS_INFO } from '../data/paintsData.ts';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, Clock } from 'lucide-react';

export const StoreVisit: React.FC = () => {
  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#F4F4F2] border-b border-[#17191B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
            In-Person Shade Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191B] uppercase mb-4">
            Visit Our Store
          </h2>
          <p className="text-base text-[#303438] leading-relaxed">
            Experience real paint swatches, compare finish textures in natural light, and discuss your painting project with our in-store experts.
          </p>
        </div>

        {/* Store Card Split */}
        <div className="bg-white border border-[#17191B]/10 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          {/* Store Photograph Placeholder */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] bg-neutral-900 overflow-hidden group">
            <img
              src="/assets/images/storefront_nafees_paints_1793509021777.jpg"
              alt="Nafees Paints Storefront & Tinting Center"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Floating Store Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A6A9AD] font-semibold block">
                  Showroom & Tinting Studio
                </span>
                <p className="text-lg font-bold">Nafees Paints Banswara</p>
              </div>
              <span className="text-xs bg-white/20 backdrop-blur-xs px-3 py-1 border border-white/30 font-medium">
                Storefront
              </span>
            </div>
          </div>

          {/* Location & Directions Info */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between min-w-0">
            <div className="space-y-6">
              {/* Business Name */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A6A9AD] font-semibold">
                  Retail Location
                </span>
                <h3 className="text-2xl font-bold text-[#17191B] mt-1">
                  {BUSINESS_INFO.businessName}
                </h3>
              </div>

              {/* Address Block */}
              <div className="p-4 bg-[#F4F4F2] border border-[#17191B]/10 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#17191B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A6A9AD] block">
                      Full Address
                    </span>
                    <p className="text-sm font-medium text-[#17191B] leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Landmark / Hours Guide */}
              <div className="space-y-3 text-xs text-[#303438]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#17191B] shrink-0" />
                  <span>Open for in-store consultations & tinting. Call ahead for special orders.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#17191B] shrink-0" />
                  <span>Store Telephone: <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-[#17191B] hover:underline">{BUSINESS_INFO.phoneDisplay}</a></span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-[#17191B]/10 space-y-3">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#17191B] hover:bg-[#303438] active:scale-[0.99] transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-4 text-xs font-semibold uppercase tracking-wider text-[#17191B] bg-[#F4F4F2] hover:bg-neutral-200 border border-[#17191B]/15 transition-colors truncate"
                >
                  <Phone className="w-3.5 h-3.5 text-[#17191B] shrink-0" />
                  <span className="truncate">Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-4 text-xs font-semibold uppercase tracking-wider text-[#17191B] bg-[#F4F4F2] hover:bg-neutral-200 border border-[#17191B]/15 transition-colors truncate"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
