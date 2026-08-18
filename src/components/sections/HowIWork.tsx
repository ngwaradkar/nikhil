import React from 'react';
import { siteConfig } from '../../data/portfolio-data';
import { SectionHeading } from '../ui/SectionHeading';
import { Search, LineChart, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stepIcons = [Search, LineChart, Code2, CheckCircle2];
const signalColors = ['#F5A524', '#3B82F6', '#A855F7', '#22D3EE'];
const signalBgColors = ['rgba(245,165,36,0.1)', 'rgba(59,130,246,0.1)', 'rgba(168,85,247,0.1)', 'rgba(34,211,238,0.1)'];

export const HowIWork: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-[#0A0E17] relative z-10">
      <div className="container-custom relative">
        <ScrollReveal>
          <SectionHeading 
            label="07 / Methodology"
            title="How I Work: 4-Step Framework" 
            description="A structured, risk-free workflow to turn your manual spreadsheets into reliable, automated digital systems."
            align="center"
            className="mb-16"
          />

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 signal-gradient-line z-0" />
            
            {/* Mobile Vertical Line */}
            <div className="lg:hidden absolute top-0 bottom-0 left-6 w-1 signal-gradient-line-vertical z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {siteConfig.process.map((step, idx) => {
                const Icon = stepIcons[idx] || CheckCircle2;
                const isLast = idx === siteConfig.process.length - 1;
                const color = signalColors[idx % 4];
                const bgColor = signalBgColors[idx % 4];

                return (
                  <div 
                    key={step.step}
                    className="panel-elevated rounded-2xl p-6 lg:p-7 flex flex-col justify-between group transition-all duration-300"
                    style={{ '--hover-border-color': color } as React.CSSProperties}
                  >
                    <style>{`
                      .panel-elevated:hover {
                        border-color: var(--hover-border-color);
                      }
                    `}</style>

                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors shadow-lg border border-white/10"
                          style={{ backgroundColor: bgColor, color: color }}
                        >
                          <Icon size={22} />
                        </div>
                        <span 
                          className="font-mono text-3xl font-extrabold transition-colors"
                          style={{ color: color, opacity: 0.8 }}
                        >
                          {step.step}
                        </span>
                      </div>

                      <h3 
                        className="text-lg font-display font-bold text-white mb-2.5 transition-colors"
                        style={{ '--hover-color': color } as React.CSSProperties}
                      >
                        {step.title}
                      </h3>

                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted mt-auto">
                      <span>{isLast ? 'Project Handover' : `Stage ${idx + 1} of 4`}</span>
                      {!isLast && <ArrowRight size={13} style={{ color: color }} className="group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center relative z-10">
            <a href="#contact" className="btn-primary-glow text-xs font-mono inline-flex items-center gap-2">
              Schedule a Workflow Review
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowIWork;
