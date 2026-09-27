import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningBoxProps {
  title?: string;
  message?: string;
  className?: string;
}

export const WarningBox: React.FC<WarningBoxProps> = ({
  title = "Important Guidance Notice",
  message = "This information is guidance to help you get started. Confirm eligibility, legal requirements, deadlines, and funding terms with the relevant official provider.",
  className = ""
}) => {
  return (
    <div className={`p-4 rounded-xl bg-gold-50/70 border border-gold-300/80 text-navy-900 shadow-2xs ${className}`}>
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-gold-200/80 text-gold-800 shrink-0 mt-0.5">
          <AlertTriangle className="w-4 h-4 text-gold-900" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-navy-900 flex items-center gap-1.5">
            {title}
          </h4>
          <p className="text-xs md:text-sm text-navy-800/90 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};
