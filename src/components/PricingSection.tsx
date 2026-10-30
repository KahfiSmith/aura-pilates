"use client";

import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";

export function PricingSection() {
  const { pricing, contact } = studioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <RevealInView delay={0.05} direction="up" distance={15}>
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                <span className="w-2 h-[1px] bg-[#CE5A37]" />
                RATES & PACKAGES
              </div>
            </RevealInView>
            <KineticHeading
              as="h2"
              lines={["MEMBERSHIP", "& SESSIONS."]}
              className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
            />
          </div>
          <RevealInView delay={0.2} direction="up">
            <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
              Struktur harga transparan tanpa biaya registrasi tersembunyi. Setiap paket sudah mencakup akses locker privat dan botanical hydration lounge.
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
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
              },
            },
          }}
          className="border-y border-[#121312] divide-y divide-[#DFDFD9]"
        >
          {pricing.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: MOTION_EASE.smooth },
                },
              }}
              whileHover={{
                backgroundColor: item.isPopular ? "rgba(240, 240, 238, 1)" : "rgba(240, 240, 238, 0.6)",
              }}
              className={`py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-4 -mx-4 transition-colors group ${
                item.isPopular ? "bg-[#F0F0EE] relative" : ""
              }`}
            >
              <div className="lg:col-span-5 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-black text-2xl text-[#121312] uppercase group-hover:text-[#CE5A37] transition-colors">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <motion.span
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#CE5A37] text-[#F8F8F7]"
                    >
                      {item.badge}
                    </motion.span>
                  )}
                </div>
                <p className="text-xs text-[#5E605E]">
                  {item.subtitle}
                </p>
                <div className="text-[11px] font-mono text-[#5E605E] pt-1">
                  {item.credits} • {item.validity}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans font-black text-3xl text-[#121312]">
                    {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs font-mono line-through text-[#8A8D8A]">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#CE5A37] font-mono font-bold mt-0.5">
                  {item.pricePerSession}
                </div>
              </div>

              <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                <motion.a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(item.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#121312] text-[#F8F8F7] hover:bg-[#CE5A37] transition-colors shadow-sm"
                >
                  <span>Book Rate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <RevealInView delay={0.3} direction="up">
          <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5E605E] uppercase">
            <span>* Pembatalan kelas gratis hingga 12 jam sebelum sesi</span>
            <span>* Masa berlaku paket dapat dibekukan (freeze) bila bepergian</span>
          </div>
        </RevealInView>
      </div>
    </section>
  );
}
