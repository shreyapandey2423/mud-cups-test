import React from "react";
import { Link } from "react-router-dom";

import MudCupsLogo from './MudCupsLogo';

const Footer = function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE6D8] border-t border-[#DDD2C2]/50 text-[#2D241F] font-sans overflow-hidden">
      {/* 2. Minimal Redesigned Footer */}
      <div
        id="contact"
        className="pt-16 pb-12 bg-[#F7F2EB]"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Footer Logo & Brand info */}
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center space-x-5">
              <MudCupsLogo interactive={false} size={52} />
              <div>
                <span className="text-2xl font-semibold tracking-tight text-[#2D241F] block font-sans">
                  Mud Cups
                </span>
                <span className="text-[10px] font-bold text-[#8B6B4D] tracking-[0.2em] uppercase block font-mono mt-1">
                  Reviving Traditional Taste
                </span>
              </div>
            </div>
            <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8]">
              Where smoky Tandoori Chai meets chilled conversations and cozy vibes. Handcrafted with love in Electronic City, Bangalore.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-8 md:space-y-12">
            {/* Minimal Links */}
            <nav aria-label="Footer Navigation" className="flex flex-wrap gap-8">
               <Link to="/menu" aria-label="View Menu" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                 Menu
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full" />
               </Link>
               <Link to="/visit-us" aria-label="Visit Us Location Information" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                 Visit Us
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full" />
               </Link>
               <a href="https://www.instagram.com/mud_cups_ananthnagar/" target="_blank" rel="noopener noreferrer" aria-label="Follow Mud Cups on Instagram" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
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
export default React.memo(Footer);
