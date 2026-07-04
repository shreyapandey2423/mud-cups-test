import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const VisitUsPage = lazy(() => import('./pages/VisitUsPage'));
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function MainApp() {
  const [isIntroActive, setIsIntroActive] = useState(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  const location = useLocation();

  useEffect(() => {
    if (!isIntroActive) {
      document.body.style.overflow = 'unset';
      return;
    }
    document.body.style.overflow = 'hidden';
    
    // Set loader duration to 800ms
    const timer = setTimeout(() => {
      setIsIntroActive(false);
    }, 800);
    
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [isIntroActive]);

  return (
    <div className={`min-h-screen bg-[#F7F2EB] text-[#2D241F] overflow-x-hidden font-sans antialiased selection:bg-[#8B6B4D]/10 selection:text-[#8B6B4D] ${
      isIntroActive ? 'h-screen overflow-hidden' : ''
    }`}>
      <ScrollToTop />
      <Loader isLoading={isIntroActive} />
      
      {/* Premium Minimalist Sticky Navigation Header */}
      <Header isIntroPlaying={isIntroActive} />
      
      {/* Main Multi-Page Layout Content */}
      <main>
        <Suspense fallback={<Loader isLoading={true} />}>
          <AnimatePresence mode="wait">
            {/* @ts-expect-error React 19 types issue with key on Routes */}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home isIntroActive={isIntroActive} />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/visit-us" element={<VisitUsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
          </Suspense>
      </main>
        
        {/* Footer */}
        <Footer />

        {/* Floating Back to Top Button */}
        <BackToTop />
      </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
