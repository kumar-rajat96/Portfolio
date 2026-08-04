import React, { useState } from 'react';
import { TCODES } from '../data/resumeData';
import { Terminal, Search, Copy, Check, Play, Code, Cpu } from 'lucide-react';

export const TCodeTerminal: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [simulatedLog, setSimulatedLog] = useState<string>('Ready for TCode command query execution...');

  const categories = ['ALL', 'Lock Mgmt', 'Performance', 'Database', 'Transports', 'Patching', 'System'];

  const filteredTCodes = TCODES.filter(tc => {
    const matchesCat = activeCategory === 'ALL' || tc.category === activeCategory;
    const matchesSearch = tc.tcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const executeSimulatedTCode = (tc: typeof TCODES[0]) => {
    setSimulatedLog(`[SAP_CMD_EXEC] TCode: ${tc.tcode} (${tc.name})\nExecuting diagnostic trace... OK.\nResult snippet: ${tc.commandSnippet || 'Execution successful.'}`);
  };

  return (
    <section id="tcode-shell" className="py-20 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive SAP Command Reference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              SAP Basis TCode & Administration Terminal
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Quick-reference terminal highlighting core SAP Transaction Codes, SQL trace diagnostic snippets, and transport commands utilized daily in Colgate-Palmolive landscapes.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search TCode (e.g. ST04, SM12, SUM)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Terminal Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* TCode Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[550px] overflow-y-auto pr-2">
            {filteredTCodes.map((tc) => (
              <div
                key={tc.tcode}
                onClick={() => executeSimulatedTCode(tc)}
                className="glass-panel glass-panel-hover rounded-xl p-4 border border-slate-800 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 font-mono text-xs font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      /n{tc.tcode}
                    </span>
                    <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {tc.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {tc.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {tc.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate max-w-[180px]">{tc.useCase}</span>
                  <span className="text-blue-400 font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Test</span>
                    <Play className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Console Console Screen */}
          <div className="lg:col-span-5">
            <div className="bg-[#020617] rounded-2xl border border-slate-800 p-5 font-mono text-xs shadow-2xl flex flex-col h-full justify-between space-y-4">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 text-[11px] ml-2">sapgui_tcode_shell.sh</span>
                </div>
                <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  CONNECTED: PRD_HANA_100
                </span>
              </div>

              {/* Output Display */}
              <div className="space-y-3 py-2 text-slate-300 min-h-[220px]">
                <div className="text-slate-500 text-[11px]">
                  # SAP BASIS DBA COMMAND CONSOLE -- RAJAT KUMAR
                </div>
                <div className="text-blue-400">
                  &gt; ACTIVE LANDSCAPE: S/4HANA 2023 RISE ON AWS
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 whitespace-pre-wrap leading-relaxed text-[11px]">
                  {simulatedLog}
                </div>
              </div>

              {/* Command Quick Copy */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>SAP Kernel / HANA Parameter:</span>
                  <span className="text-slate-500">Copy to Clipboard</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                  <span className="truncate">WITH HINT(USE_HEX_PLAN) SELECT * FROM ACDOCA</span>
                  <button
                    onClick={() => handleCopy('WITH HINT(USE_HEX_PLAN) SELECT * FROM ACDOCA')}
                    className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy snippet"
                  >
                    {copiedCode === 'WITH HINT(USE_HEX_PLAN) SELECT * FROM ACDOCA' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
