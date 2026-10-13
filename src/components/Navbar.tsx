import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Music', path: '/music' },
  { name: 'Photography', path: '/photography' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or Escape key press
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/20'
          : 'bg-[#09130f]/60 backdrop-blur-md py-4 sm:py-5 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <Link
          to="/"
          className="text-lg md:text-xl font-extrabold tracking-tight text-[#F7F7F2] hover:text-[#E2B52C] transition-colors duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 group"
          aria-label="ESTIAQ MEHEDI homepage"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#087F5B] group-hover:bg-[#E2B52C] transition-colors duration-200" />
          <span>ESTIAQ MEHEDI</span>
        </Link>

        {/* Zone 2: Desktop Navigation Links (Single-line, unboxed, subtle active state) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F7F7F2]/70"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#F7F7F2] font-semibold'
                    : 'text-[#F7F7F2]/70 hover:text-[#F7F7F2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#087F5B] via-[#E2B52C] to-[#159A91] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-lg transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md hover:shadow-[#087F5B]/30"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Accessible Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 rounded-lg text-[#F7F7F2]/80 hover:text-[#F7F7F2] hover:bg-white/[0.05] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden glass-nav border-t border-white/[0.08] px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#F7F7F2] bg-white/[0.06] font-semibold text-[#E2B52C]'
                      : 'text-[#F7F7F2]/80 hover:text-[#F7F7F2] hover:bg-white/[0.03]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-white/[0.08]">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-lg transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
