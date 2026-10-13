import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MUSIC_RELEASES, MusicRelease } from '../data/music.ts';
import { MusicReleaseCard } from '../components/MusicReleaseCard.tsx';
import { LiquidImagePlaceholder } from '../components/LiquidImagePlaceholder.tsx';
import { SpotifyIcon, AppleMusicIcon, TidalIcon } from '../components/SocialIcons.tsx';
import { Disc3, ArrowUpRight, Music, Radio, Volume2, Sparkles, SlidersHorizontal } from 'lucide-react';

export const MusicPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Featured release is marked in data or first release
  const featuredRelease: MusicRelease =
    MUSIC_RELEASES.find((r) => r.featured) || MUSIC_RELEASES[0];

  // Distinct release types from actual data
  const filterOptions = ['All', 'Singles', 'EPs', 'Ambient Works'];

  const filteredReleases = MUSIC_RELEASES.filter((r) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Singles') return r.releaseType === 'Single';
    if (activeFilter === 'EPs') return r.releaseType === 'EP';
    if (activeFilter === 'Ambient Works') return r.releaseType === 'Ambient Work';
    return true;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-28 md:py-36 overflow-hidden">
      
      {/* 
        =======================================================================
        MUSIC-SPECIFIC ATMOSPHERIC BACKGROUND AURA
        =======================================================================
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Deep emerald and forest moody glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[550px] rounded-full bg-radial from-[#075B46]/35 via-[#087F5B]/15 to-transparent blur-[120px]" />
        {/* Muted gold & coral subtle accent glow */}
        <div className="absolute top-[45%] right-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-[#C99516]/12 via-[#EF684F]/06 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 space-y-24 md:space-y-32">
        
        {/* 
          =======================================================================
          SECTION 1: CINEMATIC FEATURED RELEASE HERO
          =======================================================================
        */}
        <section aria-label="Featured Music Release" className="relative">
          {/* Section Kicker */}
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#E2B52C] tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#087F5B] animate-pulse" />
            <span>Featured Audio Spotlight</span>
            <span aria-hidden="true">·</span>
            <span>Independent Artist Catalog</span>
          </div>

          <div className="relative rounded-3xl p-6 sm:p-10 lg:p-14 glass-surface bg-[#0a1711]/85 border border-white/[0.09] shadow-2xl overflow-hidden">
            
            {/* Background subtle sound wave contour */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-white/[0.03] pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full border border-dashed border-[#087F5B]/10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Featured Release Artwork Frame (5 cols) */}
              <div className="lg:col-span-5 relative group">
                <div className="relative mx-auto max-w-[380px] lg:max-w-none">
                  {/* Subtle vinyl rim effect */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#087F5B]/30 via-[#E2B52C]/15 to-[#EF684F]/15 blur-lg -z-10" />
                  
                  <Link
                    to={`/music/${featuredRelease.slug}`}
                    className="block rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C]"
                    aria-label={`View ${featuredRelease.title} details`}
                  >
                    <LiquidImagePlaceholder
                      aspectRatio="1/1"
                      label={featuredRelease.title}
                      variant="music"
                      imageSrc={featuredRelease.artworkSrc}
                      alt={`${featuredRelease.title} cover artwork`}
                      badge={featuredRelease.releaseType}
                      priority={true}
                    />
                  </Link>
                </div>
              </div>

              {/* Featured Release Details & Listen Actions (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#E2B52C] font-semibold tracking-wider uppercase">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
                      {featuredRelease.releaseType}
                    </span>
                    <span className="font-mono text-[#F7F7F2]/50">{featuredRelease.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#159A91]">ESTIAQ MEHEDI</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F7F2] leading-tight">
                    {featuredRelease.title}
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-[#F7F7F2]/75 leading-relaxed max-w-xl">
                  {featuredRelease.description}
                </p>

                {/* Mood Tags */}
                {featuredRelease.moodKeywords && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#F7F7F2]/50 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#E2B52C]" />
                    {featuredRelease.moodKeywords.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < featuredRelease.moodKeywords.length - 1 && <span>·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {/* Primary Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/music/${featuredRelease.slug}`}
                    className="px-7 py-3.5 rounded-xl bg-[#087F5B] hover:bg-[#075B46] text-[#F7F7F2] text-sm font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-xl shadow-[#087F5B]/30 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Liner Notes & Tracklist</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E2B52C]" />
                  </Link>

                  {/* Streaming Shortcuts */}
                  <div className="flex items-center gap-2">
                    <a
                      href={featuredRelease.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen on Spotify"
                      className="p-3 rounded-xl glass-card text-[#36A852] hover:bg-white/[0.08] transition-all flex items-center gap-2 text-xs font-semibold"
                    >
                      <SpotifyIcon className="w-4 h-4" />
                      <span className="hidden sm:inline">Spotify</span>
                    </a>
                    <a
                      href={featuredRelease.links.appleMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen on Apple Music"
                      className="p-3 rounded-xl glass-card text-[#D83A3A] hover:bg-white/[0.08] transition-all flex items-center gap-2 text-xs font-semibold"
                    >
                      <AppleMusicIcon className="w-4 h-4" />
                      <span className="hidden sm:inline">Apple Music</span>
                    </a>
                    <a
                      href={featuredRelease.links.tidal}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen on TIDAL"
                      className="p-3 rounded-xl glass-card text-[#087F5B] hover:bg-white/[0.08] transition-all flex items-center gap-2 text-xs font-semibold"
                    >
                      <TidalIcon className="w-4 h-4" />
                      <span className="hidden sm:inline">TIDAL</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 
          =======================================================================
          SECTION 2: DISCOGRAPHY CATALOG WITH CATEGORY FILTERING
          =======================================================================
        */}
        <section aria-label="Discography Catalog" className="space-y-8">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#159A91] uppercase tracking-wider">
                <Disc3 className="w-4 h-4 text-[#087F5B]" />
                <span>Complete Discography</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F7F7F2]">
                Releases & Catalog
              </h2>
              <p className="text-sm text-[#F7F7F2]/60 max-w-lg">
                Original studio singles, conceptual EPs, and ambient compositions crafted with analog synthesizers and tape textures.
              </p>
            </div>

            {/* Segmented Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#F7F7F2]/40 shrink-0 mr-1" />
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setActiveFilter(opt)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeFilter === opt
                      ? 'bg-[#087F5B] text-[#F7F7F2] shadow-sm'
                      : 'glass-card text-[#F7F7F2]/60 hover:text-[#F7F7F2]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredReleases.map((release, index) => (
              <MusicReleaseCard
                key={release.id}
                release={release}
                priority={index < 2}
              />
            ))}
          </div>

        </section>


        {/* 
          =======================================================================
          SECTION 3: MUSIC IDENTITY & ARTIST INTENT
          =======================================================================
        */}
        <section
          aria-label="Artist Sonic Identity"
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/[0.08] relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2B52C] uppercase tracking-widest">
              <Radio className="w-4 h-4 text-[#087F5B]" />
              <span>Independent Artist Ethos</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F7F2] tracking-tight leading-snug">
              “Sound as an emotional architecture: capturing resonance, tape saturation, and the feeling of open space.”
            </h2>

            <p className="text-sm sm:text-base text-[#F7F7F2]/75 leading-relaxed">
              As an independent artist, ESTIAQ MEHEDI works beyond commercial genre conventions. Each release explores the dynamic intersection between tactile synthesizer harmonics, subtle tape-loop degradations, and immersive spatial delays—crafted for focused listening, late-night contemplation, and cinematic headspace.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#F7F7F2]/50">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#36A852]" />
                <span>Lossless & Hi-Res Streaming Available</span>
              </span>
              <span>·</span>
              <span>Independent Production</span>
              <span>·</span>
              <span>Global Distribution</span>
            </div>
          </div>
        </section>


        {/* 
          =======================================================================
          SECTION 4: LISTEN EVERYWHERE
          =======================================================================
        */}
        <section aria-label="Listen Everywhere Streaming Platforms" className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E2B52C] font-semibold">
              Authorized Distribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F7F2]">
              Listen Everywhere
            </h2>
            <p className="text-sm text-[#F7F7F2]/60">
              Stream and follow ESTIAQ MEHEDI across all major streaming services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Spotify Card */}
            <a
              href="https://open.spotify.com/artist/4tUOMKIWDwxn2nV2ha9x5E?si=mD1hQbkvSkimZS8K42Lh7A&utm_source=copy-link"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#36A852]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#36A852]/10 border border-[#36A852]/30 flex items-center justify-center text-[#36A852]">
                  <SpotifyIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F7F7F2] group-hover:text-[#36A852] transition-colors">
                    Spotify
                  </h3>
                  <span className="text-xs text-[#F7F7F2]/50">Official Artist Profile</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#F7F7F2]/30 group-hover:text-[#36A852] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Apple Music Card */}
            <a
              href="https://music.apple.com/us/artist/estiaq-mehedi/1708027030"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#D83A3A]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D83A3A]/10 border border-[#D83A3A]/30 flex items-center justify-center text-[#D83A3A]">
                  <AppleMusicIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F7F7F2] group-hover:text-[#D83A3A] transition-colors">
                    Apple Music
                  </h3>
                  <span className="text-xs text-[#F7F7F2]/50">Artist Catalog</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#F7F7F2]/30 group-hover:text-[#D83A3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* TIDAL Card */}
            <a
              href="https://tidal.com/artist/42231013/u"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#087F5B]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#087F5B]/10 border border-[#087F5B]/30 flex items-center justify-center text-[#087F5B]">
                  <TidalIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F7F7F2] group-hover:text-[#E2B52C] transition-colors">
                    TIDAL Hi-Fi
                  </h3>
                  <span className="text-xs text-[#F7F7F2]/50">Master Quality Audio</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#F7F7F2]/30 group-hover:text-[#E2B52C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MusicPage;
