import { MapPin, Clock, ExternalLink, Instagram } from 'lucide-react';
import MudCupsLogo from './MudCupsLogo';
import { motion } from 'framer-motion';

export default function LocationFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE6D8] border-t border-[#DDD2C2]/50 text-[#2D241F] font-sans overflow-hidden">
      
      {/* 1. Contact / Destination Section */}
      <section id="location" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Invitation & Details */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-16"
            >
              {/* Heading & Intro */}
              <div className="space-y-6">
                <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D]">
                  Visit Us
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#2D241F] tracking-tight leading-[1.1]">
                  The Bangalore<br />Space.
                </h2>
                <p className="text-[#6A5A4D] text-lg font-normal leading-[1.8] max-w-md pt-2">
                  Step into our quiet, warm, Scandinavian-inspired café environment. Slow down with aromatic clay cup chai and premium dining options.
                </p>
              </div>

              {/* Elegant Contact Details */}
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <Clock className="w-5 h-5 text-[#8B6B4D] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2D241F] tracking-[0.2em] font-mono mb-2">
                      Opening Hours
                    </h4>
                    <p className="text-base text-[#6A5A4D] font-normal leading-[1.8]">
                      Monday – Sunday<br />
                      11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <Instagram className="w-5 h-5 text-[#8B6B4D] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2D241F] tracking-[0.2em] font-mono mb-2">
                      Instagram
                    </h4>
                    <a href="https://www.instagram.com/mud_cups_ananthnagar/" target="_blank" rel="noopener noreferrer" className="text-base text-[#6A5A4D] hover:text-[#2D241F] font-normal transition-colors">
                      @mud_cups_ananthnagar
                    </a>
                  </div>
                </div>
              </div>

              {/* Entrance Image - Offset Portrait Layout */}
              <div className="relative overflow-hidden shadow-[0_12px_40px_rgba(45,36,31,0.06)] bg-[#F7F2EB] aspect-[4/5] max-w-[280px] rounded-2xl group hidden lg:block -ml-8 mt-12">
                <img
                  src="/images/location.jpg"
                  alt="Mud Cups Main Entrance"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right Column: Premium Map & Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Floating Map Card */}
              <div className="w-full aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#DDD2C2]/50 bg-[#FFFDF9] shadow-[0_16px_48px_rgba(45,36,31,0.06)] relative group">
                <iframe
                  title="Mud Cups Cafe Location, Bangalore"
                  src="https://maps.google.com/maps?q=Mud%20Cups%20-%20Ananthnagar,%20Survey%2061/14,%20Kammasandra,%20Near%20Jockey%20Showroom,%20Ananthnagar%20Main%20Road,%20Electronic%20City,%20Bangalore,%20Karnataka%20560100&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Refined Information Card */}
              <div className="bg-[#FFFDF9] border border-[#DDD2C2]/40 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_4px_24px_rgba(45,36,31,0.04)]">
                <div className="flex items-start space-x-5 mb-10">
                  <MapPin className="w-6 h-6 text-[#8B6B4D] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-[#2D241F] mb-3 tracking-tight">
                      Mud Cups, Electronic City
                    </h4>
                    <p className="text-base text-[#6A5A4D] font-normal leading-[1.8] max-w-md">
                      Survey 61/14, Kammasandra,<br />
                      Near Jockey Showroom, Ananthnagar Main Road,<br />
                      Electronic City, Bangalore, Karnataka 560100
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-[#DDD2C2]/40">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Mud+Cups+-+Ananthnagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#2D241F] text-[#FFFDF9] hover:bg-[#3D312A] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(45,36,31,0.1)] hover:shadow-[0_8px_20px_rgba(45,36,31,0.15)] active:scale-[0.98] w-full sm:w-auto"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/mud_cups_ananthnagar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#FFFDF9] border border-[#DDD2C2]/60 text-[#2D241F] hover:bg-[#F7F2EB] hover:border-[#DDD2C2] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 active:scale-[0.98] w-full sm:w-auto"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mobile Entrance Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden w-full relative overflow-hidden shadow-[0_8px_32px_rgba(45,36,31,0.06)] bg-[#F7F2EB] aspect-[4/3] rounded-2xl group mt-8"
            >
              <img
                src="/images/location.jpg"
                alt="Mud Cups Main Entrance"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Minimal Redesigned Footer */}
      <div
        id="contact"
        className="border-t border-[#DDD2C2]/40 pt-16 pb-12 bg-[#F7F2EB]"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Footer Logo & Brand info */}
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center space-x-5">
              <MudCupsLogo size={52} />
              <div>
                <span className="text-2xl font-semibold tracking-tight text-[#2D241F] block font-sans">
                  Mud Cups
                </span>
                <span className="text-[10px] font-bold text-[#8B6B4D] tracking-[0.2em] uppercase block font-mono mt-1">
                  Revoking Traditional Taste
                </span>
              </div>
            </div>
            <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8]">
              Where smoky Tandoori Chai meets chilled conversations and cozy vibes. Handcrafted with love in Electronic City, Bangalore.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-8 md:space-y-12">
            {/* Minimal Links */}
            <nav className="flex flex-wrap gap-8">
               <a href="#menu" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group">
                 Menu
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full" />
               </a>
               <a href="#location" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group">
                 Visit Us
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full" />
               </a>
               <a href="https://www.instagram.com/mud_cups_ananthnagar/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group">
                 Instagram
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full" />
               </a>
            </nav>
            {/* Minimal Copyright */}
            <p className="text-[10px] text-[#6A5A4D] font-mono tracking-widest uppercase">
              © {currentYear} Mud Cups. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
