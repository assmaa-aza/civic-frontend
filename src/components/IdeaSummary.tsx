import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Edit3, ArrowRight, MapPin, Wallet, Users, Briefcase, Lightbulb } from 'lucide-react';
import { ProfileData } from '../data/demoData';

interface IdeaSummaryProps {
  profile: ProfileData;
  onEdit?: () => void;
  className?: string;
}

export const IdeaSummary: React.FC<IdeaSummaryProps> = ({
  profile,
  onEdit,
  className = ''
}) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-gradient-to-br from-slate-900 to-navy text-white rounded-card p-6 shadow-card border border-navy-700 animate-fade-in ${className}`}>
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-teal/20 text-teal border border-teal/30">
            <CheckCircle2 className="w-5 h-5 text-teal" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">What I've understood</h3>
            <p className="text-xs text-slate-300">Extracted profile & key parameters</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-teal/20 text-teal-300 border border-teal/40">
          Profile Verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
          <Lightbulb className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-slate-400 block font-medium">Business idea</span>
            <span className="text-sm font-semibold text-white">{profile.idea}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
          <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-slate-400 block font-medium">Location</span>
            <span className="text-sm font-semibold text-white">{profile.location}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
          <Briefcase className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-slate-400 block font-medium">Employment status</span>
            <span className="text-sm font-semibold text-white">{profile.employmentStatus}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
          <Users className="w-4 h-4 text-teal shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-slate-400 block font-medium">Target customers</span>
            <span className="text-sm font-semibold text-white">{profile.targetCustomers}</span>
          </div>
        </div>

        <div className="sm:col-span-2 flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
          <Wallet className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-slate-400 block font-medium">Estimated starting budget</span>
            <span className="text-sm font-bold text-gold">{profile.budget}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onEdit}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <Edit3 className="w-4 h-4" />
          <span>Edit information</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/feasibility')}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal text-navy-900 hover:bg-teal-400 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
        >
          <span>Continue to Feasibility</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
