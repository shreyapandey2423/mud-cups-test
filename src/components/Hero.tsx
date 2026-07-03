import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { useRef } from 'react';
import heroImg from '../assets/images/hero.jpg';

interface HeroProps {
  isIntroActive?: boolean;
}

const easeCurve = [0.22, 1, 0.36, 1];

export default function Hero({ isIntroActive = false }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="scroll-mt-24 relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#F7F2EB] py-16 sm:py-32"
    >
      {/* 1. LAYERED BACKGROUND SYSTEM (DEPTH & LIGHTING) */}
      <div className="absolute inset-0 bg-[#F7F2EB] z-0" />

      {/* Cinematic Café Image with Parallax */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: easeCurve }}
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden"
      >
        <ImageWithFallback
          src={heroImg}
          fallbackSrc="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600"
          alt="Mud Cups Café Interior"
          className="w-full h-full object-cover object-[72%_center] sm:object-center opacity-30"
          loading="eager" fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2EB]/50 via-transparent to-[#F7F2EB] z-10" />
      </motion.div>

      {/* 2. HERO CONTENT AREA */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="scroll-mt-24 relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center justify-center pt-12 pb-12 sm:pt-20"
      >
        {/* Clay Cup Micro Interaction */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="scroll-mt-24 relative mb-6"
        >
          {/* Steam */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-1">
            {[0, 1].map((i) => (
              <motion.svg
                key={i}
                width="8"
                height="20"
                viewBox="0 0 8 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  y: [0, -10, -15],
                  x: i === 1 ? [0, 2, -2, 0] : [0, -2, 2, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className="text-[#8B6B4D]"
              >
                <path d="M4 20C4 20 7 15 7 10C7 5 4 0 4 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </motion.svg>
            ))}
          </div>
          {/* Cup */}
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-[#8B6B4D]">
             <path d="M10 12L14 36C14.5 39 17 41 20 41H28C31 41 33.5 39 34 36L38 12H10Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M6 12H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/80 backdrop-blur-sm border border-[#DDD2C2]/50 text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] shadow-sm">
            <Sparkles className="w-3 h-3 text-[#B99872]" />
            <span>Reviving Traditional Taste</span>
          </span>
        </motion.div>
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2D241F] tracking-tight leading-[1.1] font-sans max-w-[600px] mx-auto mb-6 sm:mb-8"
        >
          Not Your Average<br />Chai Stop.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
          className="text-base sm:text-lg text-[#6A5A4D] leading-[1.8] font-normal max-w-[500px] mx-auto"
        >
          Mud Cups—where smoky Tandoori Chai meets toasty bites, chilled conversations, and cozy vibes.
        </motion.p>
      </motion.div>

      {/* Down arrow scroll helper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <button
          onClick={handleScrollToMenu}
          className="text-[#8B6B4D]/40 hover:text-[#2D241F] transition-colors cursor-pointer p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-full"
          aria-label="Scroll to Menu"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
