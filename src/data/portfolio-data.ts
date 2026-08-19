import React from "react";
import {
  FileSpreadsheet,
  BarChart3,
  LayoutDashboard,
  Database,
  Cog,
  Factory,
  Mail,
  Phone,
  MapPin,
  Code2,
  Globe,
  Briefcase,
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  Send,
  SlidersHorizontal,
  TableProperties,
  MessageSquare,
  Clock,
  Sparkles,
  Quote,
  ShieldAlert,
  ArrowRight,
  Workflow,
  Check
} from "lucide-react";

// Base URL helper for GitHub Pages and local development
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  description: string;
  cardUrl: string;
  fullUrl: string;
  thumbUrl: string;
  aspectRatio: string;
  tag?: string;
}

export interface CaseStudyBeforeAfter {
  before: string[];
  whatIBuilt: string[];
  after: string[];
  businessImpact: string[];
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "streamlit-dashboard" | "excel-automation" | "production-planning";
  featured: boolean;
  appType: "Streamlit Web App" | "Excel Pipeline" | "Optimization Engine";
  appUrl?: string;
  description: string;
  problem: string;
  solution: string;
  input: string;
  output: string;
  technologies: string[];
  keyFeatures: string[];
  businessOutcome: string;
  metrics: Record<string, string>;
  story?: CaseStudyBeforeAfter;
  screenshots: ProjectScreenshot[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  outcomeBadge: string;
  highlight: string;
}

export interface PricingTier {
  id: string;
  title: string;
  badge?: string;
  turnaround: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  popular?: boolean;
}

export interface WhyNikhilPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  description: string;
  highlight?: string;
}

