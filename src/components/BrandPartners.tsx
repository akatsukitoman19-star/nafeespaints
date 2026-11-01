import React from 'react';
import { BRAND_PARTNERS, BUSINESS_INFO } from '../data/paintsData.ts';
import { ShieldCheck, MessageCircle, ArrowUpRight } from 'lucide-react';

export const BrandPartners: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-18 border-b border-[#17191B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#17191B]/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
              Official Brand Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17191B]">
              Authorized Dealer & Franchise Partner
            </h2>
          </div>
          <p className="text-sm text-[#303438] max-w-md">
            Guaranteed 100% genuine products directly sourced from leading paint manufacturers with in-store computerized tinting.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_PARTNERS.map((brand) => {
            const waQuery = encodeURIComponent(
              `Hello Nafees Paints, I am inquiring about ${brand.name} products and shade cards available at your store.`
            );
            const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${waQuery}`;

            return (
              <div
                key={brand.id}
                className="group relative bg-[#F4F4F2] p-8 border border-[#17191B]/10 hover:border-[#17191B] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Relationship indicator */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#303438] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#17191B]" />
                      {brand.relationship}
                    </span>
                    <span className="text-xs text-[#A6A9AD] group-hover:text-[#17191B] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Brand Wordmark Lockup */}
                  <div className="py-2 mb-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#17191B] uppercase">
                      {brand.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#303438] leading-relaxed mb-6">
                    {brand.description}
                  </p>
                </div>

                {/* WhatsApp action */}
                <div className="pt-4 border-t border-[#17191B]/10">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#17191B] hover:text-[#303438]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Enquire on {brand.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Transparency Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#A6A9AD]">
            Nafees Paints is an authorized dealer of Asian Paints and Nerolac, and an official Birla Opus franchise store in Banswara.
          </p>
        </div>
      </div>
    </section>
  );
};
