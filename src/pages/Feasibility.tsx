import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Scale } from 'lucide-react';
import { FeasibilityCard } from '../components/FeasibilityCard';
import { LegalPathCard } from '../components/LegalPathCard';
import { demoFeasibility, demoLegalPath } from '../data/demoData';
import { ProgressSteps } from '../components/ProgressSteps';

export const Feasibility: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-card border border-border shadow-card">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-800 border border-gold-200 text-xs font-bold mb-1">
              <Scale className="w-3.5 h-3.5 text-gold-600" />
              <span>Step 3 & 4: Feasibility & Evidence</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-navy-900">
              Feasibility Analysis
            </h1>
            <p className="text-sm text-muted font-medium">
              Let's identify what may work, what could be challenging, and how you could adapt your idea.
            </p>
          </div>

          <button
            onClick={() => navigate('/funding')}
            className="px-6 py-3 rounded-xl bg-navy text-white hover:bg-navy-600 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0 group"
          >
            <span>Explore funding opportunities</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Journey Progress Bar */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
            <ProgressSteps currentRoute="/feasibility" />
          </div>

          {/* Main Feasibility Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Prominent Non-Alarmist Summary */}
            <div className="p-6 rounded-card bg-gold-50/70 border border-gold-300/80 shadow-2xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-800 block">
                Assessment Summary
              </span>
              <h2 className="text-xl font-extrabold text-navy-900">
                Your idea may face some operational challenges
              </h2>
              <p className="text-sm text-navy-800/90 leading-relaxed">
                Rather than treating this as a setback, CivicPilot highlights practical adaptations to right-size your initial model for your 3,000 MAD budget in Settat.
              </p>
            </div>

            {/* Feasibility Breakdown Cards */}
            <FeasibilityCard data={demoFeasibility} />

            {/* Embedded Legal Path Guidance */}
            <LegalPathCard steps={demoLegalPath} />

            {/* Bottom Navigation CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-card border border-border shadow-card">
              <div>
                <h4 className="text-base font-bold text-navy-900">Ready for financial eligibility?</h4>
                <p className="text-xs text-muted">Discover matching grant, microloan, and incubator opportunities.</p>
              </div>
              <button
                onClick={() => navigate('/funding')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal text-navy-900 font-extrabold text-sm hover:bg-teal-400 transition-all shadow-md flex items-center justify-center gap-2 group shrink-0"
              >
                <span>Explore funding opportunities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
