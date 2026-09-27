import React from 'react';
import { AlertCircle, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { FeasibilityData } from '../data/demoData';

interface FeasibilityCardProps {
  data: FeasibilityData;
  className?: string;
}

export const FeasibilityCard: React.FC<FeasibilityCardProps> = ({
  data,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Non-alarmist Banner */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-navy-900">Nuanced Assessment Notice</h4>
          <p className="text-xs text-slate-600 mt-0.5">
            CivicPilot analyzes potential challenges and offers practical adaptations to reduce initial risk.
            This is an analytical assessment, not a pass/fail judgment.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Challenge Card */}
        <div className="bg-white rounded-card p-6 border border-border shadow-card space-y-4 hover:border-gold-300 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gold-50 border border-gold-200 text-gold-700">
              <AlertCircle className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">Challenge Analysis</span>
              <h3 className="text-lg font-bold text-navy-900">{data.challengeTitle}</h3>
            </div>
          </div>

          <p className="text-sm text-foreground leading-relaxed font-medium bg-gold-50/40 p-3.5 rounded-xl border border-gold-100">
            "{data.challengeDescription}"
          </p>

          <div className="pt-2 border-t border-border space-y-1.5">
            <span className="text-xs font-bold text-navy-700 uppercase tracking-wide">Why this matters</span>
            <p className="text-xs text-muted leading-relaxed">
              {data.challengeWhyMatters}
            </p>
          </div>
        </div>

        {/* Adaptation Card */}
        <div className="bg-white rounded-card p-6 border border-border shadow-card space-y-4 hover:border-teal-300 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
              <Sparkles className="w-5 h-5 text-teal" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Recommended Path</span>
              <h3 className="text-lg font-bold text-navy-900">{data.adaptationTitle}</h3>
            </div>
          </div>

          <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100 space-y-2.5">
            <h4 className="text-sm font-bold text-navy-900">{data.adaptationDescription}</h4>
            <ul className="space-y-2">
              {data.adaptationPoints.map((pt, idx) => (
                <li key={idx} className="text-xs font-medium text-navy-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-border space-y-1.5">
            <span className="text-xs font-bold text-navy-700 uppercase tracking-wide">Why it could help</span>
            <p className="text-xs text-muted leading-relaxed">
              {data.adaptationWhyHelps}
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Starting Model Section */}
      <div className="bg-navy text-white rounded-card p-6 shadow-card border border-navy-700">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-lg bg-teal/20 text-teal border border-teal/40">
            <CheckCircle2 className="w-5 h-5 text-teal" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Suggested starting model</h3>
            <p className="text-xs text-slate-300">Actionable, low-risk execution blueprint</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.startingModel.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex flex-col items-center text-center space-y-1.5">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-semibold text-slate-100">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
