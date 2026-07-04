const fs = require('fs');

let content = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');

const target = `        {/* Review Invitation */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-28 flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] mb-4">
            SHARE YOUR EXPERIENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D241F] tracking-tight mb-3">
            Enjoyed Your Visit?
          </h3>
          <p className="text-[#6A5A4D] text-[14px] leading-[1.7] max-w-[320px] mb-10">
            Your feedback helps us grow and helps others discover Mud Cups.
          </p>
          <a 
            href="https://www.google.com/maps/search/Mud+Cups+Ananthnagar+Electronic+City+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-[420px] bg-[#FFFDF9] border border-[#DDD2C2]/40 rounded-[18px] p-8 sm:p-10 shadow-[0_4px_20px_rgba(45,36,31,0.03)] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(45,36,31,0.06)] transition-all duration-[180ms] ease-out group"
          >
            <div className="flex justify-center space-x-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-[18px] h-[18px] text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <p className="text-[#2D241F] font-semibold text-[16px] mb-8">
              "Love your Mud Cups experience?"
            </p>
            <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] mx-auto mb-8 rounded-2xl overflow-hidden bg-white p-3 border border-[#DDD2C2]/50 shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-[180ms] ease-out cursor-pointer">
              <img 
                src={qrCodeImg} 
                alt="Scan to leave a Google Review for Mud Cups" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[13px] text-[#4A3F35] font-medium mb-2">
              Scan the QR code to leave a Google Review.
            </p>
            <p className="text-[12px] text-[#8B6B4D] font-medium opacity-90">
              Thank you for supporting local cafés ❤️
            </p>
          </a>
        </motion.div>`;

const replacement = `        {/* Review Invitation */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-28 max-w-[500px] mx-auto"
        >
          <div className="bg-white rounded-[20px] shadow-[0_8px_32px_rgba(45,36,31,0.06)] p-10 sm:p-14 text-center flex flex-col items-center">
            <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#2D241F] tracking-tight mb-3">
              Loved your visit?
            </h3>
            <p className="text-[#6A5A4D] text-[15px] leading-[1.6] mb-10 max-w-[280px]">
              Your feedback helps Mud Cups grow.
            </p>
            
            <a 
              href="https://g.page/r/CbV02_sD3cT3EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#2D241F] hover:bg-[#4A3F35] text-white font-medium text-[13px] tracking-wide px-8 py-3.5 rounded-full transition-colors duration-200 mb-10"
            >
              Write a Google Review
            </a>

            <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] mx-auto rounded-[16px] overflow-hidden bg-white p-2 border border-[#DDD2C2]/30 shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-[200ms] ease-out">
              <img 
                src={qrCodeImg} 
                alt="Scan to leave a Google Review for Mud Cups" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>`;

if (content.includes('SHARE YOUR EXPERIENCE')) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/Testimonials.tsx', content, 'utf8');
  console.log("Replaced successfully.");
} else {
  console.log("Could not find target content.");
}
