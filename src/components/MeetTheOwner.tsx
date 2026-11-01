import React from 'react';
import { BUSINESS_INFO } from '../data/paintsData.ts';
import { User, MessageCircle, Phone } from 'lucide-react';

export const MeetTheOwner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#17191B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md mx-auto bg-[#F4F4F2] border border-[#17191B]/15 overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
              {/* Neutral Portrait Placeholder */}
              <div className="w-28 h-28 rounded-full bg-[#303438] text-white flex items-center justify-center mb-6 shadow-inner">
                <User className="w-14 h-14 text-[#A6A9AD]" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block">
                  Proprietor & Principal Consultant
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#17191B]">
                  [Owner Name]
                </h3>
                <p className="text-xs text-[#303438] max-w-xs mx-auto">
                  Founder & Owner, Nafees Paints
                </p>
              </div>

              {/* Editable badge instruction */}
              <div className="mt-8 pt-4 border-t border-[#17191B]/10 text-[11px] text-[#A6A9AD]">
                [Replace with official photograph and owner details]
              </div>
            </div>
          </div>

          {/* Details & Commitment Column */}
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
              Leadership & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191B] uppercase mb-6">
              Meet The Owner
            </h2>

            {/* Editable introduction fields */}
            <div className="space-y-6 text-[#303438] leading-relaxed text-sm sm:text-base">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#17191B] mb-1.5">
                  Personal Introduction
                </h4>
                <p className="bg-[#F4F4F2]/70 p-4 border-l-2 border-[#17191B] text-sm text-[#303438]">
                  [Owner Introduction: "Welcome to Nafees Paints. As a dedicated local business owner in Banswara, my focus has always been on providing our community with dependable, top-tier paint products and genuine technical guidance for every home and commercial build."]
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#17191B] mb-1.5">
                  Experience in the Paint Business
                </h4>
                <p className="bg-[#F4F4F2]/70 p-4 border-l-2 border-[#17191B] text-sm text-[#303438]">
                  [Experience in the Paint Business: Serving homeowners, contractors, and architects in Banswara with extensive hands-on expertise across surface preparation, computerized tinting systems, and weather-proofing standards for local climate conditions.]
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#17191B] mb-1.5">
                  Commitment to Product Guidance & Service
                </h4>
                <p className="bg-[#F4F4F2]/70 p-4 border-l-2 border-[#17191B] text-sm text-[#303438]">
                  [Commitment to Service: We believe in transparent recommendations, genuine manufacturer pricing, and helping you choose the right finish the first time. Visit our store at Nai Abadi Gol Chouraha for one-on-one assistance.]
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-[#17191B]/10">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#17191B] hover:bg-[#303438] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#17191B] bg-[#F4F4F2] border border-[#17191B]/20 hover:bg-neutral-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#17191B]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
