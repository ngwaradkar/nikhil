import { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { BrowserFrame } from "../ui/BrowserFrame";
import { LightboxModal } from "../ui/LightboxModal";
import { siteConfig } from "@/data/portfolio-data";
import type { ProjectScreenshot, PortfolioProject } from "@/data/portfolio-data";
import {
  LayoutDashboard,
  CheckCircle2,
  Maximize2,
  ArrowUpRight
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export default function StreamlitShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<ProjectScreenshot | null>(null);

  // Filter Streamlit-based projects
  const streamlitProjects: PortfolioProject[] = siteConfig.projects.filter(
    (p) => p.category === "streamlit-dashboard" || p.appType === "Streamlit Web App"
  );

  const allStreamlitScreenshots: ProjectScreenshot[] = streamlitProjects.flatMap(
    (p) => p.screenshots
  );

  const openScreenshot = (screenshot: ProjectScreenshot) => {
    setSelectedScreenshot(screenshot);
    setLightboxOpen(true);
  };

  return (
    <section id="streamlit-showcase" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Shopfloor Web Applications"
            title="Streamlit Operational Applications"
            description="Interactive, browser-based decision support tools replacing slow spreadsheets with real-time shopfloor telemetry, live filters, and automated reporting."
            align="left"
            className="mb-0 font-display"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#131A27] border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs shrink-0 shadow-lg">
            <LayoutDashboard size={14} className="text-[#22D3EE]" />
            <span>Live Interactive Shopfloor Analytics</span>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {streamlitProjects.map((project, idx) => {
              const primaryScreenshot = project.screenshots[0];
              if (!primaryScreenshot) return null;

              return (
                <StaggerItem key={project.id}>
                  <div className="panel-elevated rounded-3xl p-6 sm:p-7 bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                    
                    {/* Top Browser Frame Mockup with Real Screenshot */}
                    <div className="mb-6">
                      <BrowserFrame
                        url={project.appUrl || `${project.id}.streamlit.app`}
                        title={primaryScreenshot.title}
                        badge="Shopfloor Live"
                        badgeColor="#10B981"
                        onExpand={() => openScreenshot(primaryScreenshot)}
                        aspectRatio="16/10"
                      >
                        <img
                          src={primaryScreenshot.cardUrl}
                          alt={primaryScreenshot.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top select-none group-hover:scale-[1.01] transition-transform duration-300"
                        />
                      </BrowserFrame>

                      {/* Mini Thumbnail Strip if multiple screens exist */}
                      {project.screenshots.length > 1 && (
                        <div className="flex items-center gap-2 mt-2.5 overflow-x-auto pb-1">
                          <span className="text-[10px] font-mono text-[#8B98AC] shrink-0">
                            {project.screenshots.length} Screens:
                          </span>
                          {project.screenshots.map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => openScreenshot(s)}
                              className="px-2 py-0.5 rounded-md bg-[#11161D] hover:bg-[#182234] border border-white/10 text-[10px] font-mono text-[#22D3EE] hover:text-white transition-colors cursor-pointer truncate max-w-[140px]"
                            >
                              {s.tag || s.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-[#3B82F6] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono font-bold text-[#8B98AC]">
                          0{idx + 1}
                        </span>
                      </div>

                      <p className="text-xs font-mono text-[#22D3EE] leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Problem vs Solution compact */}
                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-[#050505] border border-amber-500/15">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-0.5">
                            Business Problem:
                          </span>
                          <p className="text-[#8B98AC] leading-relaxed line-clamp-2">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#050505] border border-[#3B82F6]/20">
                          <span className="text-[10px] font-mono text-[#22D3EE] font-bold uppercase tracking-wider block mb-0.5">
                            Automation Solution:
                          </span>
                          <p className="text-[#F1F5F9]/90 leading-relaxed line-clamp-2">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Capabilities pills */}
                      <div className="space-y-1.5 pt-1">
                        {project.keyFeatures.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#8B98AC]">
                            <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 4).map((t, i) => (
                          <span key={i} className="tag-telemetry-muted text-[10px] py-0.5 px-2">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTAs */}
                    <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => openScreenshot(primaryScreenshot)}
                        className="btn-secondary-dark text-xs font-mono py-2 px-3 flex items-center gap-1.5 cursor-pointer border-[#1F2937] hover:border-[#3B82F6]"
                      >
                        <Maximize2 size={12} className="text-[#3B82F6]" />
                        <span>Expand Screenshot</span>
                      </button>

                      <a
                        href="#contact"
                        className="text-xs font-mono text-white hover:text-[#3B82F6] flex items-center gap-1 transition-colors"
                      >
                        <span>Start Similar Project</span>
                        <ArrowUpRight size={13} className="text-[#3B82F6]" />
                      </a>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>

      {/* Fullscreen Lightbox */}
      {selectedScreenshot && (
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          screenshots={allStreamlitScreenshots}
          initialIndex={allStreamlitScreenshots.findIndex(
            (s) => s.id === selectedScreenshot.id
          )}
          projectTitle="Streamlit Operational Dashboard Viewer"
        />
      )}
    </section>
  );
}
