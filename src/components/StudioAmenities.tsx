"use client";

import Image from "next/image";
import { studioData } from "@/data/pilates";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";

export function StudioAmenities() {
  const { amenities } = studioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <RevealInView delay={0.05} direction="up" distance={15}>
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                <span className="w-2 h-[1px] bg-[#CE5A37]" />
                STUDIO ARCHITECTURE
              </div>
            </RevealInView>
            <KineticHeading
              as="h2"
              lines={["SPACE &", "APPARATUS."]}
              className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
            />
          </div>
          <RevealInView delay={0.2} direction="up">
            <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
              Didesain dengan pencahayaan alami optimal, material kayu cedar netral, dan sirkulasi udara medis untuk mendukung konsentrasi penuh di setiap repetisi.
            </p>
          </RevealInView>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {amenities.map((item, idx) => {
            const colSpan =
              idx === 0
                ? "md:col-span-8"
                : idx === 1
                ? "md:col-span-4"
                : idx === 2
                ? "md:col-span-4"
                : "md:col-span-4";

            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: MOTION_EASE.smooth },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: MOTION_EASE.smooth }}
                className={`${colSpan} border border-[#121312] bg-[#E5E5E0] overflow-hidden flex flex-col justify-between group shadow-sm`}
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                    DETAIL 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 bg-[#FFFFFF] space-y-2 border-t border-[#DFDFD9] group-hover:border-[#121312] transition-colors">
                  <h3 className="font-sans font-black text-lg text-[#121312] uppercase group-hover:text-[#CE5A37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5E605E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
