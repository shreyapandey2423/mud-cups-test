import MudCupsLogo from './MudCupsLogo';
import { motion } from 'motion/react';
import featuredFoodImg from '../assets/images/featured-food.jpg';

export default function FeaturedFood() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#FFFDF9] py-16 sm:py-24 border-b border-[#DDD2C2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 space-y-6 text-left"
          >
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2">
              <MudCupsLogo size={14} className="text-[#8B6B4D] opacity-80" />
              <span>CAFE SIGNATURES</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
              Freshly Made.<br />Served Hot.
            </h2>
            <p className="text-[#6A5A4D] text-base sm:text-lg font-normal leading-[1.8] max-w-xl">
              Every plate is prepared fresh, every sip crafted with care.
            </p>
            <div className="h-[1px] w-12 bg-[#DDD2C2] my-6" />
            <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8] max-w-md">
              From our crispy rolls to piping hot maggi bowls and freshly assembled pasta dishes, we source real ingredients daily to elevate your neighborhood cafe experience.
            </p>
          </motion.div>
 
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-7/12 relative"
          >
            {/* Decorative Offset Frame */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-full h-full border border-[#DDD2C2] rounded-2xl pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(45,36,31,0.08)] bg-[#F7F2EB] aspect-[4/5] sm:aspect-[3/4] group z-10">
              <img
                src={featuredFoodImg}
                alt="Fresh Food & Drinks at Mud Cups"
                className="w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
