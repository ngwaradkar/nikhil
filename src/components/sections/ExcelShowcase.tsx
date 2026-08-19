import { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { BrowserFrame } from "../ui/BrowserFrame";
import { LightboxModal } from "../ui/LightboxModal";
import { getAssetUrl } from "@/data/portfolio-data";
import type { ProjectScreenshot } from "@/data/portfolio-data";
import {
  FileSpreadsheet,
  Cpu,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  TableProperties
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const excelScreenshots: ProjectScreenshot[] = [
  {
    id: "datewise_planning_main",
    title: "Datewise Finite Capacity Production Planner",
    caption: "13-Line capacity configuration (Arjun 1-12 & AutoLine) with holiday calendar selection & Excel upload",
    description: "Finite capacity scheduling engine deducting 240 min major / 60 min minor setup changeovers and skipping Sundays & holidays.",
    cardUrl: getAssetUrl("projects/cards/datewise_planning_main.png"),
    fullUrl: getAssetUrl("projects/full/datewise_planning_main.png"),
    thumbUrl: getAssetUrl("projects/thumbs/datewise_planning_main.png"),
    aspectRatio: "16/10",
    tag: "Capacity Scheduler",
  },
  {
    id: "shiftwise_planner_main",
    title: "ShiftWise Waterfall Production Planner",
    caption: "PPM cycle times across 13 high-speed lines with automatic shift capacity packing",
    description: "3-Shift waterfall allocation engine with real-time Performance vs Plan Actuals tracking dashboard.",
    cardUrl: getAssetUrl("projects/cards/shiftwise_planner_main.png"),
    fullUrl: getAssetUrl("projects/full/shiftwise_planner_main.png"),
    thumbUrl: getAssetUrl("projects/thumbs/shiftwise_planner_main.png"),
    aspectRatio: "16/10",
    tag: "Waterfall Planner",
  },
];

const pipelineStages = [
  {
    step: "INPUT",
    number: "01",
    title: "Disparate Workbooks Ingestion",
    icon: FileSpreadsheet,
    color: "#F59E0B",
    accentBg: "bg-[#F59E0B]/10",
    borderAccent: "border-[#F59E0B]/30",
    desc: "Ingests raw SAP PP/MM dumps (.xlsx), MES float extracts (.xlsb), and local team plans without manual opening.",
    bullets: [
      "Multi-tab byte parsing (pyxlsb & OpenPyXL)",
      "Automated header schema realignment",
      "Dynamic date discovery & normalization",
      "Zero manual copy-paste or sheet stitching",
    ],
  },
  {
    step: "AUTOMATION",
    number: "02",
    title: "Python Rules & Validation Engine",
    icon: Cpu,
    color: "#3B82F6",
    accentBg: "bg-[#3B82F6]/10",
    borderAccent: "border-[#3B82F6]/30",
    desc: "Executes deterministic business logic, setup loss calculations, and capacity allocations in milliseconds.",
    bullets: [
      "Setup loss deduction: 240m Major / 60m Minor",
      "13-Line finite capacity balancing (1,320 mins/day)",
      "Sequential multi-day backlog rollover",
      "Calendar intelligence: Sunday & holiday skips",
    ],
  },
  {
    step: "OUTPUT",
    number: "03",
    title: "Formatted Executive Deliverables",
    icon: FileCheck,
    color: "#10B981",
    accentBg: "bg-[#10B981]/10",
    borderAccent: "border-[#10B981]/30",
    desc: "Generates standardized, audit-ready Excel workbooks and linewise PDF reports formatted for shopfloor execution.",
    bullets: [
      "Official PRH.F.46.00 production schedule",
      "Linewise shift targets with zero formula lag",
      "Automated column widths, borders & styles",
      "1-Click PDF export via ReportLab",
    ],
  },
];

export default function ExcelShowcase() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeScreen = excelScreenshots[activeScreenIndex];

  return (
    <section id="excel-showcase" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Workbook Modernization"
            title="Excel Automation Architecture"
            description="Transforming fragile, multi-tab manual workbooks into 1-click Python automation pipelines with deterministic mathematical precision."
            align="left"
            className="mb-0 font-display"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#131A27] border border-[#F59E0B]/30 text-[#F59E0B] font-mono text-xs shrink-0 shadow-lg">
            <TableProperties size={14} className="text-[#F59E0B]" />
            <span>100% #N/A and #REF! Error Free</span>
          </div>
        </div>

        {/* 3-Stage Pipeline Cards: INPUT ➔ AUTOMATION ➔ OUTPUT */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pipelineStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <StaggerItem key={stage.step}>
                  <div className="panel-elevated rounded-2xl p-6 h-full flex flex-col justify-between group relative overflow-hidden bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300">
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: stage.color }}
                    />

                    <div>
                      {/* Stage Badge & Step */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${stage.accentBg} ${stage.borderAccent}`}
                          style={{ color: stage.color }}
                        >
                          {stage.step}
                        </span>
                        <span className="text-xs font-mono text-[#8B98AC] font-bold">
                          {stage.number}
                        </span>
                      </div>

                      {/* Stage Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="p-2.5 rounded-xl border"
                          style={{
                            backgroundColor: `${stage.color}15`,
                            borderColor: `${stage.color}30`,
                            color: stage.color,
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <h3 className="text-base font-bold font-display text-white">
                          {stage.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#8B98AC] leading-relaxed mb-4">
                        {stage.desc}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-4 text-xs font-sans">
                        {stage.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#94A3B8]">
                            <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8B98AC]">
                      <span>{stage.step === "OUTPUT" ? "Ready for Shopfloor" : "Feeds Next Stage"}</span>
                      {stage.step !== "OUTPUT" && <ArrowRight size={13} style={{ color: stage.color }} />}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Real Screenshot Document / Application Showcase */}
        <div className="panel-elevated rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#0D1117] border border-[#1F2937] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Context (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] font-mono text-[11px] font-bold uppercase mb-3">
                  <FileSpreadsheet size={13} />
                  <span>Real Production Scheduling System</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight mb-3">
                  {activeScreen.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8B98AC] leading-relaxed mb-4">
                  {activeScreen.description}
                </p>

                {/* Technical highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5">
                    <span className="text-[10px] text-[#8B98AC] uppercase block mb-0.5">Lines Scheduled</span>
                    <span className="font-bold text-white">13 Lines (Arjun 1-12)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5">
                    <span className="text-[10px] text-[#8B98AC] uppercase block mb-0.5">Setup Loss Engine</span>
                    <span className="font-bold text-[#F59E0B]">240m / 60m Deducted</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5">
                    <span className="text-[10px] text-[#8B98AC] uppercase block mb-0.5">Operating Capacity</span>
                    <span className="font-bold text-[#3B82F6]">1,320 Mins / Day</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5">
                    <span className="text-[10px] text-[#8B98AC] uppercase block mb-0.5">Output Format</span>
                    <span className="font-bold text-[#10B981]">PRH.F.46.00 Excel</span>
                  </div>
                </div>

                {/* Switcher Buttons */}
                <div className="flex items-center gap-2">
                  {excelScreenshots.map((screen, idx) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                        activeScreenIndex === idx
                          ? "bg-[#182234] border-[#F59E0B] text-white font-bold shadow-md"
                          : "bg-[#050505] border-[#1F2937] text-[#8B98AC] hover:text-white"
                      }`}
                    >
                      {screen.tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="btn-primary-glow text-xs font-mono py-2.5 px-4 flex items-center gap-2 cursor-pointer"
                >
                  <Maximize2 size={13} />
                  <span>Inspect Full Screenshot</span>
                </button>
              </div>
            </div>

            {/* Right Document Mockup (7 Cols) */}
            <div className="lg:col-span-7">
              <BrowserFrame
                url="weekly.streamlit.app"
                title={activeScreen.title}
                badge="Capacity Validated"
                badgeColor="#F59E0B"
                onExpand={() => setLightboxOpen(true)}
                aspectRatio="16/10"
              >
                <img
                  src={activeScreen.cardUrl}
                  alt={activeScreen.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top select-none"
                />
              </BrowserFrame>
            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={excelScreenshots}
        initialIndex={activeScreenIndex}
        projectTitle="Excel Automation & Finite Capacity Systems"
      />
    </section>
  );
}
