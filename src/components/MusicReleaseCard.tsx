import React from 'react';
import { Link } from 'react-router-dom';
import { MusicRelease } from '../data/music.ts';
import { LiquidImagePlaceholder } from './LiquidImagePlaceholder.tsx';
import { SpotifyIcon, AppleMusicIcon, TidalIcon } from './SocialIcons.tsx';
import { ArrowUpRight } from 'lucide-react';

interface MusicReleaseCardProps {
  release: MusicRelease;
  priority?: boolean;
}

export const MusicReleaseCard: React.FC<MusicReleaseCardProps> = ({ release, priority = false }) => {
  return (
    <div className="group relative rounded-2xl glass-card bg-[#0b1712]/70 border border-white/[0.08] hover:border-[#087F5B]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#087F5B]/15">
      <div>
        {/* Clickable Square Artwork Frame leading to Release Detail Page */}
        <Link
          to={`/music/${release.slug}`}
          className="block p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C] rounded-2xl group/art"
          aria-label={`View release details for ${release.title}`}
        >
          <LiquidImagePlaceholder
            aspectRatio="1/1"
            label={release.title}
            variant="music"
            imageSrc={release.artworkSrc}
            alt={`${release.title} artwork`}
            badge={release.releaseType}
            priority={priority}
            className="transition-transform duration-500 group-hover/art:scale-[1.01]"
          />
        </Link>

        {/* Content Section */}
        <div className="p-5 pt-1">
          <div className="flex items-center justify-between text-xs text-[#E2B52C] font-semibold tracking-wider uppercase mb-1.5">
            <span>{release.releaseType}</span>
            <span className="font-mono text-[#F7F7F2]/40 text-[11px]">{release.year}</span>
          </div>

          <Link
            to={`/music/${release.slug}`}
            className="group/title inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E2B52C]"
          >
            <h3 className="text-xl font-bold text-[#F7F7F2] tracking-tight group-hover/title:text-[#E2B52C] transition-colors flex items-center gap-1.5">
              <span>{release.title}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7F7F2]/40 group-hover/title:text-[#E2B52C] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
            </h3>
          </Link>

          <p className="text-xs text-[#F7F7F2]/65 mt-2 line-clamp-2 leading-relaxed">
            {release.description}
          </p>

          {/* Mood keywords rendered as clean unboxed text with separators */}
          {release.moodKeywords && release.moodKeywords.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#F7F7F2]/40 mt-3 pt-3 border-t border-white/[0.06]">
              {release.moodKeywords.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < release.moodKeywords.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Direct Streaming Platform Shortcuts */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <Link
            to={`/music/${release.slug}`}
            className="text-[11px] font-semibold text-[#159A91] hover:text-[#E2B52C] transition-colors"
          >
            Liner Notes & Info →
          </Link>

          <div className="flex items-center gap-1.5">
            {release.links.spotify && (
              <a
                href={release.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Spotify"
                aria-label={`Listen to ${release.title} on Spotify`}
                className="p-1.5 rounded-lg text-[#F7F7F2]/60 hover:text-[#36A852] hover:bg-white/[0.05] transition-all"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
            )}
            {release.links.appleMusic && (
              <a
                href={release.links.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Apple Music"
                aria-label={`Listen to ${release.title} on Apple Music`}
                className="p-1.5 rounded-lg text-[#F7F7F2]/60 hover:text-[#D83A3A] hover:bg-white/[0.05] transition-all"
              >
                <AppleMusicIcon className="w-4 h-4" />
              </a>
            )}
            {release.links.tidal && (
              <a
                href={release.links.tidal}
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on TIDAL"
                aria-label={`Listen to ${release.title} on TIDAL`}
                className="p-1.5 rounded-lg text-[#F7F7F2]/60 hover:text-[#087F5B] hover:bg-white/[0.05] transition-all"
              >
                <TidalIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicReleaseCard;
