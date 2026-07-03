import { motion, AnimatePresence } from 'motion/react';
import MudCupsLogo from './MudCupsLogo';

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F2EB]"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Soft Steam */}
            <motion.div 
              className="absolute -top-12 flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.svg
                  key={i}
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    y: [0, -10, -20],
                    x: i === 1 ? [0, 2, -2, 0] : [0, -2, 2, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className="text-[#8B6B4D]"
                >
                  <path
                    d="M6 24C6 24 11 18 11 12C11 6 6 0 6 0C6 0 1 6 1 12C1 18 6 24 6 24Z"
                    fill="currentColor"
                  />
                </motion.svg>
              ))}
            </motion.div>

            {/* New Mud Cups Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 flex justify-center items-center"
            >
              <MudCupsLogo interactive={false} className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px]" />
            </motion.div>

            {/* Mud Cups Logo / Name */}
            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl font-bold tracking-[0.2em] uppercase text-[#2D241F]"
            >
              Mud Cups
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
