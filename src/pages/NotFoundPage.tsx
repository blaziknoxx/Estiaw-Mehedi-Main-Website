import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Disc3, Camera, Code2 } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="full-viewport-404 relative w-full flex-grow flex flex-col justify-between items-center text-center lg:text-left overflow-x-hidden box-border">
      {/* 
        =======================================================================
        FILM GRAIN & ATMOSPHERIC BLURRED GRADIENTS
        =======================================================================
      */}
      {/* Procedural 35mm Analog Film Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Blurred Gradients (Emerald, Forest, Gold, Coral) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(550px,90vw)] h-[min(550px,90vw)] rounded-full bg-radial from-[#087F5B]/25 via-[#075B46]/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[min(400px,80vw)] h-[min(400px,80vw)] rounded-full bg-radial from-[#E2B52C]/15 via-[#EF684F]/08 to-transparent blur-[70px]" />
        <div className="absolute top-2/3 left-1/4 w-[min(350px,70vw)] h-[min(350px,70vw)] rounded-full bg-radial from-[#159A91]/20 to-transparent blur-[70px]" />
      </div>

      {/* Top Anchor (Empty spacer to balance flex distribution) */}
      <div className="w-full shrink-0 h-2 sm:h-4 pointer-events-none" aria-hidden="true" />

      {/* 
        =======================================================================
        MAIN EDITORIAL COMPOSITION (FITS NATURALLY IN VIEWPORT)
        =======================================================================
      */}
      <div className="relative z-10 w-full max-w-6xl mx-auto my-auto py-2 sm:py-4 px-2 sm:px-4">
        
        {/* Mobile-Only Compact Viewfinder Badge (< lg screens) */}
        <div className="lg:hidden mb-4 sm:mb-6 max-w-[260px] sm:max-w-[290px] mx-auto">
          <div className="liquid-border-container relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg shadow-black/40">
            <div className="liquid-inner-frame w-full h-full p-3 sm:p-4 flex flex-col justify-between relative">
              {/* Corner Framing Marks */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/20 pointer-events-none" />

              <div className="flex items-center justify-between text-[10px] font-mono text-[#F7F7F2]/60 uppercase">
                <span className="flex items-center gap-1.5 text-[#EF684F] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF684F] animate-ping" />
                  LOST NEGATIVE
                </span>
                <span>EXP 00</span>
              </div>

              {/* Center Aperture Glyph */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#E2B52C]/80">
                <svg className="w-5 h-5 text-[#E2B52C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 4v3m0 10v3M4 12h3m10 0h3" strokeOpacity="0.5" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <span className="text-[11px] font-mono text-[#F7F7F2]/70">f/0.0 · ∞ mm</span>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-[#F7F7F2]/40">
                <span>ESTIAQ MEHEDI</span>
                <span>UNCAPTURED 404</span>
              </div>
            </div>
          </div>
        </div>

        {/* 12-Column Editorial Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Typographic & Action Suite */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-5 lg:space-y-6">
            
            {/* Cinematic Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md self-center lg:self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF684F] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#E2B52C] uppercase font-semibold">
                Lost in the Frame · Index 404
              </span>
            </div>

            {/* Oversized 404 Display with fluid clamp */}
            <div className="relative select-none self-center lg:self-start">
              <span
                className="font-extrabold tracking-tighter leading-none bg-gradient-to-b from-[#F7F7F2]/95 via-[#F7F7F2]/40 to-transparent bg-clip-text text-transparent block"
                style={{ fontSize: 'clamp(3.75rem, 9vw, 7.5rem)' }}
              >
                404
              </span>
              <div className="mt-1 w-20 sm:w-24 h-[2px] bg-gradient-to-r from-[#087F5B] via-[#E2B52C] to-[#EF684F] rounded-full mx-auto lg:mx-0 opacity-80" />
            </div>

            {/* Main Headline & Supporting Text */}
            <div className="space-y-2 sm:space-y-3 max-w-xl mx-auto lg:mx-0">
              <h1
                className="font-extrabold tracking-tight text-[#F7F7F2] text-balance leading-[1.12]"
                style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.75rem)' }}
              >
                Somewhere outside the frame.
              </h1>
              <p
                className="text-[#F7F7F2]/75 leading-relaxed text-balance"
                style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.125rem)' }}
              >
                This moment exists somewhere else. The page you’re looking for couldn’t be found.
              </p>
            </div>

            {/* Primary & Secondary Buttons (Optimized Touch Targets $\ge 44px$) */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/"
                className="min-h-[46px] sm:min-h-[50px] px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-[#087F5B] hover:bg-[#075B46] text-[#F7F7F2] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-xl shadow-[#087F5B]/30 hover:shadow-[#087F5B]/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group whitespace-nowrap"
                aria-label="Return to My World homepage"
              >
                <span>Return to My World</span>
                <ArrowUpRight className="w-4 h-4 text-[#E2B52C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="min-h-[46px] sm:min-h-[50px] px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl glass-card text-xs font-semibold text-[#F7F7F2]/80 hover:text-[#F7F7F2] hover:border-white/20 inline-flex items-center gap-2 transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
                aria-label="Go back to previous page"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#F7F7F2]/60" />
                <span>Go Back</span>
              </button>
            </div>

          </div>

          {/* Right Column: Desktop Cinematic Viewfinder Frame (Hidden on < lg) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[320px] xl:max-w-[360px]">
              
              {/* Outer Luminous Ambient Aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#087F5B]/25 via-[#E2B52C]/15 to-[#EF684F]/20 blur-2xl -z-10" />

              {/* Signature Liquid Border Viewfinder Frame */}
              <div className="liquid-border-container relative w-full aspect-[4/5] max-h-[44vh] rounded-2xl shadow-2xl overflow-hidden">
                <div className="liquid-inner-frame w-full h-full p-6 flex flex-col justify-between relative select-none">
                  
                  {/* Viewfinder Top Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#F7F7F2]/50 uppercase">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#EF684F] animate-ping" />
                      <span className="text-[#EF684F] font-semibold">LOST NEGATIVE</span>
                    </div>
                    <span>EXP 00 // NULL</span>
                  </div>

                  {/* Corner Framing Reticles */}
                  <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-white/20 pointer-events-none" />
                  <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-white/20 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-white/20 pointer-events-none" />
                  <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-white/20 pointer-events-none" />

                  {/* Center Unexposed Viewfinder Focal Reticle */}
                  <div className="flex flex-col items-center justify-center my-auto py-2 text-center space-y-3">
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02]">
                      {/* Rotating Outer Gyro Ring */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#E2B52C]/30 animate-[spin_50s_linear_infinite]" />
                      
                      {/* Aperture Iris Glyph */}
                      <svg
                        className="w-8 h-8 text-[#E2B52C]/80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 3v4.5M12 16.5V21M3 12h4.5M16.5 12H21" strokeOpacity="0.4" />
                        <circle cx="12" cy="12" r="3" strokeDasharray="2 2" />
                      </svg>
                    </div>

                    <div className="space-y-0.5">
                      <span className="block text-sm font-semibold tracking-wide text-[#F7F7F2]/90">
                        Unexposed Horizon
                      </span>
                      <span className="block text-xs font-mono text-[#F7F7F2]/45">
                        f/0.0 · ∞ mm · ISO 0
                      </span>
                    </div>
                  </div>

                  {/* Viewfinder Bottom Technical Metadata */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#F7F7F2]/40">
                    <span>ESTIAQ MEHEDI</span>
                    <span>UNCAPTURED · 404</span>
                  </div>

                </div>
              </div>

              {/* Caption below frame */}
              <div className="mt-2.5 flex items-center justify-between px-2 text-[11px] font-mono text-[#F7F7F2]/50">
                <span>SCENE: UNCHARTED</span>
                <span className="text-[#E2B52C]">LIQUID BORDER ACTIVE</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 
        =======================================================================
        BOTTOM UNBOXED ROUTE DISCOVERY STRIP (WITH COMFORTABLE TOUCH TARGETS)
        =======================================================================
      */}
      <div className="relative z-10 w-full max-w-4xl mx-auto shrink-0 pt-2 pb-1 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#F7F7F2]/60">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#F7F7F2]/40">
          Core Studio Archives:
        </span>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/photography"
            className="py-1.5 hover:text-[#EF684F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-[#EF684F]" />
            <span>Photography</span>
          </Link>
          <span className="text-white/20 select-none" aria-hidden="true">·</span>
          <Link
            to="/music"
            className="py-1.5 hover:text-[#E2B52C] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Disc3 className="w-3.5 h-3.5 text-[#E2B52C]" />
            <span>Music Catalog</span>
          </Link>
          <span className="text-white/20 select-none" aria-hidden="true">·</span>
          <Link
            to="/projects"
            className="py-1.5 hover:text-[#159A91] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-[#159A91]" />
            <span>Digital Projects</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NotFoundPage;
