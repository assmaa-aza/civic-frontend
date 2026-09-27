import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white border-t border-navy-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              CivicPilot is an AI Financial-Inclusion Navigator empowering entrepreneurs in Morocco to assess feasibility, navigate administrative steps, and access funding opportunities.
            </p>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/conversation" className="hover:text-white transition-colors">Idea Navigator</a>
              </li>
              <li>
                <a href="/feasibility" className="hover:text-white transition-colors">Feasibility Check</a>
              </li>
              <li>
                <a href="/funding" className="hover:text-white transition-colors">Funding Programs</a>
              </li>
              <li>
                <a href="/action-plan" className="hover:text-white transition-colors">Action Plan</a>
              </li>
            </ul>
          </div>

          {/* Civic Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Moroccan Civic Trust</h4>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-teal">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-bold text-white">Evidence-backed</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Aggregates verified administrative guidelines and micro-financing rules for local founders.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            <span className="font-semibold text-slate-300">Disclaimer:</span> Guidance to help you get started, not official legal or financial advice.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>© 2026 CivicPilot. Built for Morocco.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
