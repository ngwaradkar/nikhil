import React from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { Search, LineChart, Code2, CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stepIcons = [Search, LineChart, Code2, CheckCircle2];
const stepAccents = [
  { color: "#F59E0B", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/30" },
  { color: "#3B82F6", bg: "bg-[#3B82F6]/10", border: "border-[#3B82F6]/30" },
  { color: "#06B6D4", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/30" },
  { color: "#10B981", bg: "bg-[#10B981]/10", border: "border-[#10B981]/30" },
];

export const HowIWork: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom relative">
        <ScrollReveal>
          <SectionHeading
            label="Execution Methodology"
            title="How I Work: 4-Step Engineering Framework"
            description="A structured, risk-free consulting process to convert messy operational spreadsheets into bulletproof Python pipelines and live dashboards."
            align="center"
            className="mb-16 font-display"
          />

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 signal-gradient-line z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {siteConfig.process.map((step, idx) => {
                const Icon = stepIcons[idx] || CheckCircle2;
                const isLast = idx === siteConfig.process.length - 1;
                const accent = stepAccents[idx % stepAccents.length];

                return (
                  <div
                    key={step.step}
                    className="panel-elevated rounded-2xl p-6 lg:p-7 flex flex-col justify-between group transition-all duration-300 bg-[#0D1117] border border-[#1F2937] hover:border-white/20 relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: accent.color }}
                    />

                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shadow-lg border ${accent.bg} ${accent.border}`}
                          style={{ color: accent.color }}
                        >
                          <Icon size={22} />
                        </div>
                        <span
                          className="font-mono text-3xl font-black transition-colors"
                          style={{ color: accent.color, opacity: 0.8 }}
                        >
                          {step.step}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2.5 group-hover:text-[#3B82F6] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8B98AC] mt-auto">
                      <span>{isLast ? "Project Handover" : `Stage 0${idx + 1} of 04`}</span>
                      {!isLast && (
                        <ArrowRight size={13} style={{ color: accent.color }} className="group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 text-center relative z-10">
            <a href="#contact" className="btn-primary-glow text-xs font-mono inline-flex items-center gap-2">
              <span>Discuss Your Workflow Requirements</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowIWork;
