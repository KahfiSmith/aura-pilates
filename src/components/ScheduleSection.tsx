"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { Clock, User, MapPin, ArrowRight, MessageCircle, AlertCircle } from "lucide-react";

export function ScheduleSection() {
  const { timetable, contact } = studioData;
  const [selectedDay, setSelectedDay] = useState("Semua");

  const days = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const filteredTimetable =
    selectedDay === "Semua"
      ? timetable
      : timetable.filter((item) => item.day === selectedDay);

  return (
    <section id="jadwal" className="py-24 sm:py-32 bg-[#F3EFE6] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#E5DDD0]">
              Live Studio Timetable
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
              JADWAL KELAS MINGGUAN. <br />
              <span className="italic font-normal text-[#C86D51]">PILIH WAKTU TERBAIK</span> UNTUK ANDA.
            </h2>
            <p className="text-base text-[#647069] leading-relaxed">
              Maksimal 6 member per sesi semi-private untuk memastikan koreksi postur yang akurat dan kenyamanan berlatih yang optimal.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD0] flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#C86D51] shrink-0" />
            <p className="text-xs text-[#647069] leading-snug">
              Slot carriage cepat penuh. Reservasi minimal 24 jam sebelum kelas dianjurkan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap border ${
                selectedDay === day
                  ? "bg-[#1A2821] text-[#FAF7F2] border-[#1A2821] shadow-md"
                  : "bg-[#FAF7F2] text-[#647069] border-[#E5DDD0] hover:text-[#1A2821] hover:bg-[#FFFFFF]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTimetable.map((slot) => {
            const bookingText = `Halo AURA Pilates Studio! Saya ingin booking slot kelas "${slot.className}" pada hari ${slot.day}, pukul ${slot.time} bersama Coach ${slot.instructorName}. Apakah slot masih tersedia?`;

            return (
              <div
                key={slot.id}
                className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD0] flex flex-col justify-between hover:border-[#C86D51]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE3D5] text-[#1A2821] text-[11px] font-bold tracking-wider uppercase">
                      <Clock className="w-3.5 h-3.5 text-[#C86D51]" />
                      <span>{slot.time} WIB</span>
                    </span>

                    <span
                      className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                        slot.spotsLeft <= 2
                          ? "bg-[#FAEEEA] text-[#C86D51] border border-[#C86D51]/30"
                          : "bg-[#EFF4F1] text-[#567568]"
                      }`}
                    >
                      Sisa {slot.spotsLeft} Slot
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#647069] mb-1">
                      {slot.day} • {slot.level}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1A2821] group-hover:text-[#C86D51] transition-colors">
                      {slot.className}
                    </h3>
                  </div>

                  <div className="space-y-2 py-3 border-y border-[#E5DDD0]/70 text-xs text-[#647069]">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#567568]" />
                      <span className="font-semibold text-[#1A2821]">{slot.instructorName}</span>
                      <span className="text-[11px] text-[#647069]">({slot.instructorRole})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#647069]" />
                      <span>{slot.room}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(bookingText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1A2821] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#C86D51] transition-colors shadow-sm group-hover:shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reservasi Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
