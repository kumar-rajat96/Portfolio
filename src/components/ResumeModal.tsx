import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, AWARDS, EDUCATION } from '../data/resumeData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
RAJAT KUMAR - ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.summary}

KEY SKILLS:
SAP RISE Migration, SAP S/4HANA, SAP BTP, SUM, Cloud Connector HA, AWS SES, SAP HANA, IBM DB2, MaxDB, Database Refresh, Data Compression, Reindexing, HANA Encryption Key Management, SQL Trace Analysis, DB Hints (HEX), Lock Management (SM12/SM13/SM66), Memory Optimization, SAP Transports, Shell Scripting, Splunk Monitoring, ActiveControl.

PROFESSIONAL EXPERIENCE:
${EXPERIENCES.map(e => `
- ${e.role} | ${e.company} (${e.period}) - ${e.location}
${e.categories.map(c => `  * ${c.title}:\n` + c.bullets.map(b => `    - ${b}`).join('\n')).join('\n')}
`).join('\n')}

KEY ACCOMPLISHMENTS:
${PROJECTS.map(p => `- ${p.title}: ${p.impact}`).join('\n')}

AWARDS:
${AWARDS.map(a => `- ${a.title} (${a.company}): ${a.description}`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `- ${c.name} (${c.issuer})`).join('\n')}

EDUCATION:
${EDUCATION.map(ed => `- ${ed.degree} | ${ed.institution} (${ed.period})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="bg-[#0b1329] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-900 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              RK
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Rajat Kumar - Resume PDF Preview</h3>
              <p className="text-xs text-slate-400">Official Senior SAP BASIS DBA Specialist Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
              <span>{copied ? 'Copied Text!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div id="printable-resume" className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed bg-slate-950">
          
          {/* Document Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">
              Rajat Kumar
            </h1>
            <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-400" /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-blue-400" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-blue-400" /> linkedin.com/in/rajat-kumar-016aa9147
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-400" /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              SUMMARY
            </h2>
            <p className="text-slate-300">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Key Skills Section */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              KEY SKILLS
            </h2>
            <p className="text-slate-300 leading-relaxed">
              SAP RISE Migration, SAP S/4HANA, SAP BTP, SUM (Software Update Manager), Cloud Connector (HA Configuration), AWS SES Integration, SAP HANA, IBM DB2, MaxDB, SAP LiveCache, Database Refresh, Data Compression, Reindexing, HANA Encryption Key Management, SQL Trace Analysis, DB Hints (Traditional to HEX Execution engines), Lock Management (SM12/SM13/SM66), Memory Optimization, SAP transports, SAP Performance Analysis (Basis Tcodes), Shell Scripting, Phantom Automation, ActiveControl, Stonebranch, Libelle System Copy, Splunk Monitoring, GitHub.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-100">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="text-xs font-mono text-blue-400">{exp.period} | {exp.location}</span>
                </div>

                {exp.categories.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-1 pl-2">
                    <div className="text-xs font-semibold text-slate-400">{cat.title}:</div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300 text-xs">
                      {cat.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Key Accomplishments */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              KEY HIGHLIGHT ACCOMPLISHMENTS
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300 text-xs">
              {PROJECTS.map((p) => (
                <li key={p.id} className="leading-relaxed">
                  <strong className="text-slate-100">{p.title}:</strong> {p.impact}
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              AWARDS
            </h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300 text-xs">
              {AWARDS.map((a, idx) => (
                <li key={idx}>
                  <strong className="text-slate-100">{a.title}</strong> | {a.company} — {a.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300 text-xs pl-2">
              {CERTIFICATIONS.map((c, idx) => (
                <div key={idx}>• {c.name} ({c.issuer})</div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-1 pl-2 text-xs text-slate-300">
              {EDUCATION.map((e, idx) => (
                <div key={idx} className="flex justify-between">
                  <span><strong>{e.degree}</strong> — {e.institution}</span>
                  <span className="font-mono text-slate-400">{e.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/30 pb-1">
              ADDITIONAL INFORMATION
            </h2>
            <p className="text-slate-300 text-xs pl-2">
              <strong>Languages:</strong> English and Hindi
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
