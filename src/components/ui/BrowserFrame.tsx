import { useState } from "react";
import { Maximize2 } from "lucide-react";

interface BrowserFrameProps {
  url?: string;
  title?: string;
  badge?: string;
  badgeColor?: string;
  onExpand?: () => void;
  children: React.ReactNode;
  className?: string;
  aspectRatio?: "16/10" | "16/9" | "4/3" | "auto";
  headerRight?: React.ReactNode;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url = "app.streamlit.io",
  title,
  badge = "System Online",
  badgeColor = "#10B981",
  onExpand,
  children,
  className = "",
  aspectRatio = "16/10",
  headerRight,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass =
    aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : "";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl bg-[#0D1117] border border-[#1F2937] overflow-hidden shadow-2xl transition-all duration-300 group/browser relative ${className}`}
      style={{
        boxShadow: isHovered
          ? "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(59, 130, 246, 0.15)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Browser Window Header Chrome */}
      <div className="h-10 px-4 bg-[#11161D] border-b border-[#1F2937] flex items-center justify-between select-none relative z-10">
        {/* Window Dots */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 group-hover/browser:bg-[#EF4444] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 group-hover/browser:bg-[#F59E0B] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 group-hover/browser:bg-[#10B981] transition-colors" />
          </div>

          {/* URL Pill Bar */}
          <div className="hidden sm:flex items-center gap-2 ml-3 px-3 py-1 rounded-md bg-[#050505]/70 border border-white/5 text-[11px] font-mono text-[#94A3B8] max-w-[280px] truncate">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: badgeColor }} />
            <span className="truncate">{url}</span>
          </div>
        </div>

        {/* Center Title */}
        {title && (
          <div className="hidden md:block text-xs font-mono text-[#94A3B8] font-medium truncate max-w-[200px] text-center">
            {title}
          </div>
        )}

        {/* Right Status / Expand Button */}
        <div className="flex items-center gap-2">
          {headerRight ? (
            headerRight
          ) : (
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold border backdrop-blur-sm"
                style={{
                  color: badgeColor,
                  borderColor: `${badgeColor}30`,
                  background: `${badgeColor}10`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: badgeColor }} />
                <span>{badge}</span>
              </span>

              {onExpand && (
                <button
                  type="button"
                  onClick={onExpand}
                  aria-label="Expand image in high resolution"
                  className="p-1.5 rounded-lg bg-[#182234] hover:bg-[#1F2937] text-[#94A3B8] hover:text-white border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                  title="Expand to Fullscreen Lightbox"
                >
                  <Maximize2 size={13} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Screenshot Container */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#050505]`}>
        {children}

        {/* Quick Zoom Overlay on Hover */}
        {onExpand && (
          <div
            onClick={onExpand}
            className="absolute inset-0 bg-black/40 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-zoom-in backdrop-blur-[2px]"
          >
            <div className="px-4 py-2 rounded-xl bg-[#0D1117]/95 border border-[#3B82F6]/50 text-white font-mono text-xs flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/browser:translate-y-0 transition-transform">
              <Maximize2 size={14} className="text-[#3B82F6]" />
              <span>Click to Expand Full Screenshot</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
