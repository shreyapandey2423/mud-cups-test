import { motion } from 'motion/react';

export default function FeaturedFood() {
  return (
    <section id="featured-food" className="bg-[#FFFDF9] py-16 sm:py-24 border-b border-[#DDD2C2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Modern Minimal Layout: Side-by-Side or Centered Showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content side */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D]">
              CAFE SIGNATURES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D241F] tracking-tight leading-tight">
              Freshly Made. Served Hot.
            </h2>
            <p className="text-[#6A5A4D] text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Every plate is prepared fresh, every sip crafted with care.
            </p>
            <div className="h-0.5 w-16 bg-[#8B6B4D]/30 pt-1" />
            <p className="text-sm text-[#6A5A4D]/80 font-light leading-relaxed max-w-md">
              From our crispy rolls to piping hot maggi bowls and freshly assembled pasta dishes, we source real ingredients daily to elevate your neighborhood cafe experience.
            </p>
          </div>
 
          {/* Premium Image Showcase with precise Hover Effect requested */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(45,36,31,0.08)] border border-[#DDD2C2]/50 bg-[#F7F2EB] aspect-[4/3] group">
              <img
                src="/images/featured-food.jpg"
                alt="Fresh Food & Drinks at Mud Cups"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-103 cursor-pointer"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
