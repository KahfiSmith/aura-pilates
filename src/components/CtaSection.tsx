"use client";

import { studioData } from "@/data/pilates";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { useLenis } from "@/components/motion/SmoothScrollProvider";

export function CtaSection() {
  const { contact } = studioData;
  const shouldReduceMotion = useReducedMotion();
  const { scrollTo } = useLenis();

  const trialMessage =
    "Halo AURA Movement Studio! Saya ingin booking sesi latihan pertama saya.";

  return (
    <section className="py-24 sm:py-36 bg-[#121312] text-[#F8F8F7] border-b border-[#2A2C2A] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CE5A37]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center space-y-8 relative z-10">
        <RevealInView delay={0.05} direction="up" distance={15}>
          <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center justify-center gap-2">
            <span className="w-2 h-[1px] bg-[#CE5A37]" />
            START YOUR PRACTICE
            <span className="w-2 h-[1px] bg-[#CE5A37]" />
          </div>
        </RevealInView>

        <KineticHeading
          as="h2"
          lines={["READY", "TO MOVE?"]}
          highlightIndices={[1]}
          highlightColor="#CE5A37"
          className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.92]"
        />

        <RevealInView delay={0.25} direction="up">
          <p className="text-base sm:text-xl text-[#8A8D8A] max-w-lg mx-auto leading-relaxed">
            Book your first session. Precision reformer pilates designed to build strength, control and confidence in Surabaya Barat.
          </p>
        </RevealInView>

        <RevealInView delay={0.35} direction="up">
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(trialMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.03 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#CE5A37] text-[#F8F8F7] font-bold text-xs tracking-widest uppercase hover:bg-[#B54726] transition-colors group shadow-lg shadow-[#CE5A37]/20"
            >
              <span>Book a Class</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#schedule", { offset: -76, duration: 1.25 });
                window.history.pushState(null, "", "#schedule");
              }}
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-[#F8F8F7] font-bold text-xs tracking-widest uppercase border border-[#F8F8F7]/30 hover:border-[#F8F8F7] transition-colors"
            >
              <span>View Schedule</span>
            </motion.a>
          </div>
        </RevealInView>

        <RevealInView delay={0.45} direction="up">
          <div className="pt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-mono text-[#5E605E] uppercase">
            <span>SURABAYA BARAT</span>
            <span>•</span>
            <span>BALANCED BODY ALLEGRO 2</span>
            <span>•</span>
            <span>STOTT CERTIFIED</span>
          </div>
        </RevealInView>
      </div>
    </section>
  );
}
