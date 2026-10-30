"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";
import { getGsap } from "@/lib/gsap";

export function PhilosophySection() {
  const shouldReduceMotion = useReducedMotion();
  const interiorImgRef = useRef<HTMLDivElement>(null);
  const precisionImgRef = useRef<HTMLDivElement>(null);

  const steps = [
    { num: "01", label: "START", desc: "Asesmen postur tubuh, kalibrasi footbar & kontrol pegas" },
    { num: "02", label: "BUILD", desc: "Aktivasi otot inti terdalam & sinkronisasi napas diafragma" },
    { num: "03", label: "PROGRESS", desc: "Peningkatan tahanan beban kinetik & variasi gerak kompleks" },
    { num: "04", label: "MOVE BETTER", desc: "Postur tegap alami, mobilitas sendi bebas nyeri & tenaga fungsional" },
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      if (interiorImgRef.current) {
        gsap.to(interiorImgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: interiorImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (precisionImgRef.current) {
        gsap.to(precisionImgRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: precisionImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section id="studio-intro" className="bg-[#F8F8F7] text-[#121312]">
      <div className="py-20 lg:py-32 border-b border-[#DFDFD9]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <RevealInView delay={0.05} direction="up" distance={15}>
                <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-[#CE5A37]" />
                  STUDIO MANIFESTO
                </div>
              </RevealInView>

              <KineticHeading
                as="h2"
                lines={["A STUDIO", "FOR BETTER", "MOVEMENT."]}
                className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
              />

              <RevealInView delay={0.2} direction="up">
                <p className="text-base text-[#5E605E] leading-relaxed pt-2">
                  AURA dirancang sebagai ruang gerak kontemporer yang berfokus pada kualitas instruksi biomekanik,
                  bukan sekadar keringat. Kami menghilangkan distraksi gym konvensional untuk memberi Anda ruang bernapas,
                  bergerak dengan presisi, dan membangun kekuatan tubuh yang bertahan lama.
                </p>
              </RevealInView>

              <RevealInView delay={0.3} direction="up">
                <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#DFDFD9] text-xs font-mono uppercase">
                  <div className="space-y-1 group">
                    <div className="text-2xl font-black text-[#121312] group-hover:text-[#CE5A37] transition-colors">
                      06
                    </div>
                    <div className="text-[#5E605E]">Carriages Maksimal</div>
                  </div>
                  <div className="space-y-1 group">
                    <div className="text-2xl font-black text-[#121312] group-hover:text-[#CE5A37] transition-colors">
                      100%
                    </div>
                    <div className="text-[#5E605E]">STOTT Certified Mentors</div>
                  </div>
                </div>
              </RevealInView>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.3 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease: MOTION_EASE.editorial }}
                className="aspect-[16/10] bg-[#E5E5E0] border border-[#121312] overflow-hidden relative group"
              >
                <div ref={interiorImgRef} className="relative w-full h-[120%] -top-[10%] will-change-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop"
                    alt="AURA Movement Studio Interior and Balanced Body Reformers"
                    fill
                    className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 750px"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                  SURABAYA BARAT STUDIO SPACE
                </div>
              </motion.div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {steps.map((st, i) => (
                  <motion.div
                    key={st.num}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    transition={{
                      duration: 0.6,
                      delay: shouldReduceMotion ? 0 : i * 0.1,
                      ease: MOTION_EASE.smooth,
                    }}
                    whileHover={{
                      y: -4,
                      borderColor: "#121312",
                      boxShadow: "0 6px 16px -2px rgba(18, 19, 18, 0.06)",
                    }}
                    className="p-4 bg-[#F0F0EE] border border-[#DFDFD9] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-mono text-[#CE5A37] font-bold mb-1 group-hover:translate-x-0.5 transition-transform">
                        {st.num}
                      </div>
                      <div className="font-sans font-black text-sm text-[#121312] tracking-wide mb-1">
                        {st.label}
                      </div>
                      <div className="text-[11px] text-[#5E605E] leading-relaxed">
                        {st.desc}
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#8A8D8A] mt-3 hidden sm:block group-hover:text-[#CE5A37] group-hover:translate-x-1 transition-all" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 bg-[#121312] text-[#F8F8F7] border-b border-[#2A2C2A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 space-y-6">
              <RevealInView delay={0.05} direction="up" distance={15}>
                <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-[#CE5A37]" />
                  CORE PHILOSOPHY
                </div>
              </RevealInView>

              <KineticHeading
                as="h3"
                lines={["PRECISION", "OVER", "PERFECTION."]}
                highlightIndices={[0]}
                highlightColor="#F8F8F7"
                className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]"
              />

              <RevealInView delay={0.25} direction="up">
                <p className="text-base sm:text-xl text-[#8A8D8A] max-w-2xl leading-relaxed">
                  We focus on controlled movement, proper alignment and progressive strength. Latihan yang benar
                  tidak diukur dari seberapa lelah Anda, melainkan seberapa presisi otak dan otot Anda berkomunikasi.
                </p>
              </RevealInView>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.2 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease: MOTION_EASE.editorial }}
                className="aspect-[4/5] bg-[#2A2C2A] border border-[#3E423E] overflow-hidden relative group"
              >
                <div ref={precisionImgRef} className="relative w-full h-[120%] -top-[10%] will-change-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop"
                    alt="Precision Reformer Hand and Core Movement Focus"
                    fill
                    className="object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#F8F8F7] uppercase tracking-wider flex items-center justify-between">
                  <span>ALIGNMENT • CONTROL • RESILIENCE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE5A37]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
