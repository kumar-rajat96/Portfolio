import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatStrip } from './components/StatStrip';
import { BentoGridSkills } from './components/BentoGridSkills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CaseStudies } from './components/CaseStudies';
import { ArchitectureWorkflow } from './components/ArchitectureWorkflow';
import { TCodeTerminal } from './components/TCodeTerminal';
import { SystemHealthMonitor } from './components/SystemHealthMonitor';
import { AwardsCertifications } from './components/AwardsCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Fixed Sticky Command Center Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Stat Metric Strip */}
      <StatStrip />

      {/* Core Technical Competencies - Bento Grid */}
      <BentoGridSkills />

      {/* Professional Experience & Migrations Timeline */}
      <ExperienceTimeline />

      {/* Featured Projects & Case Studies */}
      <CaseStudies />

      {/* SAP Architecture Methodology */}
      <ArchitectureWorkflow />

      {/* Interactive SAP Basis TCode & Administration Terminal */}
      <TCodeTerminal />

      {/* Live Enterprise Health Telemetry Monitor */}
      <SystemHealthMonitor />

      {/* Corporate Awards, Certifications & Education */}
      <AwardsCertifications />

      {/* Contact & Inquiries */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Viewer & Printable PDF Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
