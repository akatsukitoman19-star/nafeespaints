import React, { useState } from 'react';
import { GALLERY_PROJECTS, GalleryProject, BUSINESS_INFO } from '../data/paintsData.ts';
import { MessageCircle, Maximize2 } from 'lucide-react';
import { LightboxModal } from './LightboxModal.tsx';

export const ProjectGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'exterior', label: 'Exterior Painting' },
    { id: 'interior', label: 'Living & Bedroom Interiors' },
    { id: 'texture', label: 'Textures & Accents' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === selectedFilter);

  const activeProject = activeProjectIndex !== null ? GALLERY_PROJECTS[activeProjectIndex] : null;

  const handleOpenLightbox = (project: GalleryProject) => {
    const idx = GALLERY_PROJECTS.findIndex((p) => p.id === project.id);
    setActiveProjectIndex(idx >= 0 ? idx : 0);
  };

  const handlePrev = () => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) =>
      prev! > 0 ? prev! - 1 : GALLERY_PROJECTS.length - 1
    );
  };

  const handleNext = () => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) =>
      prev! < GALLERY_PROJECTS.length - 1 ? prev! + 1 : 0
    );
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#17191B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
              Transformations & Craft
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Our Painting Projects
            </h2>
          </div>
          <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
            A visual showcase of exterior facades, interior living spaces, and decorative textured finishes executed with precision paint systems.
          </p>
        </div>

        {/* Filter Controls (Interactive Buttons with Clean State) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-white text-[#17191B]'
                  : 'bg-transparent text-neutral-300 hover:text-white hover:bg-white/5 border border-white/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetric / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            // Dynamic column spanning for asymmetric visual interest
            const colSpan =
              idx === 0
                ? 'lg:col-span-7'
                : idx === 1
                ? 'lg:col-span-5'
                : idx === 2
                ? 'lg:col-span-5'
                : idx === 3
                ? 'lg:col-span-7'
                : 'lg:col-span-12';

            const heightClass = idx === 0 || idx === 3 ? 'aspect-[16/10]' : 'aspect-[4/3]';

            return (
              <div
                key={project.id}
                onClick={() => handleOpenLightbox(project)}
                className={`group relative overflow-hidden bg-[#303438] cursor-pointer border border-white/10 hover:border-white transition-all duration-300 ${colSpan}`}
              >
                <div className={`w-full ${heightClass} overflow-hidden relative`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top quick expand badge */}
                  <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption & Metadata */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A6A9AD] mb-1.5 font-semibold">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.keyFeature}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-neutral-300 pt-2 border-t border-white/10">
                      <span>{project.location}</span>
                      <span className="text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>View Photo</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Disclaimer & Owner Replacement Note */}
        <div className="mt-12 p-6 bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-300">
            <span className="font-semibold text-white">Owner Gallery Management:</span> High-resolution representative project photographs are currently shown as placeholders. Nafees Paints project photos can be dropped directly into the gallery at any time.
          </p>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-200 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Enquire for Your Project</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={activeProject}
        onClose={() => setActiveProjectIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
