import React, { useState } from 'react';

export interface LiquidImagePlaceholderProps {
  aspectRatio?: '1/1' | '4/5' | '16/9' | '3/4' | '16/10' | '4/3' | string;
  label?: string;
  variant?: 'default' | 'portrait' | 'music' | 'project' | 'hero' | 'subtle';
  className?: string;
  imageSrc?: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
  badge?: string;
  priority?: boolean;
}

/**
 * Calculates nominal intrinsic width and height from an aspect ratio string
 * to prevent layout shifts (CLS) and allow the browser engine to reserve space.
 */
function getDimensionsFromAspectRatio(ratio: string): { width: number; height: number } {
  const parts = ratio.split('/').map((s) => parseFloat(s.trim()));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[1] > 0) {
    // Scale to standard high-resolution asset units
    const baseMultiplier = 300;
    return {
      width: Math.round(parts[0] * baseMultiplier),
      height: Math.round(parts[1] * baseMultiplier),
    };
  }
  return { width: 1200, height: 675 }; // Default fallback 16:9
}

export const LiquidImagePlaceholder: React.FC<LiquidImagePlaceholderProps> = ({
  aspectRatio = '16/9',
  label = 'Visual Work',
  variant = 'default',
  className = '',
  imageSrc,
  srcSet,
  sizes,
  alt = 'Visual composition placeholder',
  badge,
  priority = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasValidImage = Boolean(imageSrc && imageSrc.trim().length > 0 && !imageError);

  // Map aspect ratio for inline CSS
  const formattedAspectRatio = aspectRatio.replace('/', ' / ');
  const aspectStyle: React.CSSProperties = {
    aspectRatio: formattedAspectRatio,
  };

  const { width, height } = getDimensionsFromAspectRatio(aspectRatio);

  return (
    <div
      className={`liquid-border-container group relative w-full overflow-hidden transition-all duration-300 ${className}`}
      style={aspectStyle}
    >
      {/* Inner Frame with Stable Geometry */}
      <div className="liquid-inner-frame relative w-full h-full flex flex-col items-center justify-between p-3.5 sm:p-5 md:p-6 select-none">
        
        {/* If valid image exists, render with progressive lazy/eager loading & fade-in */}
        {hasValidImage ? (
          <>
            <img
              src={imageSrc}
              srcSet={srcSet}
              sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? 'eager' : 'lazy'}
              decoding={priority ? 'sync' : 'async'}
              fetchPriority={priority ? 'high' : 'low'}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Subtle glass vignette overlay on top of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09130f]/80 via-transparent to-black/20 pointer-events-none" />
          </>
        ) : null}

        {/* Placeholder state when no image or image loading/error */}
        {(!hasValidImage || !imageLoaded) && (
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pointer-events-none py-2">
            {/* Top Bar inside frame */}
            <div className="w-full flex items-center justify-between text-[11px] tracking-wider text-[#F7F7F2]/60 uppercase font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2B52C]/80" />
                <span>{badge || 'Asset Placeholder'}</span>
              </span>
              <span className="text-[#F7F7F2]/40 font-mono text-[10px]">
                {aspectRatio}
              </span>
            </div>

            {/* Center Artful Geometric Glyph */}
            <div className="flex flex-col items-center justify-center my-auto">
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02] mb-3 group-hover:scale-105 transition-transform duration-300">
                {/* Subtle spinning concentric guide ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#159A91]/30 animate-[spin_40s_linear_infinite]" />
                
                {variant === 'music' ? (
                  /* Audio / Vinyl stylized sound wave geometry */
                  <svg className="w-7 h-7 text-[#E2B52C]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3" strokeOpacity="0.4" />
                  </svg>
                ) : variant === 'portrait' || variant === 'hero' ? (
                  /* Aperture / Focal Reticle */
                  <svg className="w-7 h-7 text-[#087F5B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 4v4m0 8v4M4 12h4m8 0h4" strokeOpacity="0.5" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.3" />
                  </svg>
                ) : variant === 'project' ? (
                  /* Digital Grid / Code Node */
                  <svg className="w-7 h-7 text-[#159A91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6m-6 3h6m-6 3h4" strokeOpacity="0.6" />
                  </svg>
                ) : (
                  /* Camera / Viewfinder Reticle */
                  <svg className="w-7 h-7 text-[#EF684F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 8V5h3m10 0h3v3M4 16v3h3m10 0h3v-3" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </div>

              {/* Label */}
              <div className="text-center px-4">
                <span className="block text-sm font-semibold tracking-wide text-[#F7F7F2]/90">
                  {label}
                </span>
                <span className="block text-[11px] text-[#F7F7F2]/50 mt-1 max-w-[200px] leading-relaxed">
                  Liquid border frame active · Ready for media upload
                </span>
              </div>
            </div>

            {/* Bottom Technical Status Kicker */}
            <div className="w-full flex items-center justify-between text-[10px] text-[#F7F7F2]/40 font-mono">
              <span>ESTIAQ MEHEDI</span>
              <span>STUDIO ARCHIVE</span>
            </div>
          </div>
        )}

        {/* Ambient Subtle Shimmer Line on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      </div>
    </div>
  );
};

export default LiquidImagePlaceholder;
