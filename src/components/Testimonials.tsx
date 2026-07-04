import React, { useState } from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import qrCodeImg from '../assets/images/review/qr-code.png';

interface AdditionalRating {
  label: string;
  icon: string;
  rating: number;
}

interface Review {
  id: number;
  author_name: string;
  rating: number;
  text: string;
  additional_ratings?: AdditionalRating[];
}

const reviewsData: Review[] = [
  {
    id: 1,
    author_name: "Asim Anand",
    rating: 5,
    text: "Very good snacks options, good for evening outing. The hot chocolate here is one of the best we ever had. Apart from that, French fries, crispy baby corn and potato wedges are some of the go-to items. A great place for an informal get-together with friends."
  },
  {
    id: 2,
    author_name: "Vaishnavi Pednekar",
    rating: 5,
    text: "We live nearby and often visit for the French fries. Their loaded fries are crispy and full of flavour. The hot chocolate is absolutely amazing and easily one of the best. A wonderful place to spend a relaxing evening with a beautiful open ambience."
  },
  {
    id: 3,
    author_name: "Vishnuraj M",
    rating: 4,
    text: "Newly opened Mud Cups café in Ananth Nagar. It has spacious seating on both the ground floor and rooftop. The lighting creates a wonderful atmosphere. The food is good, but the hot chocolate is definitely a must-try."
  },
  {
    id: 4,
    author_name: "Soujanya Hatture",
    rating: 5,
    text: "Amazing place with delicious food. The hygiene is very well maintained. Definitely worth visiting.",
    additional_ratings: [
      { label: "Food", icon: "🍽", rating: 5 },
      { label: "Service", icon: "👨‍🍳", rating: 5 },
      { label: "Atmosphere", icon: "✨", rating: 5 }
    ]
  },
  {
    id: 5,
    author_name: "Vivek Jacob",
    rating: 5,
    text: "Tried the Double Cheese Pizza and it was loaded with cheese and tasted amazing. The French fries were great, and the tea served in a clay cup made the experience even better. Highly recommended.",
    additional_ratings: [
      { label: "Food", icon: "🍽", rating: 5 },
      { label: "Service", icon: "👨‍🍳", rating: 5 },
      { label: "Atmosphere", icon: "✨", rating: 5 }
    ]
  },
  {
    id: 6,
    author_name: "Abhishek Anand",
    rating: 5,
    text: "Without a doubt, this place serves one of the best hot chocolates. It's thick, creamy and rich in flavour. The Peri Peri Fries paired with the hot chocolate are highly recommended. The café offers many delicious snacks at very reasonable prices considering the quality. Parking can be limited due to traffic near Ananth Nagar, so visiting on a two-wheeler is more convenient. Overall, a fantastic café experience."
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = review.text.length > 150;

  const renderStars = (rating: number, size: 'normal' | 'small' = 'normal') => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`${size === 'normal' ? 'w-[14px] h-[14px]' : 'w-2.5 h-2.5'} ${
          i < rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-200 fill-gray-200'
        }`}
      />
    ));
  };

  return (
    <div
      className="bg-[#FFFDF9] border border-[#DDD2C2]/60 rounded-[20px] p-[28px] shadow-[0_4px_16px_rgba(45,36,31,0.03)] transition-all duration-[220ms] ease-out hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(45,36,31,0.06)] hover:border-[#8B6B4D]/30 flex flex-col h-full"
    >
      {/* Top of Card */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h3 className="text-[15px] font-semibold text-[#2D241F] leading-tight mb-1">
            {review.author_name}
          </h3>
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-3 h-3 text-[#8B6B4D]" />
            <span className="text-[11px] text-[#6A5A4D] font-medium tracking-wide">
              Verified Guest
            </span>
          </div>
        </div>
        <div className="flex space-x-[2px] pt-1">
          {renderStars(review.rating)}
        </div>
      </div>

      {/* Review Content */}
      <div className="relative flex-grow flex flex-col">
        <span className="absolute -top-3 -left-2 text-[48px] leading-none text-[#8B6B4D] opacity-10 font-serif">
          ❝
        </span>
        
        <div className="relative z-10 flex-grow">
          <p className={`text-[14px] text-[#4A3F35] font-normal leading-[1.7] ${!isExpanded && isLongText ? 'line-clamp-5' : ''}`}>
            {review.text}
          </p>
          
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded} aria-label={isExpanded ? "Show less of the review" : "Read more of the review"}
              className="mt-2 text-[12px] font-medium text-[#8B6B4D] hover:text-[#2D241F] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-[2px] px-1 -ml-1"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}

          {/* Additional Ratings */}
          {review.additional_ratings && (
            <div className="flex flex-wrap gap-2 mt-5">
              {review.additional_ratings.map((rating, i) => (
                <div key={i} className="inline-flex items-center space-x-1.5 bg-[#F7F2EB] px-2.5 py-1.5 rounded-full border border-[#DDD2C2]/30">
                  <span className="text-[11px]">{rating.icon}</span>
                  <span className="text-[11px] font-medium text-[#4A3F35]">{rating.label}</span>
                  <div className="flex space-x-[1px] ml-1">
                    {renderStars(rating.rating, 'small')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Footer */}
      <div className="mt-6 pt-4 border-t border-[#DDD2C2]/30 flex items-center space-x-2">
        <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-[11px] text-[#8B6B4D] font-medium uppercase tracking-wider">
          Reviewed on Google
        </span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#F7F2EB] py-20 lg:py-28 relative border-b border-[#DDD2C2]/60 overflow-hidden">
      {/* Subtle Texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-16 space-y-4"
        >
          <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] flex items-center space-x-2">
            <span>WHAT OUR CUSTOMERS SAY</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2D241F] tracking-tight leading-[1.15]">
            Loved by Our Guests
          </h2>
          <p className="text-[#6A5A4D] text-base font-normal leading-[1.8] max-w-xl">
            Real experiences from customers who have visited Mud Cups.
          </p>
          <div className="h-[1px] w-12 bg-[#DDD2C2] mt-6" />
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]"
        >
          {reviewsData.map((review) => (
            <motion.div variants={itemVariants} key={review.id} className="h-full">
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

        {/* Review Invitation */}
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
        </motion.div>
      </div>
    </section>
  );
}
