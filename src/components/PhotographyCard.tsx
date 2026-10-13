import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoItem } from '../data/photography.ts';
import { LiquidImagePlaceholder } from './LiquidImagePlaceholder.tsx';
import { ArrowUpRight } from 'lucide-react';

interface PhotographyCardProps {
  photo: PhotoItem;
  priority?: boolean;
}

export const PhotographyCard: React.FC<PhotographyCardProps> = ({ photo, priority = false }) => {
  return (
    <Link
      to={`/photography/${photo.slug}`}
      className="group block relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C]"
      aria-label={`View photograph details: ${photo.title}`}
    >
      {/* Liquid Image Placeholder Container */}
      <div className="w-full overflow-hidden p-2">
        <LiquidImagePlaceholder
          aspectRatio={photo.aspectRatio}
          label={photo.title}
          variant="default"
          imageSrc={photo.imageSrc}
          alt={photo.title}
          badge={photo.category}
          priority={priority}
        />
      </div>

      {/* Editorial Meta Description Below */}
      <div className="p-5 pt-3">
        <div className="flex items-center justify-between gap-2 text-xs text-[#E2B52C] font-medium tracking-wide mb-1">
          <span>{photo.category}</span>
          {photo.date && (
            <span className="text-[#F7F7F2]/40 font-mono text-[11px]">{photo.date}</span>
          )}
        </div>
        
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[#F7F7F2] tracking-tight group-hover:text-[#E2B52C] transition-colors duration-200">
            {photo.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[#F7F7F2]/40 group-hover:text-[#E2B52C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
        </div>

        <p className="text-xs text-[#F7F7F2]/60 mt-1.5 line-clamp-2 leading-relaxed">
          {photo.description}
        </p>
      </div>
    </Link>
  );
};

export default PhotographyCard;
