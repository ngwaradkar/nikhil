import { siteConfig } from "../../data/portfolio-data";
import { Mail, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px signal-gradient-line w-full" />

      <div className="py-10 text-xs font-mono text-[#8B98AC]">
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="text-white font-bold">
              © {currentYear} {siteConfig.personal.name}
            </div>
            <div className="text-[11px] text-[#8B98AC]">
              Business Automation Consultant • Manufacturing & SCM Specialist
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            {siteConfig.personal.email && (
              <a
                href={`mailto:${siteConfig.personal.email}`}
                className="hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                aria-label="Email"
              >
                <Mail size={14} />
                <span>{siteConfig.personal.email}</span>
              </a>
            )}

            {siteConfig.socialLinks.portfolio && (
              <a
                href={siteConfig.socialLinks.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                aria-label="Portfolio"
              >
                <Globe size={14} />
                <span>Live Portfolio</span>
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#0D1117] border border-[#1F2937] hover:border-[#3B82F6] text-white hover:text-[#3B82F6] transition-all cursor-pointer flex items-center gap-1"
              title="Scroll to top"
            >
              <ArrowUp size={13} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
