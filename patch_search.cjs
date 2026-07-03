const fs = require('fs');

let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

const target1 = `className="w-full pl-10 pr-4 h-[42px] bg-[#FCF9F2] border border-[#DDD2C2]/50 text-[#2D241F] placeholder-[#6A5A4D]/50 text-[14px] font-medium focus:outline-none focus:border-[#8B6B4D]/40 focus:ring-4 focus:ring-[#8B6B4D]/5 transition-all rounded-[24px] shadow-[0_1px_2px_rgba(45,36,31,0.01)]"`;

const rep1 = `className={\`w-full pl-10 pr-4 bg-[#FCF9F2] border border-[#DDD2C2]/50 text-[#2D241F] placeholder-[#6A5A4D]/50 text-[14px] font-medium focus:outline-none focus:border-[#8B6B4D]/40 focus:ring-4 focus:ring-[#8B6B4D]/5 transition-all duration-300 rounded-[24px] shadow-[0_1px_2px_rgba(45,36,31,0.01)] \${isScrolled ? 'h-[38px]' : 'h-[42px]'}\`}`;

if (content.includes(target1)) {
  content = content.replace(target1, rep1);
  
  // also shrink width slightly
  const target2 = `className="relative w-full md:w-[420px] lg:w-[480px] shrink-0 group"`;
  const rep2 = `className={\`relative w-full shrink-0 group transition-all duration-300 \${isScrolled ? 'md:w-[380px] lg:w-[440px]' : 'md:w-[420px] lg:w-[480px]'}\`}`;
  content = content.replace(target2, rep2);

  fs.writeFileSync('src/components/MenuSection.tsx', content);
  console.log("Successfully patched search bar shrinking.");
} else {
  console.log("Could not find search bar targets.");
}

