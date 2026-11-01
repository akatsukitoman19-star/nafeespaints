import React from 'react';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../data/paintsData.ts';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';

export const ProductCategories: React.FC = () => {
  return (
    <section id="products" className="py-20 sm:py-28 bg-[#F4F4F2] border-b border-[#17191B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
            Curated Paint Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191B] uppercase mb-4">
            Product Categories
          </h2>
          <p className="text-base text-[#303438] leading-relaxed">
            From weather-shield exterior coatings to luxurious velvet interior emulsions. Explore our core product ranges available in-store.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const waQuery = encodeURIComponent(
              `Hello Nafees Paints, I am interested in ${cat.title} for my project in Banswara. Please share product options and pricing guidance.`
            );
            const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${waQuery}`;

            return (
              <div
                key={cat.id}
                className="group bg-white border border-[#17191B]/10 hover:border-[#17191B] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Image Carrier with subtle zoom on hover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={cat.imageUrl}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17191B]/60 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-white/90 uppercase px-2 py-1 bg-[#17191B]/80 backdrop-blur-xs">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#17191B] mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#A6A9AD] font-semibold mb-3">
                      {cat.tagline}
                    </p>
                    <p className="text-sm text-[#303438] leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-2 mb-6">
                      {cat.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#303438]">
                          <Check className="w-3.5 h-3.5 text-[#17191B] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 mt-auto">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-2.5 text-xs font-semibold uppercase tracking-wider text-[#17191B] hover:text-[#303438] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      Enquire on WhatsApp
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Stock note */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white border border-[#17191B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-full">
          <p className="text-xs text-[#303438] break-words">
            <strong className="text-[#17191B]">In-Store Guidance:</strong> Category suggestions shown. Exact shade swatches, computerized tinting, can sizes (1L, 4L, 10L, 20L), and manufacturer warranties available at our store.
          </p>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="text-xs font-semibold uppercase tracking-wider text-[#17191B] hover:underline sm:whitespace-nowrap shrink-0 inline-block"
          >
            Call {BUSINESS_INFO.phoneDisplay} →
          </a>
        </div>
      </div>
    </section>
  );
};
