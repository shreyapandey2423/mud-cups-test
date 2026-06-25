import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MudCupsLogo from './MudCupsLogo';

interface HeaderProps {
  isIntroPlaying?: boolean;
}

export default function Header({ isIntroPlaying = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY <= 15) {
        setIsAtTop(true);
        setScrollDirection(null);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
        }
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isQuiet = !isAtTop && scrollDirection === 'down' && !isOpen && !isHovered;

  const animVariants = {
    active: {
      opacity: 1,
      scale: 1,
      y: 0,
      backgroundColor: isAtTop ? 'rgba(255, 253, 249, 0.75)' : 'rgba(255, 253, 249, 0.90)',
      boxShadow: isAtTop ? '0 4px 30px rgba(45, 36, 31, 0.03)' : '0 12px 40px rgba(45, 36, 31, 0.08)',
      backdropFilter: isAtTop ? 'blur(8px)' : 'blur(12px)',
    },
    quiet: {
      opacity: 0.38,
      scale: 0.96,
      y: -10,
      backgroundColor: 'rgba(255, 253, 249, 0.25)',
      boxShadow: '0 2px 10px rgba(45, 36, 31, 0.01)',
      backdropFilter: 'blur(8px)',
    }
  };

  return (
    <motion.header
      id="header-nav"
      initial={isIntroPlaying ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
      animate={isIntroPlaying ? { opacity: [0, 1], y: [-10, 0] } : { opacity: 1, y: 0 }}
      transition={isIntroPlaying ? {
        duration: 0.8,
        delay: 1.7,
        ease: [0.22, 1, 0.36, 1],
      } : {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
        isIntroPlaying ? 'pointer-events-none' : ''
      }`}
    >
      <motion.div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isQuiet ? 'quiet' : 'active'}
        variants={animVariants}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`border transition-all duration-500 rounded-full ${
          isAtTop ? 'border-[#DDD2C2]/45 px-6 py-4' : 'border-[#DDD2C2]/65 px-6 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Minimalist Premium Brand Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group cursor-pointer text-left"
            id="btn-logo-home"
          >
            <MudCupsLogo size={36} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-[0.2em] uppercase leading-none font-sans text-[#2D241F]">
                MUD CUPS
              </span>
              <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.1em] mt-0.5 leading-none font-mono text-[#6A5A4D]">
                REVOKING TRADITIONAL TASTE
              </span>
            </div>
          </button>
 
          {/* Minimal, Thin Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-10">
              {[
                { label: 'Menu', id: 'menu' },
                { label: 'Visit Us', id: 'location' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer relative py-1 group text-[#6A5A4D] hover:text-[#2D241F]"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>
            <a
              href="https://www.instagram.com/mud_cups_ananthnagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300 p-1 text-[#6A5A4D] hover:text-[#2D241F]"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5 stroke-[1.5]" />
            </a>
          </div>
 
          {/* Mobile Menu Toggle & Instagram icon */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="https://www.instagram.com/mud_cups_ananthnagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center transition-all duration-300 text-[#6A5A4D] hover:text-[#2D241F] rounded-full active:bg-[#DDD2C2]/20"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 flex items-center justify-center transition-colors focus:outline-none text-[#2D241F] hover:text-[#8B6B4D] rounded-full active:bg-[#DDD2C2]/20"
              aria-label="Toggle menu"
              id="btn-mobile-toggle"
            >
              {isOpen ? <X className="w-5 h-5 stroke-[1.8]" /> : <Menu className="w-5 h-5 stroke-[1.8]" />}
            </button>
          </div>
        </div>
      </motion.div>
 
      {/* Elegant Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
            className={`md:hidden bg-[#F7F2EB] px-6 py-6 space-y-4 shadow-xl border-t border-[#DDD2C2]/40 rounded-b-3xl ${
              !isAtTop ? 'mx-4 mt-2 rounded-2xl border border-[#DDD2C2]/50' : 'border-b border-[#DDD2C2]/50'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Menu', id: 'menu' },
                { label: 'Visit Us', id: 'location' },
                { label: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-bold uppercase tracking-[0.2em] text-[#6A5A4D] hover:text-[#2D241F] py-3 transition-colors cursor-pointer w-full rounded-lg active:bg-[#DDD2C2]/15"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                href="https://www.instagram.com/mud_cups_ananthnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-bold uppercase tracking-[0.2em] text-[#6A5A4D] hover:text-[#2D241F] py-3 transition-colors rounded-lg active:bg-[#DDD2C2]/15"
              >
                <Instagram className="w-4.5 h-4.5 stroke-[2]" />
                <span>Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
