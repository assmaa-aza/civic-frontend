import React from 'react';
import { Check, AlertTriangle, ArrowRight, Wallet, Award, Users } from 'lucide-react';
import { FundingProgram } from '../data/demoData';

interface FundingCardProps {
  program: FundingProgram;
  onViewDetails: (program: FundingProgram) => void;
  className?: string;
}

export const FundingCard: React.FC<FundingCardProps> = ({
  program,
  onViewDetails,
  className = ''
}) => {
  const isTeal = program.badgeType === 'teal';

  const getTypeIcon = () => {
    switch (program.type) {
      case 'Grant':
        return <Award className="w-5 h-5 text-teal" />;
      case 'Microloan':
        return <Wallet className="w-5 h-5 text-gold-600" />;
      case 'Incubator':
        return <Users className="w-5 h-5 text-navy-600" />;
      default:
        return <Award className="w-5 h-5 text-teal" />;
    }
  };

  return (
    <div
      className={`bg-white rounded-card p-6 border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-5 group ${className}`}
    >
      <div className="space-y-4">
        {/* Type & Match Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
            {getTypeIcon()}
            <span>{program.type}</span>
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold border ${
              isTeal
                ? 'bg-teal-50 text-teal-800 border-teal-200'
                : 'bg-gold-50 text-gold-800 border-gold-200'
            }`}
          >
            {program.matchStatus}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-teal transition-colors">
            {program.name}
          </h3>
          <p className="text-xs text-muted mt-1 line-clamp-2">{program.description}</p>
        </div>

        {/* Amount / Support Highlight */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <span className="text-xs font-semibold text-navy-700">
            {program.type === 'Incubator' ? 'Support Offered' : 'Funding Amount'}
          </span>
          <span className="text-sm font-extrabold text-navy-900">{program.amount}</span>
        </div>

        {/* Matches list */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
            Profile Alignment
          </span>
          <ul className="space-y-1.5">
            {program.matches.map((m, idx) => (
              <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gaps / Warnings list */}
        {(program.gaps || program.warnings) && (
          <div className="space-y-2 pt-2 border-t border-border">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
              Considerations / Gaps
            </span>
            <ul className="space-y-1.5">
              {program.gaps?.map((gap, idx) => (
                <li key={idx} className="text-xs text-amber-800 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Potential gap: {gap}</span>
                </li>
              ))}
              {program.warnings?.map((warn, idx) => (
                <li key={idx} className="text-xs text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                  <span>Consideration: {warn}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <button
        type="button"
        onClick={() => onViewDetails(program)}
        className="w-full py-2.5 px-4 rounded-xl border border-navy text-navy font-bold text-sm hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
      >
        <span>View details</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
