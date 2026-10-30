"use client";

import React, { createContext, useContext, useEffect, useRef, useMemo } from "react";
import Lenis from "lenis";
import { getGsap } from "@/lib/gsap";

interface LenisContextType {
  getLenis: () => Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: Parameters<Lenis["scrollTo"]>[1]) => void;
}

let globalLenis: Lenis | null = null;

export const getLenis = () => globalLenis;

const LenisContext = createContext<LenisContextType>({
  getLenis: () => globalLenis,
  scrollTo: (target, options) => {
    if (globalLenis) {
      globalLenis.scrollTo(target, options);
    } else if (typeof window !== "undefined") {
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else if (typeof target === "string" && target.startsWith("#")) {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  },
});

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { gsap, ScrollTrigger } = getGsap();

    // Initialize Lenis with tailored luxury easing for contemporary editorial movement
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
      anchors: {
        offset: -76,
        duration: 1.25,
      },
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger updates
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize GSAP ticker with Lenis RAF
    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    // Global listener to prevent native browser anchor jumping and glide smoothly via Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const path = e.composedPath ? e.composedPath() : [];
      let anchor: HTMLAnchorElement | null = null;

      for (const el of path) {
        if (el instanceof HTMLAnchorElement && el.href) {
          anchor = el;
          break;
        }
      }
      if (!anchor && e.target instanceof Element) {
        anchor = e.target.closest("a");
      }
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          e.stopPropagation();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -76,
            duration: 1.25,
          });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
      lenisRef.current = null;
      globalLenis = null;
    };
  }, []);

  const value = useMemo<LenisContextType>(
    () => ({
      getLenis: () => lenisRef.current || globalLenis,
      scrollTo: (target, options) => {
        const active = lenisRef.current || globalLenis;
        if (active) {
          active.scrollTo(target, options);
        } else if (typeof window !== "undefined") {
          if (typeof target === "number") {
            window.scrollTo({ top: target, behavior: "smooth" });
          } else if (typeof target === "string" && target.startsWith("#")) {
            const el = document.querySelector(target);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      },
    }),
    []
  );

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
