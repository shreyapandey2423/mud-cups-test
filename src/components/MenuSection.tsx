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

  useEffect(() => {
    // Automatically center the selected category in the horizontal scroll
    if (activeCategoryRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const element = activeCategoryRef.current;
      
      const containerWidth = container.offsetWidth;
      const elementOffsetLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      
      const scrollPosition = elementOffsetLeft - (containerWidth / 2) + (elementWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left space-y-4"
          >
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D]">
              The Digital Brew & Plates
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
              Something for<br />Every Craving.
            </h2>
            <p className="text-[#6A5A4D] text-base sm:text-lg font-normal leading-[1.8] max-w-xl">
              Coffee, snacks and comfort food—all in one place.
            </p>
            <div className="h-[1px] w-12 bg-[#DDD2C2] my-6" />
            <p className="text-sm text-[#6A5A4D]/85 font-normal leading-[1.8] max-w-xl">
              Browse our dynamic digital menu featuring 18 curated categories. Use the interactive search and diet filters below to easily find exactly what you crave.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(45,36,31,0.08)] border border-[#DDD2C2]/50 bg-[#FFFDF9] aspect-[4/3] group transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(45,36,31,0.12)]">
              <img
                src="/images/menu-intro.jpg"
                alt="Snacks and Drinks at Mud Cups"
                className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105 group-hover:brightness-105 cursor-pointer"
                loading="lazy"
              />
            </div>
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
        <div className="relative max-w-5xl mb-16" id="categories-carousel-outer">
          <div className="absolute inset-y-0 -left-4 z-20 flex items-center pointer-events-none">
            <button
              onClick={() => scrollTabs('left')}
              className="w-8 h-8 rounded-full bg-[#FFFDF9] hover:bg-[#F7F2EB] border border-[#DDD2C2] flex items-center justify-center text-[#6A5A4D] hover:text-[#2D241F] pointer-events-auto transition-colors shadow-[0_10px_30px_rgba(45,36,31,0.08)] cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          </div>
          
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-2.5 overflow-x-auto py-2 px-8 scrollbar-none select-none no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* 18 Category tabs */}
            {categories.map((cat, index) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  ref={isActive ? activeCategoryRef : null}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex items-center space-x-2.5 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shrink-0 border ${
                    isActive
                      ? 'border-[#8B6B4D] text-[#FFFDF9] scale-105'
                      : 'bg-[#FFFDF9] border-[#DDD2C2] text-[#6A5A4D] hover:text-[#2D241F] hover:border-[#2D241F]/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-category"
                      className="absolute inset-0 bg-[#8B6B4D] rounded-full shadow-[0_4px_12px_rgba(139,107,77,0.15)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div
                    className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-extrabold font-mono shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-[#F7F2EB] text-[#8B6B4D]' 
                        : 'bg-[#8B6B4D]/10 text-[#8B6B4D]'
                    }`}
                  >
                    {cat.name.charAt(0)}
                  </div>
                  <span className="relative z-10">{cat.name}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="absolute inset-y-0 -right-4 z-20 flex items-center pointer-events-none">
            <button
              onClick={() => scrollTabs('right')}
              className="w-8 h-8 rounded-full bg-[#FFFDF9] hover:bg-[#F7F2EB] border border-[#DDD2C2] flex items-center justify-center text-[#6A5A4D] hover:text-[#2D241F] pointer-events-auto transition-colors shadow-[0_10px_30px_rgba(45,36,31,0.08)] cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Menu Listings Container */}
        <div className="max-w-5xl space-y-12">
          <AnimatePresence mode="wait">
          {filteredMenu.length > 0 ? (
              filteredMenu.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#FFFDF9] rounded-[2rem] border border-[#DDD2C2]/50 p-6 sm:p-10 shadow-[0_10px_30px_rgba(45,36,31,0.08)] relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#DDD2C2]/40 mb-10">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#F7F2EB] border border-[#DDD2C2] text-[#8B6B4D] text-xl font-semibold font-mono shrink-0 select-none">
                      {cat.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D241F] tracking-tight">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] font-mono text-[#8B6B4D] uppercase tracking-widest mt-1">
                        {cat.items.length} Specialties
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#6A5A4D] bg-[#F7F2EB] px-4 py-1.5 rounded-full border border-[#DDD2C2]/40">
                    Mud Cups Bengaluru
                  </span>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
                  {cat.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col justify-between p-4 -m-4 rounded-xl hover:bg-[#F7F2EB] transition-colors duration-300"
                    >
                      {/* Title & Price */}
                      <div className="flex items-start justify-between space-x-6">
                        <div className="text-left flex-1">
                          <div className="flex items-center space-x-3 flex-wrap">
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
                            <span className="text-base font-semibold text-[#2D241F] group-hover:text-[#8B6B4D] transition-colors leading-tight">
                              {item.name}
                            </span>
                          </div>
                          <p className="text-sm text-[#6A5A4D] mt-2 font-normal leading-[1.6]">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Elegant Price Tag */}
                        <div className="shrink-0 text-right pt-0.5">
                          <span className="text-base font-semibold text-[#2D241F] font-sans group-hover:text-[#8B6B4D] transition-colors duration-300">
                            ₹{item.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#FFFDF9] border border-[#DDD2C2]/60 rounded-3xl p-16 text-center"
            >
              <p className="text-[#6A5A4D] text-sm font-light">No menu items match your criteria.</p>
              <button
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
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
