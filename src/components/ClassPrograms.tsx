"use client";

import { useState } from "react";
import Image from "next/image";
import { studioData } from "@/data/pilates";
import { Check, Clock, Users, Flame, ArrowRight, MessageCircle } from "lucide-react";

export function ClassPrograms() {
  const { classes, contact } = studioData;
  const [selectedId, setSelectedId] = useState(classes[0].id);

  const activeClass = classes.find((c) => c.id === selectedId) || classes[0];

  return (
    <section id="kelas" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3D5] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#D3C8B6]">
              Movement Menu
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
              PROGRAM REFORMER TERKURASI. <br />
              <span className="italic font-normal text-[#C86D51]">DITUJUKAN UNTUK</span> SETIAP KEBUTUHAN TUBUH.
            </h2>
            <p className="text-base sm:text-lg text-[#647069] leading-relaxed">
              Mulai dari pondasi postur pertama hingga pemahatan otot atletis dan pemulihan tulang belakang, temukan kelas yang selaras dengan tujuan gerak Anda.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {classes.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 border ${
                  selectedId === c.id
                    ? "bg-[#1A2821] text-[#FAF7F2] border-[#1A2821] shadow"
                    : "bg-[#F3EFE6] text-[#647069] border-[#E5DDD0] hover:text-[#1A2821]"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#FFFFFF] rounded-[2.5rem] border border-[#E5DDD0] p-6 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative border border-[#E5DDD0] bg-[#F3EFE6]">
                <Image
                  src={activeClass.image}
                  alt={activeClass.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A2821]/80 backdrop-blur-md text-[#FAF7F2] text-[11px] font-bold tracking-wider uppercase">
                  <span>{activeClass.level}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-[#F3EFE6] border border-[#E5DDD0] text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#1A2821] mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>{activeClass.duration}</span>
                  </div>
                  <div className="text-[10px] text-[#647069] uppercase font-medium">Durasi Kelas</div>
                </div>

                <div className="p-3 rounded-2xl bg-[#F3EFE6] border border-[#E5DDD0] text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#1A2821] mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span className="truncate">{activeClass.intensity}</span>
                  </div>
                  <div className="text-[10px] text-[#647069] uppercase font-medium">Intensitas</div>
                </div>

                <div className="p-3 rounded-2xl bg-[#F3EFE6] border border-[#E5DDD0] text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#1A2821] mb-1">
                    <Users className="w-3.5 h-3.5 text-[#567568]" />
                    <span>{activeClass.capacity}</span>
                  </div>
                  <div className="text-[10px] text-[#647069] uppercase font-medium">Kapasitas</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C86D51] mb-1">
                  {activeClass.subtitle}
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A2821]">
                  {activeClass.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#647069] leading-relaxed">
                {activeClass.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1A2821]">
                  Fokus & Manfaat Utama:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeClass.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EFF4F1] flex items-center justify-center text-[#567568] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-[#1A2821] font-medium leading-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F3EFE6]/60 border border-[#E5DDD0] space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#567568]">
                  Sangat Direkomendasikan Untuk:
                </span>
                <p className="text-xs text-[#647069] leading-relaxed">
                  {activeClass.suitableFor}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo AURA Pilates Studio! Saya ingin reservasi sesi kelas "${activeClass.name}". Mohon informasi slot jadwal terdekat.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1A2821] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C86D51] transition-all shadow-md group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Kelas Ini via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#jadwal"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F3EFE6] text-[#1A2821] text-xs font-semibold tracking-wider uppercase hover:bg-[#EAE3D5] transition-colors border border-[#E5DDD0]"
                >
                  <span>Cek Timetable Mingguan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
