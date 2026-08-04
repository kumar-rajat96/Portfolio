import React from 'react';
import { AWARDS, CERTIFICATIONS, EDUCATION } from '../data/resumeData';
import { Award, GraduationCap, Award as MedalIcon, CheckCircle2, Bookmark } from 'lucide-react';

export const AwardsCertifications: React.FC = () => {
  return (
    <section className="py-20 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Recognitions & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Awards, Certifications & Education
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Corporate honors received at Colgate-Palmolive, continuous technical certifications, and academic background in Data Science and Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Awards & Education */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Corporate Awards Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <MedalIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Corporate Honors & Recognition</h3>
                  <p className="text-xs text-slate-400">Awarded at Colgate-Palmolive</p>
                </div>
              </div>

              <div className="space-y-4">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-amber-300">
                        {award.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {award.company}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Academic Qualifications</h3>
                  <p className="text-xs text-slate-400">Data Science & Engineering Degrees</p>
                </div>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-blue-400 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      {edu.institution} {edu.location ? `• ${edu.location}` : ''}
                    </p>
                    {edu.mode && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">
                        {edu.mode}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Technical Certifications Grid */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800 mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Verified Certifications</h3>
                    <p className="text-xs text-slate-400">AWS, HackerRank, SAP, Linux, Data Analytics</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-200 leading-snug">
                          {cert.name}
                        </div>
                        <div className="text-[11px] text-blue-400 font-medium mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Languages Spoken:</span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-800 font-medium">
                    English (Professional)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-800 font-medium">
                    Hindi (Native)
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
