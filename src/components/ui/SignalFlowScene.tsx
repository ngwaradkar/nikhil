"use client";

import React, { useRef, Suspense, lazy, useState, useEffect } from "react";

// Signal colors
const SIGNAL_COLORS = {
  raw: "#F5A524",
  process: "#3B82F6",
  transform: "#A855F7",
  output: "#22D3EE",
};

/* ================================================================
   STATIC FALLBACK — shown on mobile, reduced motion, or SSR
   ================================================================ */
function SignalFlowFallback() {
  return (
    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] rounded-2xl overflow-hidden bg-void border border-surface-line">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${SIGNAL_COLORS.raw}12 0%, transparent 50%),
                       radial-gradient(ellipse at 50% 40%, ${SIGNAL_COLORS.process}10 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 60%, ${SIGNAL_COLORS.transform}0D 0%, transparent 50%),
                       radial-gradient(ellipse at 85% 50%, ${SIGNAL_COLORS.output}0A 0%, transparent 50%)`,
        }}
      />

      {/* Static pipeline nodes */}
      <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16">
        <div className="flex items-center gap-3 md:gap-6 w-full max-w-2xl">
          {[
            { color: SIGNAL_COLORS.raw, label: "Raw Data" },
            { color: SIGNAL_COLORS.process, label: "Python Engine" },
            { color: SIGNAL_COLORS.transform, label: "Transform" },
            { color: SIGNAL_COLORS.output, label: "Dashboard" },
          ].map((node, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 flex items-center justify-center"
                  style={{
                    borderColor: node.color,
                    background: `${node.color}15`,
                    boxShadow: `0 0 20px ${node.color}30`,
                  }}
                >
                  <div
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{ background: node.color }}
                  />
                </div>
                <span
                  className="text-[10px] md:text-xs font-mono font-medium text-center"
                  style={{ color: node.color }}
                >
                  {node.label}
                </span>
              </div>
              {i < 3 && (
                <div
                  className="h-px flex-1 min-w-[20px] opacity-40"
                  style={{
                    background: `linear-gradient(90deg, ${
                      [SIGNAL_COLORS.raw, SIGNAL_COLORS.process, SIGNAL_COLORS.transform][i]
                    }, ${
                      [SIGNAL_COLORS.process, SIGNAL_COLORS.transform, SIGNAL_COLORS.output][i]
                    })`,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-[10px] font-mono text-muted tracking-wider uppercase">
          Signal Flow Pipeline • Raw → Processed → Transformed → Output
        </span>
      </div>
    </div>
  );
}

/* ================================================================
   THREE.JS SCENE — lazy loaded
   ================================================================ */
const ThreeScene = lazy(() => import("./SignalFlowThree"));

/* ================================================================
   MAIN EXPORT
   ================================================================ */
export function SignalFlowScene() {
  const [canUseWebGL, setCanUseWebGL] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check capabilities
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // Try to create a WebGL context
    let hasWebGL = false;
    try {
      const canvas = document.createElement("canvas");
      hasWebGL = !!(
        canvas.getContext("webgl2") || canvas.getContext("webgl")
      );
    } catch {
      hasWebGL = false;
    }

    setCanUseWebGL(!prefersReducedMotion && !isTouch && hasWebGL);
  }, []);

  if (!canUseWebGL) {
    return <SignalFlowFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] rounded-2xl overflow-hidden"
    >
      <Suspense fallback={<SignalFlowFallback />}>
        <ThreeScene />
      </Suspense>
    </div>
  );
}
