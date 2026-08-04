import React, { useState } from 'react';
import { EXPERIENCES } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle, Award, Terminal } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  // Track expanded cards
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'colgate-sr-associate': true,
    'colgate-it-associate': true,
    'hgs-support-analyst': false
  });

  const toggleRole = (id: string) => {
    setExpandedRoles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Official Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Migrations
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Detailed chronological history of SAP Basis administration, RISE cloud migrations, database maintenance, and operational leadership.
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
          
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedRoles[exp.id];

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  exp.isCurrent
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-white animate-pulse' : 'bg-slate-500'}`} />
                </div>

                {/* Role Glass Card */}
                <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 shadow-xl transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {exp.company}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Toggle Details Button */}
                    <button
                      onClick={() => toggleRole(exp.id)}
                      className="self-start lg:self-center inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                    >
                      <span>{isExpanded ? 'Collapse Scope' : 'Expand Scope'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-blue-400" />}
                    </button>
                  </div>

                  {/* Key Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {exp.keyTech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-slate-800 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Accomplishments (Expanded View) */}
                  {isExpanded && (
                    <div className="space-y-6 pt-2 animate-in fade-in-50 duration-300">
                      {exp.categories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>{cat.title}</span>
                          </h4>
                          <ul className="space-y-2 pl-1">
                            {cat.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer callout for direct hire or promotion */}
                  {exp.id === 'colgate-it-associate' && (
                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>Promoted to DBA team in recognition of exceptional performance and technical leadership.</span>
                    </div>
                  )}

                  {exp.id === 'hgs-support-analyst' && (
                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>Earned direct hire conversion to Colgate-Palmolive following reliable infrastructure support.</span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
