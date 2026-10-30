"use client";

import { type Variants } from "motion/react";

/**
 * Premium editorial motion tokens for AURA Movement Studio.
 * Crafted with restrained, luxurious easing inspired by Swiss graphic design & architectural poise.
 */
export const MOTION_EASE = {
  // Fast start, long smooth deceleration — great for high-fashion / editorial reveals
  editorial: [0.16, 1, 0.3, 1] as const,
  // Balanced smooth curve for cards, menus, and layout transitions
  smooth: [0.22, 1, 0.36, 1] as const,
  // Snappy response for buttons and micro-interactions
  snappy: [0.32, 0.72, 0, 1] as const,
  // Gentle curve for opacity fades
  subtle: [0.4, 0, 0.2, 1] as const,
};

export const MOTION_TRANSITIONS = {
  editorial: {
    duration: 0.95,
    ease: MOTION_EASE.editorial,
  },
  smooth: {
    duration: 0.65,
    ease: MOTION_EASE.smooth,
  },
  snappy: {
    duration: 0.35,
    ease: MOTION_EASE.snappy,
  },
  spring: {
    type: "spring" as const,
    stiffness: 350,
    damping: 30,
  },
  springGentle: {
    type: "spring" as const,
    stiffness: 220,
    damping: 24,
  },
};

export const containerStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { stagger?: number; delay?: number } = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.08,
      delayChildren: custom.delay ?? 0.05,
    },
  }),
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: MOTION_EASE.smooth,
    },
  },
};

export const maskRevealLineVariants: Variants = {
  hidden: { y: "115%", opacity: 0.2 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: MOTION_EASE.editorial,
    },
  },
};

export const imageRevealVariants: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    scale: 1.08,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      duration: 1.1,
      ease: MOTION_EASE.editorial,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    transition: { duration: 0.35, ease: MOTION_EASE.smooth },
  },
  hover: {
    y: -4,
    transition: { duration: 0.35, ease: MOTION_EASE.smooth },
  },
};

export const microButtonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: MOTION_EASE.snappy } },
  tap: { scale: 0.98, transition: { duration: 0.1, ease: MOTION_EASE.snappy } },
};
