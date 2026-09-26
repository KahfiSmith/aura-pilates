import Link from "next/link";
import { studioData } from "@/data/pilates";
import { Phone, MessageCircle, MapPin, Mail, Award } from "lucide-react";

export function Footer() {
  const { contact, accreditation, schedule } = studioData;

  return (
    <footer className="bg-[#14201A] text-[#FAF7F2] border-t border-[#2B3E34] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2B3E34]">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#1A2821] flex items-center justify-center font-serif text-xl font-bold">
                A
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-[#FAF7F2] leading-none">
                  AURA
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.25em] text-[#8E9A93] uppercase mt-1">
                  Reformer & Movement
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#8E9A93] leading-relaxed max-w-sm">
              Boutique reformer pilates studio di Surabaya Barat dengan peralatan presisi Balanced Body Allegro 2, instruktur bersertifikasi internasional STOTT, dan suasana tenang untuk kebugaran holistik Anda.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D3C8B6] bg-[#1A2821] px-3.5 py-2 rounded-2xl border border-[#2B3E34]">
              <Award className="w-4 h-4 text-[#C86D51] shrink-0" />
              <span className="text-[11px] font-medium">{accreditation}</span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#FAF7F2]">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9A93]">
              <li>
                <a href="#filosofi" className="hover:text-[#FAF7F2] transition-colors">
                  Filosofi Gerak
                </a>
              </li>
              <li>
                <a href="#kelas" className="hover:text-[#FAF7F2] transition-colors">
                  Program Kelas
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-[#FAF7F2] transition-colors">
                  Jadwal Mingguan
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-[#FAF7F2] transition-colors">
                  Paket & Membership
                </a>
              </li>
              <li>
                <a href="#instruktur" className="hover:text-[#FAF7F2] transition-colors">
                  Instruktur Kami
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#FAF7F2] transition-colors">
                  Fasilitas Studio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FAF7F2] transition-colors">
                  FAQ Kunjungan
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#FAF7F2]">
              Jam Operasional
            </h4>
            <div className="space-y-3 text-xs text-[#8E9A93]">
              {schedule.map((s, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#1A2821] border border-[#2B3E34]">
                  <div className="font-semibold text-[#FAF7F2]">{s.days}</div>
                  <div className="text-[#8E9A93] mt-0.5">{s.hours}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#647069] leading-relaxed">
              *Reservasi kelas dan konsultasi wajib dilakukan sebelum kedatangan studio.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#FAF7F2]">
              Kontak Studio
            </h4>
            <div className="space-y-3 text-xs text-[#8E9A93]">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#FAF7F2] hover:text-[#C86D51] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-[#1A2821] border border-[#2B3E34] flex items-center justify-center text-[#C86D51] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: {contact.whatsappFormatted}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-[#FAF7F2] hover:text-[#C86D51] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-[#1A2821] border border-[#2B3E34] flex items-center justify-center text-[#567568] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Telepon: {contact.formattedPhone}</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#1A2821] border border-[#2B3E34] flex items-center justify-center text-[#8E9A93] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">{contact.address}, {contact.city}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#1A2821] border border-[#2B3E34] flex items-center justify-center text-[#8E9A93] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9A93]">
          <div>
            &copy; 2026 AURA Pilates Studio. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-6">
            <span>Surabaya Barat, Indonesia</span>
            <span>Balanced Body Allegro 2 Facility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
