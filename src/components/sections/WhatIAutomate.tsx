import React from 'react';
import { siteConfig } from '../../data/portfolio-data';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, ArrowUpRight, FileSpreadsheet, BarChart3, LayoutDashboard, Database, Cog, Factory } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { Tilt } from '@/components/ui/Tilt';

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'python-excel-automation': FileSpreadsheet,
  'automated-reporting': BarChart3,
  'streamlit-dashboards': LayoutDashboard,
  'data-processing-analysis': Database,
  'business-workflow-automation': Cog,
  'manufacturing-scm-automation': Factory,
};

export const WhatIAutomate: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-[#050505] relative z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading 
            label="Capabilities"
            title="What I Automate" 
            description="Replacing manual spreadsheet friction with robust Python automation engines and interactive decision-making dashboards."
            align="left"
            className="mb-0"
          />

          <div className="text-xs font-mono text-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>6 Core Automation Modules</span>
          </div>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[service.id] || FileSpreadsheet;
              
              let signalColor = '';
              if (index <= 1) signalColor = '#F5A524';
              else if (index <= 3) signalColor = '#3B82F6';
              else signalColor = '#A855F7';

              return (
                <StaggerItem key={service.id}>
                  <Tilt rotationFactor={6} glowColor={signalColor}>
                    <div 
                      className="panel-elevated rounded-2xl p-6 lg:p-8 flex flex-col justify-between group relative overflow-hidden h-full"
                    >
                      {/* Top Glowing Edge */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ background: `linear-gradient(to right, ${signalColor}, transparent)` }}
                      />

                      <div>
                        {/* Top Bar: Icon + Monospace Number */}
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 rounded-xl bg-[#080A0D] border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:text-white transition-colors shadow-lg">
                            <Icon size={22} />
                          </div>
                          <span className="font-mono text-2xl font-extrabold text-white/20 group-hover:text-primary/40 transition-colors">
                            {service.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                          {service.title}
                          <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </h3>

                        {/* Description */}
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Business Outcome Pill */}
                        <div className="p-3.5 rounded-xl bg-[#080A0D] border border-white/5 mb-6">
                          <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <CheckCircle2 size={13} />
                            Client Outcome
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {service.outcome}
                          </p>
                        </div>
                      </div>

                        {/* Tag Cloud */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-auto">
                        {service.examples.map((example, i) => (
                          <span key={i} className="tag-telemetry-muted text-[11px]">
                            {example}
                          </span>
                        ))}
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
