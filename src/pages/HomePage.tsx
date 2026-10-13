import React from 'react';
import { Link } from 'react-router-dom';
import { LiquidImagePlaceholder } from '../components/LiquidImagePlaceholder.tsx';
import { SocialCarousel } from '../components/SocialCarousel.tsx';
import { PHOTOGRAPHY_ITEMS } from '../data/photography.ts';
import { MUSIC_RELEASES } from '../data/music.ts';
import { PROJECT_ITEMS } from '../data/projects.ts';
import { PhotographyCard } from '../components/PhotographyCard.tsx';
import { MusicReleaseCard } from '../components/MusicReleaseCard.tsx';
import { ProjectCard } from '../components/ProjectCard.tsx';
import { ArrowDown, ArrowUpRight, Compass, Music, Camera, Code2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredPhoto = PHOTOGRAPHY_ITEMS[0];
  const featuredRelease = MUSIC_RELEASES[0];
  const featuredProject = PROJECT_ITEMS[0];

  return (
    <div className="relative min-h-screen">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Typographic Impact */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              {/* Identity Kicker */}
              <div className="flex items-center gap-3 text-xs md:text-sm text-[#E2B52C] font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#087F5B]" />
                <span>Independent Artist · Photographer · Digital Creator</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F7F7F2] leading-[1.08] text-balance">
                ESTIAQ <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#F7F7F2] via-[#E2B52C] to-[#159A91] bg-clip-text text-transparent">
                  MEHEDI
                </span>
              </h1>

              {/* Primary Tagline */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#F7F7F2]/80 font-normal leading-relaxed max-w-xl text-balance">
                “Exploring sound, capturing moments, and building things that feel different.”
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#featured"
                  className="px-6 py-3.5 text-sm font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-xl transition-all duration-200 shadow-lg shadow-[#087F5B]/25 hover:shadow-xl hover:shadow-[#087F5B]/40 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <Link
                  to="/music"
                  className="px-6 py-3.5 text-sm font-semibold text-[#F7F7F2] glass-card rounded-xl hover:border-[#E2B52C]/50 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Discover My Music</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E2B52C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Creative Discipline Pillars */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 text-xs text-[#F7F7F2]/60">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#E2B52C]" />
                  <span>Sonic Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#EF684F]" />
                  <span>Visual Capture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#159A91]" />
                  <span>Creative Code</span>
                </div>
              </div>
            </div>

            {/* Right Column: Signature Hero Liquid Image Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative floating glass backdrop accent */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#087F5B]/20 via-[#E2B52C]/10 to-[#EF684F]/15 blur-xl -z-10" />

                <LiquidImagePlaceholder
                  aspectRatio="4/5"
                  label="Portrait Placeholder"
                  variant="hero"
                  imageSrc=""
                  alt="Estiaq Mehedi creative portrait"
                  badge="Creative Identity"
                  priority={true}
                  className="shadow-2xl"
                />

                <div className="mt-4 flex items-center justify-between text-xs text-[#F7F7F2]/50 px-2">
                  <span>Photo slot reserved for official portrait</span>
                  <span className="font-mono text-[#E2B52C]">Liquid Border Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-12 hidden md:flex items-center gap-2 text-xs text-[#F7F7F2]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E2B52C]" />
          <span>Scroll to explore curated disciplines</span>
        </div>
      </section>

      {/* =========================================================================
          INTRODUCTION STATEMENT
          ========================================================================= */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06] bg-[#09130f]/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#159A91] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Creative Direction</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F7F7F2] text-balance leading-snug">
            A cross-disciplinary practice at the crossroads of atmospheric audio, cinematic frames, and experimental web architecture.
          </h2>

          <p className="text-base sm:text-lg text-[#F7F7F2]/70 leading-relaxed max-w-2xl mx-auto">
            Every project begins with a question of feeling: how does a harmonic frequency shift mood, how does a shutter click freeze human presence, and how can an interactive interface evoke tactile intimacy?
          </p>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#F7F7F2]/50 font-mono">
            <span>MUSIC</span>
            <span aria-hidden="true">·</span>
            <span>PHOTOGRAPHY</span>
            <span aria-hidden="true">·</span>
            <span>DIGITAL CREATION</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CURATED SELECTED WORK
          ========================================================================= */}
      <section id="featured" className="relative py-20 md:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#E2B52C] tracking-widest uppercase font-semibold mb-2">
                <span>Curated Highlights</span>
                <span aria-hidden="true">·</span>
                <span>Selected Works</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#F7F7F2]">
                Craft Across Mediums
              </h2>
            </div>
            <p className="text-sm text-[#F7F7F2]/60 max-w-md">
              A curated preview of current releases, visual frames, and digital environments.
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Photography Feature (Takes 7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div className="mb-3 flex items-center justify-between text-xs text-[#EF684F] font-semibold uppercase tracking-wider">
                <span>Featured Photograph</span>
                <Link to="/photography" className="text-[#F7F7F2]/50 hover:text-[#E2B52C] transition-colors">
                  View Gallery →
                </Link>
              </div>
              <PhotographyCard photo={featuredPhoto} />
            </div>

            {/* Music Feature (Takes 5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="mb-3 flex items-center justify-between text-xs text-[#E2B52C] font-semibold uppercase tracking-wider">
                <span>Featured Music Release</span>
                <Link to="/music" className="text-[#F7F7F2]/50 hover:text-[#E2B52C] transition-colors">
                  All Releases →
                </Link>
              </div>
              <MusicReleaseCard release={featuredRelease} />
            </div>

            {/* Full-width Digital Project Feature */}
            <div className="md:col-span-12 mt-4">
              <div className="mb-3 flex items-center justify-between text-xs text-[#159A91] font-semibold uppercase tracking-wider">
                <span>Featured Digital Project</span>
                <Link to="/projects" className="text-[#F7F7F2]/50 hover:text-[#E2B52C] transition-colors">
                  All Projects →
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 glass-card p-6 rounded-2xl items-center">
                <div className="lg:col-span-6">
                  <LiquidImagePlaceholder
                    aspectRatio="16/10"
                    label={featuredProject.title}
                    variant="project"
                    imageSrc={featuredProject.coverSrc}
                    alt={featuredProject.title}
                    badge={featuredProject.category}
                  />
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#159A91] font-mono">
                    <span>{featuredProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredProject.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F7F7F2]">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-[#F7F7F2]/70 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#F7F7F2]/50 pt-2">
                    {featuredProject.technologies.map((t, i) => (
                      <React.Fragment key={t}>
                        <span className="font-mono text-[11px] text-[#F7F7F2]/75">{t}</span>
                        {i < featuredProject.technologies.length - 1 && <span>·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/projects/${featuredProject.slug}`}
                      className="px-5 py-2.5 text-xs font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#F7F7F2]/60 hover:text-[#E2B52C] transition-colors"
                      >
                        GitHub Repository ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FIND ME EVERYWHERE — SOCIAL CAROUSEL
          ========================================================================= */}
      <SocialCarousel />

      {/* =========================================================================
          CLOSING INVITATION CTA
          ========================================================================= */}
      <section className="relative py-24 md:py-36 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2B52C] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#E2B52C]" />
            <span>Open for Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F7F2] leading-tight">
            Have a project, sound piece, or visual vision in mind?
          </h2>

          <p className="text-base sm:text-lg text-[#F7F7F2]/70 leading-relaxed max-w-xl mx-auto">
            Whether inquiring about original music licensing, visual assignments, or digital collaborations, get in touch directly.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 text-sm font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-xl transition-all duration-200 shadow-xl shadow-[#087F5B]/30 hover:scale-[1.02]"
            >
              Start a Conversation
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 text-sm font-semibold text-[#F7F7F2] glass-card rounded-xl hover:border-white/20 transition-all duration-200"
            >
              Read Biography
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
