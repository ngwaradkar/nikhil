import { useState, useMemo } from "react";
import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Mail,
  MapPin,
  CheckCircle2,
  Calculator,
  Sparkles,
  Clock,
  DollarSign,
  Zap,
  MessageSquare,
  FileSpreadsheet,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

const ratePresets = [25, 30, 45, 60];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculator state
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(30);
  const [isCustomRate, setIsCustomRate] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    shareMethod: "Email file directly after quote",
    message: "",
  });

  // ROI calculations
  const calculation = useMemo(() => {
    const hoursSavedPerYear = Math.round(hoursPerWeek * 52 * 0.85);
    const annualCostSavings = Math.round(hoursSavedPerYear * hourlyRate);
    const daysSavedPerYear = Math.round(hoursSavedPerYear / 8);

    return {
      hoursSavedPerYear,
      annualCostSavings,
      daysSavedPerYear,
    };
  }, [hoursPerWeek, hourlyRate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roiSummary = `--- AUTOMATION ROI PROJECTION ---
• Manual Time Spent: ${hoursPerWeek} hrs/week (at $${hourlyRate}/hr)
• Projected Annual Time Saved: ~${calculation.hoursSavedPerYear.toLocaleString()} hours (~${calculation.daysSavedPerYear} full work days)
• Estimated Annual Cost Savings: $${calculation.annualCostSavings.toLocaleString()}
---------------------------------`;

    const fullMessage = `Name: ${formData.name}
Work Email: ${formData.email}
Workflow Subject: ${formData.subject || "Excel / PPC Automation Review Request"}
File Sharing Method: ${formData.shareMethod}

${roiSummary}

Workflow Description & Bottlenecks:
${formData.message}

Note: I can send sample spreadsheets / ERP dumps via Email, WhatsApp, or Google Drive for feasibility analysis.`;

    const mailtoUrl = `mailto:${siteConfig.personal.email}?subject=${encodeURIComponent(
      formData.subject
        ? `[Workflow Automation Request] ${formData.subject}`
        : "Excel / PPC Automation Review Request"
    )}&body=${encodeURIComponent(fullMessage)}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          {/* Section Heading */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <SectionHeading
              label="Get In Touch"
              title={siteConfig.contactForm.heading}
              description={siteConfig.contactForm.subheading}
              align="center"
              className="font-display"
            />

            {/* Quick Action Channels Strip */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-6">
              <a
                href={siteConfig.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all inline-flex items-center gap-2"
              >
                <MessageSquare size={15} className="fill-white text-emerald-600" />
                <span>WhatsApp (+91-8668634502)</span>
              </a>

              <a
                href={`mailto:${siteConfig.personal.email}`}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-[#0D1117] border border-white/10 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors inline-flex items-center gap-2"
              >
                <Mail size={14} className="text-[#3B82F6]" />
                <span>{siteConfig.personal.email}</span>
              </a>

              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-[#22D3EE] bg-[#0D1117] border border-[#06B6D4]/30 hover:border-[#22D3EE] transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Lead Generation Form ("Send Me Your Workflow") */}
            <div className="lg:col-span-7">
              <div className="panel-elevated p-6 sm:p-8 rounded-3xl border border-[#1F2937] bg-[#0D1117] h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white font-mono flex items-center gap-2">
                      <FileSpreadsheet size={20} className="text-[#3B82F6]" />
                      <span>Send Your Workflow for Review</span>
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Free Feasibility Review
                    </span>
                  </div>

                  <p className="text-xs text-[#8B98AC] mb-6">
                    Describe your manual process or spreadsheet bottlenecks. You can also send example files via Email, WhatsApp, or Google Drive after submitting.
                  </p>

                  {isSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-8">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-white font-mono">Workflow Details Prepared</h4>
                      <p className="text-xs text-[#8B98AC] leading-relaxed max-w-sm mx-auto">
                        Your default email client has opened with your workflow details. Please attach any sample files or spreadsheets and hit send!
                      </p>
                      <div className="pt-2 flex flex-wrap justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="btn-secondary-dark text-xs font-mono py-2 px-4 inline-flex items-center gap-1.5"
                        >
                          Submit Another Inquiry
                        </button>
                        <a
                          href={siteConfig.personal.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors inline-flex items-center gap-1.5"
                        >
                          <MessageSquare size={13} />
                          <span>Follow up on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Work Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-[#8B98AC]">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g. Anand Kulkarni"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1F2937] text-sm text-white placeholder:text-[#8B98AC]/50 focus:outline-none focus:border-[#3B82F6] transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-[#8B98AC]">
                            Work Email / Phone <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="anand@company.com or +91..."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1F2937] text-sm text-white placeholder:text-[#8B98AC]/50 focus:outline-none focus:border-[#3B82F6] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Process Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#8B98AC]">
                          Workflow / Process Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          placeholder="e.g. Daily PPC Float Report & Stock Shortage Automation"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1F2937] text-sm text-white placeholder:text-[#8B98AC]/50 focus:outline-none focus:border-[#3B82F6] transition-colors"
                        />
                      </div>

                      {/* File Sharing Preference */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#8B98AC]">
                          How will you share example spreadsheets?
                        </label>
                        <select
                          value={formData.shareMethod}
                          onChange={(e) =>
                            setFormData({ ...formData, shareMethod: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1F2937] text-xs text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                        >
                          <option value="Email files directly">Attach & email files directly</option>
                          <option value="Send via WhatsApp (+91-8668634502)">Send example file via WhatsApp (+91-8668634502)</option>
                          <option value="Share Google Drive / OneDrive link">Share Google Drive / OneDrive link</option>
                          <option value="Quick 15-min discovery call first">Schedule a quick 15-min call first</option>
                        </select>
                      </div>

                      {/* Process Description */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#8B98AC]">
                          Briefly Describe The Manual Steps & Bottlenecks <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Describe your current manual steps (e.g. 3 hours copying rows from SAP, #N/A formula breakages, multi-tab merging) and your desired automated output format..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1F2937] text-sm text-white placeholder:text-[#8B98AC]/50 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                        />
                      </div>

                      {/* Confidentiality Notice */}
                      <div className="p-3 rounded-xl bg-[#050505] border border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8B98AC]">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <ShieldCheck size={13} />
                          100% Confidential
                        </span>
                        <span>Direct review by Nikhil within 24 hours</span>
                      </div>

                      {/* CTA Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold text-white tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 border border-white/20 bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#06B6D4] shadow-[0_4px_22px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:translate-y-0 mt-2"
                      >
                        <Zap size={16} className="fill-amber-300 text-amber-300" />
                        <span>Send Workflow for Feasibility Review ⚡</span>
                      </button>
                    </form>
                  )}
                </div>

                {!isSubmitted && (
                  <div className="pt-4 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#8B98AC]">
                    <span>🔒 Strict NDA / Data Privacy Respected</span>
                    <span>No spam or marketing calls</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Interactive ROI / Automation Savings Calculator */}
            <div className="lg:col-span-5 space-y-6">
              <div className="panel-elevated p-6 lg:p-7 rounded-3xl border border-[#1F2937] bg-[#0D1117] relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Calculator Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30">
                      <Calculator size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white">
                        Automation ROI Calculator
                      </h3>
                      <p className="text-[11px] font-mono text-[#8B98AC]">
                        Calculate hours & cost saved by automating
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold">
                    ~85% Time Recaptured
                  </span>
                </div>

                {/* 1. Hours per Week Slider */}
                <div className="space-y-3 mb-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono text-white flex items-center gap-1.5">
                      <Clock size={13} className="text-[#F59E0B]" />
                      <span>Hours spent per week on spreadsheets:</span>
                    </label>
                    <span className="text-sm font-mono font-bold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-2.5 py-0.5 rounded-lg">
                      {hoursPerWeek} hrs / wk
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 rounded-lg bg-[#050505] border border-white/10 appearance-none cursor-pointer accent-[#3B82F6]"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-[#8B98AC]">
                    <span>1 hr (Single task)</span>
                    <span>20 hrs (Part-time)</span>
                    <span>40 hrs (Full role)</span>
                  </div>
                </div>

                {/* 2. Hourly Cost Presets */}
                <div className="space-y-2.5 mb-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono text-white flex items-center gap-1.5">
                      <DollarSign size={13} className="text-[#22D3EE]" />
                      <span>Estimated team hourly rate / cost:</span>
                    </label>
                    <span className="text-xs font-mono font-bold text-[#22D3EE]">
                      ${hourlyRate}/hr
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {ratePresets.map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => {
                          setHourlyRate(rate);
                          setIsCustomRate(false);
                        }}
                        className={`py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                          hourlyRate === rate && !isCustomRate
                            ? "bg-[#3B82F6] text-white border-[#3B82F6] font-bold shadow-md"
                            : "bg-[#050505] text-[#8B98AC] border-white/5 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        ${rate}/hr
                      </button>
                    ))}
                  </div>

                  {/* Custom Rate Toggle */}
                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setIsCustomRate(!isCustomRate)}
                      className="text-[#3B82F6] hover:underline cursor-pointer"
                    >
                      {isCustomRate ? "Use presets" : "+ Custom rate"}
                    </button>

                    {isCustomRate && (
                      <div className="flex items-center gap-1">
                        <span className="text-[#8B98AC]">$</span>
                        <input
                          type="number"
                          min="10"
                          max="300"
                          value={hourlyRate}
                          onChange={(e) =>
                            setHourlyRate(Math.max(1, Number(e.target.value)))
                          }
                          className="w-16 px-2 py-0.5 rounded bg-[#050505] border border-white/20 text-xs text-white font-mono focus:outline-none focus:border-[#3B82F6]"
                        />
                        <span className="text-[#8B98AC]">/hr</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Output Dynamic Calculation Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#050505] to-[#11161D] border border-[#3B82F6]/30 relative z-10 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8B98AC] border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1 text-[#3B82F6] font-semibold">
                      <Sparkles size={12} /> Projected Impact
                    </span>
                    <span>Annualized</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#0D1117]/90 border border-white/5">
                      <div className="text-[10px] font-mono text-[#8B98AC] uppercase">
                        Hours Saved / Year
                      </div>
                      <div className="text-xl font-bold font-mono text-[#22D3EE] mt-0.5">
                        ~{calculation.hoursSavedPerYear.toLocaleString()}{" "}
                        <span className="text-xs font-normal text-[#8B98AC]">hrs</span>
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 mt-1">
                        (~{calculation.daysSavedPerYear} work days)
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0D1117]/90 border border-white/5">
                      <div className="text-[10px] font-mono text-[#8B98AC] uppercase">
                        Annual Savings
                      </div>
                      <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                        ${calculation.annualCostSavings.toLocaleString()}
                      </div>
                      <div className="text-[10px] font-mono text-[#8B98AC] mt-1">
                        Labor recaptured
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Location & Availability Card */}
              <div className="p-4 rounded-2xl bg-[#0D1117] border border-white/5 text-xs font-mono text-[#8B98AC] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#3B82F6]" />
                  <span>{siteConfig.personal.location}</span>
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Projects
                </span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
