import React, { useState } from 'react';
import { Activity, ShieldCheck, Database, Server, Cpu, RefreshCw, Radio } from 'lucide-react';

export const SystemHealthMonitor: React.FC = () => {
  const [isSimulatingLegacy, setIsSimulatingLegacy] = useState(false);

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Real-Time Telemetry Simulation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              SAP Basis Enterprise Health Monitor
            </h2>
          </div>

          {/* Simulation Toggle */}
          <div className="flex items-center gap-3 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 pl-2">Engine Mode:</span>
            <button
              onClick={() => setIsSimulatingLegacy(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                !isSimulatingLegacy 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              HEX Optimized (Rajat)
            </button>
            <button
              onClick={() => setIsSimulatingLegacy(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isSimulatingLegacy 
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Legacy Columnar Load
            </button>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: HANA CPU & Memory */}
          <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>HANA Resource Utilization</span>
              <Database className={`w-4 h-4 ${isSimulatingLegacy ? 'text-rose-400' : 'text-emerald-400'}`} />
            </div>
            <div className="flex items-baseline justify-between">
              <div className={`text-2xl font-bold font-mono ${isSimulatingLegacy ? 'text-rose-400' : 'text-emerald-400'}`}>
                {isSimulatingLegacy ? '90%' : '20%'}
              </div>
              <span className="text-xs text-slate-400 font-mono">256GB Heap</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div 
                className={`h-full transition-all duration-500 ${isSimulatingLegacy ? 'bg-rose-500 w-[90%]' : 'bg-emerald-500 w-[20%]'}`}
              />
            </div>
            <p className="text-[11px] text-slate-400">
              {isSimulatingLegacy ? 'Warning: Severe OOM risk & CPU spikes in Columnar engine.' : 'Normal: HEX DB Hints active. Zero OOM risk.'}
            </p>
          </div>

          {/* Card 2: Uptime & SLA */}
          <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Production SLA</span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              99.9% SLA
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Colgate-Palmolive PRD Active</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Maintained continuously across RISE cloud landscapes.
            </p>
          </div>

          {/* Card 3: RFC Connections */}
          <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Configured Secure RFCs</span>
              <Server className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-indigo-400">
              200+ RFCs
            </div>
            <div className="text-xs text-slate-300 font-mono">
              Status: 100% HEALTHY
            </div>
            <p className="text-[11px] text-slate-400">
              Cloud Connector SCC HA active (4GB Heap allocated).
            </p>
          </div>

          {/* Card 4: Mail & Automation */}
          <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>AWS SES Mail Integration</span>
              <Cpu className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-sky-400">
              20+ PRD/Non-PRD
            </div>
            <div className="text-xs text-emerald-400 font-medium">
              Zero SMTP Delivery Drops
            </div>
            <p className="text-[11px] text-slate-400">
              Splunk Phantom automated transport releases active.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
