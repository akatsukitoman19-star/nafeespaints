import React from 'react';
import { PAINTING_SERVICES, BUSINESS_INFO } from '../data/paintsData.ts';
import { MessageCircle, Check, ArrowRight, Paintbrush, Sparkles, Home, RefreshCw, Palette, Shield } from 'lucide-react';

export const PaintingServices: React.FC = () => {
  // Service icons mapping
  const serviceIcons: Record<string, React.ReactNode> = {
    'interior-painting': <Home className="w-5 h-5 text-[#17191B]" />,
    'exterior-painting': <Shield className="w-5 h-5 text-[#17191B]" />,
    'new-home-painting': <Paintbrush className="w-5 h-5 text-[#17191B]" />,
    'repainting-renovation': <RefreshCw className="w-5 h-5 text-[#17191B]" />,
    'decorative-finishes': <Sparkles className="w-5 h-5 text-[#17191B]" />,
    'colour-consultation': <Palette className="w-5 h-5 text-[#17191B]" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-[#17191B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
              Professional Application & Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191B] uppercase">
              Painting Services
            </h2>
          </div>
          <p className="text-sm text-[#303438] max-w-md leading-relaxed">
            From new construction base preparation to customized texture applications. Speak with our team for honest service recommendations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PAINTING_SERVICES.map((service, index) => {
            const waQuery = encodeURIComponent(
              `Hello Nafees Paints, I want to enquire about "${service.title}" in Banswara. Please share details on scheduling and painter availability.`
            );
            const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${waQuery}`;

            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-8 bg-[#F4F4F2] border border-[#17191B]/10 hover:border-[#17191B] transition-all duration-300 flex flex-col justify-between max-w-full min-w-0"
              >
                <div>
                  {/* Top row: Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-white border border-[#17191B]/10 flex items-center justify-center">
                      {serviceIcons[service.id] || <Paintbrush className="w-5 h-5 text-[#17191B]" />}
                    </div>
                    <span className="text-xs font-mono text-[#A6A9AD]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold tracking-tight text-[#17191B] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#A6A9AD] font-semibold mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#303438] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-[#303438]">
                        <Check className="w-3.5 h-3.5 text-[#17191B] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action */}
                <div className="pt-4 border-t border-[#17191B]/10">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#17191B] group-hover:text-[#303438] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Enquire on WhatsApp
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on services */}
        <div className="mt-12 text-center text-xs text-[#A6A9AD]">
          All painting services are tailored to site inspection and client specifications. Contact us for on-site assessment in Banswara.
        </div>
      </div>
    </section>
  );
};
