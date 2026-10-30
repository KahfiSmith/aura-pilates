"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MOTION_EASE } from "@/lib/motion";
import { getGsap } from "@/lib/gsap";
import { useLenis } from "@/components/motion/SmoothScrollProvider";

export function Hero() {
  const { contact } = studioData;
  const shouldReduceMotion = useReducedMotion();
  const { scrollTo } = useLenis();
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const trialMessage =
    "Halo AURA Movement Studio! Saya ingin booking sesi latihan / trial class.";

  useEffect(() => {
    if (shouldReduceMotion) return;

    const { gsap } = getGsap();
    if (!imageContainerRef.current || !imageWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageWrapperRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, imageContainerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "115%",
      opacity: shouldReduceMotion ? 0 : 0.2,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 1.0,
        ease: MOTION_EASE.editorial,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: MOTION_EASE.smooth,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F8F7] border-b border-[#DFDFD9] pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-widest text-[#5E605E] uppercase border-b border-[#DFDFD9] pb-4"
            >
              <span>01 REFORMER</span>
              <span>•</span>
              <span>02 MAT & STRENGTH</span>
              <span>•</span>
              <span>03 PRIVATE SUITE</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">SURABAYA BARAT</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-[#121312] uppercase leading-[0.92]">
                <span className="block overflow-hidden pb-1 -mb-1">
                  <motion.span variants={lineVariants} className="block will-change-transform">
                    MOVE
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-1 -mb-1">
                  <motion.span variants={lineVariants} className="block will-change-transform">
                    WITH
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-1 -mb-1">
                  <motion.span
                    variants={lineVariants}
                    className="block text-[#CE5A37] will-change-transform"
                  >
                    PURPOSE.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={fadeUpVariants}
                className="text-base sm:text-xl text-[#5E605E] max-w-lg leading-relaxed font-normal"
              >
                Pilates sessions designed to build strength, control and confidence. Latihan berbasis
                tahanan pegas presisi tinggi bersama instruktur tersertifikasi internasional STOTT.
              </motion.p>
            </div>

            <div className="space-y-6 pt-4">
              <motion.div
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <motion.a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(trialMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#121312] text-[#F8F8F7] font-bold text-xs tracking-widest uppercase hover:bg-[#CE5A37] transition-colors group"
                >
                  <span>Book a Class</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.a>

                <motion.a
                  href="#studio-intro"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#studio-intro", { offset: -76, duration: 1.25 });
                    window.history.pushState(null, "", "#studio-intro");
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#121312] font-bold text-xs tracking-widest uppercase border border-[#121312] hover:bg-[#121312] hover:text-[#F8F8F7] transition-colors"
                >
                  <span>View Studio</span>
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                className="pt-6 border-t border-[#DFDFD9] flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase text-[#5E605E]"
              >
                <div>
                  <span className="text-[#121312] font-bold">LOKASI:</span> BUKIT DARMO GOLF, SURABAYA
                </div>
                <div>
                  <span className="text-[#121312] font-bold">JAM:</span> SEN - JUM 06:30 - 20:30
                </div>
                <div>
                  <span className="text-[#121312] font-bold">FORMAT:</span> MAX 6 PER CLASS
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div ref={imageContainerRef} className="lg:col-span-5 relative">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.4 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
              }
              transition={{ duration: 1.2, ease: MOTION_EASE.editorial, delay: 0.25 }}
              className="relative h-full min-h-[480px] lg:min-h-[580px] bg-[#E5E5E0] border border-[#121312] overflow-hidden group shadow-sm"
            >
              <div
                ref={imageWrapperRef}
                className="relative w-full h-[120%] -top-[10%] will-change-transform"
              >
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
                  alt="Controlled Pilates Reformer Movement in AURA Studio"
                  fill
                  priority
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>

              <div className="absolute inset-0 bg-[#121312]/15 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: MOTION_EASE.smooth }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-[#121312]/95 backdrop-blur-sm text-[#F8F8F7] flex items-center justify-between border-t border-[#2A2C2A]"
              >
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#8A8D8A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CE5A37] animate-pulse" />
                    APPARATUS SPECIFICATION
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#F8F8F7] mt-0.5">
                    BALANCED BODY ALLEGRO 2
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-[#CE5A37] bg-[#FAF0ED]/10 px-2 py-1">
                  06 CARRIAGES
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
