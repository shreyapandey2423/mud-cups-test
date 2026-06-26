import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Offers() {
  return (
    <section
      id="offers"
      className="bg-[#EFE6D8] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-16 space-y-4"
        >
          <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonal Perks</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
            Exclusive Offers
          </h2>
          <div className="h-[1px] w-12 bg-[#DDD2C2] my-6" />
          <p className="text-[#6A5A4D] text-base font-normal leading-[1.8] max-w-xl">
            Experience our fresh traditional chai and gourmet menu items with exclusive in-person dining-in privileges.
          </p>
        </motion.div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
          
          {/* Card 1: Dine-In Perks */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FFFDF9] border border-[#DDD2C2]/30 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between space-y-8 shadow-[0_4px_24px_rgba(45,36,31,0.04)] transition-all duration-300 group"
          >
            <div className="space-y-5 text-left">
              <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-widest bg-[#F7F2EB] px-3 py-1 rounded-full border border-[#DDD2C2]/45">
                Dine-In Benefit
              </span>
              <h3 className="text-2xl font-semibold text-[#2D241F] tracking-tight">
                Authentic Clay-baked Gifting
              </h3>
              <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8]">
                Receive a handcrafted biodegradable clay cup with every premium tea and coffee purchase to carry home. Relish the organic clay fragrance (Sondhi Khushboo) with every slow sip.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#DDD2C2]/30">
              <span className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest transition-colors duration-300">
                Ongoing Privilege • No Coupon Required
              </span>
            </div>
          </motion.div>

          {/* Card 2: District Offers */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FFFDF9] border border-[#DDD2C2]/30 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between space-y-8 shadow-[0_4px_24px_rgba(45,36,31,0.04)] transition-all duration-300 group"
          >
            <div className="space-y-5 text-left">
              <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-widest bg-[#F7F2EB] px-3 py-1 rounded-full border border-[#DDD2C2]/45 flex items-center gap-1.5 w-fit">
                <span>Exclusive Partner Offer</span>
              </span>
              <h3 className="text-2xl font-semibold text-[#2D241F] tracking-tight">
                Unlock Offers on District
              </h3>
              <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8]">
                Discover the latest discounts, exclusive deals, and seasonal offers available for Mud Cups through District.
              </p>
            </div>

            <div className="pt-4 border-t border-[#DDD2C2]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <span className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest transition-colors duration-300">
                Dining Deals • District
              </span>
              <a
                href="https://www.district.in/dining/bangalore/mud-cups-10-electronic-city-bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#2D241F] hover:bg-[#3D312A] text-[#FFFDF9] text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(45,36,31,0.1)] active:scale-[0.98] cursor-pointer border-none outline-none text-decoration-none"
                id="btn-view-district"
              >
                <span>View Offers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
