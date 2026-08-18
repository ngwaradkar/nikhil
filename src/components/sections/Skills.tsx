import React, { useState } from 'react';
import { siteConfig } from '../../data/portfolio-data';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Layers, Database, Cpu, LayoutDashboard, Sparkles, CheckCircle2 } from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Business Domain': Layers,
  ERP: Database,
  Automation: Cpu,
  'Data & Dashboards': LayoutDashboard,
  'AI & Reporting': Sparkles,
};

export default function Skills() {
  const skillCategories = Object.entries(siteConfig.skills);
  const [activeCategory, setActiveCategory] = useState(skillCategories[0][0]);

  return (
    <section id="skills" className="section-padding bg-[#0A0E17] relative z-10 border-y border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading 
            label="Core Competencies"
            title="Skills & Technical Stack" 
            description="Deep manufacturing shopfloor domain knowledge combined with modern Python automation, SAP ERP workflows, and Streamlit data applications."
            align="center"
            className="mb-14 font-display"
          />

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map(([category]) => {
              const Icon = categoryIcons[category] || Layers;
              const isSelected = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                      : 'bg-[#131A27] text-text-secondary border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="max-w-4xl mx-auto panel-elevated rounded-2xl p-6 lg:p-8 border border-white/10 bg-[#131A27]">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              <h3 className="text-base font-bold font-display text-white font-mono uppercase tracking-wider">
                {activeCategory} Stack & Modules
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {siteConfig.skills[activeCategory as keyof typeof siteConfig.skills]?.map((skill, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-[#0A0E17] border border-white/5 flex items-center gap-2.5 text-xs text-text-secondary hover:text-white hover:border-[#3B82F6]/40 transition-colors"
                >
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span className="font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
