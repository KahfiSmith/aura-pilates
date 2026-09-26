"use client";

import { useState } from "react";
import { studioData } from "@/data/pilates";
import { ArrowRight, Phone } from "lucide-react";

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
      `Halo AURA Movement Studio! Saya ingin mengajukan reservasi sesi latihan:\n\n` +
      `• Nama: ${fullName.trim() || "Calon Member"}\n` +
      `• Pilihan Kelas: ${selectedClass}\n` +
      `• Waktu yang Diinginkan: ${selectedTimeSlot}\n` +
      `• Catatan Tubuh/Keluhan: ${healthNote}\n\n` +
      `Mohon konfirmasi ketersediaan slot carriage dan instruksi kedatangan studio. Terima kasih!`;

    const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="border border-[#121312] bg-[#FFFFFF] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
                RESERVATION DIRECTORY
              </div>

              <h2 className="font-sans font-black text-4xl sm:text-5xl tracking-tight text-[#121312] uppercase leading-[0.95]">
                BOOK A <br />
                SESSION.
              </h2>

              <p className="text-sm sm:text-base text-[#5E605E] leading-relaxed">
                Pilih format kelas dan preferensi waktu Anda. Tim studio concierge kami akan mencocokkan jadwal carriage terbaik dan mengonfirmasi via WhatsApp dalam hitungan menit.
              </p>

              <div className="pt-4 border-t border-[#DFDFD9] space-y-2 text-xs font-mono text-[#5E605E] uppercase">
                <div>• KONFIRMASI INSTAN KE WHATSAPP RESMI</div>
                <div>• FREE 15 MENIT POSTURE ALIGNMENT BRIEFING</div>
                <div>• PEMBATALAN BEBAS PENALTI HINGGA 12 JAM</div>
              </div>

              <div className="pt-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#121312] hover:text-[#CE5A37] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#CE5A37]" />
                  <span>HOTLINE STUDIO: {contact.formattedPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F0F0EE] p-6 sm:p-10 border border-[#DFDFD9]">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullname" className="block text-xs font-mono uppercase tracking-wider text-[#121312] font-bold mb-2">
                    NAMA LENGKAP
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Jessica Santoso"
                    className="w-full px-4 py-3.5 bg-[#FFFFFF] border border-[#DFDFD9] text-sm text-[#121312] focus:outline-none focus:border-[#121312] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="class-select" className="block text-xs font-mono uppercase tracking-wider text-[#121312] font-bold mb-2">
                    PILIHAN KELAS / PAKET
                  </label>
                  <select
                    id="class-select"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#FFFFFF] border border-[#DFDFD9] text-sm text-[#121312] focus:outline-none focus:border-[#121312] transition-colors font-medium"
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
                    <label htmlFor="time-select" className="block text-xs font-mono uppercase tracking-wider text-[#121312] font-bold mb-2">
                      PREFERENSI WAKTU
                    </label>
                    <select
                      id="time-select"
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#FFFFFF] border border-[#DFDFD9] text-sm text-[#121312] focus:outline-none focus:border-[#121312] transition-colors font-medium"
                    >
                      {timeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="health-select" className="block text-xs font-mono uppercase tracking-wider text-[#121312] font-bold mb-2">
                      KONDISI TUBUH / FOKUS
                    </label>
                    <select
                      id="health-select"
                      value={healthNote}
                      onChange={(e) => setHealthNote(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#FFFFFF] border border-[#DFDFD9] text-sm text-[#121312] focus:outline-none focus:border-[#121312] transition-colors font-medium"
                    >
                      {healthOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#121312] text-[#F8F8F7] font-bold text-xs tracking-widest uppercase hover:bg-[#CE5A37] transition-colors cursor-pointer group"
                  >
                    <span>Kirim Reservasi via WhatsApp</span>
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
