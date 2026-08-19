import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";
import type { ProjectScreenshot } from "@/data/portfolio-data";
import { Layers } from "lucide-react";

interface ProjectGalleryProps {
  screenshots: ProjectScreenshot[];
  projectTitle?: string;
  appUrl?: string;
  badge?: string;
  badgeColor?: string;
  onOpenLightbox: (index: number) => void;
  priority?: boolean;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  screenshots,
  appUrl = "app.streamlit.io",
  badge = "System Online",
  badgeColor = "#10B981",
  onOpenLightbox,
  priority = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex] || screenshots[0];

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Browser Mockup Frame */}
      <BrowserFrame
        url={appUrl}
        title={activeScreenshot.title}
        badge={badge}
        badgeColor={badgeColor}
        onExpand={() => onOpenLightbox(activeIndex)}
        aspectRatio="16/10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreenshot.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <img
              src={activeScreenshot.cardUrl}
              alt={activeScreenshot.title}
              loading={priority ? "eager" : "lazy"}
              className="w-full h-full object-cover object-top select-none group-hover/browser:scale-[1.01] transition-transform duration-500"
            />

            {/* Bottom In-Image Telemetry Banner */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent p-3 pt-6 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pointer-events-none">
              <span className="truncate max-w-[70%] text-white font-medium">
                {activeScreenshot.caption || activeScreenshot.title}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#22D3EE] font-bold shrink-0">
                {activeScreenshot.tag || "Live Screen"}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </BrowserFrame>

      {/* Thumbnail Strip */}
      {screenshots.length > 1 && (
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-mono text-[#8B98AC] flex items-center gap-1.5">
              <Layers size={12} className="text-[#3B82F6]" />
              <span>Available Views ({screenshots.length})</span>
            </span>
            <span className="text-[10px] font-mono text-[#8B98AC]">
              Click thumbnail to preview
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {screenshots.map((s, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group/thumb relative rounded-xl p-1 text-left transition-all duration-200 cursor-pointer overflow-hidden border ${
                    isSelected
                      ? "bg-[#182234] border-[#3B82F6] shadow-lg shadow-[#3B82F6]/10 ring-1 ring-[#3B82F6]"
                      : "bg-[#0D1117] border-[#1F2937] hover:border-white/20 hover:bg-[#131A27]"
                  }`}
                >
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden relative mb-1.5 bg-[#050505]">
                    <img
                      src={s.thumbUrl || s.cardUrl}
                      alt={s.title}
                      loading="lazy"
                      className={`w-full h-full object-cover object-top transition-opacity ${
                        isSelected ? "opacity-100" : "opacity-60 group-hover/thumb:opacity-90"
                      }`}
                    />
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                    )}
                  </div>

                  <div className="px-1 truncate">
                    <span className={`block text-[11px] font-mono font-medium truncate ${
                      isSelected ? "text-white font-bold" : "text-[#8B98AC] group-hover/thumb:text-white"
                    }`}>
                      {s.tag || s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
