import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2, ArrowUpRight, FileSpreadsheet, BarChart3, LayoutDashboard, Factory, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Tilt } from "@/components/ui/Tilt";

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "python-excel-automation": FileSpreadsheet,
  "automated-reporting": BarChart3,
  "streamlit-dashboards": LayoutDashboard,
  "manufacturing-scm-automation": Factory,
};

const serviceAccents = [
  { color: "#3B82F6", bg: "bg-[#3B82F6]/10", border: "border-[#3B82F6]/30" },
  { color: "#06B6D4", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/30" },
  { color: "#10B981", bg: "bg-[#10B981]/10", border: "border-[#10B981]/30" },
  { color: "#F59E0B", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/30" },
];

export const WhatIAutomate: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Core Services"
            title="What I Automate"
            description="Specialized automation services designed to replace manual spreadsheet labor with deterministic Python code and interactive dashboards."
            align="left"
            className="mb-0 font-display"
          />

          <div className="text-xs font-mono text-[#8B98AC] flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D1117] border border-[#1F2937] shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Core Automation Offerings</span>
          </div>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[service.id] || FileSpreadsheet;
              const accent = serviceAccents[index % serviceAccents.length];

              return (
                <StaggerItem key={service.id}>
                  <Tilt rotationFactor={4} glowColor={accent.color}>
                    <div className="panel-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden h-full bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300">
                      {/* Top Glowing Edge */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, ${accent.color} 0%, transparent 100%)`,
                        }}
                      />

                      <div>
                        {/* Top Bar: Icon + Monospace Number */}
                        <div className="flex justify-between items-start mb-6">
                          <div
                            className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-lg transition-colors ${accent.bg} ${accent.border}`}
                            style={{ color: accent.color }}
                          >
                            <Icon size={22} />
                          </div>
                          <span className="font-mono text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                            {service.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-[#3B82F6] transition-colors flex items-center justify-between">
                          <span>{service.title}</span>
                          <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#3B82F6]" />
                        </h3>

                        {/* Description */}
                        <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Client Outcome Pill */}
                        <div className="p-3.5 rounded-xl bg-[#050505] border border-white/5 mb-6">
                          <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-emerald-400" />
                            <span>Client Outcome</span>
                          </div>
                          <p className="text-xs text-[#F1F5F9]/90 leading-relaxed">
                            {service.outcome}
                          </p>
                        </div>

                        {/* Typical Input & Output */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs font-mono">
                          <div className="p-2.5 rounded-xl bg-[#050505] border border-white/5">
                            <span className="text-[10px] text-[#8B98AC] uppercase block mb-1">Typical Input:</span>
                            <span className="text-[#94A3B8] font-sans text-xs">{service.typicalInput}</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#050505] border border-white/5">
                            <span className="text-[10px] text-[#22D3EE] uppercase block mb-1">Automated Output:</span>
                            <span className="text-[#F1F5F9] font-sans text-xs">{service.automatedOutput}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tag Cloud & Direct Action */}
                      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {service.examples.map((example, i) => (
                            <span key={i} className="tag-telemetry-muted text-[11px]">
                              {example}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          className="text-xs font-mono text-[#3B82F6] hover:text-white flex items-center gap-1 shrink-0 font-medium"
                        >
                          <span>Request Quote</span>
                          <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatIAutomate;
