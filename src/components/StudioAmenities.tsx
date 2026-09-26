import Image from "next/image";
import { studioData } from "@/data/pilates";

export function StudioAmenities() {
  const { amenities } = studioData;

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#F8F8F7] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
              STUDIO ARCHITECTURE
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
              SPACE & <br />
              APPARATUS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
            Didesain dengan pencahayaan alami optimal, material kayu cedar netral, dan sirkulasi udara medis untuk mendukung konsentrasi penuh di setiap repetisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {amenities.map((item, idx) => {
            const colSpan =
              idx === 0
                ? "md:col-span-8"
                : idx === 1
                ? "md:col-span-4"
                : idx === 2
                ? "md:col-span-4"
                : "md:col-span-4";

            return (
              <div
                key={item.id}
                className={`${colSpan} border border-[#121312] bg-[#E5E5E0] overflow-hidden flex flex-col justify-between group`}
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                    DETAIL 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 bg-[#FFFFFF] space-y-2 border-t border-[#DFDFD9]">
                  <h3 className="font-sans font-black text-lg text-[#121312] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5E605E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
