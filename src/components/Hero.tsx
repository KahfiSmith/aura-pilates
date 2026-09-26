import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowRight, CheckCircle2, Award, Users, Activity } from "lucide-react";

export function Hero() {
  const { contact } = studioData;

  const trialMessage =
    "Halo AURA Pilates Studio! Saya ingin mengklaim slot First Trial Experience seharga Rp 175.000. Mohon informasi jadwal yang tersedia minggu ini.";

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-32 bg-[#FAF7F2] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EAE3D5] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#D3C8B6]">
              <span className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
              <span>Boutique Reformer & Movement Studio</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A2821] leading-[1.08]">
                ALIGN YOUR BODY. <br />
                <span className="italic font-normal text-[#C86D51]">ELEVATE</span> YOUR MIND.
              </h1>
              <p className="text-base sm:text-lg text-[#647069] max-w-xl leading-relaxed font-normal">
                Rasakan kekuatan transformatif pilates reformer dengan bimbingan instruktur bersertifikasi internasional STOTT. Suasana studio yang tenang, privat dengan maksimal 6 member per sesi, dan peralatan presisi Balanced Body Allegro 2 di Surabaya Barat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(trialMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1A2821] text-[#FAF7F2] font-semibold text-sm tracking-wider uppercase hover:bg-[#C86D51] transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Book First Trial Rp 175k</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#jadwal"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F3EFE6] text-[#1A2821] font-semibold text-sm tracking-wider uppercase hover:bg-[#EAE3D5] transition-colors border border-[#E5DDD0]"
              >
                <span>Lihat Jadwal Kelas</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#E5DDD0]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#567568] shrink-0" />
                <span className="text-xs font-medium text-[#1A2821]">Maksimal 6 Member</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#567568] shrink-0" />
                <span className="text-xs font-medium text-[#1A2821]">STOTT Certified</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#567568] shrink-0" />
                <span className="text-xs font-medium text-[#1A2821]">Allegro 2 Reformers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#F3EFE6] border-2 border-[#E5DDD0] shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
                  alt="AURA Pilates Studio Reformer Class Movement"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2821]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E5DDD0] text-[#1A2821]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#C86D51]" />
                      <span className="text-xs font-bold uppercase tracking-wider">First-Timer Welcome</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-[#567568] bg-[#EFF4F1] px-2 py-0.5 rounded-full">
                      Hemat 50%
                    </span>
                  </div>
                  <p className="text-xs text-[#647069] mt-1 font-medium leading-relaxed">
                    Sesi pengenalan alat, briefing postur 15 menit, dan konsultasi kebutuhan tubuh Anda.
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5DDD0] shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#567568]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A2821]">STOTT Certified</div>
                  <div className="text-[10px] text-[#647069]">International Standard</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5DDD0] shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAEEEA] flex items-center justify-center text-[#C86D51]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A2821]">Intimate Class</div>
                  <div className="text-[10px] text-[#647069]">Max 6 Carriages</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5DDD0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-[#F3EFE6]/60 border border-[#E5DDD0]">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2821]">100%</div>
            <div className="text-xs font-medium text-[#647069] uppercase tracking-wider mt-1">
              Allegro 2 Reformers
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#F3EFE6]/60 border border-[#E5DDD0]">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2821]">Max 6</div>
            <div className="text-xs font-medium text-[#647069] uppercase tracking-wider mt-1">
              Member per Sesi
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#F3EFE6]/60 border border-[#E5DDD0]">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2821]">1.200+</div>
            <div className="text-xs font-medium text-[#647069] uppercase tracking-wider mt-1">
              Posture Transformed
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#F3EFE6]/60 border border-[#E5DDD0]">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2821]">4.9 / 5.0</div>
            <div className="text-xs font-medium text-[#647069] uppercase tracking-wider mt-1">
              Google Rating Surabaya
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
