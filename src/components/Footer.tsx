import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#020617] border-t border-slate-900 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
            RK
          </div>
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
        </div>

        {/* Center: Live Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400 text-[11px]">
            System Status: <strong className="text-emerald-400 font-semibold">Operational (99.9% SLA)</strong>
          </span>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
        </button>

      </div>
    </footer>
  );
};
