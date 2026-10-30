"use client";

import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";

export function InstructorRoster() {
  const { instructors, contact } = studioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="instructors" className="py-20 lg:py-32 bg-[#F0F0EE] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <RevealInView delay={0.05} direction="up" distance={15}>
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                <span className="w-2 h-[1px] bg-[#CE5A37]" />
                STUDIO FACULTY
              </div>
            </RevealInView>
            <KineticHeading
              as="h2"
              lines={["MEET THE", "INSTRUCTORS."]}
              className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
            />
          </div>
          <RevealInView delay={0.2} direction="up">
            <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
              Seluruh pengajar di AURA memegang sertifikasi internasional resmi (STOTT / Polestar / Balanced Body) dengan pendekatan personal dan pemahaman anatomi mendalam.
            </p>
          </RevealInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {instructors.map((inst, index) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: MOTION_EASE.editorial,
              }}
              className={`space-y-6 ${index === 1 ? "md:translate-y-6" : ""}`}
            >
              <div className="aspect-[3/4] bg-[#E5E5E0] border border-[#121312] overflow-hidden relative group shadow-sm">
                <Image
                  src={inst.photo}
                  alt={inst.name}
                  fill
                  className="object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#121312] text-[#F8F8F7] flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    {inst.experience}
                  </span>
                  <span className="text-[10px] font-mono text-[#CE5A37] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CE5A37] inline-block" />
                    CERTIFIED
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-sans font-black text-2xl text-[#121312] uppercase">
                    {inst.name}
                  </h3>
                  <div className="text-xs font-mono text-[#CE5A37] uppercase font-bold mt-0.5">
                    {inst.title}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5E605E] leading-relaxed">
                  {inst.bio}
                </p>

                <div className="pt-2 border-t border-[#DFDFD9] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#121312] font-bold">
                    SPESIALISASI:
                  </div>
                  <div className="text-xs text-[#5E605E]">
                    {inst.specialty}
                  </div>
                </div>

                <div className="pt-2">
                  <motion.a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                      `Halo AURA Movement Studio! Saya ingin berkonsultasi mengenai kelas bersama Coach ${inst.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#121312] hover:text-[#CE5A37] transition-colors group"
                  >
                    <span>Jadwal Coach {inst.name.split(" ")[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
