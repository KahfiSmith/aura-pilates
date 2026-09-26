import { studioData } from "@/data/pilates";
import { ArrowUpRight } from "lucide-react";

export function PricingSection() {
  const { pricing, contact } = studioData;

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
              RATES & PACKAGES
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
              MEMBERSHIP <br />
              & SESSIONS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
            Struktur harga transparan tanpa biaya registrasi tersembunyi. Setiap paket sudah mencakup akses locker privat dan botanical hydration lounge.
          </p>
        </div>

        <div className="border-y border-[#121312] divide-y divide-[#DFDFD9]">
          {pricing.map((item) => (
            <div
              key={item.id}
              className={`py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-4 -mx-4 transition-colors ${
                item.isPopular ? "bg-[#F0F0EE]" : "hover:bg-[#F0F0EE]/50"
              }`}
            >
              <div className="lg:col-span-5 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-black text-2xl text-[#121312] uppercase">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#CE5A37] text-[#F8F8F7]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#5E605E]">
                  {item.subtitle}
                </p>
                <div className="text-[11px] font-mono text-[#5E605E] pt-1">
                  {item.credits} • {item.validity}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans font-black text-3xl text-[#121312]">
                    {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs font-mono line-through text-[#8A8D8A]">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#CE5A37] font-mono font-bold mt-0.5">
                  {item.pricePerSession}
                </div>
              </div>

              <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(item.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    item.isPopular
                      ? "bg-[#121312] text-[#F8F8F7] hover:bg-[#CE5A37]"
                      : "bg-[#121312] text-[#F8F8F7] hover:bg-[#CE5A37]"
                  }`}
                >
                  <span>Book Rate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5E605E] uppercase">
          <span>* Pembatalan kelas gratis hingga 12 jam sebelum sesi</span>
          <span>* Masa berlaku paket dapat dibekukan (freeze) bila bepergian</span>
        </div>
      </div>
    </section>
  );
}
