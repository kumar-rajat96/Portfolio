import React from 'react';
import { METRICS } from '../data/resumeData';
import { ShieldCheck, Clock, Truck, Zap, TrendingUp, Award } from 'lucide-react';

export const StatStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-blue-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-indigo-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-sky-400" />;
      default: return <Award className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="metrics" className="py-12 bg-slate-950/80 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-4 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <TrendingUp className="w-4 h-4" />
              <span>Quantifiable Enterprise Impact</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Proven Performance & Migration Benchmarks
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-2 md:mt-0 max-w-md">
            Verified metrics extracted from Colgate-Palmolive & HGS SAP production landscapes, cutover executions, and incident SLA records.
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-800 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  {getIcon(metric.iconName)}
                </div>
                {metric.unit && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {metric.unit}
                  </span>
                )}
              </div>

              <div className="text-3xl font-extrabold text-white tracking-tight font-mono mb-1 group-hover:text-blue-400 transition-colors">
                {metric.value}
              </div>

              <div className="text-sm font-semibold text-slate-200 mb-2">
                {metric.label}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {metric.description}
              </p>

              {metric.trend && (
                <div className="pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{metric.trend}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
