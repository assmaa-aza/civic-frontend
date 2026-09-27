import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Circle, ArrowRight } from 'lucide-react';

export interface StepItem {
  id: string;
  name: string;
  route: string;
  icon?: React.ReactNode;
}

export const journeySteps: StepItem[] = [
  { id: 'user-story', name: 'Your idea', route: '/conversation' },
  { id: 'understand', name: 'Understand', route: '/conversation' },
  { id: 'feasibility', name: 'Feasibility', route: '/feasibility' },
  { id: 'profile', name: 'Profile', route: '/feasibility' },
  { id: 'evidence', name: 'Evidence', route: '/funding' },
  { id: 'eligibility', name: 'Eligibility', route: '/funding' },
  { id: 'action-plan', name: 'Action plan', route: '/action-plan' },
];

interface ProgressStepsProps {
  currentRoute?: string;
  variant?: 'sidebar' | 'header' | 'mobile';
  className?: string;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({
  currentRoute,
  variant = 'sidebar',
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = currentRoute || location.pathname;

  // Determine active step index based on path
  const getActiveStepIndex = () => {
    if (path === '/conversation') return 1;
    if (path === '/feasibility') return 3;
    if (path === '/funding') return 5;
    if (path === '/action-plan') return 6;
    return 0;
  };

  const activeIndex = getActiveStepIndex();

  if (variant === 'header') {
    return (
      <div className={`hidden md:flex items-center gap-1.5 text-xs font-medium ${className}`}>
        {['Conversation', 'Feasibility', 'Funding', 'Action Plan'].map((label, idx) => {
          const routes = ['/conversation', '/feasibility', '/funding', '/action-plan'];
          const isCurrent = path === routes[idx];
          const isPassed = routes.indexOf(path) > idx;

          return (
            <React.Fragment key={label}>
              {idx > 0 && <span className="text-border mx-1">•</span>}
              <button
                onClick={() => navigate(routes[idx])}
                className={`px-2.5 py-1 rounded-full transition-colors flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-navy text-white font-semibold'
                    : isPassed
                    ? 'text-teal-700 bg-teal-50 hover:bg-teal-100 font-medium'
                    : 'text-muted hover:text-navy'
                }`}
              >
                {isPassed && <Check className="w-3 h-3 text-teal" />}
                <span>{label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`bg-white border border-border rounded-card p-5 shadow-card ${className}`}>
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
        <h3 className="text-xs font-bold uppercase tracking-wider text-navy-500">
          Your Journey
        </h3>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
          Step {Math.min(activeIndex + 1, journeySteps.length)} of {journeySteps.length}
        </span>
      </div>

      <nav className="space-y-1.5" aria-label="Journey progress">
        {journeySteps.map((step, idx) => {
          const isPassed = idx < activeIndex;
          const isCurrent = idx === activeIndex;

          return (
            <button
              key={step.id}
              onClick={() => navigate(step.route)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-all ${
                isCurrent
                  ? 'bg-navy text-white font-semibold shadow-sm'
                  : isPassed
                  ? 'bg-teal-50/60 text-teal-900 font-medium hover:bg-teal-100/60'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                  isCurrent
                    ? 'bg-teal text-navy-900'
                    : isPassed
                    ? 'bg-teal text-white'
                    : 'border-2 border-slate-300 text-slate-400'
                }`}
              >
                {isPassed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : (idx + 1)}
              </div>
              <span className="truncate flex-1">{step.name}</span>
              {isCurrent && <ArrowRight className="w-3.5 h-3.5 text-teal shrink-0" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
