import { useRef, useState } from "react";
import { motion } from "framer-motion";

const GiftIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M20 12V22H4V12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7H2V12H22V7Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7H16.5C17.3284 7 18 6.32843 18 5.5V3.5C18 2.67157 17.3284 2 16.5 2H7.5C6.67157 2 6 2.67157 6 3.5V5.5C6 6.32843 6.67157 7 7.5 7H12Z"/>
  </svg>
);

const CheckmarkIcon = () => (
  <motion.svg 
    width="40" 
    height="40" 
    viewBox="0 0 28 22" 
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <path 
      d="M2.1875 11.6875L10.0625 19.5625L25.8125 2.6875" 
      stroke="#5D2510" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </motion.svg>
);
// eslint-disable-next-line react/prop-types
const OrderFormModal = ({ isOpen, onClose }) => {
    const [isValidated, setIsValidated] = useState(false);
    const modalRef = useRef(null);
  
    const handleDragEnd = (event, info) => {
      if (info.offset.y > 100) {
        onClose();
      }
    };
  
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    const handleSubmit = () => {
      setIsValidated(true);
      setTimeout(() => {
        onClose();
        setIsValidated(false);
      }, 3000);
    };
  
    if (!isOpen) return null;
  
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-[2001]"
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={modalRef}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ 
            type: "tween", 
            duration: 0.4,
            ease: [0.32, 0.72, 0, 1]
          }}
          className="bg-body w-full rounded-t-[2.5rem] relative min-h-[50vh] touch-pan-y"
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-dark-cocoa/20 rounded-full" />
          
          {!isValidated ? (
            <motion.div 
              className="p-8 pt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="relative mb-8">
                <motion.div
                  initial={{ scale: 0.5, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring" }}
                  className="w-24 h-24 mx-auto"
                >
                  <div className="w-full h-full bg-dark-cocoa rounded-[1.5rem] rotate-12 absolute" />
                  <div className="w-full h-full bg-dark-cocoa/80 rounded-[1.5rem] -rotate-12 absolute" />
                  <div className="w-full h-full bg-dark-cocoa rounded-[1.5rem] flex items-center justify-center relative">
                    <GiftIcon />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-dark-cocoa text-3xl font-bold mb-3">Ready to Order?</h2>
                <p className="text-dark-cocoa/70">Tap below to confirm your delicious selection</p>
              </motion.div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="w-full bg-dark-cocoa text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-dark-cocoa/20"
                >
                  Place Order
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="w-full bg-white/50 text-dark-cocoa py-4 rounded-xl font-medium"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="p-8 pt-12 h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <CheckmarkIcon />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -right-2 -top-2 w-8 h-8 bg-dark-cocoa rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xl">✨</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <h3 className="text-dark-cocoa text-3xl font-bold mb-4">Order Confirmed!</h3>
                <p className="text-dark-cocoa/70 text-lg leading-relaxed">
                  Your delicious treats will arrive in 4 minutes
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
};

export default OrderFormModal;
