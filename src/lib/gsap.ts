"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isScrollTriggerRegistered = false;

export function getGsap() {
  if (typeof window !== "undefined" && !isScrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isScrollTriggerRegistered = true;
  }
  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };
