"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
  type SpringOptions,
} from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  rotationFactor?: number;
  isReverse?: boolean;
  springOptions?: SpringOptions;
  /** Signal color for hover glow (hex) */
  glowColor?: string;
}

export function Tilt({
  children,
  className,
  style,
  rotationFactor = 8,
  isReverse = true,
  springOptions = { stiffness: 200, damping: 24, mass: 0.5 },
  glowColor,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isReverse
      ? [rotationFactor, -rotationFactor]
      : [-rotationFactor, rotationFactor]
  );
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isReverse
      ? [-rotationFactor, rotationFactor]
      : [rotationFactor, -rotationFactor]
  );

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Glow opacity
  const glowOpacity = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPos = mouseX / rect.width - 0.5;
    const yPos = mouseY / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
    glowX.set((mouseX / rect.width) * 100);
    glowY.set((mouseY / rect.height) * 100);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
  };

  // Check for reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Check for touch device
  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion || isTouchDevice) {
    return (
      <div className={className} style={style as React.CSSProperties}>
        {children}
      </div>
    );
  }

  const glowBg = glowColor
    ? useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}15 0%, transparent 60%)`
    : undefined;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className || ""}`}
      style={{
        transformStyle: "preserve-3d",
        ...style,
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glowColor && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-0"
          style={{
            background: glowBg,
            opacity: glowOpacity,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
