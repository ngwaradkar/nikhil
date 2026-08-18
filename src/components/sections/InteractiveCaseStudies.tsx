"use client";

import { useState } from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  TrendingUp,
  X,
  FileSpreadsheet,
  Activity,
  Cpu,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Tilt } from "@/components/ui/Tilt";
import { motion, AnimatePresence } from "framer-motion";

const categorySignalColor: Record<string, { color: string; tagClass: string; label: string }> = {
  "streamlit-dashboard": { color: "#3B82F6", tagClass: "tag-signal-process", label: "Streamlit Dashboard" },
  "excel-automation": { color: "#F5A524", tagClass: "tag-signal-raw", label: "Excel Automation" },
  "production-planning": { color: "#A855F7", tagClass: "tag-signal-transform", label: "PPC & SCM Engine" },
};

// Business Impact Highlights per Project
const projectImpactHighlights: Record<string, { metric: string; label: string }> = {
  "vin-generation-dashboard": {
    metric: "3.5 hrs ➔ 8 sec",
    label: "Shift allocation runtime reduced with 100% BOM validation",
  },
  "shortage-float-tracker": {
    metric: "11 Float Stages",
    label: "Automated 6:30 AM shift reset across 4 critical component streams",
  },
  "vin-production-plan": {
    metric: "3-4 Day Horizon",
    label: "Rolling multi-stage vehicle sequencing across 2 TCF tracks",
  },
  "datewise-planning": {
    metric: "13 Lines Scheduled",
    label: "Setup loss deducted automatically (240m major / 60m minor)",
  },
  "paint-aging-analytics": {
    metric: "100% WIP Visibility",
    label: "Multi-stage BIW ➔ PT ➔ PBS aging analytics with holiday intelligence",
  },
  "float-reports-portal": {
    metric: "12 Files Reconciled",
    label: "Dynamic multi-day float taper discovery generated in < 450ms",
  },
  "shiftwise-planner": {
    metric: "3-Shift Waterfall",
    label: "PPM-based cycle time calculation with zero manual spreadsheet math",
  },
};

type ProjectType = (typeof siteConfig.projects)[0];

