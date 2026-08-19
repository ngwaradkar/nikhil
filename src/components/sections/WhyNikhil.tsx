import React from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/ScrollReveal";
import {
  Factory,
  Briefcase,
  ShieldCheck,
  Zap,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

const whyIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Factory,
  Briefcase,
  ShieldCheck,
  Zap,
};

export const WhyNikhil: React.FC = () => {
  return (
    <section id="why-nikhil" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom">
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeading
            label="The Core Differentiator"
            title="Why Work With Nikhil?"
            description="Most freelance coders only look at spreadsheet cells. Having spent 12+ years on the automotive shopfloor, I understand the operational stakes behind every single number."
            align="center"
            className="font-display"
          />

          {/* Positioning Highlight Banner */}
          <div className="inline-flex items-center gap-2 p-3 sm:px-6 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#3B82F6]/10 via-[#06B6D4]/10 to-[#10B981]/10 border border-[#3B82F6]/30 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg">
            <Sparkles size={15} className="text-[#22D3EE] shrink-0" />
            <span>An Operations Specialist who codes — NOT a developer guessing manufacturing logic.</span>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {siteConfig.whyNikhil.map((item, idx) => {
              const Icon = whyIcons[item.icon] || Factory;

              return (
                <StaggerItem key={item.id}>
                  <div className="panel-elevated rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full group relative overflow-hidden bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300">
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: item.accent }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="p-3 rounded-2xl border"
                          style={{
                            backgroundColor: `${item.accent}15`,
                            borderColor: `${item.accent}30`,
                            color: item.accent,
                          }}
                        >
                          <Icon size={22} />
                        </div>
                        <span className="font-mono text-xs text-[#8B98AC] font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white group-hover:text-[#3B82F6] transition-colors mb-3 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-[#8B98AC] flex items-center justify-between">
                      <span>Operational Edge</span>
                      <CheckCircle2 size={13} style={{ color: item.accent }} />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Real Code & Shopfloor Synergy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto panel-elevated rounded-3xl p-6 sm:p-10 bg-[#0D1117] border border-[#1F2937]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-mono text-[#3B82F6] uppercase font-bold tracking-wider block">
              12+ Years Enterprise Grounding
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight">
              Bridging the gap between messy shopfloor reality and clean automation.
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              When I automate a PPC workflow, I already know what <strong className="text-white">PBS buffer aging</strong>, <strong className="text-white">TCF sequencing constraints</strong>, <strong className="text-white">major setup losses</strong>, and <strong className="text-white">SAP PP/MM dumps</strong> mean.
            </p>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              You won't waste weeks explaining the fundamentals of manufacturing planning. We jump straight to analyzing your spreadsheets and delivering working automations.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="btn-primary-glow text-xs font-mono inline-flex items-center gap-2 py-2.5 px-5"
              >
                <span>Discuss Your Workflow Challenge</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl p-5 bg-[#050505] border border-white/10 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-[#8B98AC]">
                <span className="flex items-center gap-1.5 text-[#3B82F6] font-bold">
                  <Terminal size={13} />
                  <span>shopfloor_engine.py</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Domain Rules
                </span>
              </div>

              <pre className="text-[#CBD5E1] overflow-x-auto leading-relaxed text-[11px]">
                <code>{`# Real PPC & SCM Domain Logic
def allocate_assembly_tracks(pbs_float, raw_stock):
    # 1. Deduct setup changeovers (240m Major / 60m Minor)
    available_minutes = 1320 - calculate_setup_losses()
    
    # 2. FIFO Clear-To-Build allocation
    clear_vehicles = match_bom_against_stock(
        pbs_float, raw_stock
    )
    
    # 3. Prevent line starvation on TCF1 & TCF2
    return balance_track_flow(clear_vehicles)`}</code>
              </pre>

              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#8B98AC]">
                <span>Inputs: SAP PP • Float Sheets • BOM</span>
                <span className="text-emerald-400 font-bold">Output: 100% Deterministic</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyNikhil;
