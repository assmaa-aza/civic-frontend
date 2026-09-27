import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileCheck, Download, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { ActionChecklist } from '../components/ActionChecklist';
import { WarningBox } from '../components/WarningBox';
import { ProgressSteps } from '../components/ProgressSteps';
import { initialActionTasks } from '../data/demoData';

export const ActionPlan: React.FC = () => {
  const navigate = useNavigate();
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleDownloadPlan = () => {
    setDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-card border border-border shadow-card">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold mb-1">
              <FileCheck className="w-3.5 h-3.5 text-teal" />
              <span>Step 7: Final Action Plan</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-navy-900">
              Your CivicPilot action plan
            </h1>
            <p className="text-sm text-muted font-medium">
              A practical checklist based on your idea, requirements, and funding options.
            </p>
          </div>

          <button
            onClick={handleDownloadPlan}
            className="px-6 py-3 rounded-xl bg-navy text-white hover:bg-navy-600 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0 group"
          >
            <Download className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform" />
            <span>Download my plan ↓</span>
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Journey Progress Bar */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
            <ProgressSteps currentRoute="/action-plan" />
          </div>

          {/* Main Action Plan Checklist */}
          <div className="lg:col-span-8 space-y-8">
            
            <ActionChecklist
              initialTasks={initialActionTasks}
              onDownloadPlan={handleDownloadPlan}
            />

            {/* Warning / Legal Disclaimer */}
            <WarningBox />

          </div>

        </div>

      </div>

      {/* Download Action Plan Modal Placeholder */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-card p-6 md:p-8 max-w-md w-full shadow-2xl border border-border animate-slide-up space-y-5 text-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal border border-teal-200 mx-auto flex items-center justify-center">
              <Download className="w-6 h-6 text-teal" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-navy-900">Download Action Plan PDF</h3>
              <p className="text-xs text-muted leading-relaxed">
                Your personalized action plan bundle (including your hyper-local strategy for Settat, legal checklist, and funding contacts) is being formatted.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-border text-xs text-navy-800 font-semibold space-y-1 text-left">
              <div className="flex items-center gap-2 text-teal font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>PDF Summary Prepared</span>
              </div>
              <p className="text-slate-600 font-normal">
                Includes verified authority contacts, CRI registration links, and grant application guidelines.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDownloadModalOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy-600 transition-colors shadow-md"
              >
                Close preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
