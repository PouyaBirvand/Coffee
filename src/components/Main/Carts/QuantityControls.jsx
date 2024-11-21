import { motion } from "framer-motion";
import { useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
function QuantityControls({ quantity, onUpdate }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const lastUpdateTime = useRef(0);
  const COOLDOWN_TIME = 500; // 500ms فاصله بین هر درخواست

  const handleUpdate = async (change) => {
      const now = Date.now();
      if (now - lastUpdateTime.current < COOLDOWN_TIME) return;
      
      setIsUpdating(true);
      lastUpdateTime.current = now;
      await onUpdate(change);
      setIsUpdating(false);
  };

  return (
      <div className="flex items-center mt-2">
          <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleUpdate(-1)}
              disabled={quantity <= 1 || isUpdating}
              className={`bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl md:text-xl md:h-6 sm:text-lg sm:h-5 ${
                  isUpdating ? 'opacity-50' : ''
              }`}
          >
              {isUpdating ? (
                  <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-4 h-4 border-2 border-dark-cocoa border-t-transparent rounded-full"
                  />
              ) : (
                  "-"
              )}
          </motion.button>
          <motion.span
              key={quantity}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-dark-cocoa px-3 py-1 font-extrabold md:text-lg sm:text-base"
          >
              {quantity || 1}
          </motion.span>
          <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleUpdate(1)}
              disabled={isUpdating}
              className={`bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl md:text-xl md:h-6 sm:text-lg sm:h-5 ${
                  isUpdating ? 'opacity-50' : ''
              }`}
          >
              {isUpdating ? (
                  <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-4 h-4 border-2 border-dark-cocoa border-t-transparent rounded-full"
                  />
              ) : (
                  "+"
              )}
          </motion.button>
      </div>
  );
}

  

  
export default QuantityControls;