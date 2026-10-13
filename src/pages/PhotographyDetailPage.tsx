import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PHOTOGRAPHY_ITEMS } from '../data/photography.ts';
import { LiquidImagePlaceholder } from '../components/LiquidImagePlaceholder.tsx';
import { ArrowLeft, ArrowRight, Camera, ArrowUpLeft } from 'lucide-react';

export const PhotographyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = PHOTOGRAPHY_ITEMS.findIndex((p) => p.slug === slug);
  const photo = PHOTOGRAPHY_ITEMS[currentIndex];

  if (!photo) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center mx-auto text-[#EF684F]">
            <Camera className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#F7F7F2]">Photograph Not Found</h1>
          <p className="text-sm text-[#F7F7F2]/60">
            The requested photographic frame does not exist in the current collection or has been archived.
          </p>
          <div className="pt-2">
            <Link
              to="/photography"
              className="px-5 py-2.5 text-xs font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Photography Gallery</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const prevPhoto = currentIndex > 0 ? PHOTOGRAPHY_ITEMS[currentIndex - 1] : null;
  const nextPhoto = currentIndex < PHOTOGRAPHY_ITEMS.length - 1 ? PHOTOGRAPHY_ITEMS[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/photography"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/60 hover:text-[#E2B52C] transition-colors"
          >
            <ArrowUpLeft className="w-4 h-4" />
            <span>Back to All Photographs</span>
          </Link>
        </div>

        {/* Large Frame Presentation */}
        <div className="mb-12">
          <div className="w-full max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-[#087F5B]/30 via-white/[0.03] to-transparent shadow-2xl">
            <LiquidImagePlaceholder
              aspectRatio={photo.aspectRatio}
              label={photo.title}
              variant="default"
              imageSrc={photo.imageSrc}
              alt={photo.title}
              badge={photo.category}
              priority={true}
              className="max-h-[75vh]"
            />
          </div>
        </div>

        {/* Photographic Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/[0.08] pt-8">
          {/* Main Title & Description */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#E2B52C] font-semibold uppercase tracking-wider">
              <span>{photo.category}</span>
              <span aria-hidden="true">·</span>
              <span>Series Study</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F7F7F2] tracking-tight">
              {photo.title}
            </h1>

            <p className="text-base text-[#F7F7F2]/75 leading-relaxed max-w-2xl">
              {photo.description}
            </p>

            {photo.curatorNote && (
              <div className="mt-6 p-5 rounded-2xl glass-card border-l-2 border-[#E2B52C]/60 text-xs text-[#F7F7F2]/70 space-y-1">
                <span className="font-semibold text-[#E2B52C] block uppercase tracking-wider text-[11px]">
                  Curator Note
                </span>
                <p className="leading-relaxed">{photo.curatorNote}</p>
              </div>
            )}
          </div>

          {/* Metadata Sidebar */}
          <div className="md:col-span-4 glass-card p-6 rounded-2xl space-y-4 text-xs">
            <h3 className="font-bold text-[#F7F7F2] uppercase tracking-wider text-[11px] text-[#159A91]">
              Frame Specifications
            </h3>

            <div className="space-y-2.5 text-[#F7F7F2]/70 font-mono">
              {photo.date && (
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-[#F7F7F2]/40">Year:</span>
                  <span>{photo.date}</span>
                </div>
              )}
              {photo.location && (
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-[#F7F7F2]/40">Context:</span>
                  <span>{photo.location}</span>
                </div>
              )}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-[#F7F7F2]/40">Aspect Ratio:</span>
                <span>{photo.aspectRatio}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#F7F7F2]/40">Frame Status:</span>
                <span className="text-[#087F5B]">Liquid Border Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next Pagination */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
          {prevPhoto ? (
            <Link
              to={`/photography/${prevPhoto.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/70 hover:text-[#E2B52C] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevPhoto.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextPhoto ? (
            <Link
              to={`/photography/${nextPhoto.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/70 hover:text-[#E2B52C] transition-colors text-right"
            >
              <span>Next: {nextPhoto.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </div>
  );
};

export default PhotographyDetailPage;
