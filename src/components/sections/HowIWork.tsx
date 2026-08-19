import React from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { Search, LineChart, CheckCircle2, ArrowRight, UploadCloud, Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stepIcons = [UploadCloud, Search, LineChart, Cpu, CheckCircle2];
const stepAccents = [
  { color: "#3B82F6", bg: "bg-[#3B82F6]/10", border: "border-[#3B82F6]/30" },
  { color: "#06B6D4", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/30" },
  { color: "#F59E0B", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/30" },
  { color: "#8B5CF6", bg: "bg-[#8B5CF6]/10", border: "border-[#8B5CF6]/30" },
  { color: "#10B981", bg: "bg-[#10B981]/10", border: "border-[#10B981]/30" },
];

export const HowIWork: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom relative">
        <ScrollReveal>
          <SectionHeading
            label="Collaboration Framework"
            title="How We Work Together (5 Simple Steps)"
            description="A structured, risk-free consulting process designed to turn messy spreadsheets into reliable Python pipelines without disrupting your daily operations."
            align="center"
            className="mb-16 font-display"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
            {siteConfig.process.map((step, idx) => {
              const Icon = stepIcons[idx] || CheckCircle2;
              const isLast = idx === siteConfig.process.length - 1;
              const accent = stepAccents[idx % stepAccents.length];

              return (
                <div
                  key={step.step}
                  className="panel-elevated rounded-2xl p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 bg-[#0D1117] border border-[#1F2937] hover:border-white/20 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: accent.color }}
                  />

                  <div>
                    {/* Top Row: Icon, Step Number & Timeframe */}
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-lg border ${accent.bg} ${accent.border}`}
                        style={{ color: accent.color }}
                      >
                        <Icon size={20} />
                      </div>
                      <span
                        className="font-mono text-2xl font-black transition-colors"
                        style={{ color: accent.color, opacity: 0.8 }}
                      >
                        {step.step}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-[#8B98AC] uppercase tracking-wider mb-2 font-semibold">
                      {step.timeframe}
                    </div>

                    <h3 className="text-sm sm:text-base font-display font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-[#94A3B8] text-xs leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#8B98AC] mt-auto">
                    <span>{isLast ? "Ready to Use" : `Phase 0${idx + 1}`}</span>
                    {!isLast && (
                      <ArrowRight size={12} style={{ color: accent.color }} className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center relative z-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary-glow text-xs font-mono inline-flex items-center gap-2 px-6 py-3">
              <span>Send Me Your Workflow to Start</span>
              <ArrowRight size={14} />
            </a>

            <a
              href={siteConfig.personal.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-dark text-xs font-mono inline-flex items-center gap-2 px-5 py-3 border-[#1F2937] hover:border-emerald-400 hover:text-emerald-400"
            >
              <span>Quick WhatsApp Consultation</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowIWork;
