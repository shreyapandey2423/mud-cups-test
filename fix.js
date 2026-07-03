const fs = require('fs');
let content = fs.readFileSync('src/components/FeaturedFood.tsx', 'utf8');
content = content.replace(
  '<span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2"><MudCupsLogo size={14} className="text-[#8B6B4D] opacity-80" /><span>',
  '<span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2"><MudCupsLogo size={14} className="text-[#8B6B4D] opacity-80" /><span>'
);
// I can just replace the whole section safely with a regex
content = content.replace(/<span className="text-\[11px\] font-bold font-mono uppercase tracking-\[0.2em\] text-\[#8B6B4D\][^]*?CAFE SIGNATURES[^]*?<\/span>/, 
`<span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2">
              <MudCupsLogo size={14} className="text-[#8B6B4D] opacity-80" />
              <span>CAFE SIGNATURES</span>
            </span>`);
// And remove the extra closing span we added if any
content = content.replace(/<\/span><\/span>/g, '</span>');

fs.writeFileSync('src/components/FeaturedFood.tsx', content, 'utf8');
