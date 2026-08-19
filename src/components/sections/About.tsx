import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Terminal, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#080A0D] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <SectionHeading
                label="Why Work With Me"
                title="Shopfloor Engineering Meets Python Craftsmanship"
                description="A unique dual-perspective combining 12+ years of manufacturing operations with custom digital automation."
                align="left"
                className="mb-6 font-display"
              />

              <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
                <p>
                  Most developers only see the raw spreadsheet schema. Having spent over 12 years inside automotive passenger vehicle assembly plants, bearing manufacturing lines, and PPC control rooms, I understand the operational urgency behind the spreadsheet — line starvation risks, supplier stock variances, changeover losses, and shift handovers.
                </p>
                <p>
                  Whether managing daily aggregate vehicle sequencing at <strong className="text-white">Tata Motors Passenger Vehicle Ltd</strong> or orchestrating Master Production Schedules (MPS) and SAP MRP runs at <strong className="text-white">Rheinmetall Automotive</strong>, I build automation tools that solve actual shopfloor bottlenecks.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-[#0D1117] border border-white/5">
                  <div className="text-2xl font-bold font-mono text-white mb-1">12+</div>
                  <div className="text-xs text-[#8B98AC] font-mono uppercase">Years Operations Experience</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#0D1117] border border-white/5">
                  <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">100%</div>
                  <div className="text-xs text-[#8B98AC] font-mono uppercase">Deterministic Python Code</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Realistic Python Code Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="panel-elevated rounded-3xl p-6 sm:p-7 border border-[#1F2937] bg-[#0D1117] font-mono text-xs shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[#8B98AC]">
                  <span className="flex items-center gap-2 text-[#3B82F6] font-bold">
                    <Terminal size={14} />
                    <span>ppc_optimizer.py</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Python 3.13
                  </span>
                </div>

                <pre className="text-[#94A3B8] overflow-x-auto leading-relaxed text-[11px] font-mono">
                  <code>{`# Automated PPC Line Balancer Engine
import pandas as pd
import numpy as np

def run_ppc_allocation(raw_files, plant_calendar):
    """
    Ingest multi-source float dumps &
    calculate FIFO clear-to-build queue
    """
    df_floats = parse_xlsb_streams(raw_files)
    df_bom = load_bom_master()
    
    # Audit component completeness
    shortages = df_floats[
        df_floats['stock'] < df_floats['min_float']
    ]
    
    # Calculate setup loss & schedule
    plan = balance_13_lines(
        df_floats, 
        setup_deductions={"major": 240, "minor": 60}
    )
    
    return plan.to_excel_styled("Daily_PPC_Plan.xlsx")`}</code>
                </pre>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8B98AC]">
                  <span className="flex items-center gap-1.5">
                    <Cpu size={13} className="text-[#06B6D4]" />
                    <span>Pandas • NumPy • OpenPyXL</span>
                  </span>
                  <span className="text-emerald-400 font-bold">Latency: &lt; 420ms</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
