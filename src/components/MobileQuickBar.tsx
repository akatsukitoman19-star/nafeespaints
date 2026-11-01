import React from 'react';
import { BUSINESS_INFO } from '../data/paintsData.ts';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#17191B] text-white border-t border-white/15 px-3 py-2.5 backdrop-blur-md shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call Now */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-white/10 hover:bg-white/20 active:bg-white/25 transition-colors rounded-none"
        >
          <Phone className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Store</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white transition-colors rounded-none"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-white/10 hover:bg-white/20 active:bg-white/25 transition-colors rounded-none"
        >
          <Navigation className="w-4 h-4 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  );
};
