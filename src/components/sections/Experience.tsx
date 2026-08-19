import { siteConfig } from "../../data/portfolio-data";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Building2,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  FileCheck,
  Award,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#050505] relative z-10 border-t border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            label="Industry Track Record"
            title="12+ Years Manufacturing & Operations Domain Depth"
            description="Proven background across automotive passenger vehicle assembly, tier-1 bearing manufacturing, master production scheduling (MPS), SAP PP/MM, and custom Python workflow automation."
            align="center"
            className="mb-16 font-display"
          />
        </ScrollReveal>

        {/* Current Engagement Card: Tata Motors Passenger Vehicle Ltd */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-14">
            <div className="panel-elevated rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#3B82F6]/40 relative overflow-hidden bg-[#0D1117] shadow-[0_0_50px_rgba(59,130,246,0.15)]">
              
              {/* Top Badge */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#3B82F6] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-bl-2xl flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Current Professional Role</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pt-3">
                <div>
                  <div className="flex items-center gap-2 text-[#22D3EE] font-mono text-xs font-semibold uppercase tracking-wider mb-1.5">
                    <Building2 size={15} />
                    <span>{siteConfig.currentRole.department}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {siteConfig.currentRole.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8B98AC]">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#3B82F6]" /> {siteConfig.currentRole.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-emerald-400" /> {siteConfig.currentRole.period}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                {siteConfig.currentRole.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#3B82F6]" />
                  <span>Key Operations & Responsibilities</span>
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {siteConfig.currentRole.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {siteConfig.currentRole.highlights.map((h, i) => (
                  <span key={i} className="tag-telemetry text-xs py-0.5 px-2.5 bg-[#11161D] border-[#1F2937]">
                    {h}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Career Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 mb-14">
          {siteConfig.experience.map((exp, index) => (
            <ScrollReveal key={index} delay={0.15 * index}>
              <div className="panel-elevated rounded-3xl p-6 sm:p-8 relative overflow-hidden bg-[#0D1117] border border-[#1F2937]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                      {exp.company}
                    </h3>
                    {exp.subtitle && (
                      <div className="text-xs font-mono text-[#8B98AC] mb-2">{exp.subtitle}</div>
                    )}
                    <div className="text-sm font-semibold text-[#3B82F6] font-mono flex items-center gap-1.5">
                      <Briefcase size={14} />
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8B98AC] shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-[#06B6D4]" /> {exp.period} ({exp.duration})
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-[#8B98AC]" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#94A3B8]">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 size={13} className="text-[#3B82F6] shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="tag-telemetry-muted text-[11px]">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Credentials Grid */}
        <ScrollReveal delay={0.25}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Education */}
            <div className="panel-elevated p-6 rounded-2xl flex flex-col justify-between bg-[#0D1117] border border-[#1F2937]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  {siteConfig.education.map((edu, idx) => (
                    <div key={idx} className={`space-y-0.5 ${idx > 0 ? "pt-2.5 border-t border-white/5" : ""}`}>
                      <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                      {edu.institution && <p className="text-[#3B82F6] text-xs font-mono">{edu.institution}</p>}
                      {edu.period && <p className="text-[#8B98AC] text-[11px] font-mono">{edu.period}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="panel-elevated p-6 rounded-2xl flex flex-col justify-between bg-[#0D1117] border border-[#1F2937]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">Certifications</h3>
                </div>
                {siteConfig.certifications.map((cert, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">{cert.name}</h4>
                    <p className="text-[#06B6D4] text-xs font-mono">{cert.institution}</p>
                    <p className="text-[#8B98AC] text-[11px] font-mono">{cert.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Award */}
            <div className="panel-elevated p-6 rounded-2xl flex flex-col justify-between border-[#F59E0B]/30 bg-[#F59E0B]/5">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/25">
                    <Award size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-[#F59E0B]">Domain Award</h3>
                </div>
                {siteConfig.awards.map((award, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">{award.title}</h4>
                    <p className="text-[#F59E0B]/90 text-xs font-mono">{award.date}</p>
                    <p className="text-[#94A3B8] text-xs leading-relaxed mt-1">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
