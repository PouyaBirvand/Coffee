import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const PARTICLES = 8;
  const STEAM = 5;

  return (
    <AnimatePresence>
      <motion.div
        className="cafe-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="coffee-cup"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: [0, 5, -5, 0],
          }}
          transition={{
            duration: 0.3,
            rotateY: {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="cup-body">
            <motion.div
              className="coffee"
              animate={{
                height: ['60%', '80%'],
                background: ['#835A36', '#412F26'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            {[...Array(PARTICLES)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="coffee-particle"
                initial={{
                  x: Math.random() * 60 - 30,
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: [50, 20],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </div>

          <motion.div
            className="cup-handle"
            animate={{
              rotateY: [0, 5, 0],
              rotateZ: [-1, 1, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="steam-container">
            {[...Array(STEAM)].map((_, i) => (
              <motion.div
                key={`steam-${i}`}
                className="steam"
                animate={{
                  y: [-20, -80],
                  x: [0, Math.sin(i) * 20],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  repeatDelay: 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="error-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1
            className="magical-text text-4xl"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            404
          </motion.h1>
          <h2 className="subtitle">Page Not Found</h2>
          <p className="description">
            Looks like this page took an unexpected coffee break!
          </p>
          <Link to="/">
            <motion.button
              className="home-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              برگرشت به منوی دیجیتال
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotFound;
