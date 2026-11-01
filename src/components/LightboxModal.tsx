import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from 'lucide-react';
import { GalleryProject, BUSINESS_INFO } from '../data/paintsData.ts';

interface LightboxModalProps {
  project: GalleryProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const waQuery = encodeURIComponent(
    `Hello Nafees Paints, I am inquiring about the finish shown in "${project.title}" (${project.categoryLabel}). Can you provide shade and quotation details?`
  );
  const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${waQuery}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/80 hover:text-white bg-black/60 hover:bg-black/80 rounded-full transition-all focus:outline-none"
        aria-label="Previous Project"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/80 hover:text-white bg-black/60 hover:bg-black/80 rounded-full transition-all focus:outline-none"
        aria-label="Next Project"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Content wrapper */}
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#17191B] border border-white/10 text-white overflow-hidden shadow-2xl">
        {/* Full Image */}
        <div className="relative flex-1 bg-black/80 flex items-center justify-center min-h-[220px] sm:min-h-[300px] max-h-[68vh] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full max-h-[68vh] object-contain"
          />
        </div>

        {/* Caption & Actions */}
        <div className="p-4 sm:p-6 bg-[#17191B] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A6A9AD] mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-300" />
                {project.location}
              </span>
            </div>
            <h4 className="text-xl font-bold tracking-tight text-white">
              {project.title}
            </h4>
            <p className="text-xs text-neutral-300 mt-1 max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#17191B] bg-white hover:bg-neutral-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Enquire This Finish</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
