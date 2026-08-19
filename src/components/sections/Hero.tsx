import { siteConfig } from "../../data/portfolio-data";
import { ArrowRight, Sparkles, CheckCircle2, Building2, Factory } from "lucide-react";
import { SignalFlowScene } from "../ui/SignalFlowScene";
import { ScrollReveal } from "../ui/ScrollReveal";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-grid-engine bg-radial-glow bg-[#050505]">
      
      {/* Background ambient lighting — multi-hue signal gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-[5%] left-[15%] w-[450px] h-[300px] rounded-full bg-[#F59E0B]/6 blur-[140px]" />
        <div className="absolute top-[15%] left-[35%] w-[500px] h-[350px] rounded-full bg-[#3B82F6]/8 blur-[130px]" />
        <div className="absolute top-[10%] right-[25%] w-[400px] h-[300px] rounded-full bg-[#06B6D4]/6 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[250px] rounded-full bg-[#10B981]/5 blur-[110px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Top Text & Value Proposition */}
        <ScrollReveal className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          
          {/* Trust / Experience Telemetry Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1117] border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs font-semibold tracking-wider uppercase mb-5 shadow-xl">
            <Sparkles size={12} className="text-[#22D3EE]" />
            <span>{siteConfig.personal.trustBadge}</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white leading-[1.14] font-display">
            Automate Your Excel Work.{" "}
            <span className="bg-gradient-to-r from-white via-[#A5F3FC] to-[#22D3EE] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              Turn Your Data Into Action.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg font-mono text-[#94A3B8] mb-4 font-medium max-w-2xl">
            {siteConfig.personal.subHeadline}
          </p>

          {/* Positioning statement */}
          <p className="text-xs sm:text-sm text-[#8B98AC] max-w-2xl leading-relaxed mb-6">
            {siteConfig.personal.positioningStatement}{" "}
            <span className="text-[#F1F5F9]/90">
              12+ years of automotive manufacturing and PPC/SCM operations combined with Python automation pipelines to build bulletproof business solutions.
            </span>
          </p>

          {/* Capability Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "1-Click Python Workflows",
              "Zero Human Copy-Paste",
              "100% Deterministic Validation",
              "Shopfloor Streamlit Web Apps",
              "13-Line Capacity Schedulers",
            ].map((item, idx) => (
              <span key={idx} className="tag-telemetry text-[11px] sm:text-xs py-1 px-3 bg-[#0D1117] border border-[#1F2937]">
                <CheckCircle2 size={12} className="text-emerald-400 mr-1.5 shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
            <a href="#projects" className="btn-primary-glow w-full sm:w-auto text-xs sm:text-sm px-6 py-3 shadow-lg shadow-[#3B82F6]/20">
              <span>Explore Verified Projects</span>
              <ArrowRight size={14} />
            </a>
            <a href="#contact" className="btn-secondary-dark w-full sm:w-auto text-xs sm:text-sm px-6 py-3 bg-[#0D1117] border-[#1F2937] hover:border-[#3B82F6]">
              <span>Start an Automation Project</span>
            </a>
          </div>

          {/* Trust Bar Directly Below CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-2 text-xs font-mono text-[#8B98AC]">
            <span className="text-[#8B98AC] text-[11px]">
              Applied domain expertise from operations at:
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
          </div>

        </ScrollReveal>

        {/* Signal Flow Scene */}
        <ScrollReveal delay={0.2} className="w-full max-w-5xl mx-auto mt-2">
          <SignalFlowScene />
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;
