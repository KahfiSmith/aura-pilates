"use client";

import { useState } from "react";
import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function ClassPrograms() {
  const { classes, contact } = studioData;
  const [activeId, setActiveId] = useState(classes[0].id);

  const selectedClass = classes.find((c) => c.id === activeId) || classes[0];

  return (
    <section id="classes" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
              DIRECTORY 01 - 05
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
              CLASS <br />
              DIRECTORY.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
            Pilihan format latihan yang disesuaikan dengan tingkat kontrol tubuh dan tujuan spesifik Anda, dari pondasi hingga rehabilitasi personal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 divide-y divide-[#DFDFD9] border-y border-[#DFDFD9]">
            {classes.map((item, idx) => {
              const isSelected = item.id === activeId;
              const numStr = `0${idx + 1}`;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`py-8 cursor-pointer transition-colors group ${
                    isSelected ? "bg-[#F0F0EE]/80 px-4 -mx-4" : "hover:bg-[#F0F0EE]/40 px-4 -mx-4"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#CE5A37]">
                          {numStr}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#5E605E] bg-[#E5E5E0] px-2 py-0.5">
                          {item.level}
                        </span>
                        <span className="text-[10px] font-mono text-[#5E605E]">
                          {item.duration} • {item.capacity}
                        </span>
                      </div>

                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#121312] uppercase tracking-tight group-hover:text-[#CE5A37] transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5E605E] leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 shrink-0">
                      <div
                        className={`w-9 h-9 flex items-center justify-center border transition-all ${
                          isSelected
                            ? "bg-[#121312] text-[#F8F8F7] border-[#121312]"
                            : "border-[#DFDFD9] text-[#121312] group-hover:border-[#121312]"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-6 pt-4 border-t border-[#DFDFD9] grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#121312] font-bold mb-2">
                          MANFAAT SPESIFIK:
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#5E605E]">
                          {item.benefits.slice(0, 3).map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#CE5A37] font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-between pt-2 sm:pt-0">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#121312] font-bold mb-1">
                          AUDIENS REKOMENDASI:
                        </div>
                        <p className="text-xs text-[#5E605E] leading-relaxed mb-4">
                          {item.suitableFor}
                        </p>
                        <a
                          href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                            `Halo AURA Movement Studio! Saya ingin reservasi sesi kelas "${item.name}". Mohon informasi slot jadwal terdekat.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121312] hover:text-[#CE5A37] transition-colors"
                        >
                          <span>Book This Session via WhatsApp</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="border border-[#121312] bg-[#E5E5E0] overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src={selectedClass.image}
                  alt={selectedClass.name}
                  fill
                  className="object-cover object-center grayscale contrast-110"
                  sizes="500px"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono uppercase tracking-widest">
                  {selectedClass.name}
                </div>
              </div>
              <div className="p-6 bg-[#121312] text-[#F8F8F7] space-y-3">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#CE5A37]">
                  FOCUS & INTENSITY
                </div>
                <div className="text-sm font-bold uppercase tracking-wider">
                  {selectedClass.subtitle}
                </div>
                <p className="text-xs text-[#8A8D8A] leading-relaxed">
                  {selectedClass.description}
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                      `Halo AURA Movement Studio! Saya ingin bertanya mengenai ketersediaan kelas "${selectedClass.name}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F8F8F7] hover:text-[#CE5A37] transition-colors"
                  >
                    <span>Cek Slot Kelas via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
