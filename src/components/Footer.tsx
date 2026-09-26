import Link from "next/link";
import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { contact, accreditation, schedule } = studioData;

  return (
    <footer className="bg-[#121312] text-[#F8F8F7] pt-20 pb-12 border-t border-[#2A2C2A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2C2A]">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-sans font-black text-3xl tracking-tighter text-[#F8F8F7] uppercase">
                AURA
              </span>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-[#8A8D8A] uppercase mt-0.5">
                Movement Studio
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#8A8D8A] leading-relaxed max-w-sm">
              Contemporary pilates movement studio di Surabaya Barat. Dilengkapi apparatus Balanced Body Allegro 2 Reformers dan instruktur bersertifikasi internasional STOTT.
            </p>

            <div className="text-[11px] font-mono text-[#CE5A37] uppercase tracking-wider">
              {accreditation}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F8F8F7]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase text-[#8A8D8A]">
              <li>
                <a href="#studio-intro" className="hover:text-[#F8F8F7] transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-[#F8F8F7] transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#F8F8F7] transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#instructors" className="hover:text-[#F8F8F7] transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#F8F8F7] transition-colors">
                  Membership
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#F8F8F7] transition-colors">
                  Apparatus
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F8F8F7] transition-colors">
                  Guide
                </a>
              </li>
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
                  className="hover:text-[#CE5A37] transition-colors inline-flex items-center gap-1"
                >
                  <span>WHATSAPP</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <div className="text-[#F8F8F7] text-[11px]">{contact.whatsappFormatted}</div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#CE5A37] transition-colors inline-flex items-center gap-1"
                >
                  <span>HOTLINE</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <div className="text-[#F8F8F7] text-[11px]">{contact.formattedPhone}</div>
              </div>

              <div className="pt-2">
                <div>SURABAYA BARAT</div>
                <div className="text-[11px]">{contact.city}, INDONESIA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5E605E] uppercase">
          <div>
            &copy; 2026 AURA MOVEMENT STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>BALANCED BODY ALLEGRO 2</span>
            <span>BUKIT DARMO GOLF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
