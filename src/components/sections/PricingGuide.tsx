import React from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/ScrollReveal";
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const PricingGuide: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionHeading
            label="Engagement Models"
            title="Typical Project Scopes"
            description="Transparent, fixed-scope consulting packages tailored for operational teams — from rapid Excel fixes to full web-based operations hubs."
            align="left"
            className="mb-0 font-display"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#131A27] border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs shrink-0 shadow-lg">
            <ShieldCheck size={14} className="text-[#22D3EE]" />
            <span>Risk-Free Milestone Delivery</span>
          </div>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {siteConfig.pricingTiers.map((tier) => {
              const isPopular = tier.popular;

              return (
                <StaggerItem key={tier.id}>
                  <div
                    className={`panel-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 ${
                      isPopular
                        ? "bg-[#0D1524] border-2 border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                        : "bg-[#0D1117] border border-[#1F2937] hover:border-white/20"
                    }`}
                  >
                    {/* Popular Pill */}
                    {tier.badge && (
                      <div className="absolute top-0 right-0">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-2xl inline-flex items-center gap-1 ${
                            isPopular
                              ? "bg-[#3B82F6] text-white shadow-md"
                              : "bg-[#182234] text-[#22D3EE] border-b border-l border-white/10"
                          }`}
                        >
                          {isPopular && <Sparkles size={11} />}
                          <span>{tier.badge}</span>
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Turnaround Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#050505] border border-white/10 text-[#8B98AC] font-mono text-[11px] mb-4">
                        <Clock size={12} className="text-[#F59E0B]" />
                        <span>Turnaround: {tier.turnaround}</span>
                      </div>

                      {/* Tier Title */}
                      <h3 className="text-xl font-bold font-display text-white mb-2">
                        {tier.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                        {tier.description}
                      </p>

                      {/* Ideal For Pill */}
                      <div className="p-3 rounded-xl bg-[#050505] border border-white/5 mb-6 text-xs">
                        <span className="text-[10px] font-mono text-[#22D3EE] uppercase font-bold block mb-1">
                          Best Suited For:
                        </span>
                        <p className="text-[#8B98AC]">
                          {tier.idealFor}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2.5 mb-8">
                        <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                          Included Deliverables:
                        </span>
                        <ul className="space-y-2">
                          {tier.deliverables.map((del, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                              <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                                <Check size={11} />
                              </div>
                              <span className="leading-snug">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-white/5 mt-auto">
                      <a
                        href="#contact"
                        className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                          isPopular
                            ? "btn-primary-glow shadow-md shadow-[#3B82F6]/30"
                            : "btn-secondary-dark bg-[#050505] border-white/10 hover:border-[#3B82F6]"
                        }`}
                      >
                        <Zap size={13} className={isPopular ? "fill-amber-300 text-amber-300" : "text-[#3B82F6]"} />
                        <span>Request Feasibility & Quote</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Custom Scope Callout */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-[#0D1117] border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs text-[#8B98AC] font-mono mb-2">
            Have a unique multi-line plant requirement or enterprise SAP integration?
          </p>
          <a
            href={siteConfig.personal.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-[#22D3EE] hover:underline font-bold inline-flex items-center gap-1"
          >
            <span>Chat directly on WhatsApp to discuss a tailored scope</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingGuide;
