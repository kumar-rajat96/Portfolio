import { 
  ExperienceItem, 
  MetricItem, 
  ProjectCaseStudy, 
  SkillCategory, 
  TCodeItem, 
  CertificationItem, 
  AwardItem, 
  EducationItem 
} from '../types';

export const PERSONAL_INFO = {
  name: "Rajat Kumar",
  title: "Senior SAP BASIS DBA Specialist & SAP RISE Migration Expert",
  location: "Mumbai, Maharashtra, India",
  phone: "+91 8169806939",
  email: "rajat.bkr@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajat-kumar-016aa9147",
  summary: "Senior SAP BASIS DBA Specialist & SAP RISE Migration Expert with 5+ years of experience architecting, migrating, and optimizing complex enterprise landscapes. Proven track record of leading end-to-end SAP RISE cloud migrations, S/4HANA transitions, and multi-database administration (HANA, DB2, MaxDB). Adept at performance tuning and proactive troubleshooting, consistently maintaining 99.9%+ system availability and minimizing cutover downtime for business-critical environments.",
  status: "System Operational / Available for Opportunities",
  yearsExperience: "5+ Years",
  availabilitySLA: "99.9%+"
};

export const METRICS: MetricItem[] = [
  {
    id: "sla",
    label: "System Availability SLA",
    value: "99.9%+",
    unit: "Uptime",
    description: "Maintained consistently across business-critical Colgate-Palmolive landscapes post-RISE migration.",
    trend: "+0.9% SLA target",
    iconName: "ShieldCheck"
  },
  {
    id: "downtime",
    label: "Migration Downtime Cut",
    value: "56%",
    unit: "3h 07m → 1h 21m",
    description: "Slashed DMS maintenance window during critical SAP HANA database copy & upgrade.",
    trend: "1h 46m saved",
    iconName: "Clock"
  },
  {
    id: "transports",
    label: "Zero-Defect Mass Transports",
    value: "1,000+",
    unit: "Moves",
    description: "Flawlessly executed across Latin America (LA) production landscapes during EU S/4HANA consolidation.",
    trend: "100% Success Rate",
    iconName: "Truck"
  },
  {
    id: "tuning",
    label: "HANA Memory/CPU Load Cut",
    value: "70%",
    unit: "90% → 20%",
    description: "Switched execution from Columnar Engine to HEX engine via DB Hints, stopping OOM crashes.",
    trend: "3-min query times",
    iconName: "Zap"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "sap-ecosystem",
    title: "SAP Ecosystem & Core Basis",
    icon: "Server",
    description: "Enterprise S/4HANA architecture, RISE migrations, and lifecycle management.",
    skills: [
      { name: "SAP RISE Migration", isKey: true },
      { name: "SAP S/4HANA", isKey: true },
      { name: "SAP BTP", isKey: true },
      { name: "SUM (Software Update Manager)", isKey: true },
      { name: "Cloud Connector (HA Shadow)", isKey: true },
      { name: "Solution Manager & Focused Run", isKey: false },
      { name: "SAP LiveCache", isKey: false },
      { name: "STMS Transport Management", isKey: true },
      { name: "ActiveControl & Phantom Automation", isKey: false }
    ]
  },
  {
    id: "cloud-migrations",
    title: "Cloud & Migrations",
    icon: "Cloud",
    description: "Cloud lift-and-shift, AWS integration, and hypercare execution.",
    skills: [
      { name: "RISE with SAP Lift-and-Shift", isKey: true },
      { name: "AWS Simple Email Service (SES)", isKey: true },
      { name: "Azure Cloud Infrastructure", isKey: false },
      { name: "Pre-checks & Cutover Planning", isKey: true },
      { name: "Hypercare Support & SLA", isKey: true },
      { name: "Cross-Functional SOP Authoring", isKey: false }
    ]
  },
  {
    id: "database-os",
    title: "Database Administration & OS",
    icon: "Database",
    description: "Multi-database administration, HA/DR setup, and encryption.",
    skills: [
      { name: "SAP HANA", isKey: true },
      { name: "IBM DB2 Fix Packs", isKey: true },
      { name: "MaxDB Maintenance", isKey: false },
      { name: "HANA System Replication (HSR)", isKey: true },
      { name: "Database Refresh & Copy", isKey: true },
      { name: "HANA Encryption Key Mgmt", isKey: true },
      { name: "Data Compression & Reindexing", isKey: false },
      { name: "Linux (SUSE / RHEL) & AIX", isKey: true }
    ]
  },
  {
    id: "operations-security",
    title: "Operations, Security & Tuning",
    icon: "Sliders",
    description: "Performance diagnostics, SAML 2.0 security, and automated workflows.",
    skills: [
      { name: "DB Hints (HEX Execution Engine)", isKey: true },
      { name: "SQL Trace Analysis & Lock Mgmt", isKey: true },
      { name: "SAML 2.0 & SAP BTP IAS", isKey: true },
      { name: "Stonebranch Job Scheduling", isKey: false },
      { name: "Splunk Cloud & Splunk Cenoti", isKey: true },
      { name: "Shell & ABAP Scripting", isKey: true },
      { name: "Kernel & Patch Upgrades", isKey: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "colgate-sr-associate",
    role: "Sr. Technology Associate",
    company: "Colgate-Palmolive",
    period: "Jun 2022 - Present",
    location: "Mumbai, Maharashtra",
    isCurrent: true,
    keyTech: ["SAP RISE", "SAP HANA", "AWS SES", "SAP BTP IAS", "Cloud Connector HA", "SUM", "Stonebranch", "Splunk Cloud"],
    categories: [
      {
        title: "Cloud Migrations & Architecture",
        bullets: [
          "SAP RISE Cloud Migrations: Facilitated RISE migrations across MDG landscapes utilizing the SAP Upgrade & RISE Migration methodology; executed pre-checks and SUM uptime/downtime phases within strict business maintenance windows.",
          "Lift-and-Shift Execution: Orchestrated RISE migrations for critical Distributor Management (DMS) and 'Hills' systems, delivering end-to-end execution with zero unplanned downtime.",
          "Hypercare Support: Provided post-go-live hypercare support for SAP RISE-migrated environments, maintaining 99.9% system uptime and zero business disruption.",
          "AWS SES Email Integration: Executed end-to-end migration from legacy on-premise SMTP to AWS Simple Email Service (SES) across 20+ production and non-production landscapes, authoring comprehensive cross-functional SOPs.",
          "Cloud Connector High Availability (HA): Re-architected SAP Cloud Connector (SCC) by deploying HA shadow instances and upgrading JVM heap allocation from 2GB to 4GB, eliminating failover connectivity drops."
        ]
      },
      {
        title: "Database, Basis & Security Operations",
        bullets: [
          "Basis Administration: Delivered 24/7 support across complex SAP/Non-SAP landscapes, managing transport logistics, printer spools, OSS connections, and configuring 200+ secure RFC connections.",
          "System Maintenance & Upgrades: Performed routine kernel upgrades, IBM Db2 fix pack patching, MaxDB maintenance, and SAP HANA revisions while directing scheduled maintenance windows.",
          "Enterprise Security & Compliance: Integrated SAML 2.0 multi-factor authentication metadata with SAP BTP Identity Authentication Service (IAS) and enforced full SAP HANA encryption key updates using native HANA security tools.",
          "Enterprise Tooling & Service Management: Administered Stonebranch (background job scheduling), Splunk Cloud, and Splunk Cenoti to resolve database alerts and track change requests via KPI ticketing systems.",
          "Cross-Functional Leadership: Coordinated technical maintenance plans with external vendors, internal stakeholders, and cross-functional teams while leading Knowledge Transfer (KT) sessions for new hires."
        ]
      }
    ]
  },
  {
    id: "colgate-it-associate",
    role: "Information Technology Associate",
    company: "Colgate-Palmolive",
    period: "Apr 2020 - Jun 2022",
    location: "Mumbai, Maharashtra",
    keyTech: ["Looker Studio", "SAP Basis", "Incident Mgmt", "Infrastructure SLA"],
    categories: [
      {
        title: "Operational Dashboards & Infrastructure Support",
        bullets: [
          "Engineered automated real-time operational aging dashboards in Looker Studio (Google Data Studio), boosting support team agent productivity by 13% and enhancing data visibility.",
          "Maintained a 97.1% QA audit score while resolving higher level technical escalations, achieving a First Line Resolution (FLR) rate >74% and zero DSAT ratings.",
          "Sustained 90%+ monthly KPI compliance by owning end-user IT support end-to-end, troubleshooting OS and infrastructure issues, and coordinating with specialized teams for complex escalations.",
          "Promoted to DBA team in recognition of exceptional performance, technical leadership, and high ratings within the Analytics group."
        ]
      }
    ]
  },
  {
    id: "hgs-support-analyst",
    role: "Technical Support Analyst (Client: Colgate-Palmolive)",
    company: "HGS - Hinduja Global Solutions",
    period: "May 2019 - Apr 2020",
    location: "Mumbai, Maharashtra",
    keyTech: ["SAP Operations", "Oracle", "IBM Db2", "SAP HANA", "AIX", "Linux"],
    categories: [
      {
        title: "Global Data Center Infrastructure Support",
        bullets: [
          "Delivered end-to-end infrastructure support for global Data Center operations, monitoring SAP, Oracle, Db2, SAP HANA, AIX, Windows, WAN, and LAN environments to ensure 24/7 business continuity.",
          "Maintained 100% production system reliability by executing strict SAP and OS-level monitoring protocols, eliminating critical system escalations across enterprise landscapes.",
          "Earned direct hire conversion to Colgate-Palmolive following exceptional performance, operational consistency, and reliable infrastructure support."
        ]
      }
    ]
  }
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "dms-upgrade-downtime",
    title: "DMS S/4HANA Migration Downtime Optimization",
    subtitle: "56% Maintenance Window Reduction (3h 07m → 1h 21m)",
    challenge: "Critical Distributor Management System (DMS) landscapes faced tight business cutover windows where standard SAP HANA database migration steps threatened business downtime limits.",
    solution: "Engineered HANA database copy optimizations, strategic parallel resource allocation, and pre-calculated memory structures during pre-checks with SUM (Software Update Manager).",
    impact: "Slashed cutover downtime by 56% (saving 1 hour 46 minutes), ensuring seamless business continuity and zero unplanned downtime.",
    metrics: [
      { label: "Cutover Downtime", before: "3 hrs 07 min", after: "1 hr 21 min" },
      { label: "Downtime Cut", before: "0%", after: "56% Reduced" }
    ],
    tags: ["SAP HANA", "DMS Upgrade", "SUM Cutover", "DB Copy Optimization"],
    icon: "Clock"
  },
  {
    id: "hana-hex-tuning",
    title: "HANA Memory Optimization & HEX Engine Migration",
    subtitle: "System Load Reduced from 90% to 20%",
    challenge: "Severe Out-Of-Memory (OOM) crashes and CPU spikes plagued Latin America (LA) and DMS production landscapes due to sub-optimal SQL query execution plans in the Columnar Engine.",
    solution: "Diagnosed query execution bottlenecks using SQL Trace Analysis and applied targeted DB Hints to force execution switching from Columnar Engine to the High-Performance Execution (HEX) engine.",
    impact: "Eliminated OOM crashes, dropped CPU/Memory load from 90% down to 20%, and reduced complex query execution times to ~3 minutes.",
    metrics: [
      { label: "Resource Load", before: "90% CPU/Memory", after: "20% Resource Load" },
      { label: "Query Execution", before: "Timeout / OOM", after: "~3 Minutes" }
    ],
    tags: ["DB Hints", "HEX Engine", "SQL Trace Analysis", "OOM Elimination"],
    icon: "Zap"
  },
  {
    id: "mass-transports-la",
    title: "Zero-Defect Mass Transport Consolidation",
    subtitle: "1,000+ Production Movements with 100% Zero Defect",
    challenge: "Major EU S/4HANA consolidation go-live required massive transport deployment across Latin America production systems with zero margin for object locking or transport order errors.",
    solution: "Structured rigorous transport sequence staging, automated STMS verification scripts, and coordinated cross-functional release locks via ActiveControl and Splunk monitoring.",
    impact: "Successfully imported over 1,000+ mass transports into LA production landscapes with zero defects, zero downtime, and zero business disruption.",
    metrics: [
      { label: "Transports Moved", before: "0", after: "1,000+ Transports" },
      { label: "Defect Rate", before: "High Risk", after: "0% Defect Rate" }
    ],
    tags: ["STMS", "ActiveControl", "S/4HANA Consolidation", "Zero Defect"],
    icon: "Truck"
  },
  {
    id: "p1-incident-recovery",
    title: "Critical P1 Emergency Outage Restorations",
    subtitle: "Malaysia Invoicing & PLM Safety Data Sheet Rapid Recovery",
    challenge: "Post-RISE go-live, Malaysia experienced a 3-hour regional invoicing halt due to ADS multi-byte character font rendering failures, while PLM faced a critical P1 SDS generation outage.",
    solution: "Diagnosed ADS font rendering by applying font embedding via SAP Note 1565508 to restore invoicing. Resolved PLM SDS outage by identifying WWI administrative account corruption and re-establishing AD integration.",
    impact: "Restored critical regional invoicing and compliance document generation in record time, mitigating millions in potential operational trade delay.",
    metrics: [
      { label: "Outage Duration", before: "3h Outage", after: "Fully Restored" },
      { label: "Trade Loss", before: "Critical P1", after: "Zero Data Loss" }
    ],
    tags: ["P1 Incident", "Adobe Document Services", "SAP Note 1565508", "WWI / AD"],
    icon: "AlertTriangle"
  },
  {
    id: "splunk-phantom-automation",
    title: "Splunk Phantom Operational Automation Engine",
    subtitle: "40% Operational Cycle Time Reduction",
    challenge: "Manual execution of security transport releases, database upgrade sanity checks, and routine HANA revisions consumed extensive engineer hours and introduced human error risks.",
    solution: "Engineered custom Shell and ABAP workflows integrated into Splunk Phantom for automated alert handling, transport validation, and revision checks.",
    impact: "Cut operational cycle times by 40% and freed senior engineers for high-value architectural RISE migration projects.",
    metrics: [
      { label: "Cycle Time", before: "100% Manual", after: "40% Faster" },
      { label: "Human Error", before: "Variable", after: "Automated Standard" }
    ],
    tags: ["Splunk Phantom", "Shell Scripting", "ABAP Automation", "Workflow"],
    icon: "Cpu"
  }
];

export const TCODES: TCodeItem[] = [
  {
    tcode: "SM12",
    name: "Lock Entry Administration",
    category: "Lock Mgmt",
    description: "Display and release SAP lock entries to resolve table locking and blocked user processes.",
    useCase: "Used during performance spikes and mass transport imports to clear orphan locks safely.",
    commandSnippet: "SELECT * FROM ENQ_TAB WHERE MANDT = '100' AND UNAME = 'SAP_ADMIN';"
  },
  {
    tcode: "SM13",
    name: "Update Requests Monitor",
    category: "Lock Mgmt",
    description: "Monitor, analyze, and re-process failed V1 and V2 asynchronous database update tasks.",
    useCase: "Key for checking transactional integrity following application crashes or DB disconnects.",
    commandSnippet: "V1 Update Status: OK | V2 Update Status: QUEUED"
  },
  {
    tcode: "SM66 / SM50",
    name: "Global Work Process Overview",
    category: "Performance",
    description: "Provides real-time visibility into running work processes across all SAP application servers.",
    useCase: "Diagnose long-running DIA/BGD processes and isolate CPU/Memory bottleneck user sessions.",
    commandSnippet: "STATUS: Running | TYPE: DIA | TIME: 180s | TABLE: BSEG"
  },
  {
    tcode: "ST04",
    name: "Database Performance Monitor",
    category: "Database",
    description: "Deep-dive SAP HANA / DB2 memory allocations, buffer cache quality, and expensive SQL statements.",
    useCase: "Monitor Columnar Engine vs. HEX Engine execution memory pools and buffer hit ratios (>99%).",
    commandSnippet: "HANA Memory Allocated: 256GB / 384GB | Hit Ratio: 99.8%"
  },
  {
    tcode: "ST05",
    name: "SQL & Performance Trace",
    category: "Performance",
    description: "Activate SQL, RFC, Enqueue, and Buffer traces to analyze database execution plans.",
    useCase: "Identify missing indexes, slow execution plans, and apply DB Hints for engine switching.",
    commandSnippet: "WITH HINT(USE_HEX_PLAN) SELECT * FROM ACDOCA..."
  },
  {
    tcode: "STMS",
    name: "Transport Management System",
    category: "Transports",
    description: "Administer transport routes, import queues, and mass transport deployments across DEV/QA/PRD.",
    useCase: "Managed 1,000+ zero-defect mass transports for Colgate-Palmolive S/4HANA consolidation.",
    commandSnippet: "tp addtobuffer <TR_ID> <SID> | tp import <TR_ID> <SID> u128"
  },
  {
    tcode: "DB13",
    name: "DBA Planning Calendar",
    category: "Database",
    description: "Schedule and monitor database backups, statistics updates, index rebuilds, and integrity checks.",
    useCase: "Schedule automated nightly HANA log backups and weekly DB2 fix-pack maintenance jobs.",
    commandSnippet: "JOB: BACKUP_HANA_FULL | RECURRENCE: DAILY AT 01:00:00"
  },
  {
    tcode: "SUM",
    name: "Software Update Manager",
    category: "Patching",
    description: "Browser-based tool for SAP S/4HANA upgrades, stack updates, and RISE cloud cutover execution.",
    useCase: "Executed pre-checks and uptime/downtime phases for Colgate-Palmolive RISE migrations.",
    commandSnippet: "http://<hostname>:1129/lmsl/sumabap/<SID>/doc/sl-ui"
  },
  {
    tcode: "RZ10",
    name: "Profile Parameter Maintenance",
    category: "System",
    description: "Edit instance, default, and START profiles for memory heap limits, RFC quotas, and security.",
    useCase: "Adjusted ztta/roll_extension and Cloud Connector heap limits (2GB to 4GB) for HA.",
    commandSnippet: "rdisp/max_wprun_time = 3600 | abap/heap_area_total = 8589934592"
  },
  {
    tcode: "DBCO",
    name: "Database Connection Maintenance",
    category: "Database",
    description: "Configure secondary database connection parameters and credentials in SAP landscapes.",
    useCase: "Maintain secondary HANA and DB2 connections for cross-system analytics & reporting.",
    commandSnippet: "CON_NAME: HANA_ANALYTICS | DBMS: HDB | USER: SAP<SID>DB"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Data Analytics Fundamental", issuer: "Amazon Web Services (AWS)", badgeColor: "amber" },
  { name: "SQL", issuer: "HackerRank", badgeColor: "emerald" },
  { name: "AI Aware - Analytics Literacy", issuer: "Colgate-Palmolive (India) Ltd", badgeColor: "blue" },
  { name: "Learning Splunk", issuer: "LinkedIn Learning", badgeColor: "purple" },
  { name: "Linux System Administration", issuer: "Udemy", badgeColor: "yellow" },
  { name: "Google Data Studio (Looker Studio)", issuer: "Udemy", badgeColor: "cyan" },
  { name: "SAP Basis One to One Foundation", issuer: "Udemy", badgeColor: "indigo" },
  { name: "SAP Joule Studio", issuer: "SAP Learnings", badgeColor: "sky" }
];

export const AWARDS: AwardItem[] = [
  {
    title: "Chairman's You Can Make A Difference Award",
    company: "Colgate-Palmolive",
    description: "Prestigious corporate award recognizing outstanding initiative, system reliability, and technical leadership during critical RISE migrations."
  },
  {
    title: "Champion of the Month",
    company: "Colgate-Palmolive",
    description: "Awarded for exceptional operational performance, rapid P1 incident resolution, and maintaining 99.9%+ system SLA."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Postgraduate Degree, Data Science",
    institution: "International Institute of Information Technology (IIIT) Bangalore",
    period: "Nov 2021 - Dec 2022",
    mode: "Distance Learning"
  },
  {
    degree: "Bachelor of Engineering (B.E.), Electronics & Communications Engineering",
    institution: "Bharati Vidyapeeth College of Engineering",
    location: "Navi Mumbai, Maharashtra",
    period: "May 2015 - May 2019"
  }
];

export const ARCHITECTURE_STEPS = [
  {
    step: "01",
    title: "Proactive Health Audit & EWA Analysis",
    subtitle: "Continuous System Telemetry",
    description: "Regular evaluation of EarlyWatch Alert (EWA) reports, ST04 buffer hit ratios, CPU/Memory telemetry, and DB growth trends across landscapes to catch degradation before end-users notice.",
    icon: "Activity"
  },
  {
    step: "02",
    title: "Bottleneck Diagnostics & Memory Tuning",
    subtitle: "HANA Engine & Query Optimization",
    description: "Deep-dive SQL trace analysis via ST05/ST04. Applying targeted DB Hints to shift execution to the HEX engine, optimizing JVM heap allocations (2GB→4GB SCC), and eliminating Out-Of-Memory (OOM) risks.",
    icon: "Sliders"
  },
  {
    step: "03",
    title: "Patching, Security Hardening & Encryption",
    subtitle: "Enterprise Zero-Trust Compliance",
    description: "Executing SUM patch stacks, kernel updates, SAML 2.0 multi-factor integration with SAP BTP IAS, HANA encryption key rotations, and SAML metadata alignment.",
    icon: "Lock"
  },
  {
    step: "04",
    title: "High Availability & DR Validation",
    subtitle: "Resilient Cloud & On-Prem Failover",
    description: "Configuring Cloud Connector shadow instances, HANA System Replication (HSR), automated system refreshes via Libelle, and zero-unplanned-downtime cutovers for SAP RISE migrations.",
    icon: "RefreshCw"
  }
];
