import { useState, useEffect } from 'react';
import { Search, Coffee, CupSoda, IceCream, Utensils, Sandwich, Pizza, Star, Scroll } from 'lucide-react';
import { motion } from 'motion/react';
import { categories } from '../data/menu';
import menuIntroImg from '../assets/images/menu-intro.jpg';

export default function MenuSection() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );
    
    // Mud cups special
    const special = document.getElementById('mud-cups-special');
    if (special) observer.observe(special);
    
    categories.forEach((cat) => {
      const el = document.getElementById(`category-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  const getFilteredMenu = () => {
    let result = categories.map(cat => {
      let filteredItems = cat.items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
        
        let matchesFilter = true;
        if (activeFilter === 'Veg') {
          matchesFilter = item.isVeg;
        } else if (activeFilter === 'Egg') {
          matchesFilter = !item.isVeg;
        } else if (activeFilter === 'Drinks') {
          matchesFilter = ['tea-tones', 'cravy-coffee', 'milky-way', 'cold-tik-tok', 'milk-shakes'].includes(cat.id);
        } else if (activeFilter === 'Snacks') {
          matchesFilter = !['tea-tones', 'cravy-coffee', 'milky-way', 'cold-tik-tok', 'milk-shakes', 'ice-age', 'specials'].includes(cat.id);
        } else if (activeFilter === 'Desserts') {
          matchesFilter = ['ice-age', 'specials'].includes(cat.id);
        }
        
        return matchesSearch && matchesFilter;
      });
      return {
        ...cat,
        items: filteredItems
      };
    });

    result = result.filter(cat => cat.items.length > 0);
    return result;
  };

  const filteredMenu = getFilteredMenu();

  const filterChips = ['All', 'Veg', 'Egg', 'Drinks', 'Snacks', 'Desserts'];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'tea-tones':
      case 'cravy-coffee':
      case 'milky-way':
        return <Coffee className="w-5 h-5 stroke-[1.5]" />;
      case 'cold-tik-tok':
      case 'milk-shakes':
        return <CupSoda className="w-5 h-5 stroke-[1.5]" />;
      case 'ice-age':
        return <IceCream className="w-5 h-5 stroke-[1.5]" />;
      case 'sosi-sandwich':
      case 'busy-burger':
      case 'bun-blast':
        return <Sandwich className="w-5 h-5 stroke-[1.5]" />;
      case 'pizza-paradise':
        return <Pizza className="w-5 h-5 stroke-[1.5]" />;
      case 'rolls':
        return <Scroll className="w-5 h-5 stroke-[1.5]" />;
      case 'specials':
        return <Star className="w-5 h-5 stroke-[1.5]" />;
      default:
        return <Utensils className="w-5 h-5 stroke-[1.5]" />;
    }
  };

  return (
    <section
      id="menu"
       
      className="scroll-mt-24 bg-[#F7F2EB] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        
        {/* Section Header with Menu Intro Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-[20px] max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full order-2 lg:order-1"
          >
            <div className="relative rounded-full overflow-hidden shadow-[0_12px_40px_rgba(45,36,31,0.08)] bg-[#F7F2EB] aspect-square group border-8 border-[#FFFDF9]">
              <img
                src={menuIntroImg}
                alt="Snacks and Drinks at Mud Cups"
                className="w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left space-y-5 order-1 lg:order-2 lg:pl-10"
          >
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D]">
              The Digital Menu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
              Something for<br />Every Craving.
            </h2>
            <div className="h-[1px] w-12 bg-[#DDD2C2] my-6" />
            <p className="text-[#6A5A4D] text-base sm:text-lg font-normal leading-[1.8] max-w-xl">
              From our famous chai to hearty momos and gourmet pasta.
            </p>
            <p className="text-sm text-[#6A5A4D] font-normal leading-[1.8] max-w-md pt-2">
              Browse our dynamic digital menu featuring 18 curated categories. Use the interactive search and diet filters below to easily find exactly what you crave.
            </p>
          </motion.div>
        </div>

        {/* Sticky Unified Navigation */}
        <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'pt-3 pb-3 bg-[#F7F2EB]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(45,36,31,0.04)] border-b border-[#DDD2C2]/40' : 'pt-2 pb-4'} -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 mb-0`}>
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Top Row: Search & Filters */}
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 w-full mb-[16px]">
              
              {/* Search Input */}
              <div className={`relative w-full shrink-0 group transition-all duration-300 ${isScrolled ? 'md:w-[380px] lg:w-[440px]' : 'md:w-[420px] lg:w-[480px]'}`}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#6A5A4D]/60 transition-colors group-focus-within:text-[#8B6B4D]">
                  <Search className="w-[15px] h-[15px] stroke-[2.5]" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search the menu..."
                  className={`w-full pl-10 pr-4 bg-[#FCF9F2] border border-[#DDD2C2]/50 text-[#2D241F] placeholder-[#6A5A4D]/50 text-[14px] font-medium focus:outline-none focus:border-[#8B6B4D]/40 focus:ring-4 focus:ring-[#8B6B4D]/5 transition-all duration-300 rounded-[24px] shadow-[0_1px_2px_rgba(45,36,31,0.01)] ${isScrolled ? 'h-[38px]' : 'h-[42px]'}`}
                />
              </div>

              {/* Filter Chips */}
              <div className="flex overflow-x-auto scrollbar-none w-full md:w-auto gap-[10px] justify-start md:justify-center px-1 py-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {filterChips.map(chip => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setActiveFilter(chip)}
                    className={`shrink-0 px-[16px] h-[34px] rounded-full text-[13px] font-medium transition-all duration-[180ms] border flex items-center justify-center hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF9] ${
                      activeFilter === chip
                        ? 'bg-[#8B6B4D] border-[#8B6B4D] text-white shadow-[0_2px_8px_rgba(139,107,77,0.25)]'
                        : 'bg-transparent border-[#DDD2C2]/80 text-[#8B6B4D] hover:bg-[#F7F2EB]'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Row: Category Navigation */}
            <div className="w-full relative">
              <div className="flex overflow-x-auto no-scrollbar gap-[8px] items-center snap-x justify-start lg:justify-center pb-2 px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  { label: 'Special', id: 'mud-cups-special', icon: <Star className="w-[14px] h-[14px]" /> },
                  { label: 'Tea', id: 'category-tea-tones', icon: <Coffee className="w-[14px] h-[14px]" /> },
                  { label: 'Coffee', id: 'category-cravy-coffee', icon: <Coffee className="w-[14px] h-[14px]" /> },
                  { label: 'Milkshakes', id: 'category-milk-shakes', icon: <CupSoda className="w-[14px] h-[14px]" /> },
                  { label: 'Snacks', id: 'category-quick-bites', icon: <Sandwich className="w-[14px] h-[14px]" /> },
                  { label: 'Pizza', id: 'category-pizza-paradise', icon: <Pizza className="w-[14px] h-[14px]" /> },
                  { label: 'Burger', id: 'category-busy-burger', icon: <Sandwich className="w-[14px] h-[14px]" /> },
                  { label: 'Rolls', id: 'category-rolls', icon: <Scroll className="w-[14px] h-[14px]" /> },
                  { label: 'Egg', id: 'category-egg-panda', icon: <Utensils className="w-[14px] h-[14px]" /> },
                  { label: 'Pasta', id: 'category-pasta-porsh', icon: <Utensils className="w-[14px] h-[14px]" /> },
                  { label: 'Maggi', id: 'category-mazza-maggie', icon: <Utensils className="w-[14px] h-[14px]" /> },
                  { label: 'Desserts', id: 'category-ice-age', icon: <IceCream className="w-[14px] h-[14px]" /> },
                ].map((item) => {
                  const isActive = activeCategory === item.id || (!activeCategory && item.id === 'mud-cups-special');
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        const el = document.getElementById(item.id);
                        if (el) {
                          const offset = 180;
                          const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }}
                      className={`snap-start shrink-0 flex items-center gap-[6px] h-[36px] px-[16px] rounded-[999px] text-[13px] font-medium transition-all duration-[180ms] hover:scale-[1.02] ${
                        isActive
                          ? 'bg-[#8B6B4D] text-white shadow-[0_2px_8px_rgba(139,107,77,0.25)]'
                          : 'bg-transparent text-[#6A5A4D] hover:bg-[#EFE8DF] hover:text-[#2D241F]'
                      }`}
                    >
                      <span className={`transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  );
                })}
              </div>
              {/* Fade effect for horizontal scroll on mobile */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F7F2EB] to-transparent pointer-events-none lg:hidden" />
            </div>

          </div>
        </div>

        {/* Spacer before content */}
        <div className="h-[24px]"></div>

        {/* Mud Cup's Special Section */}
        <div id="mud-cups-special" className="scroll-mt-[130px]"></div>
        {(!searchQuery && activeFilter === 'All') && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 max-w-7xl mx-auto"
          >
            <div className="flex flex-col items-center sm:items-start mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <Coffee className="w-5 h-5 text-[#8B6B4D] stroke-[2]" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D241F] tracking-tight">Mud Cup's Special</h3>
              </div>
              <p className="text-[14px] text-[#6A5A4D] font-normal sm:ml-8">Our most loved signature creations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1 */}
              <div className="group bg-[#FFFDF9] border border-[#DDD2C2]/50 rounded-[18px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(45,36,31,0.02)] hover:shadow-[0_8px_24px_rgba(45,36,31,0.05)] transition-all duration-200 hover:-translate-y-[3px] relative overflow-hidden flex justify-between items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,107,77,0.03),_transparent_50%)] pointer-events-none" />
                <div className="flex flex-col relative z-10">
                  <div className="flex items-center space-x-3 mb-1.5">
                    <Coffee className="w-4 h-4 text-[#8B6B4D] stroke-[1.5] transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-[17px] font-semibold text-[#2D241F] leading-tight">Hot Chocolate</span>
                  </div>
                  <p className="text-[13px] text-[#6A5A4D] ml-7">Rich • Creamy • Comforting</p>
                  <div className="ml-7 mt-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-[#8B6B4D] text-[#FFFDF9] text-[9px] font-bold uppercase tracking-widest border border-[#8B6B4D]/20 shadow-[0_0_10px_rgba(139,107,77,0)] group-hover:shadow-[0_0_10px_rgba(139,107,77,0.25)] transition-shadow">Signature</span>
                  </div>
                </div>
                <div className="text-right relative z-10 self-end sm:self-center shrink-0 pl-4">
                  <span className="text-[18px] sm:text-[20px] font-bold text-[#2D241F] font-mono tabular-nums leading-none">₹99</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#FFFDF9] border border-[#DDD2C2]/50 rounded-[18px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(45,36,31,0.02)] hover:shadow-[0_8px_24px_rgba(45,36,31,0.05)] transition-all duration-200 hover:-translate-y-[3px] relative overflow-hidden flex justify-between items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,107,77,0.03),_transparent_50%)] pointer-events-none" />
                <div className="flex flex-col relative z-10">
                  <div className="flex items-center space-x-3 mb-1.5">
                    <Pizza className="w-4 h-4 text-[#8B6B4D] stroke-[1.5] transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-[17px] font-semibold text-[#2D241F] leading-tight">Mud Cups Special Pizza</span>
                  </div>
                  <p className="text-[13px] text-[#6A5A4D] ml-7">House Favourite</p>
                  <div className="ml-7 mt-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-[#8B6B4D] text-[#FFFDF9] text-[9px] font-bold uppercase tracking-widest border border-[#8B6B4D]/20 shadow-[0_0_10px_rgba(139,107,77,0)] group-hover:shadow-[0_0_10px_rgba(139,107,77,0.25)] transition-shadow">Most Loved</span>
                  </div>
                </div>
                <div className="text-right relative z-10 self-end sm:self-center shrink-0 pl-4">
                  <span className="text-[18px] sm:text-[20px] font-bold text-[#2D241F] font-mono tabular-nums leading-none">₹199</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#FFFDF9] border border-[#DDD2C2]/50 rounded-[18px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(45,36,31,0.02)] hover:shadow-[0_8px_24px_rgba(45,36,31,0.05)] transition-all duration-200 hover:-translate-y-[3px] relative overflow-hidden flex justify-between items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,107,77,0.03),_transparent_50%)] pointer-events-none" />
                <div className="flex flex-col relative z-10">
                  <div className="flex items-center space-x-3 mb-1.5">
                    <Utensils className="w-4 h-4 text-[#8B6B4D] stroke-[1.5] transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-[17px] font-semibold text-[#2D241F] leading-tight">Chocolate Sizzler</span>
                  </div>
                  <p className="text-[13px] text-[#6A5A4D] ml-7">Served Hot</p>
                  <div className="ml-7 mt-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-[#8B6B4D] text-[#FFFDF9] text-[9px] font-bold uppercase tracking-widest border border-[#8B6B4D]/20 shadow-[0_0_10px_rgba(139,107,77,0)] group-hover:shadow-[0_0_10px_rgba(139,107,77,0.25)] transition-shadow">Limited Pick</span>
                  </div>
                </div>
                <div className="text-right relative z-10 self-end sm:self-center shrink-0 pl-4">
                  <span className="text-[18px] sm:text-[20px] font-bold text-[#2D241F] font-mono tabular-nums leading-none">₹149</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group bg-[#FFFDF9] border border-[#DDD2C2]/50 rounded-[18px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(45,36,31,0.02)] hover:shadow-[0_8px_24px_rgba(45,36,31,0.05)] transition-all duration-200 hover:-translate-y-[3px] relative overflow-hidden flex justify-between items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,107,77,0.03),_transparent_50%)] pointer-events-none" />
                <div className="flex flex-col relative z-10">
                  <div className="flex items-center space-x-3 mb-1.5">
                    <Star className="w-4 h-4 text-[#8B6B4D] stroke-[1.5] transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-[17px] font-semibold text-[#2D241F] leading-tight">Sizzling Brownie</span>
                  </div>
                  <p className="text-[13px] text-[#6A5A4D] ml-7">Freshly Prepared</p>
                  <div className="ml-7 mt-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-[#8B6B4D] text-[#FFFDF9] text-[9px] font-bold uppercase tracking-widest border border-[#8B6B4D]/20 shadow-[0_0_10px_rgba(139,107,77,0)] group-hover:shadow-[0_0_10px_rgba(139,107,77,0.25)] transition-shadow">Best Seller</span>
                  </div>
                </div>
                <div className="text-right relative z-10 self-end sm:self-center shrink-0 pl-4">
                  <span className="text-[18px] sm:text-[20px] font-bold text-[#2D241F] font-mono tabular-nums leading-none">₹139</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Menu Listings Container */}
        <div className="max-w-7xl mx-auto" style={{ minHeight: '600px' }}>
          {filteredMenu.length > 0 ? (
            <div className="columns-1 md:columns-2 gap-[20px]">
              {filteredMenu.map((cat, catIdx) => {
                const hasSizes = cat.items.some(item => item.priceR !== undefined || item.priceL !== undefined);

                return (
                <motion.div
                  key={cat.id}
                  id={`category-${cat.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: (catIdx % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#FCF9F2] rounded-2xl border border-[#DDD2C2]/20 shadow-[0_4px_20px_rgba(45,36,31,0.02)] transition-all duration-300 relative overflow-hidden group mb-[20px] scroll-mt-[140px] break-inside-avoid w-full inline-block p-5"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="flex items-center space-x-[8px]">
                      <div className="flex items-center justify-center text-[#2D241F] opacity-80">
                        {getCategoryIcon(cat.id)}
                      </div>
                      <h3 className="text-[19px] font-semibold text-[#2D241F] tracking-tight">
                        {cat.name}
                      </h3>
                    </div>
                    {hasSizes && (
                      <div className="flex items-center space-x-4 pr-1">
                        <span className="text-[10px] text-[#6A5A4D] font-mono tracking-widest font-bold uppercase w-8 text-center">Reg</span>
                        <span className="text-[10px] text-[#6A5A4D] font-mono tracking-widest font-bold uppercase w-8 text-center">Lrg</span>
                      </div>
                    )}
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col">
                    {cat.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        className={`group/item transition-colors duration-[180ms] flex flex-col hover:bg-[#EFE8DF]/60 rounded-xl px-3 py-2.5 -mx-3 ${index !== cat.items.length - 1 ? 'border-b border-[#DDD2C2]/20' : ''}`}
                      >
                        <div className="flex justify-between items-start w-full gap-4">
                          <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                              {/* Simple minimalist Veg indicator */}
                              <span
                                className={`w-[8px] h-[8px] flex items-center justify-center shrink-0 ${
                                  item.isVeg
                                    ? 'text-emerald-600'
                                    : 'text-red-600'
                                }`}
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                              </span>
                              <span className="text-[15px] font-medium text-[#2D241F] leading-tight">
                                {item.name}
                              </span>
                            </div>
                            
                            {/* Description */}
                            {item.description && (
                              <div className="pl-[16px] mt-1 pr-4">
                                <p className="text-[12px] text-[#6A5A4D] font-normal leading-[1.35]">
                                  {item.description}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {/* Elegant Price */}
                          <div className="shrink-0 text-right flex items-center space-x-4 pt-0.5">
                            {(item.priceR !== undefined || item.priceL !== undefined) ? (
                              <>
                                <span className="text-[15px] font-semibold text-[#2D241F] font-mono tabular-nums leading-none w-8 text-center group-hover/item:text-[#8B6B4D] transition-colors duration-[180ms]">
                                  {item.priceR ? `₹${item.priceR}` : '-'}
                                </span>
                                <span className="text-[15px] font-semibold text-[#2D241F] font-mono tabular-nums leading-none w-8 text-center group-hover/item:text-[#8B6B4D] transition-colors duration-[180ms]">
                                  {item.priceL ? `₹${item.priceL}` : '-'}
                                </span>
                              </>
                            ) : (
                              <span className="text-[15px] font-semibold text-[#2D241F] font-mono tabular-nums leading-none group-hover/item:text-[#8B6B4D] transition-colors duration-[180ms]">
                                ₹{item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#FCF9F2] border border-[#DDD2C2]/30 shadow-[0_4px_20px_rgba(45,36,31,0.02)] rounded-3xl p-16 text-center"
            >
              <p className="text-[#6A5A4D] text-sm font-light">No menu items match your criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All');
                }}
                className="mt-4 px-6 py-2.5 bg-[#8B6B4D] text-[#FFFDF9] hover:bg-[#A67C52] border border-[#8B6B4D] text-[10px] font-bold uppercase tracking-widest rounded-full transition-all"
                id="btn-no-match-clear"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
