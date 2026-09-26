import { studioData } from "@/data/pilates";
import { MapPin, Clock, Phone, MessageCircle, ExternalLink } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = studioData;

  return (
    <section id="lokasi" className="py-24 sm:py-32 bg-[#F3EFE6] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#E5DDD0]">
                Studio Location & Hours
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
                SANCTUARY DI SURABAYA BARAT. <br />
                <span className="italic font-normal text-[#C86D51]">MUDAH DIAKSES</span> DENGAN PARKIR PRIVAT.
              </h2>
              <p className="text-base text-[#647069] leading-relaxed">
                Berlokasi di kawasan asri Bukit Darmo Golf dengan akses tol Mayjen Sungkono dan Satelit yang sangat dekat, dilengkapi valet dan area parkir privat luas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD0] space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1A2821]">
                  <MapPin className="w-4 h-4 text-[#C86D51]" />
                  <span>Alamat Studio</span>
                </div>
                <p className="text-sm text-[#647069] leading-relaxed">
                  {contact.fullAddress}
                </p>
                <div className="pt-2">
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C86D51] hover:underline"
                  >
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD0] space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1A2821]">
                  <Clock className="w-4 h-4 text-[#567568]" />
                  <span>Jam Operasional Studio</span>
                </div>
                <div className="space-y-2 text-sm">
                  {schedule.map((sch, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-[#647069]">
                      <span className="font-semibold text-[#1A2821]">{sch.days}</span>
                      <span>{sch.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD0] flex items-center gap-3 hover:border-[#C86D51]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAEEEA] flex items-center justify-center text-[#C86D51] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#647069] uppercase font-bold">WhatsApp</div>
                    <div className="text-xs font-bold text-[#1A2821]">{contact.whatsappFormatted}</div>
                  </div>
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD0] flex items-center gap-3 hover:border-[#C86D51]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#567568] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#647069] uppercase font-bold">Telepon</div>
                    <div className="text-xs font-bold text-[#1A2821]">{contact.formattedPhone}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] overflow-hidden border border-[#E5DDD0] bg-[#FAF7F2] shadow-xl aspect-[4/3] relative">
              <iframe
                title="Peta Lokasi AURA Pilates Studio Surabaya"
                src={contact.openStreetMapUrl}
                className="w-full h-full border-0 filter contrast-[1.05] grayscale-[0.2]"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 p-3 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E5DDD0] shadow-md hidden sm:block text-xs">
                <div className="font-bold text-[#1A2821]">AURA Movement Studio</div>
                <div className="text-[#647069] text-[11px]">Bukit Darmo Golf, Surabaya Barat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
