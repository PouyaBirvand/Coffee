import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
const Welcome = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#CBB89D]"
        >
          <motion.div 
            className="absolute inset-0 overflow-hidden opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
          >
            <motion.div 
              className="absolute left-0 top-0 h-full w-1.5 bg-warm-wood"
              animate={{ height: ["0%", "100%"] }}
              transition={{ duration: 1 }}
            />
            <motion.div 
              className="absolute right-0 top-0 h-full w-1.5 bg-warm-wood"
              animate={{ height: ["0%", "100%"] }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.img
                  src="./cover.png"
                  alt="Tak Tom Novin"
                  className="h-32 w-32 rounded-full object-cover shadow-lg md:h-40 md:w-40 xl:h-48 xl:w-48"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute -inset-4 rounded-full border-2 border-warm-wood"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0.8, 1.2],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h1 
                className="text-2xl font-medium text-dark-cocoa md:text-3xl xl:text-4xl"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome to
              </motion.h1>
              <motion.div
                className="mt-3 bg-gradient-to-r from-deep-mahogany via-warm-wood to-deep-mahogany bg-clip-text text-4xl font-bold text-transparent md:text-5xl xl:text-6xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Tak Tom Novin
              </motion.div>

              <motion.div
                className="mx-auto mt-5 h-[2px] w-48 bg-warm-wood"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 192, opacity: 0.5 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
