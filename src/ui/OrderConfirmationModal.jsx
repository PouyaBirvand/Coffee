import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import React, { useMemo } from "react";
// import { orderService } from "../services/orderService";

const OrderConfirmationModal = ({ isOpen, onClose, tableNumber, estimatedTime }) => {
  const navigate = useNavigate();
  const { setOrderDetails , setTableNumber } = useAppContext();

  const validTableNumber = useMemo(() => {
    return Number.isInteger(parseInt(tableNumber)) 
      ? parseInt(tableNumber) 
      : parseInt(localStorage.getItem('tableNumber'));
  }, [tableNumber]);

  const handleBackToMenu = async () => {
    try {
      // Clear the cart items from the server
      // await orderService.clearCart(validTableNumber);
      localStorage.removeItem('tableNumber');
      setTableNumber(null)
      
      // Reset local state and navigate
      window.onbeforeunload = null;
      onClose();
      setOrderDetails(null);
      navigate('/', { replace: true });
    } catch (error) {
      // console.error('Error clearing cart:', error);
    }
  };

  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="absolute inset-0 bg-dark-cocoa/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-soft-cream w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="bg-warm-wood/10 p-6 xs:p-4 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olive-green via-warm-wood to-deep-mahogany" />
          <h2 className="text-deep-mahogany font-bold text-center xs:text-xl sm:text-2xl text-[1.6rem]">
            Thank You for Your Order!
          </h2>
        </div>

        <div className="p-6 xs:p-4 space-y-6">
          <div className="bg-warm-wood/5 rounded-xl p-4 border border-warm-wood/20">
            <div className="flex flex-col xs:flex-row justify-between items-center gap-3 text-dark-cocoa">
              <div className="text-center xs:text-left">
                <p className="text-sm text-translucent-coffee">Table Number</p>
                <p className="text-2xl font-bold text-deep-mahogany">#{validTableNumber}</p>
              </div>
              <div className="h-px xs:h-12 w-full xs:w-px bg-warm-wood/20" />
              <div className="text-center xs:text-left">
                <p className="text-sm text-translucent-coffee">Estimated Time</p>
                <p className="text-2xl font-bold text-deep-mahogany">{estimatedTime} min</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-dark-cocoa">
            <p className="leading-relaxed text-sm md:text-base">
              Your order has been successfully placed. Here are your options:
            </p>
            
            <ul className="space-y-2">
              {['Return to menu for another order', 'Wait for current order'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-olive-green" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-deep-mahogany/5 rounded-lg p-3">
            <p className="text-xs md:text-sm text-translucent-coffee text-center italic">
              This order is now confirmed and cannot be modified
            </p>
          </div>
        </div>

        <div className="bg-warm-wood/5 p-6 xs:p-4">
          <div className="flex flex-col xs:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-olive-green text-soft-cream rounded-lg
                       hover:opacity-90 transition-all duration-300 text-sm md:text-base
                       shadow-lg hover:shadow-xl"
            >
              Stay Here
            </button>
            <button
              onClick={handleBackToMenu}
              className="flex-1 px-6 py-3 bg-warm-wood text-soft-cream rounded-lg
                       hover:bg-translucent-coffee transition-all duration-300 text-sm md:text-base
                       shadow-lg hover:shadow-xl"
            >
              Go to Menu
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(OrderConfirmationModal);