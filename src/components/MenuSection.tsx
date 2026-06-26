import { useState, useRef, useEffect } from 'react';
import { Search, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories } from '../data/menu';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeCategoryRef = useRef<HTMLButtonElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getFilteredMenu = () => {
    let result = categories.map(cat => {
      let filteredItems = cat.items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesVeg = !vegOnly || item.isVeg;
        return matchesSearch && matchesVeg;
      });
      return {
        ...cat,
        items: filteredItems
      };
    });

    result = result.filter(cat => cat.items.length > 0);

    // Only show the active category
    result = result.filter(cat => cat.id === activeCategory);

    return result;
  };

  const filteredMenu = getFilteredMenu();

  return (
    <section
      id="menu"
      className="bg-[#F7F2EB] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        
        {/* Section Header with Menu Intro Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full order-2 lg:order-1"
          >
            <div className="relative rounded-full overflow-hidden shadow-[0_12px_40px_rgba(45,36,31,0.08)] bg-[#F7F2EB] aspect-square group border-8 border-[#FFFDF9]">
              <img
                src="/images/menu-intro.jpg"
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

        {/* Search & Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#FFFDF9] border border-[#DDD2C2]/50 p-6 rounded-[2rem] mb-12 shadow-[0_4px_24px_rgba(45,36,31,0.03)] max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#6A5A4D]">
                <Search className="w-4 h-4 stroke-[1.5]" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search premium chai, coffee, momos..."
                className="w-full pl-11 pr-4 py-3 bg-[#F7F2EB] border border-[#DDD2C2]/60 rounded-full text-[#2D241F] placeholder-[#6A5A4D]/50 text-sm font-normal focus:outline-none focus:border-[#8B6B4D] transition-colors"
                id="menu-search-input"
              />
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center space-x-6 justify-between w-full sm:w-auto border-t border-[#DDD2C2]/40 sm:border-t-0 pt-4 sm:pt-0">
              
              {/* Veg Only Toggle */}
              <button
                type="button"
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  vegOnly 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-850' 
                    : 'bg-[#FFFDF9] border-[#DDD2C2]/60 text-[#6A5A4D] hover:border-[#2D241F]/30 hover:text-[#2D241F]'
                }`}
                id="btn-veg-only-toggle"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${vegOnly ? 'bg-emerald-600' : 'bg-[#DDD2C2]'}`} />
                <span>Vegetarian Only</span>
              </button>

              {/* Reset Filters button */}
              {(searchQuery || vegOnly || activeCategory !== categories[0].id) && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setVegOnly(false);
                    setActiveCategory(categories[0].id);
                  }}
                  className="text-[11px] font-bold text-[#8B6B4D] hover:text-[#2D241F] uppercase tracking-wider transition-colors cursor-pointer"
                  id="btn-reset-filters"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* 18 Categories Horizontal Navigation Carousel */}
        <div className="relative max-w-5xl mb-20 mx-auto border-b border-[#DDD2C2]/40 pb-4" id="categories-carousel-outer">
          <div className="absolute inset-y-0 -left-4 z-20 flex items-center pointer-events-none">
            <button
              type="button"
              onClick={() => scrollTabs('left')}
              className="w-8 h-8 rounded-full bg-[#FFFDF9] hover:bg-[#F7F2EB] border border-[#DDD2C2] flex items-center justify-center text-[#6A5A4D] hover:text-[#2D241F] pointer-events-auto transition-colors shadow-[0_4px_12px_rgba(45,36,31,0.05)] cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </div>
          
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-10 overflow-x-auto px-8 scrollbar-none select-none no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* 18 Category tabs */}
            {categories.map((cat, index) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  ref={isActive ? activeCategoryRef : null}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shrink-0 ${
                    isActive
                      ? 'text-[#2D241F]'
                      : 'text-[#6A5A4D] hover:text-[#2D241F]'
                  }`}
                >
                  <span className="relative z-10">{cat.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-category"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B6B4D]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="absolute inset-y-0 -right-4 z-20 flex items-center pointer-events-none">
            <button
              type="button"
              onClick={() => scrollTabs('right')}
              className="w-8 h-8 rounded-full bg-[#FFFDF9] hover:bg-[#F7F2EB] border border-[#DDD2C2] flex items-center justify-center text-[#6A5A4D] hover:text-[#2D241F] pointer-events-auto transition-colors shadow-[0_4px_12px_rgba(45,36,31,0.05)] cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Menu Listings Container */}
        <div className="max-w-4xl mx-auto space-y-16" style={{ minHeight: '600px' }}>
          {filteredMenu.length > 0 ? (
              filteredMenu.map((cat) => (
              <motion.div
                key="menu-category-wrapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Category Header */}
                <div className="text-center mb-16">
                  <h3 className="text-3xl sm:text-4xl font-semibold text-[#2D241F] tracking-tight">
                    {cat.name}
                  </h3>
                  <div className="h-[1px] w-12 bg-[#8B6B4D]/30 mx-auto mt-6" />
                </div>

                {/* Menu Items Grid - Boutique List Style */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                  {cat.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col transition-colors duration-300"
                    >
                      {/* Title & Price */}
                      <div className="flex items-baseline justify-between w-full">
                        <div className="flex items-center space-x-3 shrink-0">
                          {/* Simple minimalist Veg indicator */}
                          <span
                            className={`w-3 h-3 flex items-center justify-center shrink-0 ${
                              item.isVeg
                                ? 'text-emerald-600'
                                : 'text-red-600'
                            }`}
                            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                          </span>
                          <span className="text-base sm:text-lg font-semibold text-[#2D241F] group-hover:text-[#8B6B4D] transition-colors leading-tight">
                            {item.name}
                          </span>
                        </div>
                        
                        {/* Dotted Line */}
                        <div className="flex-1 border-b-[1.5px] border-dotted border-[#DDD2C2]/80 mx-4 relative -top-1.5 transition-colors group-hover:border-[#8B6B4D]/30" />

                        {/* Elegant Price Tag */}
                        <div className="shrink-0 text-right flex items-center space-x-3">
                          {(item.priceR !== undefined || item.priceL !== undefined) ? (
                            <>
                              <div className="flex flex-col items-center min-w-[32px]">
                                <span className="text-[10px] text-[#8B6B4D] font-mono tracking-widest font-bold uppercase leading-none mb-1">R</span>
                                <span className="text-base sm:text-lg font-semibold text-[#2D241F] font-sans leading-none">
                                  {item.priceR ? `₹${item.priceR}` : '-'}
                                </span>
                              </div>
                              <div className="w-[1px] h-6 bg-[#DDD2C2]"></div>
                              <div className="flex flex-col items-center min-w-[32px]">
                                <span className="text-[10px] text-[#8B6B4D] font-mono tracking-widest font-bold uppercase leading-none mb-1">L</span>
                                <span className="text-base sm:text-lg font-semibold text-[#2D241F] font-sans leading-none">
                                  {item.priceL ? `₹${item.priceL}` : '-'}
                                </span>
                              </div>
                            </>
                          ) : (
                            <span className="text-base sm:text-lg font-semibold text-[#2D241F] font-sans transition-colors duration-300">
                              ₹{item.price}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      {item.description && (
                        <div className="pl-6 mt-2">
                          <p className="text-sm text-[#6A5A4D] font-normal leading-[1.6]">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#FFFDF9] border border-[#DDD2C2]/60 rounded-3xl p-16 text-center"
            >
              <p className="text-[#6A5A4D] text-sm font-light">No menu items match your criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setVegOnly(false);
                  setActiveCategory(categories[0].id);
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
