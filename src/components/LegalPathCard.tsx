import React from 'react';
import { FileText, ExternalLink, CheckCircle, Clock, CircleDashed } from 'lucide-react';
import { LegalStep } from '../data/demoData';
import { SourceBadge } from './SourceBadge';

interface LegalPathCardProps {
  steps: LegalStep[];
  className?: string;
}

export const LegalPathCard: React.FC<LegalPathCardProps> = ({
  steps,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-card p-6 border border-border shadow-card space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-navy-50 border border-navy-100 text-navy">
            <FileText className="w-5 h-5 text-navy" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-900">Legal & administrative path</h3>
            <p className="text-xs text-muted">Commonly required steps for your business registration in Morocco</p>
          </div>
        </div>

        <SourceBadge
          source="Official authority (CRI / RNAE)"
          verifiedDate="25 September 2026"
        />
      </div>

      {/* Legal Guidance Disclaimer */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2">
        <span className="font-bold text-navy shrink-0">Note:</span>
        <span>
          These are commonly required administrative steps for guidance purposes. Always confirm current requirements with the relevant official authority.
        </span>
      </div>

      {/* Step Cards Grid */}
      <div className="space-y-3.5">
        {steps.map((step, idx) => {
          const stepNumber = String(idx + 1).padStart(2, '0');
          const isCompleted = step.status === 'Completed';
          const isInProgress = step.status === 'In Progress';

          return (
            <div
              key={step.id}
              className="p-4 rounded-xl border border-border hover:border-navy-200 bg-white transition-all flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-extrabold text-navy-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {stepNumber}
                </span>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-teal" />
                ) : isInProgress ? (
                  <Clock className="w-5 h-5 text-gold-600" />
                ) : (
                  <CircleDashed className="w-5 h-5 text-slate-400" />
                )}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-navy-900">{step.title}</h4>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                      isCompleted
                        ? 'bg-teal-50 text-teal-700 border-teal-200'
                        : isInProgress
                        ? 'bg-gold-50 text-gold-800 border-gold-200'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer link */}
      <div className="pt-2 flex items-center justify-between border-t border-border text-xs">
        <span className="text-muted">Source: Official Government Portals</span>
        <a
          href="https://www.rn-autoentrepreneur.ma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-navy hover:text-teal transition-colors"
        >
          <span>View official source</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
