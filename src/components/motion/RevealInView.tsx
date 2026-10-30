"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { MOTION_EASE } from "@/lib/motion";

interface RevealInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export function RevealInView({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  direction = "up",
  distance = 28,
  once = true,
}: RevealInViewProps) {
  const shouldReduceMotion = useReducedMotion();

  let initialX = 0;
  let initialY = 0;

  if (!shouldReduceMotion) {
    if (direction === "up") initialY = distance;
    if (direction === "down") initialY = -distance;
    if (direction === "left") initialX = distance;
    if (direction === "right") initialX = -distance;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.3 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: MOTION_EASE.smooth,
        },
      }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
