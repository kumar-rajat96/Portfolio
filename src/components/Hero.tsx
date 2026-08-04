import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Server, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  FileText,
  Activity,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-background">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-blue-400 shadow-lg shadow-blue-500/5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>RISE with SAP Specialist</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">S/4HANA Architect</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Performance Tuning</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architecting <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">Zero-Downtime</span> SAP Cloud Migrations
            </h1>

            {/* Sub-headline / Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Senior SAP BASIS DBA Specialist & RISE Migration Expert with <strong className="text-white font-semibold">5+ years of experience</strong> architecting, migrating, and optimizing complex enterprise landscapes at <strong className="text-blue-400 font-semibold">Colgate-Palmolive</strong>. Proven track record in S/4HANA transitions, multi-DB administration (HANA, DB2, MaxDB), and maintaining <strong className="text-emerald-400 font-semibold">99.9%+ availability</strong>.
            </p>

            {/* Key Value Proposition Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Zero Unplanned Downtime",
                "SUM & Lift-and-Shift RISE",
                "56% Migration Downtime Cut",
                "1,000+ Zero-Defect Mass Transports",
                "HANA HEX Engine DB Hints"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02]"
              >
                <span>Explore Featured Migrations</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all hover:border-slate-500 hover:text-white"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Full Resume PDF</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 text-sm font-semibold transition-all hover:text-white"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">Mumbai, Maharashtra</span>
              </div>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech SAP Command Console Visualization */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Decorative Glass Box */}
              <div className="glass-panel rounded-2xl p-6 shadow-2xl border border-slate-700/60 space-y-5">
                
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">SAP RISE Command Telemetry</h3>
                      <p className="text-[11px] text-slate-400">Colgate-Palmolive Enterprise Landscape</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold">
                    ONLINE • 99.9% SLA
                  </span>
                </div>

                {/* Simulated Telemetry Cards */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Card 1: System Uptime */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Uptime Availability</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono">99.9%</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Zero unplanned downtime</div>
                  </div>

                  {/* Card 2: Cutover Speed */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>DMS Cutover Time</span>
                      <Zap className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-xl font-bold text-blue-400 font-mono">1h 21m</div>
                    <div className="text-[10px] text-slate-400">Cut by 56% (from 3h07m)</div>
                  </div>

                  {/* Card 3: Database Load */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>HANA Resource Load</span>
                      <Database className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">20%</div>
                    <div className="text-[10px] text-slate-400">Optimized from 90% via HEX</div>
                  </div>

                  {/* Card 4: Transports */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Mass Transports</span>
                      <Server className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <div className="text-xl font-bold text-sky-400 font-mono">1,000+</div>
                    <div className="text-[10px] text-slate-400">Zero-defect movements</div>
                  </div>

                </div>

                {/* Code Terminal Output snippet */}
                <div className="bg-[#020617] rounded-xl p-3.5 border border-slate-800 font-mono text-[11px] space-y-1.5 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] border-b border-slate-800/60 pb-1">
                    <span>LIVE_SYS_LOG // SAP_RISE_S4HANA</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="text-emerald-400">
                    &gt; SUM pre-checks executed: 0 errors, 0 warnings
                  </div>
                  <div className="text-blue-400">
                    &gt; Cloud Connector SCC HA Active: Heap upgraded to 4GB
                  </div>
                  <div className="text-indigo-300">
                    &gt; AWS SES Integration: 20+ Landscapes SMTP operational
                  </div>
                  <div className="text-slate-400">
                    &gt; DB Hints applied: HEX Engine execution active on ACDOCA queries
                  </div>
                </div>

                {/* Footer Status */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                    <span>200+ Secure RFC Connections</span>
                  </div>
                  <span className="text-slate-500">Colgate-Palmolive (2019-2026)</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
