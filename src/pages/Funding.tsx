import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Wallet, Users, CheckCircle2 } from 'lucide-react';
import { FundingCard } from '../components/FundingCard';
import { FundingDetailModal } from '../components/FundingDetailModal';
import { WarningBox } from '../components/WarningBox';
import { ProgressSteps } from '../components/ProgressSteps';
import { demoPrograms, FundingProgram } from '../data/demoData';

export const Funding: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState<FundingProgram | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleViewDetails = (program: FundingProgram) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleAddToPlan = (program: FundingProgram) => {
    setAddedNotice(`Added "${program.name}" to your action plan checklist.`);
    setTimeout(() => setAddedNotice(null), 4000);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-card border border-border shadow-card">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold mb-1">
              <Award className="w-3.5 h-3.5 text-teal" />
              <span>Step 5 & 6: Eligibility & Funding</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-navy-900">
              Funding opportunities
            </h1>
            <p className="text-sm text-muted font-medium">
              Based on your profile and refined idea, these opportunities may be relevant.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-2 rounded-xl bg-teal-50 text-teal-900 border border-teal-200 font-extrabold text-xs shadow-2xs">
              3 opportunities found
            </span>
            <button
              onClick={() => navigate('/action-plan')}
              className="px-6 py-3 rounded-xl bg-navy text-white hover:bg-navy-600 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>View action plan</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Added Notification Banner */}
        {addedNotice && (
          <div className="p-4 rounded-xl bg-teal-500 text-navy-950 font-bold text-sm shadow-md animate-slide-up flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-navy-950" />
            <span>{addedNotice}</span>
          </div>
        )}

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Progress Steps */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
            <ProgressSteps currentRoute="/funding" />
          </div>

          {/* Main Opportunities Cards Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Warning / Disclaimer Box */}
            <WarningBox />

            {/* 3 Program Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {demoPrograms.map((prog) => (
                <FundingCard
                  key={prog.id}
                  program={prog}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {/* Next Steps Banner */}
            <div className="p-6 bg-navy text-white rounded-card shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Generate your final checklist</h3>
                <p className="text-xs text-slate-300">Assemble legal, application, and verification tasks in one place.</p>
              </div>
              <button
                onClick={() => navigate('/action-plan')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal text-navy-900 font-extrabold text-sm hover:bg-teal-400 transition-all shadow-md flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Proceed to Action Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Detail Modal */}
      <FundingDetailModal
        program={selectedProgram}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddToPlan={handleAddToPlan}
      />
    </div>
  );
};
