import { studioData } from "@/data/pilates";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const { contact } = studioData;

  const trialMessage =
    "Halo AURA Movement Studio! Saya ingin booking sesi latihan pertama saya.";

  return (
    <section className="py-24 sm:py-36 bg-[#121312] text-[#F8F8F7] border-b border-[#2A2C2A]">
      <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center space-y-8">
        <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
          START YOUR PRACTICE
        </div>

        <h2 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.92]">
          READY <br />
          TO MOVE?
        </h2>

        <p className="text-base sm:text-xl text-[#8A8D8A] max-w-lg mx-auto leading-relaxed">
          Book your first session. Precision reformer pilates designed to build strength, control and confidence in Surabaya Barat.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(trialMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#CE5A37] text-[#F8F8F7] font-bold text-xs tracking-widest uppercase hover:bg-[#B54726] transition-colors group"
          >
            <span>Book a Class</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#schedule"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-[#F8F8F7] font-bold text-xs tracking-widest uppercase border border-[#F8F8F7]/30 hover:border-[#F8F8F7] transition-colors"
          >
            <span>View Schedule</span>
          </a>
        </div>

        <div className="pt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-mono text-[#5E605E] uppercase">
          <span>SURABAYA BARAT</span>
          <span>•</span>
          <span>BALANCED BODY ALLEGRO 2</span>
          <span>•</span>
          <span>STOTT CERTIFIED</span>
        </div>
      </div>
    </section>
  );
}
