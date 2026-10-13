import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MUSIC_RELEASES } from '../data/music.ts';
import { LiquidImagePlaceholder } from '../components/LiquidImagePlaceholder.tsx';
import { SpotifyIcon, AppleMusicIcon, TidalIcon } from '../components/SocialIcons.tsx';
import { ArrowLeft, ArrowUpLeft, ExternalLink, Disc3, Music2, Sparkles, Layers } from 'lucide-react';

export const MusicReleaseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = MUSIC_RELEASES.findIndex((r) => r.slug === slug);
  const release = MUSIC_RELEASES[currentIndex];

  if (!release) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mx-auto text-[#E2B52C]">
            <Disc3 className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-[#F7F7F2]">Release Not Found</h1>
          <p className="text-sm text-[#F7F7F2]/60">
            The requested musical release is not in the current catalog or has been moved.
          </p>
          <div className="pt-2">
            <Link
              to="/music"
              className="px-5 py-2.5 text-xs font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Music Catalog</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related releases (all other releases in the catalog)
  const relatedReleases = MUSIC_RELEASES.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36 overflow-hidden">
      {/* Subtle moody ambient aura specific to this release */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(700px,95vw)] h-[400px] rounded-full bg-radial from-[#087F5B]/20 via-[#075B46]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Back Link to Discography */}
        <div className="mb-8">
          <Link
            to="/music"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/60 hover:text-[#E2B52C] transition-colors"
          >
            <ArrowUpLeft className="w-4 h-4" />
            <span>Back to All Music Releases</span>
          </Link>
        </div>

        {/* Hero Release Layout: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16 border-b border-white/[0.08]">
          
          {/* Left Column: Prominent Vinyl / Artwork Frame */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl p-1 bg-gradient-to-b from-[#087F5B]/40 via-white/[0.04] to-transparent shadow-2xl">
              <LiquidImagePlaceholder
                aspectRatio="1/1"
                label={release.title}
                variant="music"
                imageSrc={release.artworkSrc}
                alt={`${release.title} official artwork`}
                badge={release.releaseType}
                priority={true}
              />
            </div>

            {/* Quick Vinyl Status Bar */}
            <div className="mt-4 px-3 flex items-center justify-between text-xs text-[#F7F7F2]/50 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#36A852]" />
                <span>Distributed Worldwide</span>
              </span>
              <span>{release.year}</span>
            </div>
          </div>

          {/* Right Column: Metadata, Listening Actions, Tracklist, Liner Notes */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Lockup */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#E2B52C] font-semibold tracking-wider uppercase">
                <Disc3 className="w-3.5 h-3.5 text-[#087F5B]" />
                <span>{release.releaseType}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#F7F7F2]/60 font-mono">{release.year}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F7F2]">
                {release.title}
              </h1>

              <p className="text-base font-medium text-[#159A91] tracking-wide">
                by {release.artist}
              </p>

              <p className="text-base sm:text-lg text-[#F7F7F2]/75 leading-relaxed pt-2">
                {release.description}
              </p>
            </div>

            {/* Stream On Verified Platforms */}
            <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F2]/90 flex items-center gap-2">
                  <Music2 className="w-4 h-4 text-[#E2B52C]" />
                  <span>Listen on Official Platforms</span>
                </span>
                <span className="text-[11px] font-mono text-[#F7F7F2]/40">Authorized Feeds</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={release.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#36A852]/40 text-[#F7F7F2] text-xs font-semibold flex items-center justify-between transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <SpotifyIcon className="w-4 h-4 text-[#36A852]" />
                    <span>Spotify</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F7F7F2]/30 group-hover:text-[#36A852] transition-colors" />
                </a>

                <a
                  href={release.links.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#D83A3A]/40 text-[#F7F7F2] text-xs font-semibold flex items-center justify-between transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <AppleMusicIcon className="w-4 h-4 text-[#D83A3A]" />
                    <span>Apple Music</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F7F7F2]/30 group-hover:text-[#D83A3A] transition-colors" />
                </a>

                <a
                  href={release.links.tidal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#087F5B]/40 text-[#F7F7F2] text-xs font-semibold flex items-center justify-between transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <TidalIcon className="w-4 h-4 text-[#087F5B]" />
                    <span>TIDAL Hi-Fi</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F7F7F2]/30 group-hover:text-[#087F5B] transition-colors" />
                </a>
              </div>
            </div>

            {/* Tracklist Section */}
            {release.tracklist && release.tracklist.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-[#F7F7F2] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#159A91]" />
                  <span>Tracklist</span>
                </h2>

                <div className="divide-y divide-white/[0.06] glass-card rounded-2xl overflow-hidden">
                  {release.tracklist.map((track) => (
                    <div
                      key={track.number}
                      className="p-4 flex items-center justify-between text-xs sm:text-sm text-[#F7F7F2]/80 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-[#E2B52C] w-5">
                          {String(track.number).padStart(2, '0')}
                        </span>
                        <span className="font-medium text-[#F7F7F2]">{track.title}</span>
                      </div>
                      {track.note && (
                        <span className="text-[11px] font-mono text-[#F7F7F2]/40">
                          {track.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Liner Notes */}
            {release.linerNotes && (
              <div className="p-6 rounded-2xl glass-card border-l-2 border-[#E2B52C]/60 space-y-2 text-xs sm:text-sm text-[#F7F7F2]/75">
                <span className="font-bold text-[#E2B52C] uppercase tracking-wider text-[11px] block">
                  Studio Liner Notes
                </span>
                <p className="leading-relaxed">{release.linerNotes}</p>
              </div>
            )}

            {/* Credits Section */}
            {release.credits && release.credits.length > 0 && (
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F7F7F2]/40 block">
                  Production & Technical Credits
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {release.credits.map((c) => (
                    <div key={c.role} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[#F7F7F2]/50">{c.role}</span>
                      <span className="font-medium text-[#F7F7F2]">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mood Tags */}
            {release.moodKeywords && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E2B52C]" />
                {release.moodKeywords.map((k, i) => (
                  <span key={k} className="text-xs text-[#F7F7F2]/60">
                    {k}{i < release.moodKeywords.length - 1 && <span className="mx-1 text-white/20">·</span>}
                  </span>
                ))}
              </div>
            )}

          </div>

        </div>

        {/* Related Releases from the Discography */}
        {relatedReleases.length > 0 && (
          <div className="mt-20 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#E2B52C] font-semibold tracking-wider uppercase block mb-1">
                  More from the Studio
                </span>
                <h2 className="text-2xl font-bold text-[#F7F7F2]">
                  Explore Other Releases
                </h2>
              </div>
              <Link
                to="/music"
                className="text-xs font-semibold text-[#159A91] hover:text-[#E2B52C] transition-colors"
              >
                Full Discography →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedReleases.map((r) => (
                <Link
                  key={r.id}
                  to={`/music/${r.slug}`}
                  className="glass-card p-4 rounded-2xl group transition-all duration-300 hover:scale-[1.02] block"
                >
                  <LiquidImagePlaceholder
                    aspectRatio="1/1"
                    label={r.title}
                    variant="music"
                    imageSrc={r.artworkSrc}
                    alt={r.title}
                    badge={r.releaseType}
                  />
                  <div className="pt-3">
                    <span className="text-[10px] font-mono text-[#E2B52C] uppercase tracking-wider block">
                      {r.releaseType} · {r.year}
                    </span>
                    <h3 className="text-sm font-bold text-[#F7F7F2] group-hover:text-[#E2B52C] transition-colors mt-0.5 truncate">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MusicReleaseDetailPage;
