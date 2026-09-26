import Image from "next/image";
import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = studioData;

  return (
    <section id="location" className="py-20 lg:py-32 bg-[#F0F0EE] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
                STUDIO SPACE
              </div>
              <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
                VISIT THE <br />
                STUDIO.
              </h2>
              <p className="text-base text-[#5E605E] leading-relaxed">
                Terletak strategis di kawasan tenang Bukit Darmo Golf, Surabaya Barat. Dilengkapi area parkir privat luas, keamanan 24 jam, dan akses tol satelit terdekat.
              </p>
            </div>

            <div className="border-t border-[#121312] divide-y divide-[#DFDFD9] text-xs font-mono">
              <div className="py-4 space-y-1">
                <div className="font-bold uppercase text-[#121312]">ALAMAT STUDIO:</div>
                <div className="text-[#5E605E] leading-relaxed">{contact.fullAddress}</div>
                <div className="pt-2">
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CE5A37] hover:underline"
                  >
                    <span>GET DIRECTIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="py-4 space-y-2">
                <div className="font-bold uppercase text-[#121312]">JAM OPERASIONAL:</div>
                {schedule.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-[#5E605E]">
                    <span className="text-[#121312] font-semibold">{s.days}</span>
                    <span>{s.hours}</span>
                  </div>
                ))}
              </div>

              <div className="py-4 space-y-2">
                <div className="font-bold uppercase text-[#121312]">KONTAK LANGSUNG:</div>
                <div className="flex flex-col space-y-1 text-[#5E605E]">
                  <div>WHATSAPP: {contact.whatsappFormatted}</div>
                  <div>TELEPON: {contact.formattedPhone}</div>
                  <div>EMAIL: {contact.email}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[16/10] bg-[#E5E5E0] border border-[#121312] overflow-hidden relative group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="AURA Movement Studio Architecture Exterior and Interior"
                fill
                className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                STUDIO ARCHITECTURE
              </div>
            </div>

            <div className="aspect-[21/9] border border-[#DFDFD9] overflow-hidden relative">
              <iframe
                title="Peta Lokasi AURA Movement Studio"
                src={contact.openStreetMapUrl}
                className="w-full h-full border-0 filter contrast-[1.05] grayscale-[0.3]"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                BUKIT DARMO GOLF, SURABAYA BARAT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