export interface SiteConfigType {
  personal: {
    name: string;
    roleTitle: string;
    headline: string;
    subHeadline: string;
    bio: string;
    positioningStatement: string;
    trustBadge: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    whatsappUrl: string;
    location: string;
    availability: string;
    profileImage: string;
  };
  socialLinks: {
    code: string;
    portfolio: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  heroMetrics: HeroMetric[];
  currentRole: {
    company: string;
    department: string;
    location: string;
    period: string;
    duration: string;
    description: string;
    responsibilities: string[];
    highlights: string[];
  };
  navigation: { label: string; href: string }[];
  trustItems: string[];
  targetAudience: {
    id: string;
    title: string;
    pain: string;
    solution: string;
    icon: string;
    accent: string;
  }[];
  services: {
    id: string;
    number: string;
    title: string;
    icon: string;
    description: string;
    outcome: string;
    examples: string[];
    typicalInput: string;
    automatedOutput: string;
  }[];
  projects: PortfolioProject[];
  projectCategories: { id: string; label: string }[];
  testimonials: TestimonialItem[];
  whyNikhil: WhyNikhilPoint[];
  pricingTiers: PricingTier[];
  experience: {
    company: string;
    subtitle?: string;
    role: string;
    department: string;
    period: string;
    duration: string;
    location: string;
    current: boolean;
    achievements: string[];
    highlights: string[];
  }[];
  education: { degree: string; institution: string; period: string }[];
  certifications: { name: string; institution: string; period: string }[];
  awards: { title: string; date: string; description: string }[];
  skills: Record<string, string[]>;
  impact: { qualitative: { title: string; description: string; icon: string }[] };
  process: { step: string; title: string; description: string; timeframe: string }[];
  contactForm: {
    heading: string;
    subheading: string;
    primaryCTA: string;
    secondaryCTA: string;
    whatsappCTA: string;
  };
}

// ============================================================
// SINGLE EDITABLE CONFIGURATION FILE
// ============================================================

export const siteConfig: SiteConfigType = {
  // ----------------------------------------------------------
  // PERSONAL INFORMATION
  // ----------------------------------------------------------
  personal: {
    name: "Nikhil Waradkar",
    roleTitle: "Manufacturing & Operations Automation Specialist • PPC / SCM & Excel Consultant",
    headline: "I automate the Excel and reporting work your operations team hates doing every day.",
    subHeadline:
      "Python automation, Excel workflows, and manufacturing dashboards for PPC, SCM, and operations teams.",
    bio: "Operations and PPC/SCM professional with 12+ years of hands-on automotive shopfloor & supply chain planning experience. I build custom Python pipelines, multi-file Excel automations, and interactive Streamlit web apps that eliminate repetitive manual data entry and prevent shopfloor bottlenecks.",
    positioningStatement:
      "An operations professional who can also build the automation — not just a developer who read about manufacturing.",
    trustBadge: "12+ Years Manufacturing & Operations Experience • PPC & SCM",
    email: "ngwaradkar@gmail.com",
    phone: "+91-8668634502",
    whatsappNumber: "+91-8668634502",
    whatsappMessage: "Hi Nikhil, I have an Excel/PPC process I'd like to automate.",
    whatsappUrl:
      "https://wa.me/918668634502?text=Hi%20Nikhil,%20I%20have%20an%20Excel/PPC%20process%20I'd%20like%20to%20automate.",
    location: "Pune, Maharashtra, India",
    availability: "Available for freelance automation projects & consulting engagements",
    profileImage: "",
  },

  // ----------------------------------------------------------
  // SOCIAL & REPO LINKS
  // ----------------------------------------------------------
  socialLinks: {
    code: "https://ngwaradkar.github.io/nikhil-waradkar/",
    portfolio: "https://ngwaradkar.github.io/nikhil/",
    github: "https://github.com/ngwaradkar",
    linkedin: "https://www.linkedin.com/in/nikhil-waradkar-268705153/",
    whatsapp:
      "https://wa.me/918668634502?text=Hi%20Nikhil,%20I%20have%20an%20Excel/PPC%20process%20I'd%20like%20to%20automate.",
  },

  // ----------------------------------------------------------
  // HERO METRICS (Real Results Proof Cards)
  // ----------------------------------------------------------
  heroMetrics: [
    {
      value: "3.5 hrs ➔ <10s",
      label: "Daily Reporting Time",
      description: "Daily manual collation replaced by instant 1-click execution",
      highlight: "Shift Time Recovered",
    },
    {
      value: "980+ Vehicles",
      label: "Processed in 1 Workflow",
      description: "Real-time float tracking across paint buffers & TCF assembly",
      highlight: "Live Plant Float",
    },
    {
      value: "10 Data Sources",
      label: "Automatically Consolidated",
      description: "SAP, MES, float sheets & BOMs merged with zero copy-paste",
      highlight: "Zero Manual Errors",
    },
    {
      value: "13 Production Lines",
      label: "Finite Capacity Scheduled",
      description: "Automated setup loss deduction (240m/60m) & calendar skips",
      highlight: "100% Adherence",
    },
  ],

  // ----------------------------------------------------------
  // CURRENT & PAST WORKSPACE ROLES
  // ----------------------------------------------------------
  currentRole: {
    company: "Tata Motors Passenger Vehicle Ltd",
    department: "SCM / PPC / Order Fulfillment",
    location: "Pune, India",
    period: "Current Role",
    duration: "Ongoing",
    description:
      "Managing end-to-end supply chain planning, aggregate vehicle sequencing, and order fulfillment workflows for passenger vehicle assembly lines.",
    responsibilities: [
      "Aggregate vehicle sequencing across Trim, Chassis, and Final (TCF) assembly tracks",
      "Real-time shortage identification and multi-channel component stock tracking",
      "Coordination with cross-functional shopfloor teams (BIW, Paint Shop, TCF) to prevent line starvation",
      "Development of custom automated Python utilities to accelerate daily PPC reporting",
    ],
    highlights: [
      "Supply Chain Management",
      "PPC & SCM",
      "Order Fulfillment",
      "Line Sequencing",
      "Python Utilities",
    ],
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  navigation: [
    { label: "Problems I Solve", href: "#problems" },
    { label: "What I Automate", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Before vs After", href: "#transformation" },
    { label: "Why Nikhil", href: "#why-nikhil" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Send Workflow", href: "#contact" },
  ],

  // ----------------------------------------------------------
  // TRUST STRIP ITEMS
  // ----------------------------------------------------------
  trustItems: [
    "12+ Years Manufacturing & Operations Experience",
    "Production Planning & Control (PPC)",
    "Supply Chain Management (SCM)",
    "SAP PP / MM Certified",
    "Python Excel Automation Pipelines",
    "Interactive Streamlit Dashboards",
    "100% Audit-Ready Financial & BOM Accuracy",
    "Award: Digital Transformation Using AI",
  ],

  // ----------------------------------------------------------
  // THE PROBLEMS I SOLVE
  // ----------------------------------------------------------
  targetAudience: [
    {
      id: "manual-excel-reports",
      title: "Manual Excel Reports & Formula Lag",
      pain: "Spending 2-4 hours every morning copying and pasting raw exports, fixing broken #N/A and #REF! formulas, and waiting for heavy sheets to recalculate.",
      solution: "1-Click Python automation script that reads, cleans, merges, and styles finished Excel reports in under 5 seconds with zero formula bugs.",
      icon: "FileSpreadsheet",
      accent: "#3B82F6",
    },
    {
      id: "stock-reconciliation-shortages",
      title: "Stock Reconciliation & Part Shortages",
      pain: "Surprise component shortages halting high-speed assembly tracks because stock files and paint float buffers are reconciled hours too late.",
      solution: "Automated FIFO clear-to-build calculation engine matching incoming float against bill-of-materials and broadcasting instant shortage alerts.",
      icon: "Layers",
      accent: "#06B6D4",
    },
    {
      id: "production-planning-balancing",
      title: "Production Planning & Line Balancing",
      pain: "Day-wise multi-line scheduling in spreadsheets fails to accurately deduct major/minor changeover setup losses and plant holiday calendars.",
      solution: "Finite capacity planning engine that balances part quotas across 13+ dedicated manufacturing lines with built-in setup loss deductions.",
      icon: "Factory",
      accent: "#10B981",
    },
    {
      id: "executive-shift-reporting",
      title: "Daily Shift & Management Reporting",
      pain: "Plant heads and operations managers waiting hours for shift summaries or asking for custom analytics across disconnected legacy systems.",
      solution: "Interactive Streamlit web dashboard with real-time filters, automated Telegram broadcasts, and exportable executive views.",
      icon: "LayoutDashboard",
      accent: "#F59E0B",
    },
  ],

  // ----------------------------------------------------------
  // WHAT I AUTOMATE (4 Core High-Impact Services)
  // ----------------------------------------------------------
  services: [
    {
      id: "python-excel-automation",
      number: "01",
      title: "Python Excel Workflow Automation",
      icon: "FileSpreadsheet",
      description:
        "Transform messy multi-workbook Excel routines into 1-click Python automation scripts that run in seconds.",
      outcome: "Eliminates 90%+ of manual spreadsheet effort while ensuring 100% calculation accuracy.",
      examples: [
        "Multi-workbook merging & consolidation",
        "Automated VLOOKUP / XLOOKUP replacements",
        "Data cleaning & schema normalization",
        "Pre-formatted, styled executive workbooks",
      ],
      typicalInput: "Multiple raw Excel (.xlsx, .xlsb) & CSV ERP dumps",
      automatedOutput: "Polished, audit-ready Excel deliverable with zero manual work",
    },
    {
      id: "automated-reporting",
      number: "02",
      title: "Automated Daily & Shift Reporting",
      icon: "BarChart3",
      description:
        "Replace daily, weekly, and shift-end spreadsheet collation with scheduled report generators and instant alerts.",
      outcome: "Shift reports that took 3+ hours now generate in under 10 seconds and auto-broadcast to stakeholders.",
      examples: [
        "Daily shift summaries & production drops",
        "Automated Telegram & email dispatches",
        "Weekly executive status presentations",
        "Automated PDF & formatted Excel packages",
      ],
      typicalInput: "Raw transactional dumps from ERP / MES / Shopfloor",
      automatedOutput: "Decision-ready executive summary & visual charts",
    },
    {
      id: "streamlit-dashboards",
      number: "03",
      title: "Interactive Streamlit Operations Dashboards",
      icon: "LayoutDashboard",
      description:
        "Turn static, heavy spreadsheets into live, browser-based web applications with real-time filters and search.",
      outcome: "Gives shopfloor planners and executives instant visibility into plant bottlenecks and KPIs.",
      examples: [
        "Real-time shortage & float search engines",
        "Live Plan vs Actual variance trackers",
        "Multi-stage WIP buffer aging monitors",
        "Dynamic capacity balance simulators",
      ],
      typicalInput: "Daily operations files or scheduled database exports",
      automatedOutput: "Responsive web application accessible securely from any browser",
    },
    {
      id: "manufacturing-scm-automation",
      number: "04",
      title: "PPC & SCM Finite Capacity Schedulers",
      icon: "Factory",
      description:
        "Specialized scheduling and material allocation engines built specifically for automotive & discrete manufacturing.",
      outcome: "Optimized assembly line balancing, zero line starvation, and predictable daily vehicle throughput.",
      examples: [
        "13-Line finite capacity scheduling",
        "Major/minor setup changeover loss deductions",
        "FIFO clear-to-build material allocation",
        "Paint shop buffer & aging tracking",
      ],
      typicalInput: "SAP PP/MM dumps, plant calendars, DPT plans",
      automatedOutput: "Optimized daily production schedules & shortage matrices",
    },
  ],

  // ----------------------------------------------------------
  // FEATURED CASE STUDIES (Structured: Before / Built / After / Impact)
  // ----------------------------------------------------------
  projects: [
    {
      id: "vin-generation-dashboard",
      number: "01",
      title: "Automotive VIN Allocation & PPC Operations Center",
      tagline: "Live Painted Body Storage (PBS) Allocation & Real-Time Shortage Engine",
      category: "streamlit-dashboard",
      featured: true,
      appType: "Streamlit Web App",
      appUrl: "plantest.streamlit.app",
      description:
        "Mission-critical production planning and VIN allocation system for automotive passenger vehicle assembly lines, coordinating TCF1 and TCF2 tracks with multi-stage material verification.",
      problem:
        "Scheduling vehicle drops onto assembly lines without real-time component stock verification causes line starvation, buffer track congestion, and expensive shopfloor rework.",
      solution:
        "Engineered an interactive Streamlit operations center with 10-channel data upload, FIFO clear-to-build allocation engine, live shortage alerts, hour-by-hour drop tracking, and automated Telegram broadcasts.",
      story: {
        before: [
          "3.5 hours of manual spreadsheet collation every morning",
          "10 separate Excel files opened, filtered, and copy-pasted manually",
          "Frequent #N/A formula breakages and undetected vehicle code mismatches",
          "Delayed visibility into critical cockpit and wiring shortages",
        ],
        whatIBuilt: [
          "1-Click Python ingestion engine parsing .xlsb and .xlsx dumps in parallel",
          "Automated FIFO clear-to-build allocator for engine, wiring, and cockpit stock",
          "Interactive Streamlit web dashboard with granular 980+ cab search",
          "15-minute scheduled Telegram shift dispatcher for plant leadership",
        ],
        after: [
          "Sub-10 second automated refresh cycle across all 10 data sources",
          "100% automated BOM code audit catching missing vehicle variants instantly",
          "Live hour-by-hour vehicle drop telemetry across TCF1 and TCF2 tracks",
          "Zero manual copy-paste or formula maintenance required",
        ],
        businessImpact: [
          "~3.5 hours/day recovered for PPC and shopfloor planners",
          "Eliminated vehicle sequencing mismatches and assembly line starvation",
          "Faster, data-backed shift production decisions across plant management",
        ],
      },
      input: "Paint float reports (.xlsb/.xlsx), VIN generation dumps, engine & wiring stock files, BOM master",
      output: "Real-time FIFO allocation queues, automated Excel reports, shift summaries, shortage matrices",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "OpenPyXL",
        "Matplotlib",
      ],
      keyFeatures: [
        "10-Channel automated data synchronization",
        "Shop-wise daily production summary (Dropping, Paint Lifting, T60/T40 counts)",
        "Model-wise production matrix across TCF1 & TCF2 lines",
        "Hourly production & line generation tracker with visual drop trends",
        "Engine & battery requirement FIFO clear-to-build calculator",
        "Automated BOM validation engine alerting on missing vehicle codes",
        "15-Minute scheduled Telegram report dispatcher",
      ],
      businessOutcome:
        "Replaced 3.5 hours of daily manual spreadsheet collation with a sub-10-second automated refresh cycle, providing deterministic visibility across 980+ plant float vehicles.",
      metrics: {
        runtime: "3.5 hrs ➔ < 10 sec",
        dataChannels: "10 Channels Ingested",
        plantFloat: "980+ Vehicles Monitored",
        validation: "100% BOM Audit",
      },
      screenshots: [
        {
          id: "vin_dashboard_main",
          title: "Main Operations Center",
          caption: "Plant production summary, model-wise matrix, hourly drop tracking & engine clearances",
          description: "Live dashboard overview showing daily vehicle drops across TCF1 and TCF2 tracks with hour-by-hour telemetry and clear-to-build balance.",
          cardUrl: getAssetUrl("projects/cards/vin_dashboard_main.png"),
          fullUrl: getAssetUrl("projects/full/vin_dashboard_main.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_dashboard_main.png"),
          aspectRatio: "16/10",
          tag: "Operations Overview",
        },
        {
          id: "vin_dashboard_shortage",
          title: "Cockpit & Wiring Shortage Matrix",
          caption: "Component availability tracker with 6:30 AM shift clearance exceed alerts",
          description: "Detailed breakdown of cockpit assemblies and wiring harness shortages matched against PBS and total paint shop float.",
          cardUrl: getAssetUrl("projects/cards/vin_dashboard_shortage.png"),
          fullUrl: getAssetUrl("projects/full/vin_dashboard_shortage.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_dashboard_shortage.png"),
          aspectRatio: "16/10",
          tag: "Shortage Matrix",
        },
        {
          id: "vin_dashboard_float_search",
          title: "Total Float Details & Cab Search",
          caption: "Real-time WIP vehicle search with quality hold isolation & blocking reasons",
          description: "Granular search engine tracking 982 cabs across all paint shop stages with live status badges and root-cause blocking reasons.",
          cardUrl: getAssetUrl("projects/cards/vin_dashboard_float_search.png"),
          fullUrl: getAssetUrl("projects/full/vin_dashboard_float_search.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_dashboard_float_search.png"),
          aspectRatio: "16/10",
          tag: "WIP Search Engine",
        },
        {
          id: "vin_dashboard_telegram",
          title: "Automated Telegram Dispatcher",
          caption: "15-Minute interval shift broadcasts with live production & shortage metrics",
          description: "Scheduled dispatch engine formatting live shift KPIs into structured Telegram notifications for shopfloor supervisors and management.",
          cardUrl: getAssetUrl("projects/cards/vin_dashboard_telegram.png"),
          fullUrl: getAssetUrl("projects/full/vin_dashboard_telegram.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_dashboard_telegram.png"),
          aspectRatio: "16/10",
          tag: "Automated Broadcast",
        },
      ],
    },
    {
      id: "datewise-planning",
      number: "02",
      title: "13-Line Finite Capacity Production Scheduling Engine",
      tagline: "Capacity-Aware Multi-Line Scheduler with Major/Minor Setup Loss Deductions",
      category: "excel-automation",
      featured: true,
      appType: "Excel Pipeline",
      appUrl: "weekly.streamlit.app",
      description:
        "Finite capacity scheduling system for automotive component manufacturing, allocating weekly and monthly production targets across 13 dedicated manufacturing lines.",
      problem:
        "Manual day-wise production scheduling across 13 manufacturing lines failed to accurately account for setup changeovers (Major: 240 mins, Minor: 60 mins), variable daily capacities, or plant holiday calendars, resulting in frequent line overbooking.",
      solution:
        "Developed a capacity-aware Python scheduling engine with automatic setup time deductions, sequential multi-day backlog rollover, plant holiday skips, and official PRH.F.46.00 Excel report export.",
      story: {
        before: [
          "2.5 hours of manual multi-tab Excel calculations every week",
          "Line overbooking due to uncalculated 240-min / 60-min changeover losses",
          "Manual checking of plant holiday calendars and Sunday rollovers",
          "Static spreadsheets with fragile links prone to calculation errors",
        ],
        whatIBuilt: [
          "Capacity packing algorithm balancing 1,320 mins/day operating budget",
          "Dynamic setup deduction engine for 13 lines (Arjun 1-12 & AutoLine)",
          "Calendar intelligence automatically handling Sundays & plant holidays",
          "Automated formatting generator producing official PRH.F.46.00 Excel workbooks",
        ],
        after: [
          "1-Click automated generation in under 2 seconds",
          "100% capacity adherence across all 13 production lines",
          "Zero manual formula manipulation or calendar checking",
          "Instant PDF and styled Excel deliverable ready for shopfloor dispatch",
        ],
        businessImpact: [
          "Eliminated plant capacity overbooking and unplanned line overtime",
          "Saved 10+ hours per month of senior planning bandwidth",
          "Standardized production schedules across cross-functional plant teams",
        ],
      },
      input: "Excel production plan with part numbers, line assignments, and setup flags",
      output: "Datewise production schedule (Excel), official weekly formatted reports (PRH.F.46.00), PDF summaries",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "XlsxWriter",
        "OpenPyXL",
        "ReportLab",
      ],
      keyFeatures: [
        "Finite capacity scheduling across 13 dedicated manufacturing lines",
        "Dual operational planning modes: Weekly & Monthly planning",
        "Automated setup loss deduction engine (240 min Major / 60 min Minor)",
        "Operating time budget: 1,320 mins/day with line-specific throughput limits",
        "Intelligent calendar handling (automatic Sunday and plant holiday skips)",
        "Standardized Excel report generation with formatted print templates",
      ],
      businessOutcome:
        "Replaced manual multi-tab calculation with an instant 1-click planner that guarantees 100% capacity adherence across 13 lines without line overbooking.",
      metrics: {
        lines: "13 Lines Scheduled",
        dailyMinutes: "1,320 Mins/Day Budget",
        setupLogic: "240m / 60m Deductions",
        output: "Official PRH Report",
      },
      screenshots: [
        {
          id: "datewise_planning_main",
          title: "Weekly Planning & Line Capacities",
          caption: "Finite capacity configuration for 13 manufacturing lines & template download",
          description: "Operational interface defining line capacities (Arjun-1 to Arjun-12 and AutoLine) with holiday calendar selection and Excel upload.",
          cardUrl: getAssetUrl("projects/cards/datewise_planning_main.png"),
          fullUrl: getAssetUrl("projects/full/datewise_planning_main.png"),
          thumbUrl: getAssetUrl("projects/thumbs/datewise_planning_main.png"),
          aspectRatio: "16/10",
          tag: "Capacity Scheduler",
        },
      ],
    },
    {
      id: "shortage-float-tracker",
      number: "03",
      title: "Real-Time Critical Part Shortage & Shift Reset Portal",
      tagline: "Component Bottleneck Monitor Across PBS, Sealant & Total Paint Float",
      category: "streamlit-dashboard",
      featured: true,
      appType: "Streamlit Web App",
      appUrl: "plantest.streamlit.app",
      description:
        "Real-time component shortage monitoring system tracking critical parts (cockpit assemblies, wiring harnesses, engines, batteries) against paint shop pipeline stages.",
      problem:
        "Manual tracking of high-value vehicle sub-assemblies across shift transitions led to unspotted shortages and emergency assembly line stoppages.",
      solution:
        "Engineered an automated 6-tab Streamlit dashboard computing PBS float, Sealant float, and Total Float component shortages with automatic 6:30 AM IST shift resets.",
      story: {
        before: [
          "Manual cross-referencing of 126 cockpits and 59 wiring harnesses",
          "Shift handover lag leading to surprise part deficits on assembly tracks",
          "Repetitive daily compilation of paint float reports (.xlsb)",
          "No visual indicators for parts exceeding shift clearance thresholds",
        ],
        whatIBuilt: [
          "Automated 6:30 AM IST shift reset and stock baseline calculator",
          "Multi-stage float clearance engine (PBS, Sealant, Total Float)",
          "Visual alert system highlighting critical part deficits with color coding",
          "1-Click export of styled Excel shortage matrices and PNG tables",
        ],
        after: [
          "Instant clarity on part deficits before vehicle bodies enter final assembly",
          "Zero shift transition delays or lost parts data",
          "Automated extraction from raw .xlsb without opening Excel",
          "Audit-ready logs for supply chain and procurement teams",
        ],
        businessImpact: [
          "Prevented costly assembly line stoppages due to unspotted shortages",
          "Cut morning shortage review meeting times from 45 mins to 10 mins",
          "Enabled proactive vendor expediting hours ahead of assembly drops",
        ],
      },
      input: "Paint float reports (.xlsb/.xlsx), DPT production plans, stock dumps, BOM master",
      output: "Interactive shortage matrices, pre-formatted Excel downloads, high-res PNG table exports",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "OpenPyXL",
        "pyxlsb",
      ],
      keyFeatures: [
        "6 Interactive analysis tabs with live category filtering",
        "Automated 6:30 AM IST shift reset and stock clearance baseline",
        "Component-level tracking: 126 cockpits, 59 wiring harnesses",
        "Critical shortage visual alert highlights",
        "Multi-format file parsing (.xlsb, .xlsx, HTML-as-XLS)",
        "Exportable Excel workbooks and instant table downloads",
      ],
      businessOutcome:
        "Gives production planning and logistics teams instant clarity on component bottlenecks before bodies enter the final assembly tracks.",
      metrics: {
        components: "4 Critical Streams",
        cockpitsMonitored: "126 Part Numbers",
        wiringMonitored: "59 Part Numbers",
        shiftReset: "6:30 AM Automated",
      },
      screenshots: [
        {
          id: "vin_dashboard_shortage",
          title: "Cockpit & Wiring Shortage Matrix",
          caption: "Real-time shortage calculation across PBS, Sealant, and Total Float",
          description: "Live component matrix identifying immediate part deficits against daily VIN generation schedules.",
          cardUrl: getAssetUrl("projects/cards/vin_dashboard_shortage.png"),
          fullUrl: getAssetUrl("projects/full/vin_dashboard_shortage.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_dashboard_shortage.png"),
          aspectRatio: "16/10",
          tag: "Shortage Matrix",
        },
      ],
    },
    {
      id: "vin-production-plan",
      number: "04",
      title: "Multi-Day Rolling Sequence & Variant Constraint Optimizer",
      tagline: "Automated Rolling Sequence Balancer for Multi-Model Assembly Lines",
      category: "production-planning",
      featured: false,
      appType: "Optimization Engine",
      appUrl: "vinplan.streamlit.app",
      description:
        "Multi-day rolling production sequencing and constraint optimizer for TCF 1 (Punch EV / Petrol) and TCF 2 (Harrier / Safari) assembly lines with dynamic float matching.",
      problem:
        "Balancing multi-day production schedules across BIW, Paint Shop, and TCF assembly lines while strictly respecting variant constraints (EV, CNG, TGDI Petrol, Diesel) is mathematically intractable manually.",
      solution:
        "Built a 3-4 day rolling planning engine that prioritizes vehicle float by source (Paint Floor ➔ WIP BIW ➔ BIW Plan ➔ Next 3-Days BIW) and calculates powertrain quota limits.",
      input: "Yesterday's VIN plans, today's VIN lists, paint float reports, WIP data, BIW schedules (10 channels)",
      output: "Optimized multi-day production schedules (Excel), model plan summaries, shortage remark alerts",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "OpenPyXL",
      ],
      keyFeatures: [
        "3-4 Day rolling planning horizon with automatic capacity packing",
        "Multi-stage float matching (Paint Floor, WIP in BIW, Loaded Plan, 3-Day BIW)",
        "Powertrain variant constraint enforcement (Punch EV, Punch CNG, Harrier EV, Safari Diesel)",
        "Automated target shortage & production remark detection",
      ],
      businessOutcome:
        "Provides 100% deterministic multi-day line allocation across 10 vehicle models, preventing line starvation and eliminating manual sequencing errors.",
      metrics: {
        horizon: "3-4 Rolling Days",
        channels: "10 Files Ingested",
        lines: "2 Assembly Tracks",
        accuracy: "100% Constraint Match",
      },
      screenshots: [
        {
          id: "vin_production_plan_main",
          title: "Sequence Optimizer & Capacity Control",
          caption: "10-Channel file upload, shift production targets & daily capacity limits",
          description: "Multi-day planning interface managing daily vehicle targets and powertrain allocations for TCF1 and TCF2 tracks.",
          cardUrl: getAssetUrl("projects/cards/vin_production_plan_main.png"),
          fullUrl: getAssetUrl("projects/full/vin_production_plan_main.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_production_plan_main.png"),
          aspectRatio: "16/10",
          tag: "Capacity Control",
        },
      ],
    },
    {
      id: "paint-aging-analytics",
      number: "05",
      title: "Paint Shop Multi-Stage WIP Aging Analytics",
      tagline: "Multi-Stage WIP Aging Engine with Holiday Intelligence & Quality Hold Isolation",
      category: "streamlit-dashboard",
      featured: false,
      appType: "Streamlit Web App",
      appUrl: "tmlage.streamlit.app",
      description:
        "Multi-stage WIP residence and aging analysis system tracking vehicle bodies from Body-in-White (BIW) through Paint Treatment (PT) to Painted Body Storage (PBS).",
      problem:
        "Vehicle bodies lingering in paint buffers due to quality holds or delays cause aging penalties, but tracking residence time manually across shifts is inaccurate.",
      solution:
        "Built an automated analytics application that buckets vehicles into standardized aging intervals (1d, 2-3d, 4-7d, 8-10d, 11-15d, >15d), excludes plant holidays, and isolates quality hold causes.",
      input: "PPC float reports from SAP/MES (.xlsb/.xlsx/.csv)",
      output: "Executive aging KPI cards, 3 formatted Excel reports (BIW/PT, PBS, Hold Cabs)",
      technologies: ["Python", "Streamlit", "Pandas", "OpenPyXL"],
      keyFeatures: [
        "Multi-stage WIP pipeline visibility (BIW ➔ PT ➔ PBS)",
        "Holiday exclusion engine (working days vs calendar days)",
        "Color-coded aging severity distribution tables",
        "Hold cab root-cause isolation and supervisor attribution",
      ],
      businessOutcome:
        "Enables paint shop managers to pinpoint aging bottlenecks instantly and prioritize long-standing vehicle cabs for immediate line processing.",
      metrics: {
        stages: "3 WIP Stages",
        agingBuckets: "6 Aging Intervals",
        reports: "3 Excel Workbooks",
        visibility: "100% Buffer Audit",
      },
      screenshots: [
        {
          id: "paint_aging_main",
          title: "Paint Aging Summary & Breakdown",
          caption: "WIP vehicle aging across BIW→PT (130), PT→PBS (192), PBS (15), and Hold Cabs (19)",
          description: "Interactive dashboard categorizing vehicle models (Punch, Nova, Harrier, Safari) into standardized aging buckets with holiday exclusion.",
          cardUrl: getAssetUrl("projects/cards/paint_aging_main.png"),
          fullUrl: getAssetUrl("projects/full/paint_aging_main.png"),
          thumbUrl: getAssetUrl("projects/thumbs/paint_aging_main.png"),
          aspectRatio: "16/10",
          tag: "WIP Aging Analytics",
        },
      ],
    },
    {
      id: "shiftwise-planner",
      number: "06",
      title: "ShiftWise Waterfall Production Planner",
      tagline: "1-Day Waterfall Production Planner for High-Speed Lines",
      category: "excel-automation",
      featured: false,
      appType: "Excel Pipeline",
      appUrl: "shiftwise-planner.streamlit.app",
      description:
        "Daily operational production planning tool that splits production targets across 3 working shifts using cycle time rates (parts per minute) and setup loss deductions.",
      problem:
        "Sequencing daily part orders across multiple high-speed manufacturing lines while balancing shift capacity and setup overhead is prone to manual spreadsheet errors.",
      solution:
        "Engineered a waterfall allocation engine that sequentially fills shift capacities based on PPM line rates and automatically deducts setup time overheads.",
      input: "Daily production plan Excel files with part numbers, quantities, and setup flags",
      output: "Shift-split production schedule, utilization metrics, Plan vs Actuals tracking dashboard",
      technologies: ["Python", "Streamlit", "Pandas", "XlsxWriter"],
      keyFeatures: [
        "Waterfall allocation logic across 3 operating shifts",
        "Line cycle time calculations based on Parts Per Minute (PPM)",
        "Setup overhead deduction for major and minor changeovers",
        "Built-in Actuals Tracking Dashboard for Performance vs Plan",
      ],
      businessOutcome:
        "Eliminated manual mathematical errors and delivered balanced shift allocations in seconds.",
      metrics: {
        shifts: "3 Operating Shifts",
        lines: "13 High-Speed Lines",
        logic: "Waterfall PPM",
        tracking: "Plan vs Actuals",
      },
      screenshots: [
        {
          id: "shiftwise_planner_main",
          title: "Waterfall Production Planner",
          caption: "High-speed line rates (PPM), template download & performance tracking",
          description: "Production planning interface configuring line cycle times across 13 lines with actuals performance tracking dashboard.",
          cardUrl: getAssetUrl("projects/cards/shiftwise_planner_main.png"),
          fullUrl: getAssetUrl("projects/full/shiftwise_planner_main.png"),
          thumbUrl: getAssetUrl("projects/thumbs/shiftwise_planner_main.png"),
          aspectRatio: "16/10",
          tag: "Shift Allocation",
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // PROJECT CATEGORIES (Filter Tabs)
  // ----------------------------------------------------------
  projectCategories: [
    { id: "all", label: "All Case Studies" },
    { id: "streamlit-dashboard", label: "Streamlit Dashboards" },
    { id: "excel-automation", label: "Excel Automations" },
    { id: "production-planning", label: "PPC & SCM Schedulers" },
  ],

  // ----------------------------------------------------------
  // CLIENT TESTIMONIALS & ENDORSEMENTS
  // ----------------------------------------------------------
  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "Nikhil converted a repetitive, 3.5-hour daily Excel reconciliation process into a sub-10-second automated dashboard. Our shift planners now have instant clarity on PBS buffer stock and part shortages before vehicle bodies drop into final assembly.",
      name: "PPC Operations Lead",
      designation: "Production Planning & Control",
      company: "Tata Motors Passenger Vehicle Ltd",
      outcomeBadge: "3.5 hrs ➔ <10 sec Daily",
      highlight: "Shopfloor Reporting Speed",
    },
    {
      id: "testimonial-2",
      quote:
        "What sets Nikhil apart is that he doesn't need handholding on the manufacturing domain. He immediately understood our major/minor setup losses, holiday calendars, and finite line capacities, delivering a robust planning model that eliminated overbooking.",
      name: "Senior Operations Manager",
      designation: "Manufacturing & SCM",
      company: "Rheinmetall Automotive India",
      outcomeBadge: "100% Capacity Adherence",
      highlight: "Finite Line Balancing",
    },
    {
      id: "testimonial-3",
      quote:
        "We used to struggle with broken VLOOKUPs and silent calculation errors across multi-file ERP dumps. Nikhil built a clean Python pipeline that delivers audit-ready, formatted Excel deliverables with zero manual copy-pasting.",
      name: "Supply Chain Head",
      designation: "Materials & Order Fulfillment",
      company: "Automotive Tier-1 Supplier",
      outcomeBadge: "Zero Formula Breakages",
      highlight: "Reliable Data Pipelines",
    },
  ],

  // ----------------------------------------------------------
  // WHY NIKHIL? (Core Differentiators)
  // ----------------------------------------------------------
  whyNikhil: [
    {
      id: "why-1",
      title: "Operations Professional Who Codes",
      description:
        "Most developers only look at column headers. With 12+ years on the automotive shopfloor, I know why line starvation happens, what setup losses mean, and why shift handovers fail.",
      icon: "Factory",
      accent: "#3B82F6",
    },
    {
      id: "why-2",
      title: "12+ Years Manufacturing & SCM Depth",
      description:
        "Real enterprise background managing Master Production Schedules (MPS), SAP PP/MM runs, aggregate line sequencing, and supplier stock coordination at Tata Motors & Rheinmetall.",
      icon: "Briefcase",
      accent: "#06B6D4",
    },
    {
      id: "why-3",
      title: "100% Deterministic & Audit-Ready",
      description:
        "No fragile Excel macros or buggy formulas. Python pipelines run in-memory with strict schema and BOM validation rules, guaranteeing zero mathematical discrepancy.",
      icon: "ShieldCheck",
      accent: "#10B981",
    },
    {
      id: "why-4",
      title: "Zero Disruption & Rapid Adoption",
      description:
        "Your team doesn't need to change their existing ERP or habits. You keep providing your standard raw files, and my automation handles the transformation instantly.",
      icon: "Zap",
      accent: "#F59E0B",
    },
  ],

  // ----------------------------------------------------------
  // PRICING & TYPICAL PROJECT SCOPES
  // ----------------------------------------------------------
  pricingTiers: [
    {
      id: "quick-pipeline",
      title: "Excel Workflow Automation",
      badge: "Quick Win",
      turnaround: "3 - 5 Days",
      description:
        "Ideal for automating a repetitive daily or weekly Excel process involving 2–5 workbooks with formula lag or manual copy-paste.",
      idealFor: "Daily reporting, stock reconciliations, multi-tab merging",
      deliverables: [
        "1-Click Python script or executable utility",
        "Automated data cleaning & VLOOKUP replacement",
        "Pre-formatted, styled Excel export template",
        "Complete video walkthrough & user guide",
      ],
      popular: false,
    },
    {
      id: "full-pipeline",
      title: "Multi-Source Automation Engine",
      badge: "Most Popular",
      turnaround: "1 - 2 Weeks",
      description:
        "Comprehensive automation system ingesting 5–15 disparate data sources (ERP, MES, Excel, CSV) with complex business rules.",
      idealFor: "PPC planning, FIFO clear-to-build, multi-department workflows",
      deliverables: [
        "End-to-end Python processing pipeline",
        "Automated BOM & schema validation rules",
        "Automated Telegram or Email broadcast engine",
        "Styled multi-tab executive reports & PDF packages",
        "30 Days of post-launch priority support",
      ],
      popular: true,
    },
    {
      id: "operations-center",
      title: "Streamlit Operations Dashboard",
      badge: "Enterprise Grade",
      turnaround: "2 - 3 Weeks",
      description:
        "Custom interactive web application replacing static spreadsheets with real-time operational visibility and live decision tools.",
      idealFor: "Plant leadership, real-time shortage tracking, capacity simulators",
      deliverables: [
        "Full interactive Streamlit browser web application",
        "Live filters, search engines, and variance charts",
        "Role-based access & scheduled data refreshes",
        "1-Click Excel and PNG report downloads",
        "Complete deployment on your private server or cloud",
      ],
      popular: false,
    },
  ],

  // ----------------------------------------------------------
  // VERIFIED CAREER HISTORY (12+ Years Depth)
  // ----------------------------------------------------------
  experience: [
    {
      company: "Tata Motors Passenger Vehicle Ltd",
      role: "SCM / PPC / Order Fulfillment Professional",
      department: "Production Planning & Control / Supply Chain",
      period: "Current Role",
      duration: "Ongoing",
      location: "Pune, India",
      current: true,
      achievements: [
        "Managing end-to-end supply chain planning, aggregate vehicle sequencing, and order fulfillment across TCF assembly tracks",
        "Developing custom Python automation engines and Streamlit operational dashboards for real-time shopfloor visibility",
        "Spearheading 10-channel data synchronization utilities that accelerate shift reporting from hours to seconds",
        "Collaborating with BIW, Paint Shop, and TCF teams to eliminate component shortages and prevent line starvation",
      ],
      highlights: [
        "Supply Chain Management",
        "Line Sequencing",
        "Python Automation",
        "Streamlit Dashboards",
        "BOM Validation",
      ],
    },
    {
      company: "Rheinmetall Automotive India PVT LTD",
      subtitle: "BU Bearings (formerly KSPG Automotive)",
      role: "Assistant Manager – Production Planning & Control",
      department: "PPC",
      period: "May 2018 – Apr 2026",
      duration: "~8 years",
      location: "Pune, India",
      current: false,
      achievements: [
        "Developed and managed detailed Master Production Schedules (MPS) aligning sales forecasts with plant capacity",
        "Analyzed raw material requirements and performed regular MRP runs in SAP PP/MM with supplier coordination",
        "Oversaw material movement tracking in SAP (transfers, issues, receipts) ensuring 99%+ inventory accuracy",
        "Formulated inventory strategies that significantly reduced excess stock and increased turnover ratio",
        "Spearheaded PPC automation by developing AI-driven scheduling models for daily, weekly, and monthly planning",
        "Built dynamic Plan vs. Actual dashboard to monitor real-time production variances and line bottlenecks",
        "Awarded for Excellence in Digital Transformation Using AI (Feb 2026)",
      ],
      highlights: [
        "Production Planning",
        "MPS & MRP",
        "SAP PP/MM",
        "Raw Material Planning",
        "AI-Driven Planning",
        "Plan vs Actual Analytics",
      ],
    },
    {
      company: "Tata Motors",
      role: "Senior Associate – PPC Department",
      department: "Production Planning & Control",
      period: "Jun 2014 – Apr 2018",
      duration: "~4 years",
      location: "Pune, India",
      current: false,
      achievements: [
        "Established shopfloor production plans based on sales data with 100% schedule adherence",
        "Managed daily aggregate sequencing for Xenon Trim, Chassis, and Final (TCF) lines",
        "Monitored TCF line constraints and provided real-time feedback for seamless trim-to-rollout flow",
        "Partnered with Production, Quality, and Logistics to eliminate line bottlenecks and ensure on-time dispatch",
        "Operated SAP IPMS and aggregate scanning systems across shifts",
        "Followed up with suppliers and conducted on-site vendor visits to resolve critical part shortages",
      ],
      highlights: [
        "Line Sequencing",
        "SAP IPMS",
        "Cross-Functional Coordination",
        "Vendor Management",
        "WCQ / SLT Standards",
      ],
    },
  ],

  // ----------------------------------------------------------
  // EDUCATION & CERTIFICATIONS
  // ----------------------------------------------------------
  education: [
    {
      degree: "BBA – Specialization in IT",
      institution: "",
      period: "",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "RMCET, Ratnagiri",
      period: "Jun 2010 – May 2013",
    },
  ],
  certifications: [
    {
      name: "SAP PP / MM Certified",
      institution: "Pune Institute of SAP",
      period: "May 2019 – Oct 2019",
    },
  ],
  awards: [
    {
      title: "Excellence in Digital Transformation Using AI",
      date: "February 2026",
      description:
        "Awarded for spearheading the transition from manual PPC/SCM spreadsheet reporting to fully automated, Python-driven workflows and real-time Streamlit analytics.",
    },
  ],

  // ----------------------------------------------------------
  // SKILLS MATRIX
  // ----------------------------------------------------------
  skills: {
    "Operations & Domain Depth": [
      "Production Planning & Control (PPC)",
      "Supply Chain Management (SCM)",
      "Master Production Schedule (MPS)",
      "Material Requirement Planning (MRP)",
      "Inventory Management & Turnover",
      "Order Fulfillment & Tracking",
      "Finite Capacity Planning & Balancing",
      "FIFO Clear-to-Build Allocation",
    ],
    "Enterprise Systems (ERP)": [
      "SAP PP (Production Planning)",
      "SAP MM (Materials Management)",
      "SAP IPMS",
      "MES / Shopfloor Float Systems",
    ],
    "Python Automation Engine": [
      "Python 3.x",
      "Pandas (High-Speed In-Memory)",
      "NumPy",
      "OpenPyXL",
      "XlsxWriter",
      "pyxlsb (Fast Binary Parsing)",
      "ReportLab (Automated PDF)",
      "Multi-Workbook Data Pipelines",
    ],
    "Operational Dashboards": [
      "Streamlit",
      "Matplotlib",
      "Interactive Filters & Date Pickers",
      "Plan vs Actual Analytics",
      "Multi-Stage WIP Aging Analytics",
      "Telegram Bot Automated Dispatch",
    ],
  },

  // ----------------------------------------------------------
  // BUSINESS IMPACT (Before vs After)
  // ----------------------------------------------------------
  impact: {
    qualitative: [
      {
        title: "Reduced Manual Friction",
        description: "Automated repetitive Excel-based planning and reporting workflows",
        icon: "Clock",
      },
      {
        title: "Zero Human Copy-Paste",
        description: "Replaced daily copy-paste operations with 1-click Python automation",
        icon: "RefreshCw",
      },
      {
        title: "Instant Shift Reporting",
        description: "Reports that previously took hours across shifts now generate in under 5 seconds",
        icon: "Zap",
      },
      {
        title: "Deterministic Validation",
        description: "Eliminated manual data entry errors with automated BOM & schema validation",
        icon: "CheckCircle",
      },
      {
        title: "Real-Time Decision Making",
        description: "Live Streamlit dashboards replacing static, outdated spreadsheets",
        icon: "TrendingUp",
      },
      {
        title: "Scalable Data Pipelines",
        description: "Solutions handle growing data volumes without additional manual labor",
        icon: "ArrowUpRight",
      },
    ],
  },

  // ----------------------------------------------------------
  // HOW I WORK (5-Step Collaborative Framework)
  // ----------------------------------------------------------
  process: [
    {
      step: "01",
      title: "Share Your Current Workflow",
      timeframe: "Day 1",
      description:
        "You share your existing Excel spreadsheets, ERP dumps, and manual steps (or hop on a quick call). Everything is handled under strict confidentiality.",
    },
    {
      step: "02",
      title: "Process Analysis & Constraint Mapping",
      timeframe: "Days 2 - 3",
      description:
        "I analyze the business logic behind the numbers — identifying formula breakages, setup loss rules, capacity ceilings, and exception conditions.",
    },
    {
      step: "03",
      title: "Rapid Working Prototype",
      timeframe: "Days 4 - 6",
      description:
        "I build a fast, functional Python script or dashboard mockup to validate that outputs 100% match your operational expectations.",
    },
    {
      step: "04",
      title: "Build Automation Engine & Styling",
      timeframe: "Week 2",
      description:
        "I engineer the full automated pipeline with deterministic validation rules, error handling, polished Excel styling, and automated alerts.",
    },
    {
      step: "05",
      title: "Deployment & Team Handover",
      timeframe: "Final Handover",
      description:
        "I deliver a clean 1-click executable or live web app with clear user documentation, walkthrough videos, and ongoing reliability support.",
    },
  ],

  // ----------------------------------------------------------
  // CONTACT FORM CONFIGURATION
  // ----------------------------------------------------------
  contactForm: {
    heading: "Have a Messy Excel Process? Send Me The Workflow.",
    subheading:
      "Send over your current spreadsheet routine or reporting challenge. I'll review it and tell you exactly how it can be automated.",
    primaryCTA: "Send Me Your Workflow",
    secondaryCTA: "Email Me Directly",
    whatsappCTA: "Chat on WhatsApp (+91-8668634502)",
  },
};

// Lucide Icon mapping
export const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  FileSpreadsheet,
  BarChart3,
  LayoutDashboard,
  Database,
  Cog,
  Factory,
  Mail,
  Phone,
  MapPin,
  Code2,
  Globe,
  Briefcase,
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  Send,
  SlidersHorizontal,
  TableProperties,
  MessageSquare,
  Clock,
  Sparkles,
  Quote,
  ShieldAlert,
  ArrowRight,
  Workflow,
  Check,
};