export default function InteractiveCaseStudies() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectType | null>(null);

  const filteredProjects = activeCategory === "all"
    ? siteConfig.projects
    : siteConfig.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[#0A0E17] relative z-10 border-t border-white/5">
      <div className="container-custom">
        
        {/* Section Heading & Filter Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            label="Engineering Case Studies"
            title="Interactive Production Case Studies" 
            description="Production scheduling algorithms, real-time shopfloor shortage monitors, and Python Excel pipelines built to eliminate manual friction in manufacturing."
            align="left"
            className="mb-0 font-display"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#131A27] border border-[#1F2937] shrink-0">
            {siteConfig.projectCategories.map((cat) => {
              const count = cat.id === "all" 
                ? siteConfig.projects.length 
                : siteConfig.projects.filter(p => p.category === cat.id).length;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#3B82F6] text-white font-semibold shadow-md"
                      : "text-[#8B98AC] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-black/30 text-[#8B98AC]"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column / 3-Column Responsive Bento Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              const signal = categorySignalColor[project.category] || { 
                color: "#3B82F6", 
                tagClass: "tag-signal-process", 
                label: project.category 
              };
              const impact = projectImpactHighlights[project.id] || {
                metric: "100% Deterministic",
                label: "Automated business logic with zero manual error",
              };

              return (
                <StaggerItem key={project.id}>
                  <Tilt rotationFactor={5} glowColor={signal.color}>
                    <div className="panel-elevated rounded-2xl overflow-hidden flex flex-col justify-between group relative h-full bg-[#131A27] border border-[#1F2937] hover:border-white/20 transition-all duration-300">
                      
                      <div>
                        {/* ============================================================
                            1. TOP: 16:9 Image / Simulated UI Preview Container
                            ============================================================ */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0E17] border-b border-[#1F2937] p-3 flex flex-col justify-between group/preview select-none">
                          
                          {/* Ambient background glow inside preview */}
                          <div 
                            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                            style={{
                              background: `radial-gradient(circle at 60% 30%, ${signal.color}33 0%, transparent 70%)`
                            }}
                          />

                          {/* Browser Window Chrome Top Bar */}
                          <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                              <span className="text-[10px] font-mono text-[#8B98AC] ml-1.5 truncate max-w-[140px]">
                                {project.id}.app
                              </span>
                            </div>

                            {/* Overlay Badge */}
                            <span 
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold border backdrop-blur-md"
                              style={{
                                color: signal.color,
                                borderColor: `${signal.color}40`,
                                background: `${signal.color}15`,
                              }}
                            >
                              <Sparkles size={10} />
                              {project.demoUrl ? "Live Demo ↗" : "Internal Engine ↗"}
                            </span>
                          </div>

                          {/* Simulated Live UI Layout Graphic */}
                          <div className="relative z-10 my-auto py-1">
                            <div className="grid grid-cols-3 gap-2 mb-2">
                              <div className="p-2 rounded-lg bg-[#131A27]/90 border border-white/5 flex flex-col">
                                <span className="text-[9px] font-mono text-[#8B98AC] uppercase truncate">Latency</span>
                                <span className="text-xs font-mono font-bold text-emerald-400">&lt; 450ms</span>
                              </div>
                              <div className="p-2 rounded-lg bg-[#131A27]/90 border border-white/5 flex flex-col">
                                <span className="text-[9px] font-mono text-[#8B98AC] uppercase truncate">Validation</span>
                                <span className="text-xs font-mono font-bold" style={{ color: signal.color }}>100% Pass</span>
                              </div>
                              <div className="p-2 rounded-lg bg-[#131A27]/90 border border-white/5 flex flex-col">
                                <span className="text-[9px] font-mono text-[#8B98AC] uppercase truncate">Status</span>
                                <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  Active
                                </span>
                              </div>
                            </div>

                            {/* Mini Simulated Telemetry / Pipeline Bar */}
                            <div className="h-1.5 w-full rounded-full bg-[#131A27] overflow-hidden border border-white/5 flex">
                              <div className="h-full bg-[#F5A524] w-[30%]" />
                              <div className="h-full bg-[#3B82F6] w-[45%]" />
                              <div className="h-full bg-[#A855F7] w-[25%]" />
                            </div>
                          </div>

                          {/* Bottom Preview Pill: Category Tag */}
                          <div className="flex items-center justify-between relative z-10 pt-1">
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                              <ShieldCheck size={11} />
                              Representative Study
                            </span>
                            <span className={`text-[10px] font-mono uppercase ${signal.tagClass} px-2 py-0.5 rounded border`}>
                              {signal.label}
                            </span>
                          </div>

                        </div>

                        {/* ============================================================
                            2. MIDDLE: Content, Problem vs Solution, Business Metric
                            ============================================================ */}
                        <div className="p-5 sm:p-6 space-y-4">
                          
                          {/* Title */}
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-[#3B82F6] transition-colors leading-snug">
                              {project.title}
                            </h3>
                            <p className="text-xs text-[#8B98AC] leading-relaxed mt-1.5 line-clamp-2">
                              {project.description}
                            </p>
                          </div>

                          {/* High-Impact Business Metric Callout */}
                          <div 
                            className="p-3 rounded-xl border flex items-center gap-3"
                            style={{
                              background: `${signal.color}08`,
                              borderColor: `${signal.color}25`,
                            }}
                          >
                            <div 
                              className="p-2 rounded-lg shrink-0"
                              style={{
                                background: `${signal.color}15`,
                                color: signal.color,
                              }}
                            >
                              <Zap size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div 
                                className="text-xs font-mono font-bold truncate"
                                style={{ color: signal.color }}
                              >
                                Impact: {impact.metric}
                              </div>
                              <div className="text-[11px] text-[#8B98AC] truncate">
                                {impact.label}
                              </div>
                            </div>
                          </div>

                          {/* Problem vs. Solution Visual Summary */}
                          <div className="space-y-2 text-xs font-sans">
                            <div className="p-2.5 rounded-lg bg-[#0A0E17] border border-white/5">
                              <span className="text-[10px] font-mono text-[#F5A524] font-bold uppercase tracking-wider block mb-0.5">
                                Operational Problem:
                              </span>
                              <p className="text-[#8B98AC] leading-relaxed line-clamp-2">
                                {project.problem}
                              </p>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#0A0E17] border border-white/5">
                              <span className="text-[10px] font-mono text-[#3B82F6] font-bold uppercase tracking-wider block mb-0.5">
                                Technical Solution:
                              </span>
                              <p className="text-[#F1F5F9]/90 leading-relaxed line-clamp-2">
                                {project.solution}
                              </p>
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {project.technologies.slice(0, 5).map((tech, i) => (
                              <span key={i} className="tag-telemetry-muted text-[11px] py-0.5 px-2">
                                {tech}
                              </span>
                            ))}
                          </div>

                        </div>
                      </div>

                      {/* ============================================================
                          3. BOTTOM: Dual Action Buttons
                          ============================================================ */}
                      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 mt-auto">
                        <div className="grid grid-cols-2 gap-2.5 pt-4">
                          
                          {/* Live App Preview Button */}
                          {project.demoUrl ? (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary-glow text-xs font-mono py-2.5 px-3 flex items-center justify-center gap-1.5 w-full text-center"
                            >
                              <ExternalLink size={13} />
                              <span>Live Preview</span>
                            </a>
                          ) : (
                            <button
                              onClick={() => setSelectedCaseStudy(project)}
                              className="btn-secondary-dark text-xs font-mono py-2.5 px-3 flex items-center justify-center gap-1.5 w-full text-center cursor-pointer border-[#1F2937] hover:border-[#3B82F6]"
                            >
                              <Activity size={13} className="text-[#3B82F6]" />
                              <span>App Preview</span>
                            </button>
                          )}

                          {/* View Case Study Button */}
                          <button
                            onClick={() => setSelectedCaseStudy(project)}
                            className="px-3 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-[#182234] hover:bg-[#1C2840] border border-white/10 hover:border-[#3B82F6]/50 flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer"
                          >
                            <span>Case Study</span>
                            <ArrowUpRight size={13} className="text-[#3B82F6]" />
                          </button>

                        </div>
                      </div>

                    </div>
                  </Tilt>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

      </div>

      {/* ============================================================
          INTERACTIVE CASE STUDY DETAIL MODAL
          ============================================================ */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="fixed inset-0 bg-[#0A0E17]/90 backdrop-blur-xl -z-10"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#131A27] border border-[#1F2937] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#0A0E17] border border-white/10 text-[#8B98AC] hover:text-white hover:border-white/30 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pb-6 border-b border-white/10 pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    <ShieldCheck size={11} />
                    Representative Case Study
                  </span>
                  <span className="text-[10px] font-mono text-[#8B98AC] uppercase">
                    {selectedCaseStudy.category.replace("-", " ")}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-display text-white">
                  {selectedCaseStudy.title}
                </h2>
                <p className="text-sm text-[#8B98AC] leading-relaxed mt-2">
                  {selectedCaseStudy.description}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#0A0E17] border border-red-500/20">
                  <span className="text-xs font-mono text-[#F5A524] font-bold uppercase tracking-wider block mb-1.5">
                    Root Operational Problem
                  </span>
                  <p className="text-xs text-[#8B98AC] leading-relaxed">
                    {selectedCaseStudy.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0E17] border border-[#3B82F6]/30">
                  <span className="text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-wider block mb-1.5">
                    Implemented Solution
                  </span>
                  <p className="text-xs text-[#F1F5F9]/90 leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Data Pipeline Inputs & Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#0A0E17] border border-white/5">
                  <div className="text-[10px] text-[#8B98AC] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <FileSpreadsheet size={13} className="text-[#F5A524]" />
                    Input Data Channels
                  </div>
                  <p className="text-[#8B98AC] font-sans text-xs mt-1">
                    {selectedCaseStudy.input}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0E17] border border-white/5">
                  <div className="text-[10px] text-[#8B98AC] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#22D3EE]" />
                    Automated Output Deliverables
                  </div>
                  <p className="text-[#F1F5F9]/90 font-sans text-xs mt-1">
                    {selectedCaseStudy.output}
                  </p>
                </div>
              </div>

              {/* Key Features & Metrics */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu size={14} className="text-[#3B82F6]" />
                  Key Architectural Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCaseStudy.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#8B98AC]">
                      <CheckCircle2 size={13} className="text-[#3B82F6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCaseStudy.technologies.map((t, i) => (
                    <span key={i} className="tag-telemetry-muted text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="btn-primary-glow text-xs font-mono py-2 px-4 flex items-center gap-1.5"
                >
                  <TrendingUp size={13} />
                  <span>Discuss Similar Automation</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
