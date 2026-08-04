import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { ProjectCaseStudy } from '../types';
import { Clock, Zap, Truck, AlertTriangle, Cpu, ArrowUpRight, CheckCircle2, TrendingDown, Layers } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export const CaseStudies: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy>(PROJECTS[0]);

  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case 'Clock': return <Clock className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-400" />;
      case 'Truck': return <Truck className="w-5 h-5 text-indigo-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
    }
  };

  // Sample data for downtime comparison chart
  const downtimeChartData = [
    { name: 'Standard Window', minutes: 187, fill: '#ef4444' }, // 3h 07m = 187 mins
    { name: 'Rajat Optimized', minutes: 81, fill: '#10b981' }   // 1h 21m = 81 mins
  ];

  // Sample data for HANA load reduction
  const memoryChartData = [
    { name: 'Columnar Engine', load: 90, fill: '#ef4444' },
    { name: 'HEX Engine (DB Hints)', load: 20, fill: '#3b82f6' }
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Key Achievements & Cutover Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Real-world enterprise migration highlights, performance tuning breakthroughs, and emergency recovery executions from my resume.
          </p>
        </div>

        {/* Projects Layout: Selector Tabs + Active Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {PROJECTS.map((proj) => {
              const isSelected = activeProject.id === proj.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                    isSelected 
                      ? 'bg-slate-900 border-blue-500/80 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30' 
                      : 'glass-panel border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl border shrink-0 ${
                      isSelected ? 'bg-blue-600/20 border-blue-500/40' : 'bg-slate-950 border-slate-800'
                    }`}>
                      {getProjectIcon(proj.icon)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {proj.title}
                        </h3>
                        <ArrowUpRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-400' : 'text-slate-600'}`} />
                      </div>
                      <p className="text-xs text-blue-400 font-medium truncate mt-0.5">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Case Study Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
              
              {/* Header & Subtitle */}
              <div className="pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30">
                    {getProjectIcon(activeProject.icon)}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono font-semibold">
                      {activeProject.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge / Scope */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <span>Scope & Technical Challenge</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  {activeProject.challenge}
                </p>
              </div>

              {/* Technical Solution */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <span>Technical Solution Implemented</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  {activeProject.solution}
                </p>
              </div>

              {/* Quantifiable Impact */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span>Quantifiable Impact Achieved</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-500/20 text-emerald-200">
                  {activeProject.impact}
                </p>
              </div>

              {/* Metrics Pill Grid / Mini Visualizer */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      {m.label}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-rose-400 line-through font-mono">{m.before}</span>
                      <span className="text-xs text-slate-500">→</span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Benchmark Chart Embed (for DMS & Memory Tuning) */}
              {activeProject.id === 'dms-upgrade-downtime' && (
                <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-slate-200">Cutover Duration Comparison (Minutes)</span>
                    <span className="text-emerald-400 font-bold">-106 minutes saved</span>
                  </div>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={downtimeChartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 11 }} width={120} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '12px' }} 
                        />
                        <Bar dataKey="minutes" radius={[0, 6, 6, 0]}>
                          {downtimeChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {activeProject.id === 'hana-hex-tuning' && (
                <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-slate-200">System CPU/Memory Load (%)</span>
                    <span className="text-blue-400 font-bold">70% Load Reduction</span>
                  </div>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={memoryChartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 11 }} width={140} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '12px' }} 
                        />
                        <Bar dataKey="load" radius={[0, 6, 6, 0]}>
                          {memoryChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                {activeProject.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px] font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
