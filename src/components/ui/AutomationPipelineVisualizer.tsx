import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  FileOutput, 
  LayoutDashboard, 
  Code2,
  Terminal,
  Clock,
  Zap
} from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  name: string;
  shortLabel: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
  borderColor: string;
  inputData: string;
  engineLogic: string;
  outputData: string;
  executionSpeed: string;
  status: string;
}

const pipelineStages: Stage[] = [
  {
    id: 'raw-inputs',
    step: 'STAGE 01',
    name: 'Raw Multi-Format Inputs',
    shortLabel: 'Raw Excel / CSV',
    icon: FileSpreadsheet,
    accent: 'text-primary',
    borderColor: 'border-primary/40',
    inputData: 'Multiple .xlsx, .xlsb, and ERP CSV files (e.g. daily PPC reports, BOM masters, inventory dumps)',
    engineLogic: 'Automated file ingestion engine parses multi-sheet workbooks and normalizes disparate column schemas into memory.',
    outputData: 'Clean in-memory DataFrames ready for validation',
    executionSpeed: '120ms',
    status: 'Ingested',
  },
  {
    id: 'python-processing',
    step: 'STAGE 02',
    name: 'Python Processing Engine',
    shortLabel: 'Python Engine',
    icon: Cpu,
    accent: 'text-secondary',
    borderColor: 'border-secondary/40',
    inputData: 'Parsed in-memory tabular data from stage 1',
    engineLogic: 'Vectorized Pandas & NumPy transformations, cross-sheet joins, null cleansing, and date-index alignments.',
    outputData: 'Unified relational schema without human copy-paste errors',
    executionSpeed: '450ms',
    status: 'Processed',
  },
  {
    id: 'validation-rules',
    step: 'STAGE 03',
    name: 'BOM & Schema Validation',
    shortLabel: 'Data Validation',
    icon: CheckCircle2,
    accent: 'text-success',
    borderColor: 'border-success/40',
    inputData: 'Unified DataFrame + BOM master rules',
    engineLogic: 'Automated sanity checks, BOM completeness verification, anomaly detection, and quality hold isolation.',
    outputData: '100% verified dataset with anomaly logs',
    executionSpeed: '180ms',
    status: 'Verified',
  },
  {
    id: 'business-logic',
    step: 'STAGE 04',
    name: 'Business & Capacity Logic',
    shortLabel: 'Business Logic',
    icon: Layers,
    accent: 'text-warning',
    borderColor: 'border-warning/40',
    inputData: 'Validated manufacturing dataset + plant calendar',
    engineLogic: 'FIFO clear-to-build allocation, setup loss deductions (240m/60m), 3-shift waterfall distribution, and Sunday/holiday skip.',
    outputData: 'Sequenced production quotas & shortage float matrices',
    executionSpeed: '320ms',
    status: 'Calculated',
  },
  {
    id: 'automated-output',
    step: 'STAGE 05',
    name: 'Automated Excel Deliverables',
    shortLabel: 'Excel Deliverable',
    icon: FileOutput,
    accent: 'text-violet',
    borderColor: 'border-violet/40',
    inputData: 'Calculated schedule & inventory matrices',
    engineLogic: 'OpenPyXL & XlsxWriter styling engines generate formatted management workbooks with automated freeze panes and formulas.',
    outputData: 'Official production plan (.xlsx) + Linewise PDF reports',
    executionSpeed: '650ms',
    status: 'Generated',
  },
  {
    id: 'streamlit-dashboard',
    step: 'STAGE 06',
    name: 'Live Streamlit Dashboard',
    shortLabel: 'Streamlit App',
    icon: LayoutDashboard,
    accent: 'text-primary',
    borderColor: 'border-primary/40',
    inputData: 'Live production data & automated outputs',
    engineLogic: 'Interactive web UI renders live shortage filters, VIN stage tracking, capacity gauges, and real-time alerts.',
    outputData: 'Interactive browser application accessible across shopfloor & leadership',
    executionSpeed: 'Live (60 FPS)',
    status: 'Live Web UI',
  },
];

export const AutomationPipelineVisualizer: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = pipelineStages[activeStageIndex];

  return (
    <div className="panel-surface rounded-2xl p-6 lg:p-8 border border-border/80 relative overflow-hidden">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
            <Zap size={18} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-text font-mono uppercase tracking-wider">
              Signature Automation Pipeline Architecture
            </h3>
            <p className="text-xs text-muted">
              Interactive end-to-end data transformation engine (Click stages to inspect)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-success font-semibold">
            Deterministic Engine • &lt; 2s End-to-End
          </span>
        </div>
      </div>

      {/* 6-Stage Interactive Stepper Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {pipelineStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStageIndex === idx;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                isSelected
                  ? `bg-[#11161D] ${stage.borderColor} shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-primary/40`
                  : 'bg-[#080A0D] border-border/60 hover:border-border hover:bg-[#0D1117]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-1.5 rounded-md bg-surface border border-border ${stage.accent}`}>
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-mono font-bold text-muted">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">
                  {stage.step}
                </div>
                <div className="text-xs font-bold text-text leading-tight truncate">
                  {stage.shortLabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Stage Inspection Card */}
      <div className="panel-elevated rounded-xl p-5 lg:p-6 border border-border/80 bg-[#080A0D]">
        
        {/* Stage Sub-Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold">
              {activeStage.step}
            </span>
            <h4 className="text-base font-bold text-text font-mono">
              {activeStage.name}
            </h4>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-muted">
            <span className="flex items-center gap-1.5 text-secondary">
              <Clock size={13} />
              Latency: {activeStage.executionSpeed}
            </span>
            <span className="flex items-center gap-1.5 text-success">
              <CheckCircle2 size={13} />
              {activeStage.status}
            </span>
          </div>
        </div>

        {/* 3-Column Inspection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          
          {/* Input */}
          <div className="p-3.5 rounded-lg bg-[#0D1117] border border-border">
            <div className="text-muted text-[11px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Terminal size={12} className="text-primary" />
              Input Specification
            </div>
            <p className="text-text-secondary leading-relaxed font-sans text-xs">
              {activeStage.inputData}
            </p>
          </div>

          {/* Engine Transformation */}
          <div className="p-3.5 rounded-lg bg-[#0D1117] border border-border">
            <div className="text-muted text-[11px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Code2 size={12} className="text-secondary" />
              Automated Processing Rules
            </div>
            <p className="text-text-secondary leading-relaxed font-sans text-xs">
              {activeStage.engineLogic}
            </p>
          </div>

          {/* Output */}
          <div className="p-3.5 rounded-lg bg-[#0D1117] border border-border">
            <div className="text-muted text-[11px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-success" />
              Standardized Deliverable
            </div>
            <p className="text-text-secondary leading-relaxed font-sans text-xs">
              {activeStage.outputData}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
