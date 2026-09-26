import Image from "next/image";
import { studioData } from "@/data/pilates";

export function TransformationStories() {
  const { reviews } = studioData;

  const communityImages = [
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      alt: "Controlled Reformer Movement Class",
    },
    {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      alt: "Postural Spine Alignment Stretch",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      alt: "Instructor Alignment Correction",
    },
    {
      url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
      alt: "Mindful Breath and Carriage Flow",
    },
  ];

  return (
    <section id="community" className="py-20 lg:py-32 bg-[#F0F0EE] text-[#121312] border-b border-[#DFDFD9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#CE5A37] uppercase">
              STUDIO COMMUNITY
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-6xl tracking-tight text-[#121312] uppercase leading-[0.95]">
              MOVEMENT <br />
              EXPERIENCES.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5E605E] max-w-md leading-relaxed">
            Membangun kesadaran tubuh baru melalui disiplin gerak yang konsisten dan dukungan komunitas yang hangat di Surabaya Barat.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {communityImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square bg-[#E5E5E0] border border-[#121312] overflow-hidden relative group"
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 50vw, 300px"
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#121312] text-[#F8F8F7] text-[9px] font-mono tracking-widest uppercase">
                FRAME 0{i + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#DFDFD9] pt-12">
          {reviews.map((rev) => (
            <div key={rev.id} className="space-y-4 flex flex-col justify-between">
              <blockquote className="font-sans text-base sm:text-lg text-[#121312] font-semibold leading-snug">
                &ldquo;{rev.comment}&rdquo;
              </blockquote>

              <div className="pt-2 border-t border-[#DFDFD9]">
                <div className="font-sans font-black text-sm text-[#121312] uppercase tracking-wide">
                  {rev.name}
                </div>
                <div className="text-xs font-mono text-[#5E605E] mt-0.5">
                  {rev.role} / {rev.classType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
