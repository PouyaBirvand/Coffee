import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './CoffeeLoader.css';

const CoffeeLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="cafe-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="coffee-cup"
          initial={{ scale: 0, rotateX: -45 }}
          animate={{ 
            scale: 1,
            rotateX: 0,
            rotateY: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 0.3,
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="cup-body">
            <motion.div 
              className="coffee"
              animate={{
                height: ['20%', '80%'],
                background: ['#835A36', '#412F26', '#835A36']
              }}
              transition={{
                duration: 2,
                background: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
            
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                className="coffee-ripple"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            ))}

            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="coffee-particle"
                initial={{ 
                  x: Math.random() * 80 - 40,
                  y: Math.random() * 50 + 50,
                  opacity: 0 
                }}
                animate={{
                  y: [50, 20],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>

          <motion.div 
            className="cup-handle"
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 8, 0],
              rotateZ: [-2, 2, -2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              originX: 0,
              originY: 0.5
            }}
          />

          <motion.div
            className="coffee-glow"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="steam-container">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`steam-${i}`}
                className="steam"
                initial={{ opacity: 0 }}
                animate={{
                  y: [-20, -100],
                  x: [0, Math.sin(i) * 30],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="magical-text"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          BREWING MAGIC
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CoffeeLoader;
