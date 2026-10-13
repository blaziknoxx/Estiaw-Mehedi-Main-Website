import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_PLATFORMS } from '../data/socials.ts';
import { PlatformIcon } from './SocialIcons.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#09130f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-[#F7F7F2] hover:text-[#E2B52C] transition-colors inline-block"
            >
              ESTIAQ MEHEDI
            </Link>
            <p className="text-sm text-[#E2B52C] font-medium tracking-wide">
              Independent Artist · Photographer · Digital Creator
            </p>
            <p className="text-sm text-[#F7F7F2]/60 max-w-sm leading-relaxed">
              “Exploring sound, capturing moments, and building things that feel different.”
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#F7F7F2]/40 font-mono">
                Art Direction & Creative Engineering
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F2]/90">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F7F7F2]/70">
              <li>
                <Link to="/" className="hover:text-[#E2B52C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E2B52C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/music" className="hover:text-[#E2B52C] transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/photography" className="hover:text-[#E2B52C] transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#E2B52C] transition-colors">
                  Digital Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E2B52C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Platforms Direct Grid */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F2]/90">
              Connect & Listen
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg text-[#F7F7F2]/70 hover:text-[#F7F7F2] hover:bg-white/[0.04] transition-all group"
                >
                  <PlatformIcon id={platform.id} className="w-4 h-4 text-[#F7F7F2]/60 group-hover:text-[#E2B52C] transition-colors" />
                  <span className="truncate">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Unboxed Metadata & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F7F2]/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ESTIAQ MEHEDI</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-2 text-[#F7F7F2]/40">
            <span>Sound & Vision</span>
            <span aria-hidden="true">·</span>
            <span>Independent Works</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
