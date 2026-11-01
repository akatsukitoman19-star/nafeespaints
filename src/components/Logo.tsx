import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', inverted = false, size = 'md' }) => {
  const textColor = inverted ? 'text-white' : 'text-[#17191B]';
  const subColor = inverted ? 'text-[#A6A9AD]' : 'text-[#303438]';

  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Emblem / Official Logo */}
      <div
        className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-full transition-transform duration-200 ${
          size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'
        } ${inverted ? 'bg-white p-0.5 ring-1 ring-white/20' : 'bg-white border border-[#17191B]/15'}`}
      >
        <img
          src="/nafees_logo.png"
          alt="Nafees Paints Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            // Direct Google Drive thumbnail/viewer link fallback
            const target = e.currentTarget;
            if (!target.src.includes('googleusercontent')) {
              target.src = 'https://lh3.googleusercontent.com/d/1H4QSZJMyHZzO1vc85pAAGQs_ciUQ4w3c';
            }
          }}
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold uppercase tracking-[0.12em] ${sizeClasses[size]} ${textColor}`}
        >
          Nafees Paints
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.24em] font-semibold mt-0.5 ${subColor}`}
        >
          Banswara · Rajasthan
        </span>
      </div>
    </div>
  );
};
