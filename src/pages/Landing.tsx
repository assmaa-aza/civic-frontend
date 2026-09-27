import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, MapPin, Wallet, Users, ShieldCheck, Compass, FileText, CheckCircle2, Award } from 'lucide-react';
import { Logo } from '../components/Logo';

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24">
        {/* Subtle Decorative Shapes inspired by logo */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 opacity-30">
          <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gold-200/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO LEFT */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-2xs">
                <Sparkles className="w-4 h-4 text-teal" />
                <span>AI Financial-Inclusion Navigator for Morocco</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
                Your path to <br />
                <span className="text-teal underline decoration-gold/60 underline-offset-8">
                  financial opportunity.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-navy-800/80 font-medium max-w-2xl leading-relaxed">
                Turn your business idea into a clear, realistic path forward. CivicPilot helps you understand your idea, explore feasibility, navigate requirements, and discover relevant funding opportunities.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/conversation"
                  className="px-8 py-4 rounded-xl bg-navy text-white hover:bg-navy-600 font-extrabold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <span>Start with my idea</span>
                  <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-border/80 flex flex-wrap items-center gap-6 text-sm font-bold text-navy-800">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Evidence-backed</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Multilingual</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Built for Morocco</span>
                </div>
              </div>
            </div>

            {/* HERO RIGHT: Product Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-card p-6 md:p-8 shadow-card border border-border relative space-y-6 hover:shadow-card-hover transition-all">
                {/* Card Top Pill */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-teal animate-pulse" />
                    <span className="text-xs font-bold text-navy uppercase tracking-wider">
                      Interactive Preview
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-50 text-gold-800 border border-gold-200">
                    Step 2: Understand
                  </span>
                </div>

                {/* Example Chat Flow */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs md:text-sm text-navy-900 font-semibold space-y-1">
                    <span className="text-[11px] font-bold text-teal block uppercase tracking-wider">CivicPilot</span>
                    <p>Let's understand your idea</p>
                  </div>

                  <div className="bg-navy text-white p-4 rounded-2xl text-xs md:text-sm font-medium space-y-1 ml-4 shadow-sm">
                    <span className="text-[11px] font-bold text-teal-300 block uppercase tracking-wider">You</span>
                    <p>I want to start a small delivery service in my neighborhood.</p>
                  </div>
                </div>

                {/* Extracted Profile Snippet */}
                <div className="p-4 rounded-xl bg-slate-50 border border-border space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-navy-700">
                    <span>Extracted Parameters</span>
                    <span className="text-teal font-extrabold">Auto-detected</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-white rounded-lg border border-border">
                      <Users className="w-3.5 h-3.5 text-teal mx-auto mb-1" />
                      <span className="text-[10px] text-muted block">Target</span>
                      <span className="font-bold text-navy text-[11px]">Local residents</span>
                    </div>

                    <div className="p-2 bg-white rounded-lg border border-border">
                      <MapPin className="w-3.5 h-3.5 text-teal mx-auto mb-1" />
                      <span className="text-[10px] text-muted block">Location</span>
                      <span className="font-bold text-navy text-[11px]">Settat</span>
                    </div>

                    <div className="p-2 bg-white rounded-lg border border-border">
                      <Wallet className="w-3.5 h-3.5 text-gold-600 mx-auto mb-1" />
                      <span className="text-[10px] text-muted block">Budget</span>
                      <span className="font-bold text-gold-700 text-[11px]">3,000 MAD</span>
                    </div>
                  </div>
                </div>

                {/* Continue CTA */}
                <button
                  onClick={() => navigate('/conversation')}
                  className="w-full py-3 px-4 rounded-xl bg-teal text-navy-900 font-extrabold text-sm hover:bg-teal-400 transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Continue to Full Flow</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-navy-50 text-navy font-bold text-xs uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              From idea to action
            </h2>
            <p className="text-base sm:text-lg text-muted font-medium">
              CivicPilot turns a vague business idea into a clear, evidence-backed next-step plan.
            </p>
          </div>

          {/* 4 Core Pillars Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-card bg-background border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy text-teal flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-base font-bold text-navy-900">Describe your situation</h3>
              <p className="text-xs text-muted leading-relaxed">
                Share your business idea, budget, location, and employment status in plain language.
              </p>
            </div>

            <div className="p-6 rounded-card bg-background border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy text-teal flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-base font-bold text-navy-900">Understand what may work</h3>
              <p className="text-xs text-muted leading-relaxed">
                Identify practical adaptations to match local budget constraints and customer demand.
              </p>
            </div>

            <div className="p-6 rounded-card bg-background border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy text-teal flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-base font-bold text-navy-900">Explore relevant opportunities</h3>
              <p className="text-xs text-muted leading-relaxed">
                Discover matching grants, microloans, and incubators tailored to your profile.
              </p>
            </div>

            <div className="p-6 rounded-card bg-background border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy text-teal flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-base font-bold text-navy-900">Get a clear next-step plan</h3>
              <p className="text-xs text-muted leading-relaxed">
                Follow an actionable checklist with verified official sources and registration guidance.
              </p>
            </div>
          </div>

          {/* 6 Step Cards Grid */}
          <div className="pt-8">
            <h3 className="text-xl font-extrabold text-navy-900 mb-8 text-left">
              The 6-Step Navigation Pipeline
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: "01", title: "Your idea", desc: "Share your initial concept", color: "navy" },
                { step: "02", title: "Understand", desc: "AI extracts key parameters", color: "teal" },
                { step: "03", title: "Feasibility", desc: "Identify challenges & models", color: "gold" },
                { step: "04", title: "Evidence", desc: "Verified legal & admin rules", color: "navy" },
                { step: "05", title: "Eligibility", desc: "Match funding criteria", color: "teal" },
                { step: "06", title: "Action plan", desc: "Interactive checklist", color: "gold" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-card border border-border shadow-card text-left space-y-2 hover:-translate-y-1 transition-transform"
                >
                  <span className={`text-2xl font-black ${
                    item.color === 'teal' ? 'text-teal' : item.color === 'gold' ? 'text-gold-600' : 'text-navy'
                  }`}>
                    {item.step}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900">{item.title}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT / TRUST SECTION */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy text-white rounded-card p-8 md:p-12 shadow-2xl border border-navy-700 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-teal" />
                <span>Financial Inclusion for Morocco</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Empowering every entrepreneur with evidence & guidance.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                CivicPilot is designed for founders across Morocco who have ambition but lack clear guidance on administrative steps, realistic business sizing, or available financial support programs.
              </p>

              <div className="pt-4">
                <Link
                  to="/conversation"
                  className="px-8 py-4 rounded-xl bg-teal text-navy-900 hover:bg-teal-400 font-extrabold text-base transition-all shadow-lg inline-flex items-center gap-3"
                >
                  <span>Start your evaluation now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
