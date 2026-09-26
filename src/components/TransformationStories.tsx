import { studioData } from "@/data/pilates";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TransformationStories() {
  const { reviews } = studioData;

  return (
    <section id="testimoni" className="py-24 sm:py-32 bg-[#F3EFE6] text-[#1A2821] border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#1A2821] text-xs font-semibold tracking-wider uppercase border border-[#E5DDD0]">
              Member Stories
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2821] leading-tight">
              TRANSFORMASI NYATA. <br />
              <span className="italic font-normal text-[#C86D51]">CERITA DARI</span> MEMBER KOMUNITAS AURA.
            </h2>
            <p className="text-base text-[#647069] leading-relaxed">
              Mulai dari pemulihan nyeri pinggang hingga kepercayaan diri baru melalui postur tubuh yang tegak dan selaras.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E5DDD0] flex items-center gap-6 shadow-sm shrink-0">
            <div>
              <div className="flex text-[#C86D51] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C86D51]" />
                ))}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-[#1A2821]">4.9</span>
                <span className="text-xs text-[#647069] font-medium">/ 5.0 Google Reviews</span>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-[#E5DDD0]" />
            <div className="text-xs text-[#647069] font-medium max-w-[140px] leading-relaxed">
              Berdasarkan 180+ ulasan terverifikasi di Surabaya
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-[2.5rem] bg-[#FAF7F2] border border-[#E5DDD0] flex flex-col justify-between hover:border-[#C86D51]/50 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C86D51] opacity-60 mb-4" />

                <div className="flex text-[#C86D51] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C86D51]" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-[#1A2821] font-medium leading-relaxed mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#E5DDD0]/70 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF4F1] text-[#567568] text-[11px] font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-[#567568]" />
                  <span>{rev.result}</span>
                </div>

                <div>
                  <p className="font-serif text-base font-bold text-[#1A2821]">{rev.name}</p>
                  <p className="text-xs text-[#647069]">{rev.role} • {rev.classType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
