import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedFood from './components/FeaturedFood';
import MenuSection from './components/MenuSection';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import LocationFooter from './components/LocationFooter';

export default function App() {
  const [isIntroActive, setIsIntroActive] = useState(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (!isIntroActive) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleSkip = () => {
      setIsIntroActive(false);
    };

    // Skip on user interaction
    window.addEventListener('click', handleSkip);
    window.addEventListener('keydown', handleSkip);
    window.addEventListener('wheel', handleSkip, { passive: true });
    window.addEventListener('touchmove', handleSkip, { passive: true });

    // Cinematic intro duration is 4.0 seconds (Scene 1: 1.5s still, Scene 2-4: 2.5s pull-back & reveal)
    const timer = setTimeout(() => {
      setIsIntroActive(false);
    }, 4000);

    return () => {
      window.removeEventListener('click', handleSkip);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('wheel', handleSkip);
      window.removeEventListener('touchmove', handleSkip);
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [isIntroActive]);

  return (
    <div className={`min-h-screen bg-[#F7F2EB] text-[#2D241F] overflow-x-hidden font-sans antialiased selection:bg-[#8B6B4D]/10 selection:text-[#8B6B4D] ${
      isIntroActive ? 'h-screen overflow-hidden' : ''
    }`}>
      {/* Premium Minimalist Sticky Navigation Header */}
      <Header isIntroPlaying={isIntroActive} />
      
      {/* Main Single Page Layout Content */}
      <main>
        {/* Core Hero Section with cinematic storefront & elegant CTA */}
        <Hero isIntroActive={isIntroActive} />
        
        {/* Featured food signature drinks and eats section */}
        <FeaturedFood />
        
        {/* Seamless Digital Menu with search, filters, and all 18 categories */}
        <MenuSection />
        
        {/* Exclusive platform offers & in-person perks */}
        <Offers />

        {/* Dynamic authentic Google customer reviews */}
        <Testimonials />
      </main>
      
      {/* Complete contact info, operational hours, maps, and minimal footer */}
      <LocationFooter />
    </div>
  );
}

