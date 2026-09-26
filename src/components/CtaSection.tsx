import { studioData } from "@/data/pilates";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export function CtaSection() {
  const { contact } = studioData;

  const trialMessage =
    "Halo AURA Pilates Studio! Saya ingin mengklaim First Trial Experience (Rp 175.000). Mohon bantu cek jadwal terdekat untuk saya.";

  return (
    <section className="py-24 sm:py-32 bg-[#1A2821] text-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 rounded-full bg-[#C86D51]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 rounded-full bg-[#567568]/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B3E34] text-[#D3C8B6] text-xs font-semibold tracking-wider uppercase border border-[#E5DDD0]/20">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C86D51]" />
          <span>Langkah Pertama Anda Dimulai di Sini</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
          TUBUH ANDA LAYAK MENDAPATKAN <br />
          <span className="italic font-normal text-[#C86D51]">PERHATIAN DAN KESELARASAN</span> TERBAIK.
        </h2>

        <p className="text-base sm:text-lg text-[#D3C8B6] max-w-2xl mx-auto leading-relaxed">
          Ambil slot First Trial Experience seharga Rp 175.000 (diskon 50% dari harga normal). Rasakan perbedaan sensasi tubuh yang lebih ringan, tegak, dan bertenaga sejak sesi pertama.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(trialMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C86D51] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase hover:bg-[#B55B40] transition-all duration-300 shadow-xl group"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Klaim Trial Rp 175k via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#jadwal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2B3E34] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase hover:bg-[#FAF7F2] hover:text-[#1A2821] transition-all border border-[#E5DDD0]/20"
          >
            <span>Eksplorasi Timetable</span>
          </a>
        </div>

        <div className="pt-8 text-xs text-[#8E9A93] space-x-6">
          <span>• Tanpa Kontrak Mengikat</span>
          <span>• Maksimal 6 Member per Kelas</span>
          <span>• Asesmen Postur Gratis</span>
        </div>
      </div>
    </section>
  );
}
