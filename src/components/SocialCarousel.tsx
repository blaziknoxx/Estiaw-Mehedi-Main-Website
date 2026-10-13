import React, { useRef, useState, useEffect } from 'react';
import { SOCIAL_PLATFORMS, SocialPlatform } from '../data/socials.ts';
import { PlatformIcon } from './SocialIcons.tsx';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export const SocialCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 320;
    const offset = direction === 'left' ? -cardWidth : cardWidth;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  // Optional subtle autoplay with pause-on-hover & reduced-motion check
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Find Me Everywhere Social Platforms"
      className="relative w-full py-16 md:py-24 border-t border-b border-white/[0.06] bg-[#09130f]/60 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#E2B52C] tracking-widest uppercase font-semibold mb-2">
              <span>Connected Ecosystem</span>
              <span aria-hidden="true">·</span>
              <span>Direct Channels</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#F7F7F2]">
              Find Me Everywhere
            </h2>
            <p className="text-sm md:text-base text-[#F7F7F2]/60 mt-1 max-w-xl">
              Official profiles across audio distribution, visual archives, and developer spaces.
            </p>
          </div>

          {/* Nav Arrow Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous social platform"
              className={`p-2.5 rounded-full border border-white/10 glass-card transition-all duration-200 ${
                canScrollLeft
                  ? 'text-[#F7F7F2] hover:border-[#087F5B] hover:text-[#E2B52C] cursor-pointer'
                  : 'text-[#F7F7F2]/20 border-white/5 cursor-not-allowed opacity-40'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              disabled={!canScrollRight}
              aria-label="Scroll to next social platform"
              className={`p-2.5 rounded-full border border-white/10 glass-card transition-all duration-200 ${
                canScrollRight
                  ? 'text-[#F7F7F2] hover:border-[#087F5B] hover:text-[#E2B52C] cursor-pointer'
                  : 'text-[#F7F7F2]/20 border-white/5 cursor-not-allowed opacity-40'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              scrollByAmount('left');
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              scrollByAmount('right');
            }
          }}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 -mx-2 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C]/60 rounded-2xl"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          tabIndex={0}
          role="region"
          aria-label="Social platforms horizontal slider. Use left and right arrow keys to browse."
        >
          {SOCIAL_PLATFORMS.map((platform: SocialPlatform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Estiaq Mehedi's ${platform.name} profile (${platform.description}) in a new tab`}
              className="group relative flex-none w-[280px] sm:w-[320px] snap-start rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C]"
            >
              {/* Subtle top edge luminous highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${platform.accentColor}, transparent)`,
                }}
              />

              {/* Card Header: Icon + External link arrow */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-white/20"
                    style={{ color: platform.accentColor }}
                  >
                    <PlatformIcon id={platform.id} className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#F7F7F2]/40 group-hover:text-[#F7F7F2] transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#F7F7F2] tracking-tight group-hover:text-[#E2B52C] transition-colors duration-200">
                    {platform.name}
                  </h3>
                  {platform.handle ? (
                    <p className="text-xs font-mono text-[#F7F7F2]/50 tracking-wide">
                      {platform.handle}
                    </p>
                  ) : (
                    <p className="text-xs font-mono text-[#F7F7F2]/40 tracking-wide">
                      Official Artist Profile
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer: Role / Category info */}
              <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#F7F7F2]/60">
                <span className="font-medium text-[#F7F7F2]/80">{platform.description}</span>
                <span className="text-[11px] text-[#E2B52C] group-hover:underline">Visit</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialCarousel;
