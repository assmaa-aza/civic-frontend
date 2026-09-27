import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Square, Download, ArrowRight, ShieldCheck, FileCheck2, Lightbulb, ExternalLink } from 'lucide-react';
import { ActionTask } from '../data/demoData';

interface ActionChecklistProps {
  initialTasks: ActionTask[];
  onDownloadPlan?: () => void;
  className?: string;
}

export const ActionChecklist: React.FC<ActionChecklistProps> = ({
  initialTasks,
  onDownloadPlan,
  className = ''
}) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<ActionTask[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const legalTasks = tasks.filter((t) => t.category === 'Legal');
  const fundingTasks = tasks.filter((t) => t.category === 'Funding');
  const verificationTasks = tasks.filter((t) => t.category === 'Verification');

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Bar Card */}
      <div className="bg-navy text-white rounded-card p-6 shadow-card border border-navy-700 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold tracking-wider uppercase text-teal-400">
            YOUR PROGRESS
          </span>
          <span className="text-xs font-extrabold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
            {completedCount} of {totalCount} steps prepared
          </span>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full bg-navy-900 rounded-full h-3 overflow-hidden border border-white/10">
          <div
            className="bg-gradient-to-r from-teal to-gold h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
          <span>Action Plan Readiness</span>
          <span className="font-extrabold text-gold">{progressPercent}% Completed</span>
        </div>
      </div>

      {/* Section 01 — Legal */}
      <div className="bg-white rounded-card p-6 border border-border shadow-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-navy-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              01
            </span>
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">Legal</span>
              <h3 className="text-base font-bold text-navy-900">Prepare your business structure</h3>
            </div>
          </div>
          <button
            onClick={() => navigate('/feasibility')}
            className="text-xs font-bold text-navy hover:text-teal transition-colors inline-flex items-center gap-1"
          >
            <span>View requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {legalTasks.map((task) => (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                task.completed
                  ? 'bg-teal-50/50 border-teal-200 text-teal-900 font-semibold'
                  : 'bg-white border-border text-foreground hover:bg-slate-50'
              }`}
            >
              {task.completed ? (
                <CheckSquare className="w-5 h-5 text-teal shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-slate-300 shrink-0" />
              )}
              <span className={`text-sm ${task.completed ? 'line-through opacity-80' : ''}`}>
                {task.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Section 02 — Funding */}
      <div className="bg-white rounded-card p-6 border border-border shadow-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-navy-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              02
            </span>
            <div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block">Funding</span>
              <h3 className="text-base font-bold text-navy-900">Prepare your funding application</h3>
            </div>
          </div>
          <button
            onClick={() => navigate('/funding')}
            className="text-xs font-bold text-navy hover:text-teal transition-colors inline-flex items-center gap-1"
          >
            <span>View funding program</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {fundingTasks.map((task) => (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                task.completed
                  ? 'bg-teal-50/50 border-teal-200 text-teal-900 font-semibold'
                  : 'bg-white border-border text-foreground hover:bg-slate-50'
              }`}
            >
              {task.completed ? (
                <CheckSquare className="w-5 h-5 text-teal shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-slate-300 shrink-0" />
              )}
              <span className={`text-sm ${task.completed ? 'line-through opacity-80' : ''}`}>
                {task.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Section 03 — Verification */}
      <div className="bg-white rounded-card p-6 border border-border shadow-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-navy-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              03
            </span>
            <div>
              <span className="text-xs font-bold text-navy-600 uppercase tracking-wider block">Verification</span>
              <h3 className="text-base font-bold text-navy-900">Confirm your eligibility</h3>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {verificationTasks.map((task) => (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                task.completed
                  ? 'bg-teal-50/50 border-teal-200 text-teal-900 font-semibold'
                  : 'bg-white border-border text-foreground hover:bg-slate-50'
              }`}
            >
              {task.completed ? (
                <CheckSquare className="w-5 h-5 text-teal shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-slate-300 shrink-0" />
              )}
              <span className={`text-sm ${task.completed ? 'line-through opacity-80' : ''}`}>
                {task.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Download Action Plan Footer Button */}
      <div className="pt-4 flex justify-center">
        <button
          type="button"
          onClick={onDownloadPlan}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-navy text-white hover:bg-navy-600 font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2 group"
        >
          <Download className="w-5 h-5 text-gold group-hover:translate-y-0.5 transition-transform" />
          <span>Download my plan ↓</span>
        </button>
      </div>
    </div>
  );
};
