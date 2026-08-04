import React from 'react';
import { ARCHITECTURE_STEPS } from '../data/resumeData';
import { Activity, Sliders, Lock, RefreshCw, Layers, ArrowRight } from 'lucide-react';

export const ArchitectureWorkflow: React.FC = () => {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Activity': return <Activity className="w-6 h-6 text-blue-400" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-emerald-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-indigo-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-sky-400" />;
      default: return <Activity className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 bg-slate-950/80 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            SAP Basis & RISE Migration Approach
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            The 4-stage operational framework engineered to maintain 99.9%+ availability, eliminate Out-of-Memory crashes, and deliver zero-unplanned-downtime RISE cloud cutovers.
          </p>
        </div>

        {/* 4-Step Horizontal/Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {ARCHITECTURE_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-extrabold text-slate-700 font-mono group-hover:text-blue-500/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>

                <h3 className="text-base font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for Desktop */}
              {idx < ARCHITECTURE_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                  <ArrowRight className="w-6 h-6 text-slate-700 group-hover:text-blue-500 transition-colors" />
                </div>
              )}

              {/* Step Footer Badge */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Phase {idx + 1}</span>
                <span className="text-emerald-400 font-semibold">Standard SOP</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
