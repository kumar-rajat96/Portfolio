import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { Server, Cloud, Database, Sliders, CheckCircle, Search, Layers } from 'lucide-react';

export const BentoGridSkills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Stack Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Technical Competencies
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Extracted from 5+ years of hands-on SAP Basis DBA administration, RISE cloud cutovers, database optimization, and operational automation.
            </p>
          </div>

          {/* Interactive Search Bar & Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter skills (e.g., HANA, RISE, DB2)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <button
              onClick={() => { setSelectedCategory(null); setSearchTerm(''); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === null && !searchTerm 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
              }`}
            >
              All Domains
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            // Determine bento span
            const spanClass = idx === 0 || idx === 2 ? 'lg:col-span-7' : 'lg:col-span-5';
            
            const filteredSkills = cat.skills.filter(s => 
              s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={cat.id}
                className={`${spanClass} glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {filteredSkills.length} Tech
                    </span>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    {filteredSkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.isKey
                            ? 'bg-blue-600/15 text-blue-300 border border-blue-500/30 font-semibold shadow-sm shadow-blue-500/5'
                            : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <CheckCircle className={`w-3.5 h-3.5 ${skill.isKey ? 'text-blue-400' : 'text-slate-500'}`} />
                        <span>{skill.name}</span>
                        {skill.isKey && (
                          <span className="text-[10px] uppercase tracking-wider font-bold text-blue-400 ml-0.5">
                            CORE
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Footer Indicator */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px]">Production Verified</span>
                  <span className="text-blue-400 font-medium hover:underline cursor-pointer">
                    Colgate-Palmolive Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
