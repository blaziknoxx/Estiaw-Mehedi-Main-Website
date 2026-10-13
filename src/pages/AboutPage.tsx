import React from 'react';
import { Link } from 'react-router-dom';
import { LiquidImagePlaceholder } from '../components/LiquidImagePlaceholder.tsx';
import { Music, Camera, Code2, ArrowUpRight, Sparkles } from 'lucide-react';
import { SOCIAL_PLATFORMS } from '../data/socials.ts';
import { PlatformIcon } from '../components/SocialIcons.tsx';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2B52C] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#087F5B]" />
            <span>Profile & Ethos</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F7F7F2]">
            About Estiaq Mehedi
          </h1>
          <p className="text-lg sm:text-xl text-[#E2B52C] font-medium">
            Independent Artist · Photographer · Digital Creator
          </p>
        </div>

        {/* 2-Column Split: Personal Frame & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Portrait Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl p-1 bg-gradient-to-b from-[#087F5B]/30 via-white/[0.04] to-transparent">
              <LiquidImagePlaceholder
                aspectRatio="4/5"
                label="ESTIAQ MEHEDI · Official Portrait"
                variant="portrait"
                imageSrc=""
                alt="Estiaq Mehedi portrait placeholder"
                badge="Artist Portrait"
                priority={true}
              />
            </div>
            
            <div className="mt-6 glass-card p-5 rounded-2xl space-y-3 text-xs text-[#F7F7F2]/70">
              <div className="flex items-center justify-between text-[#E2B52C] font-semibold uppercase tracking-wider">
                <span>Studio Focus</span>
                <span className="font-mono text-[#F7F7F2]/40">Active</span>
              </div>
              <p className="leading-relaxed">
                Working independently across sound composition, visual documentation, and responsive digital interfaces.
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#F7F7F2]/50">
                <span>Location: Global / Remote</span>
                <span>Inquiries: Open</span>
              </div>
            </div>
          </div>

          {/* Biography Prose Column */}
          <div className="lg:col-span-7 space-y-8 text-[#F7F7F2]/80 leading-relaxed text-base sm:text-lg">
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F7F2] tracking-tight">
                “Exploring sound, capturing moments, and building things that feel different.”
              </h2>
              <p>
                As an independent creator, my practice is defined by curiosity across mediums. I view music, photography, and digital code not as separate disciplines, but as complementary lenses on rhythm, emotion, and human perception.
              </p>
              <p>
                In an era dominated by rapid automated output and generic templates, I focus on intentionality—crafting compositions where every frequency, shadow value, and layout boundary serves an emotional purpose.
              </p>
            </div>

            {/* Creative Pillars */}
            <div className="space-y-6 pt-6 border-t border-white/[0.08]">
              <h3 className="text-xl font-bold text-[#F7F7F2] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E2B52C]" />
                <span>Creative Disciplines</span>
              </h3>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Pillar 1: Music */}
                <div className="glass-card p-6 rounded-2xl border-l-2 border-[#E2B52C]/60 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#E2B52C]">
                    <Music className="w-4 h-4" />
                    <span>01. Music & Sound Design</span>
                  </div>
                  <p className="text-sm text-[#F7F7F2]/70">
                    Composing atmospheric instrumental releases, textural synthesis, ambient soundscapes, and emotive melodic themes distributed across Spotify, Apple Music, and TIDAL.
                  </p>
                  <Link to="/music" className="inline-flex items-center gap-1 text-xs font-semibold text-[#E2B52C] hover:underline pt-1">
                    Explore Music Releases <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Pillar 2: Photography */}
                <div className="glass-card p-6 rounded-2xl border-l-2 border-[#EF684F]/60 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#EF684F]">
                    <Camera className="w-4 h-4" />
                    <span>02. Photography & Visual Direction</span>
                  </div>
                  <p className="text-sm text-[#F7F7F2]/70">
                    Documenting fleeting light, urban stillness, natural symmetry, and candid street rhythms with an eye for cinematic mood and high tonal fidelity.
                  </p>
                  <Link to="/photography" className="inline-flex items-center gap-1 text-xs font-semibold text-[#EF684F] hover:underline pt-1">
                    View Photo Gallery <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Pillar 3: Digital Creation */}
                <div className="glass-card p-6 rounded-2xl border-l-2 border-[#159A91]/60 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#159A91]">
                    <Code2 className="w-4 h-4" />
                    <span>03. Digital Creation & Creative Engineering</span>
                  </div>
                  <p className="text-sm text-[#F7F7F2]/70">
                    Building bespoke web experiences, interactive audio synthesizers, and expressive tools that respect the user’s attention and push beyond conventional design tropes.
                  </p>
                  <Link to="/projects" className="inline-flex items-center gap-1 text-xs font-semibold text-[#159A91] hover:underline pt-1">
                    Browse Digital Builds <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Direct Connect Platforms */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-[#F7F7F2]">
                Direct Channels & Official Profiles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card flex items-center gap-2.5 hover:border-white/20 transition-all text-[#F7F7F2]/80 hover:text-[#F7F7F2]"
                  >
                    <PlatformIcon id={platform.id} className="w-4 h-4 shrink-0" />
                    <span className="truncate font-medium">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
