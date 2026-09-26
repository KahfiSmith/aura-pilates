import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { contact } = studioData;

  const trialMessage =
    "Halo AURA Movement Studio! Saya ingin booking sesi latihan / trial class.";

  return (
    <section className="relative overflow-hidden bg-[#F8F8F7] border-b border-[#DFDFD9] pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-widest text-[#5E605E] uppercase border-b border-[#DFDFD9] pb-4">
              <span>01 REFORMER</span>
              <span>•</span>
              <span>02 MAT & STRENGTH</span>
              <span>•</span>
              <span>03 PRIVATE SUITE</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">SURABAYA BARAT</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-[#121312] uppercase leading-[0.92]">
                MOVE <br />
                WITH <br />
                <span className="text-[#CE5A37]">PURPOSE.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#5E605E] max-w-lg leading-relaxed font-normal">
                Pilates sessions designed to build strength, control and confidence. Latihan berbasis tahanan pegas presisi tinggi bersama instruktur tersertifikasi internasional STOTT.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(trialMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#121312] text-[#F8F8F7] font-bold text-xs tracking-widest uppercase hover:bg-[#CE5A37] transition-colors group"
                >
                  <span>Book a Class</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#studio-intro"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#121312] font-bold text-xs tracking-widest uppercase border border-[#121312] hover:bg-[#121312] hover:text-[#F8F8F7] transition-colors"
                >
                  <span>View Studio</span>
                </a>
              </div>

              <div className="pt-6 border-t border-[#DFDFD9] flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase text-[#5E605E]">
                <div>
                  <span className="text-[#121312] font-bold">LOKASI:</span> BUKIT DARMO GOLF, SURABAYA
                </div>
                <div>
                  <span className="text-[#121312] font-bold">JAM:</span> SEN - JUM 06:30 - 20:30
                </div>
                <div>
                  <span className="text-[#121312] font-bold">FORMAT:</span> MAX 6 PER CLASS
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-full min-h-[480px] lg:min-h-[580px] bg-[#E5E5E0] border border-[#121312] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
                alt="Controlled Pilates Reformer Movement in AURA Studio"
                fill
                priority
                className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-[#121312]/15 pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#121312] text-[#F8F8F7] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#8A8D8A]">
                    APPARATUS SPECIFICATION
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#F8F8F7] mt-0.5">
                    BALANCED BODY ALLEGRO 2
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-[#CE5A37]">
                  06 CARRIAGES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
