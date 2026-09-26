import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PhilosophySection() {
  const steps = [
    { num: "01", label: "START", desc: "Asesmen postur tubuh, kalibrasi footbar & kontrol pegas" },
    { num: "02", label: "BUILD", desc: "Aktivasi otot inti terdalam & sinkronisasi napas diafragma" },
    { num: "03", label: "PROGRESS", desc: "Peningkatan tahanan beban kinetik & variasi gerak kompleks" },
    { num: "04", label: "MOVE BETTER", desc: "Postur tegap alami, mobilitas sendi bebas nyeri & tenaga fungsional" },
  ];

  return (
    <section id="studio-intro" className="bg-[#F8F8F7] text-[#121312]">
      <div className="py-20 lg:py-32 border-b border-[#DFDFD9]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
                STUDIO MANIFESTO
              </div>
              <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
                A STUDIO <br />
                FOR BETTER <br />
                MOVEMENT.
              </h2>
              <p className="text-base text-[#5E605E] leading-relaxed pt-2">
                AURA dirancang sebagai ruang gerak kontemporer yang berfokus pada kualitas instruksi biomekanik, bukan sekadar keringat. Kami menghilangkan distraksi gym konvensional untuk memberi Anda ruang bernapas, bergerak dengan presisi, dan membangun kekuatan tubuh yang bertahan lama.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#DFDFD9] text-xs font-mono uppercase">
                <div>
                  <div className="text-xl font-black text-[#121312]">06</div>
                  <div className="text-[#5E605E] mt-1">Carriages Maksimal</div>
                </div>
                <div>
                  <div className="text-xl font-black text-[#121312]">100%</div>
                  <div className="text-[#5E605E] mt-1">STOTT Certified Mentors</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] bg-[#E5E5E0] border border-[#121312] overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop"
                  alt="AURA Movement Studio Interior and Balanced Body Reformers"
                  fill
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#121312] text-[#F8F8F7] text-[10px] font-mono tracking-widest uppercase">
                  SURABAYA BARAT STUDIO SPACE
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {steps.map((st, i) => (
                  <div key={st.num} className="p-4 bg-[#F0F0EE] border border-[#DFDFD9]">
                    <div className="text-[10px] font-mono text-[#CE5A37] font-bold mb-1">
                      {st.num}
                    </div>
                    <div className="font-sans font-black text-sm text-[#121312] tracking-wide mb-1">
                      {st.label}
                    </div>
                    <div className="text-[11px] text-[#5E605E] leading-relaxed">
                      {st.desc}
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#8A8D8A] mt-3 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 bg-[#121312] text-[#F8F8F7] border-b border-[#2A2C2A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
                CORE PHILOSOPHY
              </div>
              <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]">
                PRECISION <br />
                OVER <br />
                PERFECTION.
              </h3>
              <p className="text-base sm:text-xl text-[#8A8D8A] max-w-2xl leading-relaxed">
                We focus on controlled movement, proper alignment and progressive strength. Latihan yang benar tidak diukur dari seberapa lelah Anda, melainkan seberapa presisi otak dan otot Anda berkomunikasi.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="aspect-[4/5] bg-[#2A2C2A] border border-[#3E423E] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop"
                  alt="Precision Reformer Hand and Core Movement Focus"
                  fill
                  className="object-cover object-center grayscale contrast-125"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#F8F8F7] uppercase tracking-wider">
                  ALIGNMENT • CONTROL • RESILIENCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
