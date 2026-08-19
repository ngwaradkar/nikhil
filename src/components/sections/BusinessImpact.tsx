import { SectionHeading } from "../ui/SectionHeading";
import {
  FileSpreadsheet,
  Copy,
  Calculator,
  AlertCircle,
  Clock,
  Zap,
  Cpu,
  Layers,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  LayoutDashboard
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const beforeSteps = [
  {
    step: "01",
    title: "Multiple Disparate Workbooks",
    desc: "Mismatched dumps from ERP, MES, and local spreadsheets arrive with missing columns and shifted headers.",
    icon: FileSpreadsheet,
    tag: "Data Chaos",
  },
  {
    step: "02",
    title: "Manual Copy-Pasting & Merging",
    desc: "Planners spend 3+ hours every morning copying rows, stitching tabs, and manually aligning records across shifts.",
    icon: Copy,
    tag: "High Labor",
  },
  {
    step: "03",
    title: "Fragile Formulas (#N/A & #REF!)",
    desc: "Formulas break when row counts change or files move, leading to silent calculation errors and missing parts.",
    icon: Calculator,
    tag: "Formula Lag",
  },
  {
    step: "04",
    title: "Unnoticed Shortages & Bottlenecks",
    desc: "Operator fatigue causes unspotted wiring/cockpit shortages, improper FIFO sequencing, and line starvation.",
    icon: AlertCircle,
    tag: "Risk to Line",
  },
  {
    step: "05",
    title: "Static, Delayed Shift Reports",
    desc: "Shift reports take hours to produce, meaning managers make shopfloor decisions on stale, outdated information.",
    icon: Clock,
    tag: "Delayed Action",
  },
];

const afterSteps = [
  {
    step: "01",
    title: "1-Click Multi-File Ingestion",
    desc: "Automated Python readers parse .xlsx, .xlsb, and CSV dumps in parallel without opening Microsoft Excel.",
    icon: Zap,
    tag: "< 500ms Parse",
  },
  {
    step: "02",
    title: "Vectorized In-Memory Pipelines",
    desc: "Pandas & NumPy execute high-speed data cleaning, schema alignment, and cross-sheet joins in milliseconds.",
    icon: Cpu,
    tag: "100% In-Memory",
  },
  {
    step: "03",
    title: "Automated BOM & Schema Validation",
    desc: "Deterministic rules audit BOM codes, detect missing vehicle variants, and flag anomalies before execution.",
    icon: ShieldCheck,
    tag: "Zero Formula Bugs",
  },
  {
    step: "04",
    title: "Dynamic Capacity & Setup Rules",
    desc: "FIFO clear-to-build sequencing, setup loss deductions (240m/60m), and holiday calendars applied automatically.",
    icon: Layers,
    tag: "Deterministic Logic",
  },
  {
    step: "05",
    title: "Real-Time Streamlit Dashboards & Excel",
    desc: "Instant live browser dashboards with interactive filters, automated Telegram dispatches, and styled Excel exports.",
    icon: LayoutDashboard,
    tag: "Instant Visibility",
  },
];

export const BusinessImpact: React.FC = () => {
  return (
    <section id="transformation" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Visual Transformation Story"
            title="Before vs. After Automation"
            description="Comparing the high-risk friction of manual spreadsheet operations against the deterministic speed and reliability of modern Python automation pipelines."
            align="left"
            className="mb-0 font-display"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#131A27] border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs shrink-0 shadow-lg">
            <TrendingUp size={14} className="text-emerald-400" />
            <span>Operational Target: Hours of friction ➔ Seconds of execution</span>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Before Column */}
          <ScrollReveal delay={0}>
            <div className="panel-surface rounded-3xl p-6 sm:p-8 border-t-4 border-t-[#EF4444] relative overflow-hidden bg-[#0D1117] border border-[#1F2937] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-2.5 text-[#EF4444] font-mono text-sm font-bold tracking-wider uppercase">
                    <ShieldAlert size={18} />
                    <span>Before Automation (Manual Friction)</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                    High Human Error Risk
                  </span>
                </div>

                <div className="space-y-3.5">
                  {beforeSteps.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.step}
                        className="p-3.5 rounded-2xl bg-[#050505] border border-white/5 hover:border-red-500/30 transition-colors flex items-start gap-3.5 group"
                      >
                        <div className="p-2 rounded-xl bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors truncate">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8B98AC] shrink-0">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-xs text-[#8B98AC] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Before Summary Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-red-500/5 border border-red-500/20 text-xs font-mono text-[#EF4444] flex items-center justify-between">
                <span>Total Shift Lag: 3.5+ Hours / Day</span>
                <span className="font-bold text-red-400">Manual & Vulnerable</span>
              </div>
            </div>
          </ScrollReveal>

          {/* After Column */}
          <ScrollReveal delay={0.15}>
            <div className="panel-surface rounded-3xl p-6 sm:p-8 border-t-4 border-t-[#10B981] relative overflow-hidden bg-[#0D1117] border border-[#1F2937] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-2.5 text-[#10B981] font-mono text-sm font-bold tracking-wider uppercase">
                    <ShieldCheck size={18} />
                    <span>After Automation (Python Pipeline)</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    100% Deterministic Execution
                  </span>
                </div>

                <div className="space-y-3.5">
                  {afterSteps.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.step}
                        className="p-3.5 rounded-2xl bg-[#050505] border border-white/5 hover:border-emerald-500/30 transition-colors flex items-start gap-3.5 group"
                      >
                        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-[#22D3EE] font-bold shrink-0">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-xs text-[#94A3B8] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* After Summary Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs font-mono text-[#10B981] flex items-center justify-between">
                <span>Execution Speed: &lt; 5 Seconds</span>
                <span className="font-bold text-emerald-400">100% Automated & Audit-Ready</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
