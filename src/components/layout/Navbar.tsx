import { useState, useEffect } from "react";
import { siteConfig } from "../../data/portfolio-data";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "problems",
        "services",
        "case-studies",
        "transformation",
        "why-nikhil",
        "testimonials",
        "pricing",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Problems I Solve", href: "#problems", id: "problems" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Case Studies", href: "#case-studies", id: "case-studies" },
    { label: "Why Nikhil", href: "#why-nikhil", id: "why-nikhil" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Pricing", href: "#pricing", id: "pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none pt-3 sm:pt-4 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-[#050505]/95 border border-[#1F2937] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              : "bg-[#0D1117]/80 border border-white/10 backdrop-blur-md"
          }`}
        >
          {/* Identity Block */}
          <div className="relative group/status">
            <a
              href="#hero"
              className="flex items-center gap-3 p-1 rounded-xl group transition-colors"
              aria-label="Nikhil Waradkar — Home"
            >
              {/* Status Dot */}
              <div className="relative flex items-center justify-center">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </span>
              </div>

              {/* Name & Role */}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors font-mono leading-tight">
                  {siteConfig.personal.name}
                </span>
                <span className="text-[10px] font-mono text-[#8B98AC] tracking-wider uppercase hidden sm:block leading-tight">
                  Operations & Automation Specialist
                </span>
              </div>
            </a>

            {/* Status Tooltip */}
            <div className="absolute top-full left-0 mt-2 px-2.5 py-1 rounded-lg bg-[#0D1117] border border-[#1F2937] text-[11px] font-mono text-emerald-400 shadow-2xl opacity-0 group-hover/status:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Available for freelance & consulting</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 rounded-xl bg-[#050505]/70 border border-white/5"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg text-[11px] xl:text-xs font-mono font-medium whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8B98AC] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/40 shadow-sm -z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action & WhatsApp Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* WhatsApp Quick Link */}
            <a
              href={siteConfig.personal.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/30 transition-colors shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={13} className="fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Send Workflow CTA */}
            <a
              href="#contact"
              className="relative group hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-mono font-semibold text-white tracking-wider overflow-hidden transition-all duration-200 border border-white/20 hover:border-white/40 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-[0_4px_18px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_25px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Send Workflow</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl text-white bg-[#0D1117] border border-white/10 hover:border-white/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 pointer-events-auto lg:hidden"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="text-sm font-bold text-white font-mono">
                  {siteConfig.personal.name}
                </span>
              </div>
              <button
                type="button"
                className="p-2 rounded-xl text-white bg-[#0D1117] border border-white/10 cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-2 my-auto">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-mono font-medium transition-colors ${
                      isActive
                        ? "bg-[#3B82F6]/15 text-white border border-[#3B82F6]/30 font-semibold"
                        : "text-[#8B98AC] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className={isActive ? "text-[#3B82F6]" : "opacity-40"} />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Actions & WhatsApp in Drawer */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={siteConfig.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-mono font-bold text-white bg-emerald-600 border border-emerald-400/40"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-mono font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] border border-white/20 shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
              >
                <span>Send Me Your Workflow</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
