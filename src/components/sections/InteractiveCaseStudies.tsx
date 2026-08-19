import { useState } from "react";
import { siteConfig } from "../../data/portfolio-data";
import type { PortfolioProject, ProjectScreenshot } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectGallery } from "../ui/ProjectGallery";
import { LightboxModal } from "../ui/LightboxModal";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  X,
  FileSpreadsheet,
  ArrowUpRight,
  Layers,
  Maximize2,
  AlertCircle
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const categorySignalColor: Record<
  string,
  { color: string; label: string; accentBg: string; border: string }
> = {
  "streamlit-dashboard": {
    color: "#3B82F6",
    label: "Streamlit Dashboard",
    accentBg: "bg-[#3B82F6]/10",
    border: "border-[#3B82F6]/30",
  },
  "excel-automation": {
    color: "#F59E0B",
    label: "Excel Automation",
    accentBg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/30",
  },
  "production-planning": {
    color: "#06B6D4",
    label: "PPC & SCM Scheduler",
    accentBg: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/30",
  },
};

export default function InteractiveCaseStudies() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioProject | null>(null);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxScreenshots, setLightboxScreenshots] = useState<ProjectScreenshot[]>([]);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const filteredProjects: PortfolioProject[] =
    activeCategory === "all"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeCategory);

  const openLightbox = (project: PortfolioProject, index: number) => {
    setLightboxScreenshots(project.screenshots);
    setLightboxInitialIndex(index);
    setLightboxTitle(project.title);
    setLightboxOpen(true);
  };

  return (
    <section id="case-studies" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Real Production Case Studies"
            title="Featured Automation Projects"
            description="Real Python pipelines, interactive Streamlit operational dashboards, and capacity scheduling engines backed by verifiable before vs after evidence."
            align="left"
            className="mb-0 font-display"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#0D1117] border border-[#1F2937] shrink-0">
            {siteConfig.projectCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? siteConfig.projects.length
                  : siteConfig.projects.filter((p) => p.category === cat.id).length;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#3B82F6] text-white font-semibold shadow-md shadow-[#3B82F6]/20"
                      : "text-[#8B98AC] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-black/40 text-[#8B98AC]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, projectIndex) => {
            const signal = categorySignalColor[project.category] || {
              color: "#3B82F6",
              label: project.category,
              accentBg: "bg-[#3B82F6]/10",
              border: "border-[#3B82F6]/30",
            };

            const isEven = projectIndex % 2 === 1;
            const story = project.story;

            return (
              <ScrollReveal key={project.id}>
                <div className="panel-elevated rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
                  {/* Subtle Top Accent Glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${signal.color} 0%, transparent 100%)`,
                    }}
                  />

                  {/* 2-Column Responsive Layout */}
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}>
                    
                    {/* Left Column: Project Metadata, Before/After Story, Metrics (5 Cols) */}
                    <div className={`lg:col-span-5 flex flex-col justify-between h-full space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}>
                      <div>
                        {/* Project Number & Category Pill */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                              {project.number}
                            </span>
                            <span className="text-[#8B98AC] font-mono text-sm">/ 0{filteredProjects.length}</span>
                          </div>

                          <span
                            className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border ${signal.accentBg} ${signal.border}`}
                            style={{ color: signal.color }}
                          >
                            {signal.label}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-[#3B82F6] transition-colors leading-tight mb-2">
                          {project.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs sm:text-sm font-mono text-[#22D3EE] mb-5 font-medium leading-relaxed">
                          {project.tagline}
                        </p>

                        {/* Structured Before vs After Story Blocks */}
                        {story ? (
                          <div className="space-y-3 mb-6">
                            {/* BEFORE */}
                            <div className="p-3.5 rounded-xl bg-[#050505] border border-red-500/20">
                              <div className="flex items-center gap-1.5 text-red-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                                <AlertCircle size={13} className="text-red-400 shrink-0" />
                                <span>Before Automation (Manual Friction):</span>
                              </div>
                              <ul className="space-y-1 text-xs text-[#8B98AC]">
                                {story.before.map((b, i) => (
                                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                                    <span className="text-red-400 font-bold">•</span>
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* AFTER */}
                            <div className="p-3.5 rounded-xl bg-[#050505] border border-emerald-500/20">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                                <span>After Automation (Automated Result):</span>
                              </div>
                              <ul className="space-y-1 text-xs text-[#F1F5F9]/90">
                                {story.after.map((a, i) => (
                                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* BUSINESS IMPACT */}
                            <div className="p-3.5 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30">
                              <div className="flex items-center gap-1.5 text-[#3B82F6] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">
                                <Zap size={13} className="text-[#3B82F6] shrink-0" />
                                <span>Business Impact:</span>
                              </div>
                              <ul className="space-y-1 text-xs text-white/90">
                                {story.businessImpact.map((imp, i) => (
                                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                                    <span className="text-[#22D3EE] font-bold">➔</span>
                                    <span>{imp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3 mb-6">
                            <div className="p-3.5 rounded-xl bg-[#050505] border border-amber-500/15">
                              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                                Operational Problem:
                              </span>
                              <p className="text-xs text-[#8B98AC] leading-relaxed">
                                {project.problem}
                              </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-[#050505] border border-[#3B82F6]/20">
                              <span className="text-[10px] font-mono text-[#22D3EE] font-bold uppercase tracking-wider block mb-1">
                                Automation Solution:
                              </span>
                              <p className="text-xs text-[#F1F5F9]/90 leading-relaxed">
                                {project.solution}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {Object.entries(project.metrics).slice(0, 4).map(([key, val], idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-[#11161D] border border-white/5 flex flex-col">
                              <span className="text-[10px] font-mono text-[#8B98AC] uppercase truncate">
                                {key.replace(/([A-Z])/g, " $1")}
                              </span>
                              <span className="text-xs font-mono font-bold text-white truncate" style={{ color: idx === 0 ? signal.color : undefined }}>
                                {val}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tag-telemetry-muted text-[11px] py-0.5 px-2">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          className="btn-primary-glow text-xs font-mono py-2.5 px-4 flex items-center gap-2 cursor-pointer"
                        >
                          <span>Full Case Study</span>
                          <ArrowUpRight size={14} />
                        </button>

                        <button
                          type="button"
                          onClick={() => openLightbox(project, 0)}
                          className="btn-secondary-dark text-xs font-mono py-2.5 px-4 flex items-center gap-2 cursor-pointer border-[#1F2937] hover:border-[#3B82F6]"
                        >
                          <Maximize2 size={13} className="text-[#3B82F6]" />
                          <span>Screenshots ({project.screenshots.length})</span>
                        </button>

                        <a
                          href="#contact"
                          className="text-xs font-mono text-[#8B98AC] hover:text-white flex items-center gap-1 transition-colors ml-auto"
                        >
                          <span>Automate Similar Flow</span>
                          <ArrowUpRight size={12} className="text-[#3B82F6]" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Interactive Screenshot Gallery (7 Cols) */}
                    <div className={`lg:col-span-7 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}>
                      <ProjectGallery
                        screenshots={project.screenshots}
                        appUrl={project.appUrl}
                        badge={project.featured ? "Shopfloor Verified" : "Production Utility"}
                        badgeColor={signal.color}
                        onOpenLightbox={(idx) => openLightbox(project, idx)}
                        priority={projectIndex === 0}
                      />
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
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
              className="fixed inset-0 bg-[#050505]/90 backdrop-blur-xl -z-10"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl rounded-2xl bg-[#0D1117] border border-[#1F2937] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#050505] border border-white/10 text-[#8B98AC] hover:text-white hover:border-white/30 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pb-6 border-b border-white/10 pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    <ShieldCheck size={11} />
                    Verified Production Case Study
                  </span>
                  <span className="text-[10px] font-mono text-[#8B98AC] uppercase">
                    {selectedCaseStudy.category.replace("-", " ")}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {selectedCaseStudy.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#22D3EE] mt-1">
                  {selectedCaseStudy.tagline}
                </p>
                <p className="text-sm text-[#8B98AC] leading-relaxed mt-3">
                  {selectedCaseStudy.description}
                </p>
              </div>

              {/* Structured Story Breakdown: Before ➔ What I Built ➔ After */}
              {selectedCaseStudy.story ? (
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#050505] border border-red-500/20">
                      <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider block mb-2">
                        Before Automation:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#8B98AC]">
                        {selectedCaseStudy.story.before.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-red-400 font-bold">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#050505] border border-emerald-500/20">
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-2">
                        After Automation:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#F1F5F9]/90">
                        {selectedCaseStudy.story.after.map((a, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050505] border border-[#3B82F6]/30">
                    <span className="text-xs font-mono text-[#22D3EE] font-bold uppercase tracking-wider block mb-2">
                      What I Built & Implemented:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                      {selectedCaseStudy.story.whatIBuilt.map((w, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                          <CheckCircle2 size={13} className="text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#050505] border border-amber-500/20">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1.5">
                      Operational Problem
                    </span>
                    <p className="text-xs text-[#8B98AC] leading-relaxed">
                      {selectedCaseStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050505] border border-[#3B82F6]/30">
                    <span className="text-xs font-mono text-[#22D3EE] font-bold uppercase tracking-wider block mb-1.5">
                      Implemented Solution
                    </span>
                    <p className="text-xs text-[#F1F5F9]/90 leading-relaxed">
                      {selectedCaseStudy.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Data Pipeline Inputs & Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#050505] border border-white/5">
                  <div className="text-[10px] text-[#8B98AC] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <FileSpreadsheet size={13} className="text-[#F59E0B]" />
                    <span>Input Data Channels</span>
                  </div>
                  <p className="text-[#8B98AC] font-sans text-xs mt-1 leading-relaxed">
                    {selectedCaseStudy.input}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#050505] border border-white/5">
                  <div className="text-[10px] text-[#8B98AC] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#22D3EE]" />
                    <span>Automated Output Deliverables</span>
                  </div>
                  <p className="text-[#F1F5F9]/90 font-sans text-xs mt-1 leading-relaxed">
                    {selectedCaseStudy.output}
                  </p>
                </div>
              </div>

              {/* Business Outcome Callout */}
              <div className="p-4 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3B82F6] mb-1">
                  <Zap size={14} />
                  <span>Measured Business Outcome</span>
                </div>
                <p className="text-xs text-[#F1F5F9]/90 leading-relaxed font-sans">
                  {selectedCaseStudy.businessOutcome}
                </p>
              </div>

              {/* Screenshots Preview Strip inside Modal */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Layers size={14} className="text-[#22D3EE]" />
                  <span>Visual Evidence ({selectedCaseStudy.screenshots.length} Screens)</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedCaseStudy.screenshots.map((s, idx) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setSelectedCaseStudy(null);
                        openLightbox(selectedCaseStudy, idx);
                      }}
                      className="group/modalscreen rounded-xl overflow-hidden border border-[#1F2937] hover:border-[#3B82F6] bg-[#050505] cursor-pointer relative"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={s.thumbUrl || s.cardUrl}
                          alt={s.title}
                          className="w-full h-full object-cover group-hover/modalscreen:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2 bg-[#11161D] text-[11px] font-mono text-white truncate">
                        {s.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
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

      {/* Standalone Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={lightboxScreenshots}
        initialIndex={lightboxInitialIndex}
        projectTitle={lightboxTitle}
      />
    </section>
  );
}
