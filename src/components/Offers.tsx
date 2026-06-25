import { Sparkles, ArrowRight } from 'lucide-react';

export default function Offers() {
  return (
    <section
      id="offers"
      className="bg-[#EFE6D8] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonal Perks</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D241F] tracking-tight">
            Exclusive Offers
          </h2>
          <p className="text-[#6A5A4D] text-base font-light leading-relaxed max-w-xl">
            Experience our fresh traditional chai and gourmet menu items with exclusive in-person dining-in privileges.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
          
          {/* Card 1: Dine-In Perks */}
          <div className="bg-[#FFFDF9] border border-[#DDD2C2]/50 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between space-y-8 shadow-[0_10px_30px_rgba(45,36,31,0.08)] hover:shadow-[0_15px_35px_rgba(45,36,31,0.12)] transition-all duration-300">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-widest bg-[#F7F2EB] px-3 py-1 rounded-full border border-[#DDD2C2]/45">
                Dine-In Benefit
              </span>
              <h3 className="text-xl font-bold text-[#2D241F] tracking-tight">
                Authentic Clay-baked Gifting
              </h3>
              <p className="text-xs text-[#6A5A4D] font-light leading-relaxed">
                Receive a handcrafted biodegradable clay cup with every premium tea and coffee purchase to carry home. Relish the organic clay fragrance (Sondhi Khushboo) with every slow sip.
              </p>
            </div>
            
            <div className="pt-2">
              <span className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest">
                Ongoing Privilege • No Coupon Required
              </span>
            </div>
          </div>

          {/* Card 2: District Offers */}
          <div className="bg-[#FFFDF9] border border-[#DDD2C2]/50 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between space-y-8 shadow-[0_10px_30px_rgba(45,36,31,0.08)] hover:shadow-[0_15px_35px_rgba(45,36,31,0.12)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-bold font-mono text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50 flex items-center gap-1.5 w-fit">
                <span>🔥</span>
                <span>Exclusive Partner Offer</span>
              </span>
              <h3 className="text-xl font-bold text-[#2D241F] tracking-tight">
                Unlock Exclusive Offers on District
              </h3>
              <p className="text-xs text-[#6A5A4D] font-light leading-relaxed">
                Discover the latest discounts, exclusive deals, and seasonal offers available for Mud Cups through District.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest">
                Dining Deals • District Going-Out
              </span>
              <a
                href="https://www.district.in/dining/bangalore/mud-cups-10-electronic-city-bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#8B6B4D] hover:bg-[#70543B] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border-none outline-none text-decoration-none"
                id="btn-view-district"
              >
                <span>View Offers on District</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
