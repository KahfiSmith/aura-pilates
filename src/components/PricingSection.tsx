import { studioData } from "@/data/pilates";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

export function PricingSection() {
  const { pricing, contact } = studioData;

  return (
    <section id="harga" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3D5] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#D3C8B6]">
            Pricing & Memberships
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
            INVESTASI KESEHATAN TUBUH. <br />
            <span className="italic font-normal text-[#C86D51]">HARGA TRANSPARAN</span> TANPA BIAYA TERSEMBUNYI.
          </h2>
          <p className="text-base text-[#647069] leading-relaxed">
            Pilih paket yang paling fleksibel untuk ritme kesibukan Anda. Seluruh paket mencakup akses fasilitas shower luxury dan tea lounge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricing.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? "bg-[#1A2821] text-[#FAF7F2] border-2 border-[#1A2821] shadow-2xl scale-[1.02] z-10"
                  : "bg-[#FFFFFF] text-[#1A2821] border border-[#E5DDD0] shadow-md hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {pkg.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${
                    pkg.isPopular
                      ? "bg-[#C86D51] text-[#FAF7F2]"
                      : "bg-[#567568] text-[#FAF7F2]"
                  }`}
                >
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3
                    className={`font-serif text-xl font-bold ${
                      pkg.isPopular ? "text-[#FAF7F2]" : "text-[#1A2821]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 ${
                      pkg.isPopular ? "text-[#D3C8B6]" : "text-[#647069]"
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-[#E5DDD0]/40">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span
                        className={`text-xs line-through ${
                          pkg.isPopular ? "text-[#8E9A93]" : "text-[#8E9A93]"
                        }`}
                      >
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[11px] font-semibold mt-1 ${
                      pkg.isPopular ? "text-[#C86D51]" : "text-[#567568]"
                    }`}
                  >
                    {pkg.pricePerSession}
                  </div>
                  <div
                    className={`text-xs font-medium mt-3 px-3 py-1.5 rounded-xl inline-block ${
                      pkg.isPopular
                        ? "bg-[#2B3E34] text-[#D3C8B6]"
                        : "bg-[#F3EFE6] text-[#647069]"
                    }`}
                  >
                    {pkg.credits} • {pkg.validity}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      pkg.isPopular ? "text-[#D3C8B6]" : "text-[#1A2821]"
                    }`}
                  >
                    Manfaat Termasuk:
                  </div>
                  {pkg.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.isPopular
                            ? "bg-[#C86D51] text-[#FAF7F2]"
                            : "bg-[#EFF4F1] text-[#567568]"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span
                        className={`text-xs leading-snug ${
                          pkg.isPopular ? "text-[#FAF7F2]/90" : "text-[#647069]"
                        }`}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    pkg.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md ${
                    pkg.isPopular
                      ? "bg-[#C86D51] text-[#FAF7F2] hover:bg-[#B55B40]"
                      : "bg-[#1A2821] text-[#FAF7F2] hover:bg-[#C86D51]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
