import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageSelector, LanguageCode } from './LanguageSelector';
import { ProgressSteps } from './ProgressSteps';

interface NavbarProps {
  onLanguageChange?: (lang: LanguageCode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLanguageChange }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Landing Nav Links */}
          {isLanding ? (
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-semibold text-navy hover:text-teal transition-colors">
                How it works
              </a>
              <a href="#about" className="text-sm font-semibold text-navy hover:text-teal transition-colors">
                About
              </a>
              <LanguageSelector onChange={onLanguageChange} />
              <Link
                to="/conversation"
                className="px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-navy-600 font-bold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <span>Start with my idea</span>
                <ArrowRight className="w-4 h-4 text-teal" />
              </Link>
            </div>
          ) : (
            /* Inside Application Journey Nav */
            <div className="hidden md:flex items-center gap-6">
              <ProgressSteps variant="header" />
              <div className="h-6 w-[1px] bg-border" />
              <LanguageSelector onChange={onLanguageChange} />
            </div>
          )}

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSelector onChange={onLanguageChange} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl animate-slide-up">
          {isLanding ? (
            <div className="space-y-3">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-navy hover:bg-slate-50"
              >
                How it works
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-navy hover:bg-slate-50"
              >
                About
              </a>
              <Link
                to="/conversation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-navy text-white font-bold text-center block shadow-md"
              >
                Start with my idea →
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="px-2 py-1 text-xs font-bold text-navy-500 uppercase tracking-wider">
                Application Navigation
              </div>
              <Link
                to="/conversation"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
              >
                1. Conversation & Idea
              </Link>
              <Link
                to="/feasibility"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
              >
                2. Feasibility Check
              </Link>
              <Link
                to="/funding"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
              >
                3. Funding Opportunities
              </Link>
              <Link
                to="/action-plan"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
              >
                4. Action Plan
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
