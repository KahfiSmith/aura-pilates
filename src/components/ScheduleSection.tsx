"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";

export function ScheduleSection() {
  const { timetable, contact } = studioData;
  const [selectedDay, setSelectedDay] = useState("Senin");

  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const daySchedule = timetable.filter((item) => item.day === selectedDay);

  return (
    <section id="schedule" className="py-20 lg:py-32 bg-[#F0F0EE] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
              STUDIO TIMETABLE
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
              WEEKLY <br />
              SCHEDULE.
            </h2>
          </div>
          <div className="text-xs font-mono uppercase text-[#5E605E] max-w-sm">
            Maksimal 6 member per sesi semi-private. Reservasi dibuka 7 hari sebelum jadwal kelas.
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#DFDFD9] scrollbar-none">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                selectedDay === day
                  ? "bg-[#121312] text-[#F8F8F7]"
                  : "bg-transparent text-[#5E605E] hover:text-[#121312] hover:bg-[#DFDFD9]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="border-t border-[#121312] divide-y divide-[#DFDFD9]">
          {daySchedule.map((slot) => {
            const bookingText = `Halo AURA Movement Studio! Saya ingin booking slot kelas "${slot.className}" pada hari ${slot.day}, pukul ${slot.time} bersama Coach ${slot.instructorName}.`;

            return (
              <div
                key={slot.id}
                className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-[#F8F8F7] px-4 -mx-4 transition-colors"
              >
                <div className="sm:col-span-3">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#121312]">
                    {slot.time}
                  </span>
                  <div className="text-[11px] font-mono text-[#5E605E] uppercase mt-0.5">
                    WAKTU INDONESIA BARAT
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="font-sans font-black text-lg sm:text-xl text-[#121312] uppercase">
                    {slot.className}
                  </div>
                  <div className="text-xs text-[#5E605E] font-medium">
                    {slot.level} • {slot.room}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="text-xs font-bold text-[#121312] uppercase">
                    {slot.instructorName}
                  </div>
                  <div className="text-[11px] font-mono text-[#5E605E]">
                    {slot.instructorRole}
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 ${
                      slot.spotsLeft <= 2
                        ? "bg-[#FAF0ED] text-[#CE5A37]"
                        : "bg-[#EEF3F0] text-[#243128]"
                    }`}
                  >
                    SISA {slot.spotsLeft} SLOT
                  </span>

                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(bookingText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121312] text-[#F8F8F7] text-[11px] font-bold uppercase tracking-wider hover:bg-[#CE5A37] transition-colors"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3 h-3" />
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
