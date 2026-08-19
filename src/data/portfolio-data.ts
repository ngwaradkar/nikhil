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
  TableProperties
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
  screenshots: ProjectScreenshot[];
  demoUrl?: string;
  codeUrl?: string;
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
    location: string;
    availability: string;
    profileImage: string;
  };
  socialLinks: {
    code: string;
    portfolio: string;
    github: string;
    linkedin: string;
  };
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
  process: { step: string; title: string; description: string }[];
  contactForm: {
    heading: string;
    subheading: string;
    primaryCTA: string;
    secondaryCTA: string;
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
    roleTitle: "Business Automation Consultant • Manufacturing & SCM Specialist",
    headline: "Automate Your Excel Work. Turn Your Data Into Action.",
    subHeadline:
      "Python Automation • Custom Excel Pipelines • Streamlit Dashboards • Business Reporting",
    bio: "Manufacturing and PPC/SCM professional with 12+ years of shopfloor & production planning expertise. I design and build production-grade Python automation systems, robust multi-file Excel pipelines, and interactive Streamlit web dashboards that eliminate manual human error.",
    positioningStatement:
      "I don't just write scripts — I understand the business process behind the spreadsheet.",
    trustBadge: "12+ Years Industry Experience • Production Planning & SCM",
    email: "ngwaradkar@gmail.com",
    phone: "+91-8668634502",
    location: "Pune, Maharashtra, India",
    availability: "Available for consulting & freelance automation projects",
    profileImage: "",
  },

  // ----------------------------------------------------------
  // SOCIAL & REPO LINKS
  // ----------------------------------------------------------
  socialLinks: {
    code: "https://ngwaradkar.github.io/nikhil-waradkar/",
    portfolio: "https://ngwaradkar.github.io/nikhil/",
    github: "https://github.com/ngwaradkar",
    linkedin: "",
  },

  // ----------------------------------------------------------
  // CURRENT & PAST WORKSPACE ROLES
  // ----------------------------------------------------------
  currentRole: {
    company: "Tata Motors Passenger Vehicle Ltd",
    department: "SCM / PPC / Order Fulfillment",
    location: "Pune, India",
    period: "Current",
    duration: "Ongoing",
    description:
      "Managing end-to-end supply chain planning, production aggregate sequencing, and order fulfillment workflows for passenger vehicle assembly lines.",
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
    { label: "Overview", href: "#hero" },
    { label: "Who I Help", href: "#who-i-help" },
    { label: "What I Automate", href: "#services" },
    { label: "Before vs After", href: "#transformation" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Excel Pipeline", href: "#excel-showcase" },
    { label: "Streamlit Apps", href: "#streamlit-showcase" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  // ----------------------------------------------------------
  // TRUST STRIP ITEMS
  // ----------------------------------------------------------
  trustItems: [
    "12+ Years Manufacturing Experience",
    "Production Planning & Control (PPC)",
    "Supply Chain Management (SCM)",
    "SAP PP / MM Certified",
    "Python Automation Engine",
    "Excel & CSV Workflow Automation",
    "Interactive Streamlit Dashboards",
    "Award: Digital Transformation Using AI",
  ],

  // ----------------------------------------------------------
  // WHO I HELP (Target Audiences)
  // ----------------------------------------------------------
  targetAudience: [
    {
      id: "plant-heads",
      title: "Manufacturing & Plant Heads",
      pain: "Production bottlenecks, line starvation, and delayed shift reports holding back executive decisions.",
      solution: "Real-time production visibility, automated shift reports, and deterministic finite capacity scheduling.",
      icon: "Factory",
      accent: "#3B82F6",
    },
    {
      id: "ppc-scm-managers",
      title: "PPC & Supply Chain Managers",
      pain: "Spending 3+ hours every morning manually reconciling stock files, WIP buffers, and component shortages.",
      solution: "1-click multi-file ingestion, automated FIFO clear-to-build calculations, and live shortage alerts.",
      icon: "Layers",
      accent: "#06B6D4",
    },
    {
      id: "operations-teams",
      title: "Operations & Logistics Teams",
      pain: "Fragile Excel formulas breaking (#N/A, #REF!), manual copy-paste errors, and static outdated spreadsheets.",
      solution: "Bulletproof Python data pipelines with built-in validation rules and clean, styled Excel deliverables.",
      icon: "FileSpreadsheet",
      accent: "#10B981",
    },
    {
      id: "business-leaders",
      title: "Business Leaders & Executives",
      pain: "Lack of interactive analytics and waiting days for custom data requests across disconnected systems.",
      solution: "Interactive Streamlit web applications with live filters, date pickers, and exportable executive views.",
      icon: "LayoutDashboard",
      accent: "#F59E0B",
    },
  ],

  // ----------------------------------------------------------
  // SERVICES (01 to 06)
  // ----------------------------------------------------------
  services: [
    {
      id: "python-excel-automation",
      number: "01",
      title: "Python Excel Automation",
      icon: "FileSpreadsheet",
      description:
        "Convert repetitive multi-file Excel processes into clean, 1-click automated Python scripts.",
      outcome: "Eliminates 90%+ of manual copy-paste time while guaranteeing 100% mathematical consistency.",
      examples: [
        "Multi-file workbook consolidation",
        "Automated VLOOKUP & cross-sheet joins",
        "Data cleaning & outlier removal",
        "Pre-formatted management exports",
      ],
      typicalInput: "Multiple raw Excel (.xlsx/.xlsb) & CSV files",
      automatedOutput: "Validated, consolidated Excel workbook with automated styling",
    },
    {
      id: "automated-reporting",
      number: "02",
      title: "Automated Reporting",
      icon: "BarChart3",
      description:
        "Turn tedious daily, weekly, and monthly reporting routines into instant automated report generators.",
      outcome: "Reports that previously took hours across shifts now generate in under 5 seconds.",
      examples: [
        "Daily production & shift summaries",
        "Weekly executive status decks",
        "Telegram & email report dispatch",
        "Automated PDF & Excel distribution",
      ],
      typicalInput: "Raw transactional dumps from ERP / MES",
      automatedOutput: "Decision-ready executive summary & visual charts",
    },
    {
      id: "streamlit-dashboards",
      number: "03",
      title: "Streamlit Dashboards",
      icon: "LayoutDashboard",
      description:
        "Transform static spreadsheets into interactive, browser-based web applications with live filters and analytics.",
      outcome: "Gives shopfloor planners and leaders real-time visibility into production status.",
      examples: [
        "Live shortage & float tracking",
        "Interactive line capacity planners",
        "Real-time Plan vs Actual visualizer",
        "Multi-stage pipeline aging analytics",
      ],
      typicalInput: "Business data files or scheduled database exports",
      automatedOutput: "Responsive web application with real-time analytics",
    },
    {
      id: "data-processing-analysis",
      number: "04",
      title: "Data Processing & Analysis",
      icon: "Database",
      description:
        "Clean, validate, structure, and reconcile large, messy datasets from disconnected systems.",
      outcome: "Reliable, audit-ready data pipelines that handle growing volume without extra human effort.",
      examples: [
        "BOM completeness auditing",
        "Multi-system data reconciliation",
        "Data anomaly & error detection",
        "Automated schema transformation",
      ],
      typicalInput: "Disparate ERP, MES, and legacy system exports",
      automatedOutput: "Standardized, validated analytical dataset",
    },
    {
      id: "business-workflow-automation",
      number: "05",
      title: "Business Workflow Automation",
      icon: "Cog",
      description:
        "Map, analyze, and automate multi-step operational workflows to eliminate organizational bottlenecks.",
      outcome: "Streamlined business operations with predictable execution and zero manual bottlenecks.",
      examples: [
        "End-to-end workflow automation",
        "Multi-department data handoffs",
        "Scheduled pipeline execution",
        "Exception alerting & notifications",
      ],
      typicalInput: "Existing manual SOPs and repetitive steps",
      automatedOutput: "End-to-end automated pipeline with logging",
    },
    {
      id: "manufacturing-scm-automation",
      number: "06",
      title: "Manufacturing / SCM / PPC Automation",
      icon: "Factory",
      description:
        "Specialized scheduling, capacity planning, and supply chain tracking tailored specifically for automotive & manufacturing.",
      outcome: "Optimized assembly line balancing, reduced inventory holding, and minimized line starvation.",
      examples: [
        "Finite capacity multi-line scheduling",
        "Setup & changeover loss calculation",
        "FIFO clear-to-build allocation",
        "Paint shop buffer & aging tracking",
      ],
      typicalInput: "SAP PP/MM dumps, plant calendars, DPT plans",
      automatedOutput: "Optimized daily production schedules & shortage matrices",
    },
  ],

  // ----------------------------------------------------------
  // PROJECTS WITH VERIFIED REAL SCREENSHOTS
  // ----------------------------------------------------------
  projects: [
    {
      id: "vin-generation-dashboard",
      number: "01",
      title: "VIN Generation PPC Dashboard",
      tagline: "Live Painted Body Storage (PBS) Buffer Allocation & Multi-Stage Material Availability Summary",
      category: "streamlit-dashboard",
      featured: true,
      appType: "Streamlit Web App",
      appUrl: "plantest.streamlit.app",
      description:
        "Mission-critical production planning and VIN allocation system for automotive passenger vehicle assembly lines, coordinating TCF1 and TCF2 production tracks with multi-stage material verification.",
      problem:
        "Scheduling vehicle drops onto assembly lines without real-time component stock verification causes line starvation, buffer track congestion, and expensive shopfloor rework.",
      solution:
        "Engineered an interactive Streamlit operations center with 10-channel data upload, FIFO clear-to-build allocation engine, live shortage alerts, hour-by-hour drop tracking, and automated Telegram broadcasts.",
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
        dataChannels: "10 Channels",
        plantFloat: "980+ Cabs",
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
      id: "vin-production-plan",
      number: "02",
      title: "TML VIN Generation & Production Plan",
      tagline: "Automated Multi-Day Rolling Sequence Optimizer for Assembly Lines",
      category: "production-planning",
      featured: true,
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
        "Color-coded source type vehicle counting",
        "Interactive 3D vehicle fleet showcase",
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
        {
          id: "vin_production_plan_fleet",
          title: "Fleet Breakdown & Shortage Remarks",
          caption: "Model plan summaries (NOVA EV, CNG, Eturna) and shortage warnings",
          description: "Visual breakdown of scheduled vehicle codes with alert callouts for target shortages across rolling production days.",
          cardUrl: getAssetUrl("projects/cards/vin_production_plan_fleet.png"),
          fullUrl: getAssetUrl("projects/full/vin_production_plan_fleet.png"),
          thumbUrl: getAssetUrl("projects/thumbs/vin_production_plan_fleet.png"),
          aspectRatio: "16/10",
          tag: "Fleet Analytics",
        },
      ],
    },
    {
      id: "datewise-planning",
      number: "03",
      title: "Datewise Production Planning System",
      tagline: "Finite Capacity Multi-Line Scheduling Engine with Setup Loss Deductions",
      category: "excel-automation",
      featured: true,
      appType: "Excel Pipeline",
      appUrl: "weekly.streamlit.app",
      description:
        "Finite capacity scheduling system for automotive component manufacturing, allocating weekly and monthly production targets across 13 dedicated manufacturing lines.",
      problem:
        "Manual day-wise production scheduling across 13 manufacturing lines doesn't accurately factor in major/minor setup changeover losses, variable daily capacities, or plant holiday calendars.",
      solution:
        "Developed a capacity-aware scheduling engine with setup time deductions (Major: 240 mins, Minor: 60 mins), sequential multi-day backlog rollover, Sunday/holiday skipping, and Excel export.",
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
        dailyMinutes: "1,320 Mins/Day",
        setupLogic: "240m / 60m Deducted",
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
      number: "04",
      title: "PPC Shortage & Float Tracker",
      tagline: "Real-Time Critical Component Shortage Monitoring & 6:30 AM Shift Reset",
      category: "streamlit-dashboard",
      featured: true,
      appType: "Streamlit Web App",
      appUrl: "plantest.streamlit.app",
      description:
        "Real-time component shortage monitoring system tracking critical parts (cockpit assemblies, wiring harnesses, engines, batteries) against paint shop pipeline stages.",
      problem:
        "Manual tracking of high-value vehicle sub-assemblies across shift transitions leads to unspotted shortages and emergency line stoppages.",
      solution:
        "Engineered an automated 6-tab Streamlit dashboard computing PBS float, Sealant float, and Total Float component shortages with automatic 6:30 AM IST shift resets.",
      input: "Paint float reports (.xlsb/.xlsx), DPT production plans, stock dumps, BOM master",
      output: "Interactive shortage matrices, pre-formatted Excel downloads, high-res PNG table exports",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "OpenPyXL",
        "pyxlsb",
        "BeautifulSoup4",
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
      id: "paint-aging-analytics",
      number: "05",
      title: "Paint Shop Aging Analytics",
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
        "3 1-click downloadable Excel audit reports",
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
      title: "ShiftWise Production Planner",
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
        "Excel input template download and completed plan upload",
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
    {
      id: "float-reports-portal",
      number: "07",
      title: "PPC Float Reports Portal",
      tagline: "TCF Final Vehicle Summary & Multi-Day Float Taper Analysis",
      category: "streamlit-dashboard",
      featured: false,
      appType: "Streamlit Web App",
      appUrl: "tmlppc.streamlit.app",
      description:
        "Automated vehicle float tracking and multi-day trend analysis portal reconciling daily float data across assembly lines.",
      problem:
        "Daily consolidation and trend discovery of vehicle float reports across TCF1 and TCF2 assembly lines required repetitive manual workbook merging.",
      solution:
        "Built a smart file-mapping portal that ingests 4 daily float reports plus historical 2-day records to compute float taper trends and generate consolidated summaries.",
      input: "Daily float reports for TCF1 and TCF2 lines (.xls/.xlsx)",
      output: "Interactive taper dashboards, KPI status cards, consolidated multi-sheet Excel exports",
      technologies: ["Python", "Streamlit", "Pandas", "OpenPyXL"],
      keyFeatures: [
        "Smart multi-file mapping (Today's 4 float reports + 2 historical days)",
        "TCF1 and TCF2 Created & Inspection Float status validation",
        "Dynamic multi-day float taper discovery",
        "Automated exclusion of legacy vehicle records",
      ],
      businessOutcome:
        "Accelerates multi-day float reconciliation from 45 minutes to under 500ms.",
      metrics: {
        files: "Up to 6 Reports",
        lines: "TCF1 & TCF2 Lines",
        trend: "3-Day Float Taper",
        speed: "< 500ms",
      },
      screenshots: [
        {
          id: "float_reports_portal_main",
          title: "PPC Float Reports Portal",
          caption: "4 Float reports upload, historical taper rows & status validation",
          description: "Operational portal managing daily and historical float reports for assembly line trend analysis.",
          cardUrl: getAssetUrl("projects/cards/float_reports_portal_main.png"),
          fullUrl: getAssetUrl("projects/full/float_reports_portal_main.png"),
          thumbUrl: getAssetUrl("projects/thumbs/float_reports_portal_main.png"),
          aspectRatio: "16/10",
          tag: "Float Reconciler",
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // PROJECT CATEGORIES (Filter Tabs)
  // ----------------------------------------------------------
  projectCategories: [
    { id: "all", label: "All Projects" },
    { id: "streamlit-dashboard", label: "Streamlit Dashboards" },
    { id: "excel-automation", label: "Excel Pipelines" },
    { id: "production-planning", label: "PPC & SCM Engines" },
  ],

  // ----------------------------------------------------------
  // EXPERIENCE (Verified Career History)
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
    "Business Domain": [
      "Production Planning & Control (PPC)",
      "Supply Chain Management (SCM)",
      "Master Production Schedule (MPS)",
      "Material Requirement Planning (MRP)",
      "Inventory Management",
      "Order Fulfillment",
      "Capacity Planning & Balancing",
      "FIFO Clear-to-Build Allocation",
    ],
    "Enterprise Systems (ERP)": [
      "SAP PP (Production Planning)",
      "SAP MM (Materials Management)",
      "SAP IPMS",
      "MES / Shopfloor Float Systems",
    ],
    "Python Automation Engine": [
      "Python",
      "Pandas (In-Memory Processing)",
      "NumPy",
      "OpenPyXL",
      "XlsxWriter",
      "pyxlsb",
      "ReportLab (PDF Generation)",
      "Multi-File Data Pipelines",
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
  // HOW I WORK (4-Step Process)
  // ----------------------------------------------------------
  process: [
    {
      step: "01",
      title: "Understand the Business Flow",
      description:
        "I review your actual spreadsheets, ERP dumps, and manual handoffs to understand the business logic behind the numbers.",
    },
    {
      step: "02",
      title: "Analyze & Map Constraints",
      description:
        "Identify repetitive steps, formula breakages, setup loss rules, capacity ceilings, and exception conditions.",
    },
    {
      step: "03",
      title: "Build the Python Engine",
      description:
        "Develop high-performance Python scripts, validation rules, and Streamlit dashboards tailored to your exact operational requirements.",
    },
    {
      step: "04",
      title: "Deliver & Document",
      description:
        "Provide a clean 1-click executable or live web application with clear user guides, formatted Excel outputs, and ongoing reliability.",
    },
  ],

  // ----------------------------------------------------------
  // CONTACT FORM
  // ----------------------------------------------------------
  contactForm: {
    heading: "Have a Manual Process That Should Be Automated?",
    subheading:
      "Send me your current Excel workflow or reporting challenge. I'll help identify the exact automation architecture needed.",
    primaryCTA: "Start a Project",
    secondaryCTA: "Email Me Directly",
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
};
