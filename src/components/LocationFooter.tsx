import { MapPin, Clock, ExternalLink, Instagram } from 'lucide-react';
import MudCupsLogo from './MudCupsLogo';

export default function LocationFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE6D8] border-t border-[#DDD2C2]/80 text-[#2D241F] font-sans">
      
      {/* 1. Location Section */}
      <section id="location" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Location Details Column */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D]">
                  Find Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D241F] tracking-tight">
                  The Bangalore Space
                </h2>
                <p className="text-[#6A5A4D] text-sm font-light leading-relaxed">
                  Visit our quiet, warm, Scandinavian-inspired café environment. Slow down with aromatic clay cup chai and premium dining options.
                </p>
              </div>

              {/* Exact Address block */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#8B6B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2D241F] tracking-widest font-mono">
                      Location Address
                    </h4>
                    <p className="text-sm text-[#6A5A4D] font-light mt-1.5 leading-relaxed">
                      Survey 61/14, Kammasandra,<br />
                      Near Jockey Showroom,<br />
                      Ananthnagar Main Road,<br />
                      Electronic City, Bangalore,<br />
                      Karnataka 560100
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-[#8B6B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2D241F] tracking-widest font-mono">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-[#6A5A4D] font-light mt-1.5">
                      Monday – Sunday<br />
                      11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Stay Connected */}
                <div className="flex items-start space-x-4">
                  <Instagram className="w-5 h-5 text-[#8B6B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2D241F] tracking-widest font-mono">
                      Stay Connected
                    </h4>
                    <a
                      href="https://www.instagram.com/mud_cups_ananthnagar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-bold text-[#2D241F] hover:text-[#8B6B4D] transition-colors mt-1.5"
                    >
                      Instagram • @mud_cups_ananthnagar
                    </a>
                  </div>
                </div>
              </div>

              {/* Explicit Actions: Directions, Open Maps, Call Cafe */}
              <div className="flex flex-wrap gap-4 pt-6" id="location-actions">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Mud+Cups+-+Ananthnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 bg-[#8B6B4D] text-[#FFFDF9] hover:bg-[#A67C52] border border-[#8B6B4D] text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                  id="btn-get-directions"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Mud+Cups+-+Ananthnagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 bg-[#FFFDF9] border border-[#DDD2C2] text-[#2D241F] hover:bg-[#F7F2EB] hover:border-[#8B6B4D] text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                  id="btn-open-maps"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Premium Maps Column */}
            <div className="lg:col-span-7 w-full space-y-8">
              {/* Entrance Image Card */}
              <div className="space-y-4">
                <div className="text-left">
                  <h3 className="text-2xl font-black text-[#2D241F] tracking-tight animate-fade-in">
                    Visit Mud Cups.
                  </h3>
                  <p className="text-[#6A5A4D] text-sm font-light leading-relaxed">
                    Easy to find. Hard to forget.
                  </p>
                </div>
                <div className="relative rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#DDD2C2]/50 bg-[#FFFDF9] aspect-[16/10] group">
                  <img
                    src="/images/location.jpg"
                    alt="Mud Cups Main Entrance"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-103 cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Map Card */}
              <div
                className="w-full h-[280px] sm:h-[320px] rounded-[20px] overflow-hidden border border-[#DDD2C2]/60 relative bg-[#FFFDF9] shadow-[0_8px_30px_rgba(0,0,0,0.01)] group"
                id="map-container-footer"
              >
                {/* Embed map for: Mud Cups - Ananthnagar, Bangalore */}
                <iframe
                  title="Mud Cups Cafe Location, Bangalore"
                  src="https://maps.google.com/maps?q=Mud%20Cups%20-%20Ananthnagar,%20Survey%2061/14,%20Kammasandra,%20Near%20Jockey%20Showroom,%20Ananthnagar%20Main%20Road,%20Electronic%20City,%20Bangalore,%20Karnataka%20560100&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Instagram CTA Card */}
      <section className="bg-[#EFE6D8] pb-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#FFFDF9] border border-[#DDD2C2] rounded-[24px] p-8 sm:p-12 text-center space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.02)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#8B6B4D]" />
            <div className="flex justify-center">
              <div className="p-3 bg-[#8B6B4D]/10 rounded-full text-[#8B6B4D]">
                <Instagram className="w-8 h-8 stroke-[1.5]" />
              </div>
            </div>
            <div className="space-y-3 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D241F] tracking-tight">
                Follow Our Journey
              </h3>
              <p className="text-sm sm:text-base text-[#6A5A4D] font-light leading-relaxed">
                Fresh brews, new menu launches, café moments and behind-the-scenes updates.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/mud_cups_ananthnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#8B6B4D] hover:bg-[#A67C52] text-[#FFFDF9] text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-103 cursor-pointer"
              >
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Minimal Footer (Under "Contact" scroll hook) */}
      <div
        id="contact"
        className="border-t border-[#DDD2C2]/60 py-12 bg-[#F7F2EB]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Footer Logo & Brand info */}
          <div className="flex items-center space-x-3.5 text-left">
            <MudCupsLogo size={42} />
            <div className="space-y-1">
              <span className="text-base font-black tracking-[0.2em] text-[#2D241F] uppercase block font-sans">
                MUD CUPS
              </span>
              <span className="text-[10px] font-medium text-[#6A5A4D] tracking-[0.1em] block font-mono">
                REVOKING TRADITIONAL TASTE
              </span>
            </div>
          </div>

          {/* Follow Us Section */}
          <a
            href="https://www.instagram.com/mud_cups_ananthnagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-left group bg-[#EFE6D8]/40 hover:bg-[#EFE6D8]/80 border border-[#DDD2C2] p-4 rounded-xl transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase text-[#2D241F] tracking-widest font-mono">
              Follow Us
            </span>
            <div className="flex items-center space-x-2 mt-1">
              <Instagram className="w-4 h-4 text-[#8B6B4D]" />
              <span className="text-xs font-bold text-[#2D241F]">Instagram</span>
              <span className="text-xs text-[#6A5A4D] group-hover:text-[#8B6B4D] transition-colors">@mud_cups_ananthnagar</span>
            </div>
          </a>

          {/* Socials / Direct Link */}
          <div className="flex items-center space-x-6">
            <a
              href="https://maps.google.com/?q=Survey+61/14,+Kammasandra,+Near+Jockey+Showroom,+Ananthnagar+Main+Road,+Electronic+City,+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A5A4D] hover:text-[#8B6B4D] transition-colors flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest"
              id="footer-maps-link"
            >
              <span>Google Maps</span>
            </a>
          </div>

          {/* Minimal Copyright */}
          <p className="text-[11px] text-[#6A5A4D] font-light">
            © {currentYear} Mud Cups. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
