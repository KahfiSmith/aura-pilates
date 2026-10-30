"use client";

import Link from "next/link";
import { studioData } from "@/data/pilates";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { RevealInView } from "@/components/motion/RevealInView";

export function Footer() {
  const { contact, accreditation, schedule } = studioData;
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121312] text-[#F8F8F7] pt-20 pb-12 border-t border-[#2A2C2A] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <RevealInView delay={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2C2A]">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-sans font-black text-3xl tracking-tighter text-[#F8F8F7] uppercase group-hover:text-[#CE5A37] transition-colors">
                AURA
              </span>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-[#8A8D8A] uppercase mt-0.5">
                Movement Studio
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#8A8D8A] leading-relaxed max-w-sm">
              Contemporary pilates movement studio di Surabaya Barat. Dilengkapi apparatus Balanced Body Allegro 2 Reformers dan instruktur bersertifikasi internasional STOTT.
            </p>

            <div className="text-[11px] font-mono text-[#CE5A37] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CE5A37]" />
              {accreditation}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F8F8F7]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase text-[#8A8D8A]">
              {[
                { label: "Studio", href: "#studio-intro" },
                { label: "Classes", href: "#classes" },
                { label: "Schedule", href: "#schedule" },
                { label: "Instructors", href: "#instructors" },
                { label: "Membership", href: "#pricing" },
                { label: "Apparatus", href: "#amenities" },
                { label: "Guide", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#F8F8F7] hover:translate-x-1 inline-block transition-transform">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F8F8F7]">
              STUDIO HOURS
            </div>
            <div className="space-y-2 text-xs font-mono text-[#8A8D8A]">
              {schedule.map((s, idx) => (
                <div key={idx} className="pb-2 border-b border-[#2A2C2A]">
                  <div className="font-bold text-[#F8F8F7]">{s.days}</div>
                  <div>{s.hours}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F8F8F7]">
              CONNECT
            </div>
            <div className="space-y-2 text-xs font-mono text-[#8A8D8A]">
              <div>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CE5A37] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>WHATSAPP</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <div className="text-[#F8F8F7] text-[11px]">{contact.whatsappFormatted}</div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#CE5A37] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>HOTLINE</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <div className="text-[#F8F8F7] text-[11px]">{contact.formattedPhone}</div>
              </div>

              <div className="pt-2">
                <div>SURABAYA BARAT</div>
                <div className="text-[11px]">{contact.city}, INDONESIA</div>
              </div>
            </div>
          </div>
        </RevealInView>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5E605E] uppercase">
          <div>
            &copy; 2026 AURA MOVEMENT STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>BALANCED BODY ALLEGRO 2</span>
            <span>BUKIT DARMO GOLF</span>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
              aria-label="Scroll to top"
              className="p-2 border border-[#2A2C2A] text-[#8A8D8A] hover:text-[#F8F8F7] hover:border-[#F8F8F7] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
