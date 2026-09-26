import { studioData } from "@/data/pilates";
import { Compass, Wind, ShieldCheck, HeartHandshake } from "lucide-react";

export function PhilosophySection() {
  const { pillars } = studioData;

  const pillarIcons = [
    <Compass key="1" className="w-6 h-6 text-[#C86D51]" />,
    <Wind key="2" className="w-6 h-6 text-[#567568]" />,
    <ShieldCheck key="3" className="w-6 h-6 text-[#C86D51]" />,
    <HeartHandshake key="4" className="w-6 h-6 text-[#567568]" />,
  ];

  return (
    <section id="filosofi" className="py-24 sm:py-32 bg-[#F3EFE6] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#647069] text-xs font-semibold tracking-wider uppercase border border-[#E5DDD0]">
            The AURA Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
            BUKAN SEKADAR BERLATIH. <br />
            <span className="italic font-normal text-[#C86D51]">INI DIALOG JUJUR</span> ANTARA TUBUH DAN PIKIRAN.
          </h2>
          <p className="text-base sm:text-lg text-[#647069] leading-relaxed">
            Metode AURA berfokus pada kualitas setiap repetisi gerak daripada kuantitas yang terburu-buru. Kami merancang lingkungan yang aman, bebas intimidasi, dan mendukung proses transformasi fisik secara bertahap dan berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD0] hover:border-[#C86D51]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-[#F3EFE6] group-hover:bg-[#FAF7F2] border border-[#E5DDD0] transition-colors">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#D3C8B6] group-hover:text-[#C86D51] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#567568] bg-[#EFF4F1] px-2.5 py-1 rounded-full mb-3">
                  {pillar.highlight}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A2821] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#647069] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5DDD0]/70 flex items-center justify-between text-xs font-semibold text-[#1A2821]">
                <span>Pilar Keberlanjutan</span>
                <span className="text-[#C86D51]">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
