import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  FileSpreadsheet, 
  Copy, 
  Calculator, 
  AlertCircle, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Layers,
  FileCheck2,
  TrendingUp,
  XCircle
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const beforeSteps = [
  { step: '01', title: 'Multiple Disparate Workbooks', desc: 'Raw dumps from ERP, MES, and local spreadsheets in mismatched formats', icon: FileSpreadsheet },
  { step: '02', title: 'Manual Copy-Pasting', desc: 'Planners spend hours copying rows, stitching tabs, and formatting layouts', icon: Copy },
  { step: '03', title: 'Fragile VLOOKUPs & Formulas', desc: 'Formula breakages (#N/A, #REF!) when columns shift or row counts change', icon: Calculator },
  { step: '04', title: 'Unnoticed Calculation Errors', desc: 'Fatigue causes missed shortages, unspotted duplicate VINs, and inventory gaps', icon: AlertCircle },
  { step: '05', title: 'Delayed Decision Making', desc: 'Shift reports take hours to produce, delaying critical line decisions', icon: Clock },
];

const afterSteps = [
  { step: '01', title: '1-Click Multi-File Upload', desc: 'Instant parsing of .xlsx, .xlsb, and CSV dumps without manual touch', icon: Zap },
  { step: '02', title: 'Automated Python Pipeline', desc: 'Vectorized in-memory Pandas cleaning and joins executed in milliseconds', icon: Cpu },
  { step: '03', title: 'Automated BOM & Schema Audit', desc: 'Deterministic validation catches missing parts and anomalies automatically', icon: CheckCircle2 },
  { step: '04', title: 'Automated Business Rules', desc: 'FIFO clear-to-build sequencing, setup loss deductions, and holiday logic', icon: Layers },
  { step: '05', title: 'Live Dashboard & Formatted Excel', desc: 'Executive status decks, formatted Excel plans, and real-time Streamlit views', icon: FileCheck2 },
];

export const BusinessImpact: React.FC = () => {
  return (
    <section id="transformation" className="section-padding bg-[#080A0D] relative z-10 border-y border-white/5">
      <ScrollReveal>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading 
              label="Business Transformation"
              title="The Shift: Manual vs. Automated" 
              description="Comparing the high-risk friction of manual spreadsheet work against the reliability of automated Python systems."
              align="left"
              className="mb-0"
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/25 text-primary font-mono text-xs">
              <TrendingUp size={14} className="text-emerald-400" />
              <span>Target: Hours of friction ➔ Seconds of execution</span>
            </div>
          </div>

          {/* Side-by-side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Before Column */}
            <ScrollReveal delay={0}>
              <div className="panel-surface rounded-2xl p-6 lg:p-8 border-t-4 border-t-[#F5A524]/80 relative overflow-hidden bg-[#0A0D12]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-2 text-[#F5A524] font-mono text-sm font-bold tracking-wider uppercase">
                    <XCircle size={18} />
                    <span>Manual Spreadsheet Process (Before)</span>
                  </div>
                  <span className="text-xs font-mono text-muted">High Error Risk</span>
                </div>

                <div className="space-y-4">
                  {beforeSteps.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.step} className="p-3.5 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-3.5 group">
                        <div className="p-2 rounded-lg bg-[#F5A524]/10 text-[#F5A524] shrink-0 mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white group-hover:text-[#F5A524] transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono text-muted">{item.step}</span>
                          </div>
                          <p className="text-xs text-muted leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* After Column */}
            <ScrollReveal delay={0.2}>
              <div className="panel-surface rounded-2xl p-6 lg:p-8 border-t-4 border-t-[#22D3EE]/80 relative overflow-hidden bg-[#0A0D12]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-2 text-[#22D3EE] font-mono text-sm font-bold tracking-wider uppercase">
                    <CheckCircle2 size={18} />
                    <span>Automated Python Pipeline (After)</span>
                  </div>
                  <span className="text-xs font-mono text-[#3B82F6] font-bold">100% Deterministic</span>
                </div>

                <div className="space-y-4">
                  {afterSteps.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.step} className="p-3.5 rounded-xl bg-[#050505] border border-white/5 flex items-start gap-3.5 group hover:border-primary/40 transition-colors">
                        <div className="p-2 rounded-lg bg-[#22D3EE]/10 text-[#22D3EE] shrink-0 mt-0.5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono text-[#22D3EE] font-bold">{item.step}</span>
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BusinessImpact;
