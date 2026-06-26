import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Offers() {
  return (
    <section
      id="offers"
      className="bg-[#EFE6D8] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Offers Layout - Asymmetrical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Intro & Dine-In Perk */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-left space-y-16"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Seasonal Perks</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
                Exclusive<br />Offers
              </h2>
              <div className="h-[1px] w-12 bg-[#DDD2C2] my-6" />
              <p className="text-[#6A5A4D] text-base font-normal leading-[1.8] max-w-sm">
                Experience our fresh traditional chai and gourmet menu items with exclusive privileges.
              </p>
            </div>

            {/* Dine-In Perks - Plain Typography */}
            <div className="space-y-5">
              <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-widest bg-[#F7F2EB] px-3 py-1 rounded-full border border-[#DDD2C2]/60 w-fit">
                Dine-In Benefit
              </span>
              <h3 className="text-xl font-semibold text-[#2D241F] tracking-tight">
                Authentic Clay-baked Gifting
              </h3>
              <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8] max-w-sm">
                Receive a handcrafted biodegradable clay cup with every premium tea and coffee purchase to carry home. Relish the organic clay fragrance (Sondhi Khushboo) with every slow sip.
              </p>
              <p className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest pt-2">
                Ongoing Privilege • No Coupon Required
              </p>
            </div>
          </motion.div>

          {/* Right Column: District Offer Featured Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-[#FFFDF9] border border-[#DDD2C2]/40 p-10 sm:p-14 rounded-[2.5rem] shadow-[0_8px_32px_rgba(45,36,31,0.05)] relative overflow-hidden group">
              {/* Decorative Background Accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F7F2EB] rounded-full blur-3xl opacity-60 pointer-events-none transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="relative z-10 space-y-10 text-left">
                <div className="space-y-6">
                  <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-widest bg-[#F7F2EB] px-4 py-1.5 rounded-full border border-[#DDD2C2]/60 flex items-center gap-1.5 w-fit shadow-sm">
                    <span>Exclusive Partner Offer</span>
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
                    Unlock Premium<br />Offers on District.
                  </h3>
                  <div className="h-[1px] w-12 bg-[#DDD2C2] my-4" />
                  <p className="text-base text-[#6A5A4D] font-normal leading-[1.8] max-w-md">
                    Discover the latest discounts, exclusive deals, and seasonal offers available for Mud Cups through District.
                  </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <a
                    href="https://www.district.in/dining/bangalore/mud-cups-10-electronic-city-bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#2D241F] hover:bg-[#3D312A] text-[#FFFDF9] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(45,36,31,0.1)] hover:shadow-[0_8px_20px_rgba(45,36,31,0.15)] active:scale-[0.98] cursor-pointer"
                    id="btn-view-district"
                  >
                    <span>View Offers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest text-right">
                    Dining Deals • District
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
