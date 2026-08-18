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
  Briefcase
} from "lucide-react";

// ============================================================
// SINGLE EDITABLE CONFIGURATION FILE
// Edit this file to update ALL portfolio content.
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // PERSONAL INFORMATION
  // ----------------------------------------------------------
  personal: {
    name: "Nikhil Waradkar",
    headline: "Automate Your Excel Work. Turn Your Data Into Action.",
    subHeadline:
      "Python Automation • Excel Automation • Streamlit Dashboards • Business Reporting",
    bio: "Manufacturing and PPC/SCM professional with 12+ years of industry experience, combining deep shopfloor & production planning domain expertise with Python automation, custom Excel pipelines, interactive Streamlit dashboards, and AI-driven reporting systems.",
    positioningStatement:
      "I don't just write scripts — I understand the business process behind the spreadsheet.",
    trustBadge: "12+ Years Industry Experience • Production Planning & SCM",
    email: "ngwaradkar@gmail.com",
    phone: "+91-8668634502",
    location: "Pune, Maharashtra, India",
    availability: "Available for freelance & consulting projects",
    profileImage: "",
  },

  // ----------------------------------------------------------
  // SOCIAL LINKS (Real verified URLs from workspace)
  // ----------------------------------------------------------
  socialLinks: {
    Code2: "https://ngwaradkar.github.io/nikhil-waradkar/",
    portfolio: "",
    linkedin: "",
  },

  // ----------------------------------------------------------
  // CURRENT ROLE (Tata Motors Passenger Vehicle Ltd)
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
    { label: "Services", href: "#services" },
    { label: "Transformation", href: "#transformation" },
    { label: "Projects", href: "#projects" },
    { label: "Excel Pipeline", href: "#excel-showcase" },
    { label: "Dashboards", href: "#streamlit-showcase" },
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
  // SERVICES (01 to 06 matching user brief)
  // ----------------------------------------------------------
  services: [
    {
      id: "python-excel-automation",
      number: "01",
      title: "Python Excel Automation",
      icon: "FileSpreadsheet",
      description:
        "Convert repetitive multi-file Excel processes into clean, one-click automated Python scripts.",
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
        "Monthly management KPI decks",
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
  // PROJECTS (Actual real projects from workspace)
  // ----------------------------------------------------------
  projects: [
    {
      id: "vin-generation-dashboard",
      title: "VIN Generation PPC Dashboard",
      category: "streamlit-dashboard",
      featured: true,
      description:
        "Enterprise-grade production planning dashboard for automotive assembly lines, managing vehicle scheduling across paint shop and final assembly stages.",
      problem:
        "Scheduling vehicle drops onto assembly lines without real-time component stock verification causes line blockages, starved buffer tracks, and costly rework.",
      solution:
        "Built a live Streamlit dashboard with dynamic shift inventory tracking, FIFO clear-to-build allocation engine, and multi-stage pipeline visibility across 9 paint shop stages.",
      input: "Paint float reports, VIN generation data, component stock files, BOM master",
      output:
        "Real-time FIFO allocation queues, automated Excel reports, shift summary broadcasts, shortage alerts",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "OpenPyXL",
        "Matplotlib",
      ],
      keyFeatures: [
        "FIFO clear-to-build allocation engine",
        "9-channel data integration",
        "BOM completeness auditing",
        "Automated shift reports",
        "Quality hold isolation",
        "Planner inline override mode",
      ],
      metrics: {
        linesOfCode: "4,683",
        dataChannels: "9",
        vehicleModels: "10+",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
    {
      id: "shortage-float-tracker",
      title: "PPC Shortage & Float Tracker",
      category: "streamlit-dashboard",
      featured: true,
      description:
        "Real-time component shortage monitoring system tracking wiring harnesses, cockpit assemblies, engines, and batteries across paint shop pipeline buffers.",
      problem:
        "Manual spreadsheet monitoring of component shortages across shifts is error-prone, slow, and fails to provide real-time visibility into critical part availability.",
      solution:
        "Built a 6-tab Streamlit dashboard with automated PBS/Sealant/Total Float shortage calculations, BOM validation, and shift auto-reset at 6:30 AM IST.",
      input: "Paint float reports (.xlsb/.xlsx), DPT plans, wiring/cockpit/engine stock files, BOM master",
      output:
        "Interactive shortage dashboards, formatted Excel exports, high-fidelity PNG table images",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "OpenPyXL",
        "pyxlsb",
        "BeautifulSoup4",
        "Matplotlib",
      ],
      keyFeatures: [
        "6 interactive analysis tabs",
        "Automated 6:30 AM shift reset",
        "BOM validation engine",
        "Critical shortage alerts",
        "Multi-format file parsing (xlsb, xlsx, html-as-xls)",
        "PNG image export for sharing",
      ],
      metrics: {
        tabs: "6",
        componentTypes: "4 (Engine, Wiring, Cockpit, Battery)",
        floatStages: "11",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
    {
      id: "vin-production-plan",
      title: "VIN Generation & Production Plan",
      category: "production-planning",
      featured: true,
      description:
        "Multi-day rolling production sequencing system with automated float matching, variant constraint enforcement, and shortage detection.",
      problem:
        "Manual scheduling across BIW, Paint Shop, and TCF assembly stages leads to bottlenecks, float imbalances, and production delays.",
      solution:
        "Automated 3-4 day rolling production planning with multi-stage float prioritization (Paint Floor → WIP → BIW Plan → Next 3-Days BIW) and powertrain variant limits.",
      input: "Yesterday's VIN plans, today's VIN lists, paint float report, WIP data, BIW plans",
      output:
        "Optimized 3-day production schedules (Excel), model plan summaries, shortage warnings",
      technologies: ["Python", "Streamlit", "OpenPyXL"],
      keyFeatures: [
        "3-4 day rolling planning horizon",
        "Multi-stage float matching & prioritization",
        "Powertrain variant constraint enforcement (EV, CNG, Petrol, Diesel)",
        "Automated shortage detection",
        "Interactive vehicle showcase",
        "10 input file channels",
      ],
      metrics: {
        inputFiles: "10",
        vehicleTracks: "2 (TCF1 & TCF2)",
        planningDays: "3-4",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
    {
      id: "datewise-planning",
      title: "Datewise Production Planning System",
      category: "excel-automation",
      featured: true,
      description:
        "Finite capacity scheduling system for automotive component manufacturing, allocating daily production across 13 manufacturing lines with setup loss calculations.",
      problem:
        "Manual day-wise production scheduling across 13 manufacturing lines doesn't account for setup losses, line capacities, and holiday calendars accurately.",
      solution:
        "Built a capacity-aware scheduling engine that calculates setup time deductions, performs sequential multi-day allocation with Sunday/holiday skip, and generates official production plan documents.",
      input: "Excel production plan with part numbers, line assignments, setup flags",
      output:
        "Datewise production schedule (Excel), weekly formatted report (PRH.F.46.00), linewise PDF reports",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "XlsxWriter",
        "ReportLab",
      ],
      keyFeatures: [
        "Finite capacity scheduling across 13 lines",
        "Setup loss engine (Major: 240 min, Minor: 60 min deductions)",
        "Sequential multi-day backlog rollover",
        "Calendar intelligence (skip Sundays & holidays)",
        "Dual modes: Weekly & Monthly planning",
        "Automated PDF report generation",
      ],
      metrics: {
        lines: "13",
        dailyCapacityMinutes: "1,320",
        planningModes: "2 (Weekly & Monthly)",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
    {
      id: "paint-aging-analytics",
      title: "Paint Shop Aging Analytics",
      category: "streamlit-dashboard",
      featured: false,
      description:
        "Multi-stage WIP aging analysis system for paint shop operations, tracking vehicle bodies from BIW through paint stages with holiday-aware aging calculations.",
      problem:
        "Vehicle bodies in paint shop stages experience aging due to production delays or quality holds, but tracking this across BIW→PT→PBS stages manually is unreliable.",
      solution:
        "Built an interactive aging report that classifies vehicles into standardized aging buckets (1 Day to 15+ Days), excludes plant holidays from calculations, and tracks quality hold root causes.",
      input: "PPC float report from SAP/MES (.xlsb/.xlsx/.csv)",
      output:
        "Executive summary with aging KPIs, 3 Excel reports (BIW/PT Aging, PBS Aging, Hold Cab Report)",
      technologies: ["Python", "Streamlit", "Pandas"],
      keyFeatures: [
        "Multi-stage WIP pipeline analysis (BIW → PT → PBS)",
        "Holiday-aware aging engine",
        "Color-coded aging severity (green to red)",
        "Hold cab root-cause attribution",
        "3 automated Excel report exports",
      ],
      metrics: {
        agingBuckets: "6",
        paintStages: "3 (BIW→PT, PT→PBS, PBS)",
        excelReports: "3",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
    {
      id: "float-reports-portal",
      title: "PPC Float Reports Portal",
      category: "streamlit-dashboard",
      featured: false,
      description:
        "Automated vehicle float tracking and taper analysis portal, reconciling daily float data across assembly lines with historical trend visibility.",
      problem:
        "Daily collation and trend analysis of vehicle float reports across TCF1 and TCF2 lines requires repetitive manual work and is prone to errors.",
      solution:
        "Built a smart file-mapping dashboard that automatically identifies file roles and dates from filenames, computes multi-day float taper trends, and generates consolidated Excel reports.",
      input: "Daily float reports for TCF1 and TCF2 lines",
      output:
        "Interactive taper dashboards, KPI metrics, consolidated multi-sheet Excel export",
      technologies: ["Python", "Streamlit", "Pandas"],
      keyFeatures: [
        "Smart file mapping from filenames",
        "Dynamic date discovery for trend comparison",
        "Multi-tab dashboard",
        "Consolidated Excel report export",
      ],
      metrics: {
        inputFiles: "Up to 12",
        assemblyLines: "2 (TCF1 & TCF2)",
        trendDays: "3+",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
    {
      id: "shiftwise-planner",
      title: "ShiftWise Production Planner",
      category: "excel-automation",
      featured: false,
      description:
        "Daily production planning tool that allocates targets across 3 operating shifts with cycle time calculations and setup loss deductions.",
      problem:
        "Allocating daily production targets across 3 shifts while accounting for line cycle times, changeovers, and shift capacity differences is complex and error-prone.",
      solution:
        "Built a waterfall shift allocation engine that sequentially fills shift capacity based on parts-per-minute rates and automatically handles setup time deductions.",
      input: "Daily production plan Excel file with part numbers, quantities, and setup flags",
      output:
        "Shift-split production schedule, utilization charts, Plan vs Actual comparison",
      technologies: ["Python", "Streamlit", "Pandas", "XlsxWriter"],
      keyFeatures: [
        "Waterfall allocation across 3 shifts",
        "PPM-based cycle time calculations",
        "Setup overhead deduction",
        "Plan vs Actual performance tracking",
      ],
      metrics: {
        shifts: "3",
        lines: "12+ lines",
      },
      screenshots: [],
      demoUrl: "",
      Code2Url: "",
    },
  ],

  // ----------------------------------------------------------
  // PROJECT CATEGORIES (for filter tabs)
  // ----------------------------------------------------------
  projectCategories: [
    { id: "all", label: "All" },
    { id: "streamlit-dashboard", label: "Streamlit Dashboards" },
    { id: "excel-automation", label: "Excel Automation" },
    { id: "production-planning", label: "PPC & SCM Engines" },
  ],

  // ----------------------------------------------------------
  // EXPERIENCE (Resume history)
  // ----------------------------------------------------------
  experience: [
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
      name: "SAP PP / MM",
      institution: "Pune Institute of SAP",
      period: "May 2019 – Oct 2019",
    },
  ],
  awards: [
    {
      title: "Excellence in Digital Transformation Using AI",
      date: "February 2026",
      description:
        "Spearheaded the transition from manual PPC/SCM reporting to fully automated, AI-driven workflows and real-time analytics.",
    },
  ],

  // ----------------------------------------------------------
  // SKILLS
  // ----------------------------------------------------------
  skills: {
    "Business Domain": [
      "Production Planning & Control (PPC)",
      "Supply Chain Management (SCM)",
      "Master Production Schedule (MPS)",
      "Material Requirement Planning (MRP)",
      "Inventory Management",
      "Order Fulfillment",
      "Capacity Planning",
    ],
    ERP: ["SAP PP (Production Planning)", "SAP MM (Materials Management)", "SAP IPMS"],
    Automation: [
      "Python",
      "Pandas",
      "NumPy",
      "OpenPyXL",
      "XlsxWriter",
      "pyxlsb",
      "ReportLab",
      "Excel Automation",
    ],
    "Data & Dashboards": [
      "Streamlit",
      "Matplotlib",
      "Data Visualization",
      "KPI Reporting",
      "Plan vs Actual Dashboards",
    ],
    "AI & Reporting": [
      "AI-Driven Production Scheduling",
      "Automated Reporting Workflows",
      "Business Process Automation",
      "BeautifulSoup4 (Data Parsing)",
    ],
  },

  // ----------------------------------------------------------
  // BUSINESS IMPACT (Before vs After)
  // ----------------------------------------------------------
  impact: {
    qualitative: [
      {
        title: "Reduced Manual Work",
        description: "Automated repetitive Excel-based planning and reporting workflows",
        icon: "Clock",
      },
      {
        title: "Fewer Repetitive Tasks",
        description: "Replaced daily copy-paste operations with one-click Python automation",
        icon: "RefreshCw",
      },
      {
        title: "Improved Reporting Speed",
        description: "Reports that took hours now generate in seconds",
        icon: "Zap",
      },
      {
        title: "Better Data Accuracy",
        description: "Eliminated manual data entry errors with automated validation",
        icon: "CheckCircle",
      },
      {
        title: "Faster Decision Making",
        description: "Real-time dashboards replacing static periodic reports",
        icon: "TrendingUp",
      },
      {
        title: "Scalable Reporting",
        description: "Solutions handle growing data volumes without additional manual effort",
        icon: "ArrowUpRight",
      },
    ],
    quantitative: {
      hours_saved: null,
      processing_time_before: null,
      processing_time_after: null,
      error_reduction: null,
      reports_automated: 7,
      files_processed: null,
    },
  },

  // ----------------------------------------------------------
  // HOW I WORK (4-step process matching user brief)
  // ----------------------------------------------------------
  process: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the existing manual workflow, data sources, and operational pain points.",
    },
    {
      step: "02",
      title: "Analyze",
      description: "Identify repetitive work, errors, data bottlenecks, and automation opportunities.",
    },
    {
      step: "03",
      title: "Automate",
      description: "Build Python, Excel, or Streamlit automation with robust validation rules.",
    },
    {
      step: "04",
      title: "Deliver",
      description: "Provide a simple, reliable solution with clear documentation and support.",
    },
  ],

  // ----------------------------------------------------------
  // SEO
  // ----------------------------------------------------------
  seo: {
    title: "Nikhil Waradkar | Python Excel Automation & Streamlit Solutions",
    description:
      "Independent Automation Consultant specializing in Python Excel automation, Streamlit dashboards, and business reporting backed by 12+ years of manufacturing, PPC, and SCM experience.",
    ogImage: "",
  },

  // ----------------------------------------------------------
  // CONTACT FORM
  // ----------------------------------------------------------
  contactForm: {
    heading: "Have a Manual Process That Should Be Automated?",
    subheading:
      "Send me your current Excel workflow or reporting process. I'll help identify what can be automated.",
    primaryCTA: "Start a Project",
    secondaryCTA: "Email Me Directly",
  },
};

// Icon mapping for services and UI
export const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
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
  Briefcase
};
