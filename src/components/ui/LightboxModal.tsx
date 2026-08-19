import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ShieldCheck,
  Info
} from "lucide-react";
import type { ProjectScreenshot } from "@/data/portfolio-data";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  initialIndex?: number;
  projectTitle?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  initialIndex = 0,
  projectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  // Sync initialIndex when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      setIsLoading(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialIndex]);

  const currentItem = screenshots[currentIndex] || screenshots[0];

  const handleNext = useCallback(() => {
    if (screenshots.length <= 1) return;
    setZoomLevel(1);
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const handlePrev = useCallback(() => {
    if (screenshots.length <= 1) return;
    setZoomLevel(1);
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch swipe support for mobile
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50 && zoomLevel === 1) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col bg-[#050505]/95 backdrop-blur-2xl select-none"
      >
        {/* Top Control Bar */}
        <div className="h-16 px-4 sm:px-6 bg-[#0D1117]/90 border-b border-[#1F2937] flex items-center justify-between z-20 shrink-0">
          {/* Left Info */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-3 h-3 rounded-full bg-[#3B82F6] animate-pulse shrink-0" />
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white truncate font-display">
                {projectTitle || currentItem.title}
              </div>
              <div className="text-[11px] font-mono text-[#94A3B8] truncate flex items-center gap-2">
                <span>{currentItem.title}</span>
                {currentItem.tag && (
                  <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-white/10 text-[10px] text-[#22D3EE]">
                    {currentItem.tag}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Center Zoom & Counter Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Image Counter */}
            {screenshots.length > 1 && (
              <div className="px-3 py-1 rounded-lg bg-[#11161D] border border-white/10 font-mono text-xs text-white font-semibold mr-1 sm:mr-3">
                {currentIndex + 1} <span className="text-[#94A3B8]">/</span> {screenshots.length}
              </div>
            )}

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-[#11161D] rounded-xl border border-[#1F2937] p-1 gap-1">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.8}
                aria-label="Zoom out"
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut size={15} />
              </button>

              <span className="text-[11px] font-mono font-semibold text-white px-2 min-w-[45px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                aria-label="Zoom in"
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn size={15} />
              </button>

              <button
                type="button"
                onClick={handleResetZoom}
                aria-label="Reset zoom"
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                title="Reset Zoom (0)"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Info Toggle */}
            <button
              type="button"
              onClick={() => setShowInfo(!showInfo)}
              aria-label="Toggle image info"
              className={`p-2 rounded-xl border transition-colors ${
                showInfo
                  ? "bg-[#3B82F6]/20 border-[#3B82F6]/50 text-[#3B82F6]"
                  : "bg-[#11161D] border-[#1F2937] text-[#94A3B8] hover:text-white"
              }`}
              title="Toggle Caption Info"
            >
              <Info size={16} />
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close fullscreen lightbox"
              className="p-2 rounded-xl bg-[#EF4444]/10 hover:bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30 hover:border-[#EF4444]/50 transition-colors ml-1 cursor-pointer"
              title="Close (ESC)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Main Stage Viewport */}
        <div
          className="relative flex-1 overflow-hidden flex items-center justify-center p-2 sm:p-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Button */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 sm:left-6 z-30 p-3 sm:p-4 rounded-2xl bg-[#0D1117]/80 hover:bg-[#131A27] text-[#94A3B8] hover:text-white border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all shadow-2xl backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
              title="Previous Screenshot (Arrow Left)"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next Button */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 sm:right-6 z-30 p-3 sm:p-4 rounded-2xl bg-[#0D1117]/80 hover:bg-[#131A27] text-[#94A3B8] hover:text-white border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all shadow-2xl backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
              title="Next Screenshot (Arrow Right)"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Zoomable / Draggable Image Stage */}
          <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: zoomLevel }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              drag={zoomLevel > 1}
              dragConstraints={{ left: -600, right: 600, top: -600, bottom: 600 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              className={`max-w-full max-h-full flex items-center justify-center transition-all ${
                zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : ""
              }`}
            >
              <img
                src={currentItem.fullUrl || currentItem.cardUrl}
                alt={currentItem.title}
                onLoad={() => setIsLoading(false)}
                className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/10"
                style={{
                  pointerEvents: isDragging ? "none" : "auto",
                }}
              />
            </motion.div>
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10 pointer-events-none">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#3B82F6] border-t-transparent animate-spin" />
                <span className="font-mono text-xs text-[#94A3B8]">Loading High-Resolution Screenshot...</span>
              </div>
            </div>
          )}

          {/* Bottom Floating Info Drawer */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl z-30"
              >
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D1117]/95 border border-[#1F2937] shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                        <ShieldCheck size={11} />
                        Production View
                      </span>
                      <span className="text-xs font-mono font-bold text-white truncate">
                        {currentItem.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                      {currentItem.caption || currentItem.description}
                    </p>
                  </div>

                  {/* Thumbnail Strip Mini Nav */}
                  {screenshots.length > 1 && (
                    <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto max-w-full pt-1 sm:pt-0">
                      {screenshots.map((s, idx) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            setZoomLevel(1);
                            setIsLoading(true);
                            setCurrentIndex(idx);
                          }}
                          aria-label={`Go to screenshot ${idx + 1}`}
                          className={`w-10 h-7 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                            currentIndex === idx
                              ? "border-[#3B82F6] ring-2 ring-[#3B82F6]/40 scale-105"
                              : "border-white/10 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={s.thumbUrl || s.cardUrl}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Shortcut Helper */}
        <div className="hidden md:flex h-8 px-6 bg-[#090D14] border-t border-white/5 items-center justify-between text-[11px] font-mono text-[#8B98AC] select-none">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white">ESC</kbd> Close</span>
            <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white">←</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white">→</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white">+</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white">-</kbd> Zoom</span>
            <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white">0</kbd> Reset</span>
          </div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-1">
            <ShieldCheck size={12} />
            <span>Verified Manufacturing Automation Screenshot</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
