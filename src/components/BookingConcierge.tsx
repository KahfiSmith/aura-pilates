"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { MessageCircle, Phone, CheckCircle, ArrowRight } from "lucide-react";

export function BookingConcierge() {
  const { contact } = studioData;

  const [selectedClass, setSelectedClass] = useState("First Trial Experience (Rp 175.000)");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("Pagi (07:00 - 10:00 WIB)");
  const [fullName, setFullName] = useState("");
  const [healthNote, setHealthNote] = useState("First Timer / Tanpa Keluhan Khusus");

  const classOptions = [
    "First Trial Experience (Rp 175.000)",
    "Reformer Foundation (Level 1)",
    "Dynamic Reformer Sculpt (Level 2)",
    "Flow & Spine Mobility (All Levels)",
    "Prenatal & Postnatal Movement",
    "Private VIP Suite (1-on-1)",
  ];

  const timeOptions = [
    "Pagi (07:00 - 10:00 WIB)",
    "Siang (10:00 - 12:00 WIB)",
    "Sore / Malam (17:00 - 19:30 WIB)",
    "Weekend Slot (Sabtu / Minggu)",
  ];

  const healthOptions = [
    "First Timer / Tanpa Keluhan Khusus",
    "Nyeri Punggung Bawah / Pinggang",
    "Skoliosis / Postur Bungkuk",
    "Sedang Hamil / Pasca Melahirkan",
    "Pemulihan Pasca Cedera Olahraga",
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `Halo Concierge AURA Pilates Studio! Saya ingin mengajukan reservasi kelas:\n\n` +
      `• Nama: ${fullName.trim() || "Calon Member"}\n` +
      `• Pilihan Kelas: ${selectedClass}\n` +
      `• Waktu yang Diinginkan: ${selectedTimeSlot}\n` +
      `• Catatan Tubuh/Keluhan: ${healthNote}\n\n` +
      `Mohon informasi slot jadwal yang masih tersedia dan instruksi kedatangan studio. Terima kasih!`;

    const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reservasi" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="bg-[#FFFFFF] rounded-[2.5rem] border border-[#E5DDD0] shadow-2xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF4F1] text-[#567568] text-xs font-semibold tracking-wider uppercase">
                Direct WhatsApp Concierge
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
                MULAI PERJALANAN <br />
                <span className="italic font-normal text-[#C86D51]">KESELARASAN TUBUH</span> ANDA HARI INI.
              </h2>

              <p className="text-sm sm:text-base text-[#647069] leading-relaxed">
                Pilih program yang Anda inginkan dan tim concierge kami akan segera mencocokkan jadwal studio terbaik untuk Anda dalam hitungan menit via WhatsApp.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E5DDD0]">
                <div className="flex items-center gap-3 text-xs text-[#1A2821] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#567568] shrink-0" />
                  <span>Konfirmasi instan langsung ke WhatsApp tim studio</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#1A2821] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#567568] shrink-0" />
                  <span>Konsultasi gratis 15 menit asesmen postur tubuh</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#1A2821] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#567568] shrink-0" />
                  <span>Kebijakan reschedule fleksibel hingga 12 jam sebelum kelas</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1A2821] hover:text-[#C86D51] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C86D51]" />
                  <span>Atau hubungi hotline studio: {contact.formattedPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F3EFE6] p-6 sm:p-10 rounded-3xl border border-[#E5DDD0]">
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullname" className="block text-xs font-bold uppercase tracking-wider text-[#1A2821] mb-2">
                    Nama Lengkap Anda
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Jessica Santoso"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFFFFF] border border-[#E5DDD0] text-sm text-[#1A2821] focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="class-select" className="block text-xs font-bold uppercase tracking-wider text-[#1A2821] mb-2">
                    Pilihan Program / Kelas
                  </label>
                  <select
                    id="class-select"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFFFFF] border border-[#E5DDD0] text-sm text-[#1A2821] focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
                  >
                    {classOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="time-select" className="block text-xs font-bold uppercase tracking-wider text-[#1A2821] mb-2">
                      Waktu Latihan Pilihan
                    </label>
                    <select
                      id="time-select"
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFFFF] border border-[#E5DDD0] text-sm text-[#1A2821] focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
                    >
                      {timeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="health-select" className="block text-xs font-bold uppercase tracking-wider text-[#1A2821] mb-2">
                      Fokus / Kondisi Tubuh
                    </label>
                    <select
                      id="health-select"
                      value={healthNote}
                      onChange={(e) => setHealthNote(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFFFF] border border-[#E5DDD0] text-sm text-[#1A2821] focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] transition-all"
                    >
                      {healthOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1A2821] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase hover:bg-[#C86D51] transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim Reservasi ke WhatsApp Resmi</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
