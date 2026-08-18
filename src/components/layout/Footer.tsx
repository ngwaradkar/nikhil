import { siteConfig } from '../../data/portfolio-data';
import { Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E17] relative overflow-hidden">
      {/* Signal gradient accent line */}
      <div className="h-px signal-gradient-line w-full" />

      <div className="py-8 text-xs font-mono text-muted">
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left">
            © {currentYear} {siteConfig.personal.name} — Python Excel Automation & Streamlit Solutions.
          </div>

          <div className="flex items-center gap-6">
            {siteConfig.socialLinks.Code2 && (
              <a 
                href={siteConfig.socialLinks.Code2} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#3B82F6] transition-colors flex items-center gap-1" 
                aria-label="GitHub"
              >
                <Code2 size={15} />
                <span>GitHub</span>
              </a>
            )}
            {siteConfig.personal.email && (
              <a 
                href={`mailto:${siteConfig.personal.email}`} 
                className="hover:text-[#3B82F6] transition-colors flex items-center gap-1" 
                aria-label="Email"
              >
                <Mail size={15} />
                <span>{siteConfig.personal.email}</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}
