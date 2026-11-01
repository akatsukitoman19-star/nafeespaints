import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO } from '../data/paintsData.ts';
import { MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'Colours', href: '#inspiration' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Nafees Paints, I visited your website and would like to enquire about paints and painting services in Banswara.'
  );
  const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#17191B]/10'
            : 'bg-white border-b border-[#17191B]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Brand wordmark / logo */}
            <a
              href="#top"
              className="flex items-center shrink-0 hover:opacity-95 transition-opacity"
              aria-label="Nafees Paints Home"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: Navigation Links (Clean single line typography) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#303438]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#17191B] transition-colors whitespace-nowrap tracking-wide py-1 border-b-2 border-transparent hover:border-[#17191B]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#17191B] hover:bg-[#303438] active:scale-[0.98] transition-all rounded-none whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enquire on WhatsApp</span>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-[#17191B] hover:bg-[#F4F4F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17191B]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 lg:hidden bg-white flex flex-col border-b border-[#17191B]/15 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-6 flex-1 overflow-y-auto space-y-4">
            <nav className="flex flex-col divide-y divide-[#17191B]/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 text-lg font-medium text-[#17191B] hover:text-[#303438] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#A6A9AD]">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-6 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#17191B] active:bg-[#303438] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#17191B] bg-[#F4F4F2] border border-[#17191B]/20 active:bg-neutral-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#17191B]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 text-xs font-medium text-[#303438] hover:text-[#17191B] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#303438]" />
                <span className="truncate">{BUSINESS_INFO.address}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
