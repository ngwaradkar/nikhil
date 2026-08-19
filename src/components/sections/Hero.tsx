import { siteConfig } from "../../data/portfolio-data";
import { ArrowRight, Sparkles, Building2, Factory, MessageSquare, ExternalLink, ShieldCheck, Clock, Layers, Database } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

const metricIcons = [Clock, Layers, Database, Factory];

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden bg-grid-engine bg-radial-glow bg-[#050505]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-[5%] left-[15%] w-[450px] h-[300px] rounded-full bg-[#F59E0B]/6 blur-[140px]" />
        <div className="absolute top-[15%] left-[35%] w-[500px] h-[350px] rounded-full bg-[#3B82F6]/8 blur-[130px]" />
        <div className="absolute top-[10%] right-[25%] w-[400px] h-[300px] rounded-full bg-[#06B6D4]/6 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[250px] rounded-full bg-[#10B981]/5 blur-[110px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Value Proposition Card */}
        <ScrollReveal className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          {/* Who I Am & Experience Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1117] border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs font-semibold tracking-wider uppercase mb-6 shadow-xl">
            <Sparkles size={12} className="text-[#22D3EE]" />
            <span>{siteConfig.personal.trustBadge}</span>
          </div>

          {/* Master Client-Focused Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-white leading-[1.16] font-display">
            I automate the Excel & reporting work your operations team{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              hates doing every day.
            </span>
          </h1>

          {/* Subtitle & Problem Definition */}
          <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] mb-5 font-medium max-w-2xl leading-relaxed">
            {siteConfig.personal.subHeadline}
          </p>

          {/* Positioning Statement */}
          <p className="text-xs sm:text-sm text-[#8B98AC] max-w-2xl leading-relaxed mb-8">
            <span className="text-white font-medium">
              An operations professional who can also build the automation
            </span>{" "}
            — bringing 12+ years of automotive shopfloor, PPC, and SCM experience to eliminate manual copy-paste errors, broken formulas, and delayed shift reports.
          </p>

          {/* 3 High-Converting CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8 w-full sm:w-auto">
            {/* 1. Primary: Send Me Your Workflow */}
            <a
              href="#contact"
              className="btn-primary-glow w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 shadow-lg shadow-[#3B82F6]/25 flex items-center justify-center gap-2"
            >
              <span>Send Me Your Workflow</span>
              <ArrowRight size={14} />
            </a>

            {/* 2. Secondary: Case Studies */}
            <a
              href="#case-studies"
              className="btn-secondary-dark w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 bg-[#0D1117] border-[#1F2937] hover:border-[#3B82F6] flex items-center justify-center gap-2"
            >
              <span>See Real Case Studies</span>
            </a>

            {/* 3. Direct WhatsApp Chat */}
            <a
              href={siteConfig.personal.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-xs sm:text-sm px-5 py-3.5 rounded-xl font-mono font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={15} className="fill-white text-emerald-600" />
              <span>WhatsApp Me</span>
            </a>
          </div>

          {/* Trust Bar Directly Below CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 text-xs font-mono text-[#8B98AC]">
            <span className="text-[#8B98AC] text-[11px]">
              Shopfloor expertise applied at:
            </span>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0D1117] border border-white/10 text-white font-bold text-[11px] sm:text-xs tracking-wider shadow-sm hover:border-[#3B82F6]/50 transition-colors">
                <Building2 size={13} className="text-[#3B82F6]" />
                <span>Tata Motors</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0D1117] border border-white/10 text-white font-bold text-[11px] sm:text-xs tracking-wider shadow-sm hover:border-[#F59E0B]/50 transition-colors">
                <Factory size={13} className="text-[#F59E0B]" />
                <span>Rheinmetall Automotive</span>
              </span>
            </div>

            <span className="text-white/20 hidden md:inline">•</span>

            {/* LinkedIn & GitHub Direct Proof Links */}
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#22D3EE] hover:underline"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink size={10} />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#94A3B8] hover:text-white"
              >
                <span>GitHub</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

        </ScrollReveal>

        {/* Real Results: Big Metric Proof Cards */}
        <ScrollReveal delay={0.15} className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[11px] font-mono text-[#8B98AC] uppercase tracking-widest">
              Verified Production Results & Shopfloor Evidence
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.heroMetrics.map((metric, idx) => {
              const Icon = metricIcons[idx % metricIcons.length];
              const accents = ["#3B82F6", "#06B6D4", "#10B981", "#F59E0B"];
              const accent = accents[idx % accents.length];

              return (
                <div
                  key={idx}
                  className="panel-elevated rounded-2xl p-5 bg-[#0D1117] border border-[#1F2937] hover:border-white/20 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: accent }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="p-2 rounded-xl border"
                        style={{
                          backgroundColor: `${accent}15`,
                          borderColor: `${accent}30`,
                          color: accent,
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      {metric.highlight && (
                        <span
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: `${accent}10`,
                            color: accent,
                          }}
                        >
                          {metric.highlight}
                        </span>
                      )}
                    </div>

                    <div className="text-2xl lg:text-3xl font-black font-mono text-white mb-1 tracking-tight">
                      {metric.value}
                    </div>

                    <div className="text-xs font-bold text-white mb-1.5">
                      {metric.label}
                    </div>

                    <p className="text-[11px] text-[#8B98AC] leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#8B98AC]">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck size={11} /> 100% Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;
