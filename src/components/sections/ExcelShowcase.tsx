import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  FileSpreadsheet, 
  Cpu, 
  FileCheck, 
  ArrowRight,
  Sparkles,
  Play,
  Layers
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const pipelineStages = [
  {
    step: 'STAGE 01',
    title: 'Disparate Input Ingestion',
    icon: FileSpreadsheet,
    accent: 'text-[#F5A524]',
    bgAccent: 'bg-[#F5A524]/10',
    borderAccent: 'border-[#F5A524]/20',
    color: '#F5A524',
    details: 'Automated readers ingest SAP PP dumps (.xlsx), MES float extracts (.xlsb), and supplier stock files without manual file opening.',
    items: ['Multi-tab extraction', 'Header schema alignment', 'pyxlsb byte decompression', 'Date index standardization'],
  },
  {
    step: 'STAGE 02',
    title: 'Vectorized Processing',
    icon: Cpu,
    accent: 'text-[#3B82F6]',
    bgAccent: 'bg-[#3B82F6]/10',
    borderAccent: 'border-[#3B82F6]/20',
    color: '#3B82F6',
    details: 'Python Pandas & NumPy pipelines execute joins and aggregations in-memory across 50,000+ rows in milliseconds.',
    items: ['BOM reconciliation', 'Cross-worksheet matching', 'Zero formula lag (#N/A free)', 'Outlier cleansing'],
  },
  {
    step: 'STAGE 03',
    title: 'Capacity & Business Rules',
    icon: Layers,
    accent: 'text-[#A855F7]',
    bgAccent: 'bg-[#A855F7]/10',
    borderAccent: 'border-[#A855F7]/20',
    color: '#A855F7',
    details: 'Incorporates plant setup constraints, major/minor changeover deductions, 3-shift splits, and holiday calendars.',
    items: ['13-Line capacity balance', 'Setup loss deduction (240m/60m)', 'FIFO line allocation', 'Shift auto-reset logic'],
  },
  {
    step: 'STAGE 04',
    title: 'Formatted Deliverables',
    icon: FileCheck,
    accent: 'text-[#22D3EE]',
    bgAccent: 'bg-[#22D3EE]/10',
    borderAccent: 'border-[#22D3EE]/20',
    color: '#22D3EE',
    details: 'OpenPyXL & XlsxWriter format the final sheets with corporate styling, column auto-fit, and visual KPI status.',
    items: ['Executive summary tab', 'Linewise production schedule', 'Automated PDF generation', 'Pre-formatted print views'],
  },
];

export default function ExcelShowcase() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="pipeline" className="section-padding bg-[#080A0D] relative z-10 border-y border-white/5">
      <ScrollReveal>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading 
              label="Architecture"
              title="Excel Automation Engine Blueprint" 
              description="How custom Python automation transforms fragile, manual spreadsheets into reliable, 1-click execution pipelines."
              align="left"
              className="mb-0"
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/25 text-primary font-mono text-xs">
              <Sparkles size={14} className="text-secondary" />
              <span>Deterministic Workflow Engine</span>
            </div>
          </div>

          {/* 4 Pipeline Stages */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {pipelineStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = activeStage === idx;

                return (
                  <StaggerItem key={stage.step}>
                    <div 
                      onClick={() => setActiveStage(idx)}
                      className={`panel-elevated rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 relative overflow-hidden h-full ${
                        isSelected ? 'bg-[#11161D]' : 'hover:border-white/20'
                      }`}
                      style={{ 
                        borderColor: isSelected ? stage.color : undefined,
                        boxShadow: isSelected ? `0 0 0 1px ${stage.color}66` : undefined
                      }}
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0'
                      }`} style={{ backgroundColor: stage.color }} />

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${stage.accent} ${stage.bgAccent} border ${stage.borderAccent}`}>
                            {stage.step}
                          </span>
                          <span className="text-xs font-mono text-muted">0{idx + 1}</span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-[#080A0D] border border-white/10 ${stage.accent}`}>
                            <Icon size={18} />
                          </div>
                          <h3 className="text-sm font-bold text-white">
                            {stage.title}
                          </h3>
                        </div>

                        <p className="text-xs text-text-secondary leading-relaxed mb-4">
                          {stage.details}
                        </p>

                        <ul className="space-y-1.5 text-xs text-muted mb-4">
                          {stage.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className={stage.accent}>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted mt-auto">
                        <span>{idx < 3 ? `Flows to Stage 0${idx + 2}` : 'Deliverable Ready'}</span>
                        {idx < 3 && <ArrowRight size={12} className={stage.accent} />}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          {/* 1-Click Execution Banner */}
          <div className="panel-surface rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0A0D12]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Play size={18} className="fill-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-mono">1-Click Execution & Zero Maintenance</h4>
                <p className="text-xs text-muted">Ingests raw transactional workbooks ➔ Runs validation rules ➔ Outputs executive deliverables in seconds.</p>
              </div>
            </div>

            <a href="#contact" className="btn-secondary-dark text-xs font-mono py-2.5 px-4 shrink-0">
              Automate Your Workflow
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
