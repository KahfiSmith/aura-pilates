"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";
import { getGsap } from "@/lib/gsap";

export function LocationHours() {
  const { contact, schedule } = studioData;
  const shouldReduceMotion = useReducedMotion();
  const locationImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      if (locationImgRef.current) {
        gsap.to(locationImgRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: locationImgRef.current,
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
    <section id="location" className="py-20 lg:py-32 bg-[#F0F0EE] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <RevealInView delay={0.05} direction="up" distance={15}>
                <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-[#CE5A37]" />
                  STUDIO SPACE
                </div>
              </RevealInView>

              <KineticHeading
                as="h2"
                lines={["VISIT THE", "STUDIO."]}
                className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
              />

              <RevealInView delay={0.2} direction="up">
                <p className="text-base text-[#5E605E] leading-relaxed">
                  Terletak strategis di kawasan tenang Bukit Darmo Golf, Surabaya Barat. Dilengkapi area parkir privat luas, keamanan 24 jam, dan akses tol satelit terdekat.
                </p>
              </RevealInView>
            </div>

            <RevealInView delay={0.25} direction="up" className="border-t border-[#121312] divide-y divide-[#DFDFD9] text-xs font-mono">
              <div className="py-4 space-y-1">
                <div className="font-bold uppercase text-[#121312]">ALAMAT STUDIO:</div>
                <div className="text-[#5E605E] leading-relaxed">{contact.fullAddress}</div>
                <div className="pt-2">
                  <motion.a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CE5A37] hover:underline"
                  >
                    <span>GET DIRECTIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>

              <div className="py-4 space-y-2">
                <div className="font-bold uppercase text-[#121312]">JAM OPERASIONAL:</div>
                {schedule.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-[#5E605E]">
                    <span className="text-[#121312] font-semibold">{s.days}</span>
                    <span>{s.hours}</span>
                  </div>
                ))}
              </div>

              <div className="py-4 space-y-2">
                <div className="font-bold uppercase text-[#121312]">KONTAK LANGSUNG:</div>
                <div className="flex flex-col space-y-1 text-[#5E605E]">
                  <div>WHATSAPP: {contact.whatsappFormatted}</div>
                  <div>TELEPON: {contact.formattedPhone}</div>
                  <div>EMAIL: {contact.email}</div>
                </div>
              </div>
            </RevealInView>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.3 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, ease: MOTION_EASE.editorial }}
              className="aspect-[16/10] bg-[#E5E5E0] border border-[#121312] overflow-hidden relative group shadow-sm"
            >
              <div ref={locationImgRef} className="relative w-full h-[120%] -top-[10%] will-change-transform">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="AURA Movement Studio Architecture Exterior and Interior"
                  fill
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                STUDIO ARCHITECTURE
              </div>
            </motion.div>

            <RevealInView delay={0.2} direction="up" className="aspect-[21/9] border border-[#DFDFD9] overflow-hidden relative shadow-sm">
              <iframe
                title="Peta Lokasi AURA Movement Studio"
                src={contact.openStreetMapUrl}
                className="w-full h-full border-0 filter contrast-[1.05] grayscale-[0.3]"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                BUKIT DARMO GOLF, SURABAYA BARAT
              </div>
            </RevealInView>
          </div>
        </div>
      </div>
    </section>
  );
}
