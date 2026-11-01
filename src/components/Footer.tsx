import React from 'react';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO } from '../data/paintsData.ts';
import { Phone, MessageCircle, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111315] text-white border-t border-white/10 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="md" inverted />
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Authorized dealer of Asian Paints & Nerolac and official Birla Opus franchise store in Banswara, Rajasthan. Providing genuine quality paints, computerized tinting, and end-to-end painting solutions.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#17191B] bg-white hover:bg-neutral-200 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>

              {/* Instagram link placeholder */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-neutral-300 hover:text-white border border-white/20 hover:border-white/50 transition-colors"
                title="Official Instagram Profile (Placeholder)"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <a href="#top" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Product Categories</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Our Painting Projects</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Painting Services</a>
              </li>
              <li>
                <a href="#inspiration" className="hover:text-white transition-colors">Colour Inspiration Studio</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">Visit Our Store</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Nafees Paints</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Enquiries</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Store & Contact
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {BUSINESS_INFO.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/80 shrink-0" />
                <span>Store: </span>
                <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-white hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:underline"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/80 shrink-0" />
                <span>Email: </span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Nafees Paints. All rights reserved. Banswara, Rajasthan.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-400">
              Authorized Dealer: Asian Paints & Nerolac · Birla Opus Franchise
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
