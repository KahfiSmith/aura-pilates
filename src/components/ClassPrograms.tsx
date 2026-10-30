"use client";

import { useState } from "react";
import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";

export function ClassPrograms() {
  const { classes, contact } = studioData;
  const [activeId, setActiveId] = useState(classes[0].id);
  const shouldReduceMotion = useReducedMotion();

  const selectedClass = classes.find((c) => c.id === activeId) || classes[0];

  return (
    <section id="classes" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <RevealInView delay={0.05} direction="up" distance={15}>
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                <span className="w-2 h-[1px] bg-[#CE5A37]" />
                DIRECTORY 01 - 05
              </div>
            </RevealInView>
            <KineticHeading
              as="h2"
              lines={["CLASS", "DIRECTORY."]}
              className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
            />
          </div>
          <RevealInView delay={0.2} direction="up">
            <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
              Pilihan format latihan yang disesuaikan dengan tingkat kontrol tubuh dan tujuan spesifik Anda, dari pondasi hingga rehabilitasi personal.
            </p>
          </RevealInView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 divide-y divide-[#DFDFD9] border-y border-[#DFDFD9]">
            {classes.map((item, idx) => {
              const isSelected = item.id === activeId;
              const numStr = `0${idx + 1}`;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  whileHover={{ backgroundColor: isSelected ? "rgba(240, 240, 238, 0.95)" : "rgba(240, 240, 238, 0.5)" }}
                  transition={{ duration: 0.2 }}
                  className={`py-8 cursor-pointer transition-colors group px-4 -mx-4 ${
                    isSelected ? "bg-[#F0F0EE]/80" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#CE5A37]">
                          {numStr}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#5E605E] bg-[#E5E5E0] px-2 py-0.5">
                          {item.level}
                        </span>
                        <span className="text-[10px] font-mono text-[#5E605E]">
                          {item.duration} • {item.capacity}
                        </span>
                      </div>

                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#121312] uppercase tracking-tight group-hover:text-[#CE5A37] transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5E605E] leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 shrink-0">
                      <motion.div
                        animate={{
                          rotate: isSelected ? 90 : 0,
                          backgroundColor: isSelected ? "#121312" : "transparent",
                          borderColor: isSelected ? "#121312" : "#DFDFD9",
                          color: isSelected ? "#F8F8F7" : "#121312",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="w-9 h-9 flex items-center justify-center border group-hover:border-[#121312]"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0.2 : 0.45, ease: MOTION_EASE.editorial }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-4 border-t border-[#DFDFD9] grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="text-[10px] font-mono uppercase tracking-wider text-[#121312] font-bold mb-2">
                              MANFAAT SPESIFIK:
                            </div>
                            <ul className="space-y-1.5 text-xs text-[#5E605E]">
                              {item.benefits.slice(0, 3).map((b, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-[#CE5A37] font-bold">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col justify-between pt-2 sm:pt-0">
                            <div>
                              <div className="text-[10px] font-mono uppercase tracking-wider text-[#121312] font-bold mb-1">
                                AUDIENS REKOMENDASI:
                              </div>
                              <p className="text-xs text-[#5E605E] leading-relaxed mb-4">
                                {item.suitableFor}
                              </p>
                            </div>

                            <motion.a
                              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                                `Halo AURA Movement Studio! Saya ingin reservasi sesi kelas "${item.name}". Mohon informasi slot jadwal terdekat.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121312] hover:text-[#CE5A37] transition-colors"
                            >
                              <span>Book This Session via WhatsApp</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="border border-[#121312] bg-[#E5E5E0] overflow-hidden shadow-sm">
              <div className="aspect-[4/5] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedClass.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, ease: MOTION_EASE.editorial }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedClass.image}
                      alt={selectedClass.name}
                      fill
                      className="object-cover object-center grayscale contrast-110"
                      sizes="500px"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono uppercase tracking-widest">
                      {selectedClass.name}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedClass.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: MOTION_EASE.smooth }}
                  className="p-6 bg-[#121312] text-[#F8F8F7] space-y-3"
                >
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#CE5A37]">
                    FOCUS & INTENSITY
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider">
                    {selectedClass.subtitle}
                  </div>
                  <p className="text-xs text-[#8A8D8A] leading-relaxed">
                    {selectedClass.description}
                  </p>
                  <div className="pt-2">
                    <motion.a
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                        `Halo AURA Movement Studio! Saya ingin bertanya mengenai ketersediaan kelas "${selectedClass.name}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F8F8F7] hover:text-[#CE5A37] transition-colors"
                    >
                      <span>Cek Slot Kelas via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
