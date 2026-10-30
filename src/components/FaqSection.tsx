"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";

export function FaqSection() {
  const { faqs, contact } = studioData;
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <div className="space-y-4 mb-16">
          <RevealInView delay={0.05} direction="up" distance={15}>
            <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
              <span className="w-2 h-[1px] bg-[#CE5A37]" />
              STUDIO GUIDE
            </div>
          </RevealInView>
          <KineticHeading
            as="h2"
            lines={["FREQUENTLY", "ASKED."]}
            className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
          />
          <RevealInView delay={0.2} direction="up">
            <p className="text-sm sm:text-base text-[#5E605E] max-w-lg leading-relaxed">
              Informasi penting seputar etiket studio, persiapan kelas perdana, dan standar keselamatan berlatih di AURA.
            </p>
          </RevealInView>
        </div>

        <div className="border-t border-[#121312] divide-y divide-[#DFDFD9]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left hover:text-[#CE5A37] transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-black text-lg sm:text-xl text-[#121312] group-hover:text-[#CE5A37] uppercase tracking-tight transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        isOpen ? "text-[#CE5A37]" : "text-[#5E605E]"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.15 : 0.35,
                        ease: MOTION_EASE.editorial,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-xs sm:text-sm text-[#5E605E] leading-relaxed max-w-2xl">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <RevealInView delay={0.25} direction="up" className="mt-12 pt-8 border-t border-[#DFDFD9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[#5E605E] uppercase">
            MEMILIKI KELUHAN MEDIS KHUSUS ATAU REKOMENDASI DOKTER?
          </span>
          <motion.a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
              "Halo AURA Movement Studio! Saya ingin berkonsultasi mengenai kondisi medis tubuh saya sebelum mulai latihan."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="inline-flex items-center gap-1.5 font-bold uppercase text-[#121312] hover:text-[#CE5A37] transition-colors"
          >
            <span>KONSULTASI PRIVAT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </RevealInView>
      </div>
    </section>
  );
}
