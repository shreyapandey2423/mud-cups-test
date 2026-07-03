import { motion } from 'motion/react';

interface PageHeroProps {
  accent: string;
  title: string;
  description: string;
}

export default function PageHero({ accent, title, description }: PageHeroProps) {
  return (
    <section className="bg-[#F7F2EB] pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-[#DDD2C2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] mb-4"
        >
          {accent}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#2D241F] tracking-tight leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#6A5A4D] text-base sm:text-lg font-normal leading-[1.8] max-w-xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] w-16 bg-[#DDD2C2] mt-8 origin-center"
        />
      </div>
    </section>
  );
}
