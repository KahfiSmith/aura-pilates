"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export function FaqSection() {
  const { faqs, contact } = studioData;
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <div className="space-y-4 mb-16">
          <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
            STUDIO GUIDE
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
            FREQUENTLY <br />
            ASKED.
          </h2>
          <p className="text-sm sm:text-base text-[#5E605E] max-w-lg leading-relaxed">
            Informasi penting seputar etiket studio, persiapan kelas perdana, dan standar keselamatan berlatih di AURA.
          </p>
        </div>

        <div className="border-t border-[#121312] divide-y divide-[#DFDFD9]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left hover:text-[#CE5A37] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-black text-lg sm:text-xl text-[#121312] uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5E605E] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#CE5A37]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-4 text-xs sm:text-sm text-[#5E605E] leading-relaxed max-w-2xl animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-[#DFDFD9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[#5E605E] uppercase">
            MEMILIKI KELUHAN MEDIS KHUSUS ATAU REKOMENDASI DOKTER?
          </span>
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
              "Halo AURA Movement Studio! Saya ingin berkonsultasi mengenai kondisi medis tubuh saya sebelum mulai latihan."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold uppercase text-[#121312] hover:text-[#CE5A37] transition-colors"
          >
            <span>KONSULTASI PRIVAT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
