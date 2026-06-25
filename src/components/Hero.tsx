import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

interface HeroProps {
  isIntroActive?: boolean;
}

const easeCurve = [0.22, 1, 0.36, 1];

export default function Hero({ isIntroActive = false }: HeroProps) {
  const handleScrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#F7F2EB] py-16 sm:py-32"
    >
      {/* 1. LAYERED BACKGROUND SYSTEM (DEPTH & LIGHTING) */}
      
      {/* Soft Solid Base */}
      <div className="absolute inset-0 bg-[#F7F2EB] z-0" />

      {/* Soft Radial Gradients (Ambient Lighting) - Fades in during camera movement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isIntroActive ? [0, 0, 1] : 1,
        }}
        transition={{
          times: [0, 0.5, 1], // starts fading in around 2.0s
          duration: isIntroActive ? 4.0 : 0.4,
          ease: easeCurve,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_top_right,rgba(255,253,249,0.85),transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(239,230,216,0.65),transparent_60%)]" />
      </motion.div>

      {/* Subtle Handmade Paper Grain Texture Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none z-0 select-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="paper-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>

      {/* Soft Organic Coffee-Colored Shapes - Fades in during camera movement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isIntroActive ? [0, 0, 1] : 1,
        }}
        transition={{
          times: [0, 0.5, 1], // starts fading in around 2.0s
          duration: isIntroActive ? 4.0 : 0.4,
          ease: easeCurve,
        }}
        className="absolute inset-0 z-0 pointer-events-none select-none"
      >
        {/* Top Left Organic Shape */}
        <svg className="absolute -top-32 -left-32 w-[400px] h-[400px] text-[#8B6B4D] opacity-[0.018]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M30,-40 C50,-20 70,-10 80,10 C90,30 80,60 60,70 C40,80 10,70 -10,60 C-30,50 -50,30 -60,10 C-70,-15 -50,-35 -30,-40 C-10,-45 10,-60 30,-40 Z" />
        </svg>
        {/* Bottom Right Organic Shape */}
        <svg className="absolute -bottom-40 -right-40 w-[500px] h-[500px] text-[#8B6B4D] opacity-[0.015]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,10 C45,15 65,30 80,50 C95,70 90,95 70,110 C50,125 20,115 0,100 C-20,85 -40,65 -45,45 C-50,25 -30,5 -10,0 C10,-5 -5,5 20,10 Z" />
        </svg>
      </motion.div>

      {/* Cinematic Café Image (Pull-back camera movement and opacity transition) */}
      <motion.div 
        initial={{ scale: 1.12, opacity: 0.95 }}
        animate={{
          scale: isIntroActive ? [1.12, 1.12, 1.00] : 1.00,
          opacity: isIntroActive ? [0.95, 0.95, 0.25] : 0.25,
        }}
        transition={{
          times: [0, 0.375, 1], // static 1.5s, then 2.5s movement to 4.0s
          duration: isIntroActive ? 4.0 : 0.4,
          ease: easeCurve,
        }}
        className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden"
      >
        <ImageWithFallback
          src="/images/hero.jpg"
          fallbackSrc="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600"
          alt="Mud Cups Café Interior"
          className="w-full h-full object-cover object-[72%_center] sm:object-center"
          loading="eager"
        />
        {/* Cinematic warm overlay reducing from 32% to 12% */}
        <motion.div 
          initial={{ opacity: 0.32 }}
          animate={{
            opacity: isIntroActive ? [0.32, 0.32, 0.12] : 0.12,
          }}
          transition={{
            times: [0, 0.375, 1],
            duration: isIntroActive ? 4.0 : 0.4,
            ease: easeCurve,
          }}
          className="absolute inset-0 bg-[#8B6B4D] mix-blend-multiply z-10" 
        />
      </motion.div>

      {/* 2. HERO CONTENT AREA (PRECISE TYPOGRAPHY & SPACING) */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center justify-center pt-12 pb-12 sm:pt-20">
        
        {/* Redesigned Hero Badge */}
        <motion.div
          initial={isIntroActive ? { opacity: 0, y: 20, filter: 'blur(4px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          animate={isIntroActive ? {
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(4px)', 'blur(0px)'],
          } : {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={isIntroActive ? {
            duration: 0.8,
            delay: 1.9,
            ease: easeCurve,
          } : {
            duration: 0.3,
            ease: easeCurve,
          }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9] border border-[#DDD2C2] text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] shadow-[0_4px_16px_rgba(45,36,31,0.03)]">
            <Sparkles className="w-3 h-3 text-[#B99872]" />
            <span>Revoking Traditional Taste</span>
          </span>
        </motion.div>
        
        {/* Main Editorial Hero Heading */}
        <motion.h1
          initial={isIntroActive ? { opacity: 0, y: 20, filter: 'blur(4px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          animate={isIntroActive ? {
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(4px)', 'blur(0px)'],
          } : {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={isIntroActive ? {
            duration: 0.8,
            delay: 2.08,
            ease: easeCurve,
          } : {
            duration: 0.3,
            ease: easeCurve,
          }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#2D241F] tracking-tight leading-[1.2] font-sans max-w-[700px] mx-auto mb-4 sm:mb-6"
          id="hero-heading"
        >
          Not Your Average<br />Chai Stop!
        </motion.h1>

        {/* Refined Hero Description */}
        <motion.p
          initial={isIntroActive ? { opacity: 0, y: 20, filter: 'blur(4px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          animate={isIntroActive ? {
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(4px)', 'blur(0px)'],
          } : {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={isIntroActive ? {
            duration: 0.8,
            delay: 2.26,
            ease: easeCurve,
          } : {
            duration: 0.3,
            ease: easeCurve,
          }}
          className="text-sm sm:text-base md:text-lg text-[#6A5A4D] leading-relaxed font-light max-w-[620px] mx-auto mb-6 sm:mb-10"
        >
          Mud Cups—where smoky Tandoori Chai meets toasty bites, chilled conversations, and cozy vibes.
        </motion.p>

        {/* Crisp Signature Line */}
        <motion.div
          initial={isIntroActive ? { opacity: 0, y: 20, filter: 'blur(4px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          animate={isIntroActive ? {
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(4px)', 'blur(0px)'],
          } : {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={isIntroActive ? {
            duration: 0.8,
            delay: 2.44,
            ease: easeCurve,
          } : {
            duration: 0.3,
            ease: easeCurve,
          }}
          className="text-[10px] sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.35em] text-[#8B6B4D]/90 font-sans uppercase mb-8 sm:mb-12"
        >
          Chai • Chill • Chat • Repeat.
        </motion.div>

        {/* Redesigned Premium Hero Button */}
        <motion.div
          initial={isIntroActive ? { opacity: 0, y: 20, filter: 'blur(4px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          animate={isIntroActive ? {
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(4px)', 'blur(0px)'],
          } : {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={isIntroActive ? {
            duration: 0.8,
            delay: 2.62,
            ease: easeCurve,
          } : {
            duration: 0.3,
            ease: easeCurve,
          }}
        >
          <button
            onClick={handleScrollToMenu}
            className="px-10 py-4.5 bg-[#8B6B4D] hover:bg-[#72563C] text-[#FFFDF9] text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_6px_20px_rgba(139,107,77,0.15)] hover:shadow-[0_10px_25px_rgba(139,107,77,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            id="btn-hero-menu"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Down arrow scroll helper */}
      <motion.div
        initial={isIntroActive ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
        animate={isIntroActive ? {
          opacity: [0, 1],
          y: [15, 0],
        } : {
          opacity: 1,
          y: 0,
        }}
        transition={isIntroActive ? {
          duration: 0.8,
          delay: 2.8,
          ease: easeCurve,
        } : {
          duration: 0.3,
          ease: easeCurve,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <button
          onClick={handleScrollToMenu}
          className="text-[#8B6B4D]/50 hover:text-[#2D241F] transition-colors cursor-pointer"
          aria-label="Scroll to Menu"
        >
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
