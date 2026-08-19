import { siteConfig } from "../../data/portfolio-data";
import { Mail, ArrowUp, MessageSquare, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px signal-gradient-line w-full" />

      <div className="py-12 text-xs font-mono text-[#8B98AC]">
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1.5">
            <div className="text-white font-bold text-sm">
              © {currentYear} {siteConfig.personal.name}
            </div>
            <div className="text-xs text-[#8B98AC] max-w-md">
              {siteConfig.personal.roleTitle}
            </div>
            <div className="text-[11px] text-emerald-400">
              12+ Years Manufacturing & PPC Operations Experience
            </div>
          </div>

          {/* Social & Channel Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            {siteConfig.personal.whatsappUrl && (
              <a
                href={siteConfig.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400/90 font-bold"
                aria-label="WhatsApp"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            )}

            {siteConfig.socialLinks.linkedin && (
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 text-[#22D3EE]"
                aria-label="LinkedIn"
              >
                <span>LinkedIn</span>
                <ExternalLink size={11} />
              </a>
            )}

            {siteConfig.socialLinks.github && (
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="GitHub"
              >
                <span>GitHub</span>
                <ExternalLink size={11} />
              </a>
            )}

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

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#0D1117] border border-[#1F2937] hover:border-[#3B82F6] text-white hover:text-[#3B82F6] transition-all cursor-pointer flex items-center gap-1 ml-2"
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
