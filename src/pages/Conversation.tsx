import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';
import { ProgressSteps } from '../components/ProgressSteps';
import { ChatMessage } from '../components/ChatMessage';
import { IdeaSummary } from '../components/IdeaSummary';
import { demoChatScript, demoProfile, ProfileData } from '../data/demoData';

export const Conversation: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(demoChatScript);
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [profileExtracted, setProfileExtracted] = useState<ProfileData>(demoProfile);
  const [showSummary, setShowSummary] = useState(true);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isAnalyzing) return;

    const userMsg = {
      sender: 'user' as const,
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsAnalyzing(true);

    // Simulate AI extraction & response
    setTimeout(() => {
      const aiMsg = {
        sender: 'ai' as const,
        content: "I've processed your response and updated your profile parameters. Let's examine the feasibility of your hyper-local delivery concept.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsAnalyzing(false);
      setShowSummary(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Journey Steps */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <ProgressSteps currentRoute="/conversation" />
            
            {/* Quick Context Card */}
            <div className="mt-4 p-4 rounded-card bg-teal-50/70 border border-teal-200 text-teal-900 text-xs space-y-1.5">
              <span className="font-bold block text-teal-800">Why this conversation matters</span>
              <p className="leading-relaxed">
                CivicPilot uses your answers to check local administrative requirements, adapt business sizing, and identify relevant funding programs in Morocco.
              </p>
            </div>
          </div>

          {/* RIGHT: Conversation & Profile Extraction Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Mobile Journey Progress Header */}
            <div className="lg:hidden">
              <ProgressSteps currentRoute="/conversation" />
            </div>

            {/* Main Chat Container */}
            <div className="bg-white rounded-card border border-border shadow-card overflow-hidden flex flex-col min-h-[520px]">
              
              {/* Header */}
              <div className="p-6 border-b border-border bg-slate-50/50 flex items-center justify-between">
                <div className="space-y-1">
                  <h1 className="text-xl font-extrabold text-navy-900">
                    Let's understand your idea
                  </h1>
                  <p className="text-xs text-muted">
                    Tell us about your business idea in plain words. No formal jargon needed.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-teal bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  Interactive Analysis
                </span>
              </div>

              {/* Chat Messages */}
              <div className="p-6 flex-1 overflow-y-auto space-y-4 max-h-[480px]">
                {messages.map((msg, idx) => (
                  <ChatMessage
                    key={idx}
                    sender={msg.sender}
                    content={msg.content}
                    timestamp={msg.timestamp}
                  />
                ))}

                {isAnalyzing && (
                  <div className="flex items-center gap-3 text-xs text-navy font-semibold p-3 rounded-xl bg-slate-50 border border-slate-200 animate-pulse">
                    <RefreshCw className="w-4 h-4 animate-spin text-teal" />
                    <span>Analyzing your input & extracting profile parameters...</span>
                  </div>
                )}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSend} className="p-4 border-t border-border bg-slate-50/50 flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your answer (e.g., location, budget, target customers)..."
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy text-foreground placeholder:text-muted shadow-2xs"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isAnalyzing}
                  className="px-5 py-3 rounded-xl bg-navy text-white hover:bg-navy-600 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-sm transition-all shadow-md flex items-center gap-2 shrink-0"
                >
                  <span>Send</span>
                  <Send className="w-4 h-4 text-teal" />
                </button>
              </form>
            </div>

            {/* Extracted Profile Summary Card */}
            {showSummary && (
              <div className="space-y-4">
                <IdeaSummary
                  profile={profileExtracted}
                  onEdit={() => {
                    setInput("I want to update my starting budget to 5,000 MAD.");
                  }}
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
