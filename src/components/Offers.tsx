import MudCupsLogo from './MudCupsLogo';
import { motion } from 'motion/react';

import { ArrowRight } from 'lucide-react';
const swiggyLogo = '/images/swiggy.png';
const zomatoLogo = '/images/zomato.png';

export default function Offers() {
  return (
    <section
      id="offers"

      className="scroll-mt-24 bg-[#EFE6D8] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60 overflow-hidden"
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
                <MudCupsLogo interactive={false} size={14} className="text-[#8B6B4D] opacity-80" />
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

          {/* Right Column: Online Order Featured Card */}
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
                    <span>Online Order</span>
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
                    Order Your<br />Favorites
                  </h3>
                  <div className="h-[1px] w-12 bg-[#DDD2C2] my-4" />
                  <p className="text-base text-[#6A5A4D] font-normal leading-[1.8] max-w-md">
                    Order directly from your preferred delivery partner.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Swiggy Card */}
                  <a
                    href="https://www.swiggy.com/restaurants/mud-cups-electronic-city-bangalore-1218505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start bg-[#F7F2EB] border border-[#DDD2C2]/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(45,36,31,0.08)] hover:-translate-y-1 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF9]"
                  >
                    {/* Swiggy Logo */}
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#DDD2C2]/30 flex items-center justify-center mb-4 p-2">
                      <img src={swiggyLogo} alt="Swiggy" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden font-bold text-[#FC8019] text-sm tracking-tight">SWIGGY</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2D241F] tracking-tight mb-1">Swiggy</h4>
                    <p className="text-xs text-[#6A5A4D] font-normal mb-5">Fast Delivery</p>
                    <div className="mt-auto flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B6B4D] group-hover/btn:text-[#2D241F] transition-colors">
                      <span>Order on Swiggy</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </a>

                  {/* Zomato Card */}
                  <a
                    href="https://www.zomato.com/bangalore/mud-cups-10-electronic-city-bangalore/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start bg-[#F7F2EB] border border-[#DDD2C2]/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(45,36,31,0.08)] hover:-translate-y-1 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF9]"
                  >
                    {/* Zomato Logo */}
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#DDD2C2]/30 flex items-center justify-center mb-4 p-2">
                      <img src={zomatoLogo} alt="Zomato" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden font-bold text-[#E23744] text-sm tracking-tight font-serif italic">Zomato</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2D241F] tracking-tight mb-1">Zomato</h4>
                    <p className="text-xs text-[#6A5A4D] font-normal mb-5">Order Online</p>
                    <div className="mt-auto flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B6B4D] group-hover/btn:text-[#2D241F] transition-colors">
                      <span>Order on Zomato</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
