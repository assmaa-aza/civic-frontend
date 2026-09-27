import React from 'react';
import { ShieldCheck, Calendar } from 'lucide-react';

interface SourceBadgeProps {
  source?: string;
  verifiedDate?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  source = "Official organization",
  verifiedDate = "25 September 2026",
  className = "",
  size = "md"
}) => {
  return (
    <div className={`inline-flex items-center flex-wrap gap-2 px-3 py-1.5 rounded-lg bg-teal-50/80 border border-teal-200/60 text-teal-900 ${size === 'sm' ? 'text-xs' : 'text-xs md:text-sm'} font-medium shadow-2xs ${className}`}>
      <div className="flex items-center gap-1.5 text-teal font-semibold">
        <ShieldCheck className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-teal`} />
        <span>Verified source ({source})</span>
      </div>
      <span className="text-teal-300">•</span>
      <div className="flex items-center gap-1 text-slate-600">
        <Calendar className={`${size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-slate-400`} />
        <span>{verifiedDate}</span>
      </div>
    </div>
  );
};
