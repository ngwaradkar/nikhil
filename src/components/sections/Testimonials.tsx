import React from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/ScrollReveal";
import { Quote, Building2, Sparkles, ShieldCheck } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Client Endorsements"
            title="What Operations Leaders Say"
            description="Direct feedback from manufacturing plant managers, PPC leads, and supply chain heads on delivered automations."
            align="left"
            className="mb-0 font-display"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#131A27] border border-[#10B981]/30 text-emerald-400 font-mono text-xs shrink-0 shadow-lg">
            <ShieldCheck size={14} />
            <span>Proven Enterprise Impact</span>
          </div>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {siteConfig.testimonials.map((t, idx) => {
              const accents = ["#3B82F6", "#10B981", "#06B6D4"];
              const accent = accents[idx % accents.length];

              return (
                <StaggerItem key={t.id}>
                  <div className="panel-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden h-full bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300">
                    {/* Top Accent Line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: accent }}
                    />

                    <div>
                      {/* Top Bar: Outcome Badge & Quote Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className="text-[11px] font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5"
                          style={{
                            backgroundColor: `${accent}15`,
                            borderColor: `${accent}30`,
                            color: accent,
                          }}
                        >
                          <Sparkles size={12} />
                          <span>{t.outcomeBadge}</span>
                        </span>

                        <div className="p-2 rounded-xl bg-white/5 text-[#8B98AC] group-hover:text-white transition-colors">
                          <Quote size={18} />
                        </div>
                      </div>

                      {/* Quote Body */}
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6 italic">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Attribution */}
                    <div className="pt-4 border-t border-white/5 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white font-display">
                            {t.name}
                          </h4>
                          <p className="text-xs text-[#8B98AC]">
                            {t.designation}
                          </p>
                          <div className="text-[11px] font-mono text-[#3B82F6] mt-0.5 flex items-center gap-1">
                            <Building2 size={11} />
                            <span>{t.company}</span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {t.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
