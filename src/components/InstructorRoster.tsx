import Image from "next/image";
import { studioData } from "@/data/pilates";
import { Award, Quote, MessageCircle } from "lucide-react";

export function InstructorRoster() {
  const { instructors, contact } = studioData;

  return (
    <section id="instruktur" className="py-24 sm:py-32 bg-[#F3EFE6] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#E5DDD0]">
            Expert Educators
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
            INSTRUKTUR BERSERTIFIKASI DUNIA. <br />
            <span className="italic font-normal text-[#C86D51]">MEMBIMBING DENGAN</span> EMPATI & PRESISI.
          </h2>
          <p className="text-base text-[#647069] leading-relaxed">
            Seluruh pengajar di AURA memegang sertifikasi internasional resmi (STOTT / Polestar / Balanced Body) dengan jam terbang klinis ratusan jam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((inst) => (
            <div
              key={inst.id}
              className="p-8 rounded-[2.5rem] bg-[#FAF7F2] border border-[#E5DDD0] flex flex-col justify-between hover:border-[#C86D51]/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mb-6 border border-[#E5DDD0] bg-[#EAE3D5]">
                  <Image
                    src={inst.photo}
                    alt={inst.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A2821]/80 backdrop-blur-md text-[#FAF7F2] text-[10px] font-bold tracking-wider uppercase">
                    <Award className="w-3 h-3 text-[#C86D51]" />
                    <span>{inst.experience}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1A2821]">{inst.name}</h3>
                  <p className="text-xs font-semibold text-[#C86D51] mt-0.5">{inst.title}</p>
                </div>

                <p className="text-xs text-[#647069] leading-relaxed mb-6">
                  {inst.bio}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-[#E5DDD0]/70">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A2821]">
                    Akreditasi & Spesialisasi:
                  </div>
                  {inst.certifications.map((cert, idx) => (
                    <div key={idx} className="text-[11px] text-[#567568] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#567568] shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#E5DDD0] relative mb-6">
                  <Quote className="w-5 h-5 text-[#C86D51] opacity-60 mb-1" />
                  <p className="text-xs italic text-[#1A2821] leading-relaxed">
                    &ldquo;{inst.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo AURA Pilates Studio! Saya ingin berkonsultasi mengenai kelas bersama Coach ${inst.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#1A2821] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C86D51] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Jadwal Coach {inst.name.split(" ")[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
