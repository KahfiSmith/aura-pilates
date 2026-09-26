import Image from "next/image";
import { studioData } from "@/data/pilates";
import { Activity, Wind, Flame, Coffee, ShieldCheck } from "lucide-react";

export function StudioAmenities() {
  const { amenities } = studioData;

  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity className="w-5 h-5 text-[#C86D51]" />,
    Wind: <Wind className="w-5 h-5 text-[#567568]" />,
    Flame: <Flame className="w-5 h-5 text-[#C86D51]" />,
    Coffee: <Coffee className="w-5 h-5 text-[#567568]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C86D51]" />,
  };

  return (
    <section id="studio" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3D5] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#D3C8B6]">
            The Studio Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
            SANCTUARY GERAK ANDA. <br />
            <span className="italic font-normal text-[#C86D51]">KENYAMANAN TOTAL</span> DI SETIAP DETIK KUNJUNGAN.
          </h2>
          <p className="text-base text-[#647069] leading-relaxed">
            Didesain dengan pencahayaan alami yang lembut, aroma kayu cedar menenangkan, dan sistem sanitasi berstandar medis untuk pengalaman latihan yang menyegarkan jiwa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5DDD0] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#F3EFE6] ${
                  idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E5DDD0] shadow-sm">
                  {iconMap[item.iconName] || <ShieldCheck className="w-5 h-5 text-[#C86D51]" />}
                </div>
              </div>

              <div className="p-6 lg:p-8 space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#1A2821]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#647069] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
