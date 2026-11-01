import React, { useState } from 'react';
import { INSPIRATION_SWATCHES, SwatchColor, BUSINESS_INFO } from '../data/paintsData.ts';
import { MessageCircle, Copy, Check } from 'lucide-react';

export const ColourInspiration: React.FC = () => {
  const [activeSwatch, setActiveSwatch] = useState<SwatchColor>(INSPIRATION_SWATCHES[0]);
  const [copiedHex, setCopiedHex] = useState(false);
  const [activeRoomView, setActiveRoomView] = useState<'living' | 'bedroom' | 'facade'>('living');

  const handleCopyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(true);
    setTimeout(() => setCopiedHex(false), 2000);
  };

  const waQuery = encodeURIComponent(
    `Hello Nafees Paints, I am interested in the "${activeSwatch.name}" (${activeSwatch.hex}) colour shade from your website inspiration studio. Can you help me with sample testing and tinting?`
  );
  const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${waQuery}`;

  return (
    <section id="inspiration" className="py-20 sm:py-28 bg-[#F4F4F2] border-b border-[#17191B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
              Atmosphere & Palettes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191B] uppercase">
              Colour Inspiration
            </h2>
          </div>
          <p className="text-sm text-[#303438] max-w-md leading-relaxed">
            Select swatches to explore tonal balance, finish recommendations, and complementary accents curated for Rajasthani architecture.
          </p>
        </div>

        {/* Studio Interactive Card */}
        <div className="bg-white border border-[#17191B]/10 p-4 sm:p-8 lg:p-10 shadow-sm max-w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Room Visualizer */}
            <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
              {/* Room view selector tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#F4F4F2] border border-[#17191B]/10 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveRoomView('living')}
                    className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors text-center truncate cursor-pointer ${
                      activeRoomView === 'living'
                        ? 'bg-white text-[#17191B] shadow-xs'
                        : 'text-[#303438] hover:text-[#17191B]'
                    }`}
                  >
                    Living
                  </button>
                  <button
                    onClick={() => setActiveRoomView('bedroom')}
                    className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors text-center truncate cursor-pointer ${
                      activeRoomView === 'bedroom'
                        ? 'bg-white text-[#17191B] shadow-xs'
                        : 'text-[#303438] hover:text-[#17191B]'
                    }`}
                  >
                    Bedroom
                  </button>
                  <button
                    onClick={() => setActiveRoomView('facade')}
                    className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors text-center truncate cursor-pointer ${
                      activeRoomView === 'facade'
                        ? 'bg-white text-[#17191B] shadow-xs'
                        : 'text-[#303438] hover:text-[#17191B]'
                    }`}
                  >
                    Facade
                  </button>
                </div>

                <span className="text-[10px] sm:text-[11px] text-[#A6A9AD]">
                  Interactive Room Preview
                </span>
              </div>

              {/* Dynamic Room Canvas */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#17191B]/15 bg-neutral-900">
                {/* Background base render */}
                <img
                  src={
                    activeRoomView === 'living'
                      ? '/assets/images/project_modern_interior_1793509020821.jpg'
                      : activeRoomView === 'bedroom'
                      ? '/assets/images/project_wall_texture_1793509022220.jpg'
                      : '/assets/images/project_exterior_facade_1793509021783.jpg'
                  }
                  alt="Room Canvas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Tinted Accent Wall Simulator Overlay */}
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-55 transition-colors duration-500 pointer-events-none"
                  style={{ backgroundColor: activeSwatch.hex }}
                />

                {/* Subdued Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Canvas Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-1.5 text-white text-xs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className="w-3.5 h-3.5 border border-white/50 shrink-0"
                      style={{ backgroundColor: activeSwatch.hex }}
                    />
                    <span className="font-semibold tracking-wide text-[11px] sm:text-xs truncate">{activeSwatch.name}</span>
                    <span className="text-white/60 font-mono text-[10px] hidden xs:inline">({activeSwatch.hex})</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] tracking-widest uppercase bg-black/60 px-1.5 py-0.5 border border-white/20 shrink-0">
                    {activeSwatch.finish} Finish
                  </span>
                </div>
              </div>

              {/* Bottom Guidance */}
              <p className="mt-3 text-xs text-[#A6A9AD] italic">
                * Simulated overlay. True lighting, sheen index, and surface texture should be evaluated with in-store physical swatch fan decks.
              </p>
            </div>

            {/* Right Column: Swatches & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#303438]">
                    Select Curated Swatch
                  </span>
                  <span className="text-[11px] text-[#A6A9AD]">
                    8 Designer Tones
                  </span>
                </div>

                {/* Swatch Palette Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {INSPIRATION_SWATCHES.map((swatch) => {
                    const isSelected = activeSwatch.hex === swatch.hex;
                    return (
                      <button
                        key={swatch.hex}
                        onClick={() => setActiveSwatch(swatch)}
                        className={`group relative flex flex-col items-center p-1.5 sm:p-2 border transition-all text-left min-w-0 ${
                          isSelected
                            ? 'border-[#17191B] bg-[#F4F4F2] ring-1 ring-[#17191B]'
                            : 'border-[#17191B]/10 hover:border-[#17191B]/40 bg-white'
                        }`}
                        title={swatch.name}
                      >
                        <div
                          className="w-full aspect-square mb-2 shadow-inner border border-black/10 relative"
                          style={{ backgroundColor: swatch.hex }}
                        >
                          {isSelected && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Check
                                className={`w-4 h-4 ${
                                  swatch.textColor === '#FFFFFF' ? 'text-white' : 'text-[#17191B]'
                                }`}
                              />
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] font-semibold text-[#17191B] truncate w-full">
                          {swatch.name.split(' ')[0]}
                        </span>
                        <span className="text-[9px] font-mono text-[#A6A9AD] uppercase">
                          {swatch.hex}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Swatch Information Card */}
                <div className="p-5 bg-[#F4F4F2] border border-[#17191B]/10 mb-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-[#17191B]">
                        {activeSwatch.name}
                      </h4>
                      <p className="text-xs text-[#303438] mt-0.5">
                        {activeSwatch.mood}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyHex(activeSwatch.hex)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono bg-white border border-[#17191B]/15 text-[#17191B] hover:bg-neutral-100 transition-colors"
                      title="Copy Hex Code"
                    >
                      {copiedHex ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#303438]" />
                          <span>{activeSwatch.hex}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-3 border-t border-[#17191B]/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#A6A9AD] block text-[10px] uppercase tracking-wider font-semibold">
                        Recommended Finish
                      </span>
                      <span className="font-semibold text-[#17191B]">
                        {activeSwatch.finish} Emulsion
                      </span>
                    </div>

                    <div>
                      <span className="text-[#A6A9AD] block text-[10px] uppercase tracking-wider font-semibold">
                        Suggested Accent Pair
                      </span>
                      <span className="font-semibold text-[#17191B]">
                        {activeSwatch.pairing}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#17191B] hover:bg-[#303438] active:scale-[0.99] transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire About {activeSwatch.name}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Transparency Disclaimer */}
        <div className="mt-6 text-center text-xs text-[#A6A9AD]">
          * Curated aesthetic swatches for inspiration. Nafees Paints provides exact brand colour tinting and physical shade cards in-store.
        </div>
      </div>
    </section>
  );
};
