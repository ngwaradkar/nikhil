import { useState } from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Layers, Database, Cpu, LayoutDashboard, CheckCircle2 } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Business Domain": Layers,
  "Enterprise Systems (ERP)": Database,
  "Python Automation Engine": Cpu,
  "Operational Dashboards": LayoutDashboard,
};

export default function Skills() {
  const skillCategories = Object.entries(siteConfig.skills);
  const [activeCategory, setActiveCategory] = useState(skillCategories[0][0]);

  return (
    <section id="skills" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            label="Domain & Technical Competencies"
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
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-lg shadow-[#3B82F6]/25 font-bold"
                      : "bg-[#0D1117] text-[#8B98AC] border-[#1F2937] hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="max-w-4xl mx-auto panel-elevated rounded-3xl p-6 sm:p-8 border border-[#1F2937] bg-[#0D1117]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
                <h3 className="text-base font-bold font-display text-white font-mono uppercase tracking-wider">
                  {activeCategory} Architecture
                </h3>
              </div>
              <span className="text-xs font-mono text-[#22D3EE] font-bold">
                {siteConfig.skills[activeCategory as keyof typeof siteConfig.skills]?.length || 0} Modules
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {siteConfig.skills[activeCategory as keyof typeof siteConfig.skills]?.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#050505] border border-white/5 flex items-center gap-2.5 text-xs text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/40 transition-colors"
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
