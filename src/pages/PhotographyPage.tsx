import React, { useState } from 'react';
import { PHOTOGRAPHY_ITEMS } from '../data/photography.ts';
import { PhotographyCard } from '../components/PhotographyCard.tsx';
import { Camera } from 'lucide-react';

export const PhotographyPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = ['all', 'Atmosphere & Light', 'Cinematic Motion', 'Organic Forms', 'Architectural Shadow', 'Street Documentary', 'Panoramic Mood'];

  const filteredPhotos = selectedFilter === 'all'
    ? PHOTOGRAPHY_ITEMS
    : PHOTOGRAPHY_ITEMS.filter((p) => p.category === selectedFilter);

  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#EF684F] uppercase tracking-widest">
            <Camera className="w-4 h-4 text-[#E2B52C]" />
            <span>Visual Archive · Light & Stillness</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F7F7F2]">
            Photography
          </h1>
          <p className="text-base sm:text-lg text-[#F7F7F2]/70 leading-relaxed">
            Capturing fleeting daylight, solitary architecture, and candid human textures. Every frame is approached as an emotional study in tonal atmosphere and restraint.
          </p>
        </div>

        {/* Filter Controls (Segmented functional buttons per design rules) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#087F5B] text-[#F7F7F2] shadow-sm font-semibold'
                  : 'glass-card text-[#F7F7F2]/60 hover:text-[#F7F7F2]'
              }`}
            >
              {cat === 'all' ? 'All Frames' : cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`${photo.gridSpan || 'col-span-1'}`}
            >
              <PhotographyCard photo={photo} priority={index < 2} />
            </div>
          ))}
        </div>

        {/* Placeholder Advisory Notice */}
        <div className="mt-20 p-6 rounded-2xl glass-card border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F7F2]/60">
          <div>
            <span className="font-bold text-[#E2B52C] uppercase tracking-wider block sm:inline mr-2">
              Liquid Border Framework
            </span>
            <span>Frames are currently operating in high-fidelity liquid placeholder mode until primary RAW photography assets are published.</span>
          </div>
          <span className="font-mono text-[#F7F7F2]/40 shrink-0">
            {filteredPhotos.length} Frames Indexed
          </span>
        </div>

      </div>
    </div>
  );
};

export default PhotographyPage;
