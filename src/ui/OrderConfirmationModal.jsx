import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import React, { useMemo } from 'react';

const OrderConfirmationModal = ({
  isOpen,
  onClose,
  tableNumber,
  estimatedTime,
}) => {
  const navigate = useNavigate();
  const { setOrderDetails, setTableNumber } = useAppContext();

  const validTableNumber = useMemo(() => {
    return Number.isInteger(parseInt(tableNumber))
      ? parseInt(tableNumber)
      : parseInt(sessionStorage.getItem('tableNumber'));
  }, [tableNumber]);

  const handleBackToMenu = async () => {
    try {
      sessionStorage.removeItem('tableNumber');
      setTableNumber(null);
      window.onbeforeunload = null;
      onClose();
      setOrderDetails(null);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            className="absolute inset-0 bg-dark-cocoa/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 150 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className="bg-soft-cream w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden"
          >
            <div className="bg-warm-wood/10 p-6 xs:p-4 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olive-green via-warm-wood to-deep-mahogany" />
              <h2 className="text-deep-mahogany font-bold text-center xs:text-xl sm:text-2xl text-[1.6rem]">
                ! تشکر برای سفارش شما
              </h2>
            </div>
            <div className="p-6 xs:p-4 space-y-6">
              <div className="bg-warm-wood/5 rounded-xl p-4 border border-warm-wood/20">
                <div className="flex flex-col xs:flex-row justify-between items-center gap-3 text-dark-cocoa">
                  <div className="text-center xs:text-left">
                    <p className="text-sm text-translucent-coffee">شماره میز</p>
                    <p className="text-2xl font-bold text-deep-mahogany">
                      #{validTableNumber}
                    </p>
                  </div>
                  <div className="h-px xs:h-12 w-full xs:w-px bg-warm-wood/20" />
                  <div className="text-center xs:text-left">
                    <p className="text-sm text-translucent-coffee">
                      تخمین اماده شدن سفارش شما
                    </p>
                    <p className="text-2xl font-bold text-deep-mahogany">
                      دقیقه {estimatedTime}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-dark-cocoa">
                <p className="leading-relaxed text-right text-sm md:text-base">
                  : سفارش شما با موفقیت انجام شد , لطفا نکات زیر را مطالعه کنید
                </p>

                <ul className="space-y-2" dir="rtl">
                  {[
                    'برای سفارش دیگر به منو برگردید',
                    'منتظر سفارش فعلی باشید',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-olive-green" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-deep-mahogany/5 rounded-lg p-3">
                <p className="text-xs md:text-sm text-translucent-coffee text-center italic">
                  این سفارش اکنون تایید شده و قابل تغییر نیست
                </p>
              </div>
            </div>
            <div className="bg-warm-wood/5 p-6 xs:p-4">
              <div className="flex flex-col xs:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-translucent-coffee text-soft-cream rounded-lg
                           hover:opacity-90 transition-all duration-300 text-sm md:text-base
                           shadow-lg hover:shadow-xl"
                >
                  اینجا میمانم
                </button>
                <button
                  onClick={handleBackToMenu}
                  className="flex-1 px-6 py-3 bg-translucent-coffee text-soft-cream rounded-lg
                           hover:bg-translucent-coffee transition-all duration-300 text-sm md:text-base
                           shadow-lg hover:shadow-xl"
                >
                  بازگشت به منو
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(OrderConfirmationModal);
