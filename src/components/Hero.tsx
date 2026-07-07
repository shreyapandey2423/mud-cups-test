import React from "react";
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { useRef, useState } from 'react';

interface HeroProps {
  isFirstVisit?: boolean;
}

const easeCurve = [0.22, 1, 0.36, 1];

const Hero = function Hero({ isFirstVisit = false }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [initialIntro] = useState(isFirstVisit);
  const introDelay = initialIntro ? 2.35 : 0;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
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
    >{/* 1. LAYERED BACKGROUND SYSTEM (DEPTH & LIGHTING) */}
<div className="absolute inset-0 z-0 overflow-hidden bg-[#2D241F]">
  <img
    src="/images/hero.jpg"
    alt="Mud Cups Café"
    fetchPriority="high"
    loading="eager"
    decoding="sync"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
</div>

      {/* 2. HERO CONTENT AREA */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="scroll-mt-24 relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center justify-center pt-12 pb-12 sm:pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: introDelay + 0.0, ease: easeCurve }}
          className="mb-6 sm:mb-8"
        >
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/30 text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-[0.25em] text-[#9C6A3A] shadow-lg">
  <Sparkles className="w-3 h-3 text-[#B99872]" />
  <span>Reviving Traditional Taste</span>
</span>            <span>Reviving Traditional Taste</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: introDelay + 0.05, ease: easeCurve }}
className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] font-sans max-w-[600px] mx-auto mb-6 sm:mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]"          Not Your Average<br />Chai Stop.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: introDelay + 0.10, ease: easeCurve }}
className="text-base sm:text-lg text-white/95 leading-[2] font-normal max-w-[560px] mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"        >
          Mud Cups—where smoky Tandoori Chai meets toasty bites, chilled conversations, and cozy vibes.
        </motion.p>
      </motion.div>

      {/* Down arrow scroll helper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: introDelay + 0.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <button
          onClick={handleScrollToMenu}
className="text-white/70 hover:text-white transition-colors cursor-pointer p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-full"        >
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
export default React.memo(Hero);
