"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { MOTION_EASE } from "@/lib/motion";

interface KineticHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  lines: string[];
  className?: string;
  delay?: number;
  highlightIndices?: number[];
  highlightColor?: string;
  once?: boolean;
}

export function KineticHeading({
  as: Component = "h2",
  lines,
  className = "",
  delay = 0,
  highlightIndices = [],
  highlightColor = "#CE5A37",
  once = true,
}: KineticHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "120%",
      opacity: shouldReduceMotion ? 0 : 0.1,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.95,
        ease: MOTION_EASE.editorial,
      },
    },
  };

  return (
    <Component className={className} aria-label={lines.join(" ")}>
      <motion.span
        className="block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10% 0px -10% 0px" }}
      >
        {lines.map((line, index) => {
          const isHighlighted = highlightIndices.includes(index);
          return (
            <span
              key={index}
              className="block overflow-hidden pb-1 -mb-1 leading-[0.94]"
              aria-hidden="true"
            >
              <motion.span
                className="inline-block will-change-transform"
                style={isHighlighted ? { color: highlightColor } : undefined}
                variants={lineVariants}
              >
                {line}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
