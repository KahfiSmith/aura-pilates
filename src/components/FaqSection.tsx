"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export function FaqSection() {
  const { faqs, contact } = studioData;
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3D5] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#D3C8B6]">
            Knowledge & Etiquette
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
            PERTANYAAN SERING DIAJUKAN. <br />
            <span className="italic font-normal text-[#C86D51]">PANDUAN KUNJUNGAN</span> PERTAMA KALI.
          </h2>
          <p className="text-base text-[#647069] leading-relaxed">
            Semua hal yang perlu Anda ketahui sebelum melangkah ke studio reformer pertama kali.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-3xl border border-[#E5DDD0] bg-[#FFFFFF] overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left hover:bg-[#F3EFE6]/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-full bg-[#EFF4F1] text-[#567568] flex items-center justify-center text-xs font-bold shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1A2821]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#647069] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#C86D51]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-sm text-[#647069] leading-relaxed border-t border-[#E5DDD0]/50 animate-in fade-in duration-200">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl bg-[#F3EFE6] border border-[#E5DDD0] space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#1A2821]">
            Punya Pertanyaan Spesifik Terkait Kondisi Medis Anda?
          </h3>
          <p className="text-xs sm:text-sm text-[#647069] max-w-md mx-auto leading-relaxed">
            Konsultasikan keluhan atau riwayat kesehatan Anda secara privat langsung bersama tim instruktur kepala kami.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                "Halo AURA Pilates Studio! Saya ingin berkonsultasi mengenai kondisi tubuh saya sebelum mulai berlatih."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A2821] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C86D51] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tanya Langsung via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
