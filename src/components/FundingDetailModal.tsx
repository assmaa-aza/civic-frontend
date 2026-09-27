import React from 'react';
import { X, ExternalLink, PlusCircle, CheckCircle2, AlertTriangle, ShieldCheck, Building2, Calendar } from 'lucide-react';
import { FundingProgram } from '../data/demoData';

interface FundingDetailModalProps {
  program: FundingProgram | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToPlan?: (program: FundingProgram) => void;
}

export const FundingDetailModal: React.FC<FundingDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onAddToPlan
}) => {
  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs animate-fade-in">
      <div
        className="bg-white rounded-card max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border animate-slide-up flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-border bg-slate-50/50 sticky top-0 bg-white z-10 flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-teal-50 text-teal-800 border border-teal-200 inline-block mb-1">
              {program.matchStatus}
            </span>
            <h2 className="text-xl font-extrabold text-navy-900">{program.name}</h2>
            <p className="text-xs text-muted">{program.type} Opportunity • {program.source}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Program Description */}
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-navy-700 uppercase tracking-wider">Overview</h4>
            <p className="text-sm text-foreground leading-relaxed">{program.description}</p>
          </div>

          <hr className="border-border" />

          {/* Why it may match */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal" />
              <span>Why it may match</span>
            </h4>
            <ul className="space-y-2 bg-teal-50/40 p-3.5 rounded-xl border border-teal-100">
              {program.matches.map((item, idx) => (
                <li key={idx} className="text-xs font-medium text-navy-900 flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Gaps / Considerations */}
          {(program.gaps || program.warnings) && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-gold-800 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-gold-600" />
                <span>Potential gaps & considerations</span>
              </h4>
              <ul className="space-y-2 bg-gold-50/40 p-3.5 rounded-xl border border-gold-100">
                {program.gaps?.map((gap, idx) => (
                  <li key={idx} className="text-xs font-medium text-navy-900 flex items-start gap-2">
                    <span className="text-gold-700 font-bold">⚠</span>
                    <span>{gap}</span>
                  </li>
                ))}
                {program.warnings?.map((warn, idx) => (
                  <li key={idx} className="text-xs font-medium text-navy-900 flex items-start gap-2">
                    <span className="text-gold-700 font-bold">⚠</span>
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <hr className="border-border" />

          {/* Funding breakdown */}
          <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-border text-center">
            <div>
              <span className="text-[11px] text-muted block font-medium">Type</span>
              <span className="text-xs font-bold text-navy-900">{program.type}</span>
            </div>
            <div className="border-x border-border px-2">
              <span className="text-[11px] text-muted block font-medium">Amount</span>
              <span className="text-xs font-bold text-navy-900">{program.amount}</span>
            </div>
            <div>
              <span className="text-[11px] text-muted block font-medium">Repayment</span>
              <span className="text-xs font-bold text-navy-900">
                {program.type === 'Microloan' ? 'See official terms' : 'Non-repayable / Support'}
              </span>
            </div>
          </div>

          {/* Official Source & Verification Prominent Badge */}
          <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900">
                <ShieldCheck className="w-4 h-4 text-teal" />
                <span>Source: {program.source}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Verified: {program.verifiedDate}</span>
              </div>
            </div>

            <a
              href="https://www.finances.gov.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white border border-teal-300 text-teal-900 hover:bg-teal-100 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <span>Open official source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 border-t border-border bg-slate-50/50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-border text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              if (onAddToPlan) onAddToPlan(program);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-navy-600 font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4 text-teal" />
            <span>Add to action plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
