import { siteConfig } from '../../data/portfolio-data';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  FileCheck, 
  Award, 
  CheckCircle2
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#131A27] relative z-10 border-y border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading 
            label="Career & Domain Track Record"
            title="12+ Years Industry Experience" 
            description="Proven background across automotive assembly, supplier logistics, production scheduling, SAP ERP systems, and Python process automation."
            align="center"
            className="mb-16 font-display"
          />
        </ScrollReveal>

        {/* ============================================================
            STANDALONE CURRENT ENGAGEMENT CARD: Tata Motors Passenger Vehicle Ltd
            ============================================================ */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="panel-elevated rounded-2xl p-6 lg:p-8 border-2 border-[#3B82F6]/40 relative overflow-hidden bg-[#0D1117] shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              
              {/* Top Badge */}
              <div className="absolute top-0 right-0 px-4 py-1 bg-[#3B82F6] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-bl-xl flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                Current Professional Engagement (~3 Months)
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pt-2">
                <div>
                  <div className="flex items-center gap-2 text-[#3B82F6] font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                    <Building2 size={14} />
                    <span>{siteConfig.currentRole.department}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {siteConfig.currentRole.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#3B82F6]" /> {siteConfig.currentRole.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-emerald-400" /> {siteConfig.currentRole.period} ({siteConfig.currentRole.duration})
                  </span>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {siteConfig.currentRole.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-3">
                  Key Operations & Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {siteConfig.currentRole.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle2 size={14} className="text-[#3B82F6] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {siteConfig.currentRole.highlights.map((h, i) => (
                  <span key={i} className="tag-telemetry text-xs py-0.5 px-2.5">
                    {h}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* ============================================================
            CAREER TIMELINE (Rheinmetall Automotive & Tata Motors Senior Associate)
            ============================================================ */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {siteConfig.experience.map((exp, index) => (
            <ScrollReveal key={index} delay={0.2 * index}>
              <div className="panel-elevated rounded-2xl p-6 lg:p-8 relative overflow-hidden bg-[#0A0E17]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white mb-1">{exp.company}</h3>
                    {exp.subtitle && (
                      <div className="text-xs font-mono text-muted mb-2">{exp.subtitle}</div>
                    )}
                    <div className="text-sm font-semibold text-[#3B82F6] font-mono flex items-center gap-1.5">
                      <Briefcase size={14} />
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-[#A855F7]" /> {exp.period} ({exp.duration})
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-muted" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-text-secondary">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#3B82F6] mt-1">•</span>
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

        {/* ============================================================
            CREDENTIALS GRID: Education, SAP Certifications, AI Award
            ============================================================ */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Education */}
            <div className="panel-elevated p-6 rounded-2xl flex flex-col justify-between bg-[#0A0E17]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  {siteConfig.education.map((edu, idx) => (
                    <div key={idx} className={`space-y-0.5 ${idx > 0 ? 'pt-2.5 border-t border-white/5' : ''}`}>
                      <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                      {edu.institution && <p className="text-[#3B82F6] text-xs font-mono">{edu.institution}</p>}
                      {edu.period && <p className="text-muted text-[11px] font-mono">{edu.period}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SAP Certifications */}
            <div className="panel-elevated p-6 rounded-2xl flex flex-col justify-between bg-[#0A0E17]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">Certifications</h3>
                </div>
                {siteConfig.certifications.map((cert, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">{cert.name}</h4>
                    <p className="text-[#A855F7] text-xs font-mono">{cert.institution}</p>
                    <p className="text-muted text-[11px] font-mono">{cert.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Digital Transformation Award */}
            <div className="panel-elevated p-6 rounded-2xl flex flex-col justify-between border-[#F5A524]/30 bg-[#F5A524]/5">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F5A524]/15 text-[#F5A524] border border-[#F5A524]/25">
                    <Award size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-[#F5A524]">Award</h3>
                </div>
                {siteConfig.awards.map((award, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">{award.title}</h4>
                    <p className="text-[#F5A524]/90 text-xs font-mono">{award.date}</p>
                    <p className="text-muted text-xs leading-relaxed mt-1">{award.description}</p>
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
