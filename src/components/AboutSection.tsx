import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-b border-[#17191B]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-3">
            Our Purpose & Craft
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191B] uppercase mb-8">
            About Nafees Paints
          </h2>

          {/* Exact required text block */}
          <blockquote className="text-xl sm:text-2xl text-[#17191B] font-light leading-relaxed mb-8">
            “Nafees Paints is a paint store in Banswara offering paint products and painting-related solutions for homes and spaces. Visit us for product enquiries and guidance for your next painting project.”
          </blockquote>

          {/* Clean editorial hallmarks without fake claims */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#17191B]/10 text-left">
            <div className="p-4 bg-[#F4F4F2] border border-[#17191B]/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17191B] block mb-1">
                Authentic Products
              </span>
              <p className="text-xs text-[#303438] leading-relaxed">
                Authorized dealership access to genuine Asian Paints, Nerolac, and Birla Opus inventories.
              </p>
            </div>

            <div className="p-4 bg-[#F4F4F2] border border-[#17191B]/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17191B] block mb-1">
                Local Guidance
              </span>
              <p className="text-xs text-[#303438] leading-relaxed">
                Practical advice suited to Banswara's local weather conditions, masonry styles, and surface requirements.
              </p>
            </div>

            <div className="p-4 bg-[#F4F4F2] border border-[#17191B]/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17191B] block mb-1">
                Direct Consultation
              </span>
              <p className="text-xs text-[#303438] leading-relaxed">
                Speak directly with knowledgeable personnel for accurate estimations and shade selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
