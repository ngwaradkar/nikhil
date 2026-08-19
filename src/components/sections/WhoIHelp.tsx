import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/ScrollReveal";
import { Factory, Layers, FileSpreadsheet, LayoutDashboard, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

const audienceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Factory,
  Layers,
  FileSpreadsheet,
  LayoutDashboard,
};

export const WhoIHelp: React.FC = () => {
  return (
    <section id="who-i-help" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading
            label="Target Audience"
            title="Who I Build Automation For"
            description="Specialized operational engineering for teams whose core business workflows are constrained by manual spreadsheet friction, fragile formulas, and disconnected systems."
            align="left"
            className="mb-0 font-display"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#131A27] border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs shrink-0 shadow-lg">
            <ShieldCheck size={14} className="text-[#22D3EE]" />
            <span>Domain-Grounded Engineering</span>
          </div>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.targetAudience.map((audience, idx) => {
              const Icon = audienceIcons[audience.icon] || Factory;
              return (
                <StaggerItem key={audience.id}>
                  <div className="panel-elevated rounded-2xl p-6 h-full flex flex-col justify-between group relative overflow-hidden bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300">
                    {/* Top Accent Line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: audience.accent }}
                    />

                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="p-2.5 rounded-xl border"
                          style={{
                            backgroundColor: `${audience.accent}15`,
                            borderColor: `${audience.accent}30`,
                            color: audience.accent,
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-xs text-[#8B98AC] font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold font-display text-white group-hover:text-[#3B82F6] transition-colors mb-4">
                        {audience.title}
                      </h3>

                      {/* Pain Point */}
                      <div className="p-3 rounded-xl bg-[#050505] border border-red-500/15 mb-3 text-xs">
                        <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                          <AlertCircle size={12} className="text-amber-400 shrink-0" />
                          <span>The Operational Pain:</span>
                        </div>
                        <p className="text-[#8B98AC] leading-relaxed">
                          {audience.pain}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-3 rounded-xl bg-[#050505] border border-[#3B82F6]/20 text-xs">
                        <div className="flex items-center gap-1.5 text-[#22D3EE] font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                          <CheckCircle2 size={12} className="text-[#22D3EE] shrink-0" />
                          <span>The Automation Fix:</span>
                        </div>
                        <p className="text-[#F1F5F9]/90 leading-relaxed">
                          {audience.solution}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8B98AC]">
                      <span>Engineered for Production</span>
                      <ArrowRight size={12} className="text-[#3B82F6] group-hover:translate-x-1 transition-transform" />
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

export default WhoIHelp;
