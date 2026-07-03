const fs = require('fs');
const content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

const lines = content.split('\n');

// Find where the corruption starts
let cutoffIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('initial={{ opacity: 0 }}ee,')) {
    cutoffIndex = i;
    break;
  }
}

if (cutoffIndex !== -1) {
  const goodLines = lines.slice(0, cutoffIndex);
  
  const bottom = `              initial={{ opacity: 0 }}
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
`;

  const finalContent = goodLines.join('\n') + '\n' + bottom;
  fs.writeFileSync('src/components/MenuSection.tsx', finalContent);
  console.log("Fixed!");
} else {
  console.log("Could not find the corruption point.");
}
