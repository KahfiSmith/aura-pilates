"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { RevealInView } from "@/components/motion/RevealInView";
import { MOTION_EASE } from "@/lib/motion";

export function ScheduleSection() {
  const { timetable, contact } = studioData;
  const [selectedDay, setSelectedDay] = useState("Senin");
  const shouldReduceMotion = useReducedMotion();

  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const daySchedule = timetable.filter((item) => item.day === selectedDay);

  return (
    <section id="schedule" className="py-20 lg:py-32 bg-[#F0F0EE] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <RevealInView delay={0.05} direction="up" distance={15}>
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase flex items-center gap-2">
                <span className="w-2 h-[1px] bg-[#CE5A37]" />
                STUDIO TIMETABLE
              </div>
            </RevealInView>
            <KineticHeading
              as="h2"
              lines={["WEEKLY", "SCHEDULE."]}
              className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]"
            />
          </div>
          <RevealInView delay={0.2} direction="up">
            <div className="text-xs font-mono uppercase text-[#5E605E] max-w-sm">
              Maksimal 6 member per sesi semi-private. Reservasi dibuka 7 hari sebelum jadwal kelas.
            </div>
          </RevealInView>
        </div>

        {/* Days Filter with Sliding Tab Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#DFDFD9] scrollbar-none">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap z-10 cursor-pointer ${
                  isSelected ? "text-[#F8F8F7]" : "text-[#5E605E] hover:text-[#121312]"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeScheduleTab"
                    className="absolute inset-0 bg-[#121312] z-[-1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{day}</span>
              </button>
            );
          })}
        </div>

        {/* Schedule Slots with Staggered Entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.05,
                },
              },
            }}
            className="border-t border-[#121312] divide-y divide-[#DFDFD9]"
          >
            {daySchedule.map((slot) => {
              const bookingText = `Halo AURA Movement Studio! Saya ingin booking slot kelas "${slot.className}" pada hari ${slot.day}, pukul ${slot.time} bersama Coach ${slot.instructorName}.`;

              return (
                <motion.div
                  key={slot.id}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: MOTION_EASE.smooth },
                    },
                  }}
                  whileHover={{ backgroundColor: "rgba(248, 248, 247, 0.9)" }}
                  className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-4 -mx-4 transition-colors group"
                >
                  <div className="sm:col-span-3">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#121312] group-hover:text-[#CE5A37] transition-colors">
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

                    <motion.a
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(bookingText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121312] text-[#F8F8F7] text-[11px] font-bold uppercase tracking-wider hover:bg-[#CE5A37] transition-colors shadow-sm"
                    >
                      <span>Book</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
