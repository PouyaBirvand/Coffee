import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCompleteOrder } from '../hooks/useOrderManagement';
import { useAppContext } from '../context/AppContext';
import { useQueryClient } from '@tanstack/react-query';
import { useModal } from '../context/ModalContext';
import { CheckMarkIcon, GiftIcon } from '../components/Icons';
import { Toast } from './Toast';

const OrderFormModal = ({ isOpen, onClose, onOrderComplete }) => {
  const { mutate: completeOrder, isLoading } = useCompleteOrder();
  const [isValidated, setIsValidated] = useState(false);
  const modalRef = useRef(null);
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);

  const { cartItems, setCartId } = useAppContext();
  const { setShowOrderModal } = useModal();

  if (!cartItems?.length || !isOpen) return null;

  const handleSubmit = () => {
    const tableNumber = sessionStorage.getItem('tableNumber');
    setIsSubmitting(true);

    completeOrder(tableNumber, {
      onSuccess: async response => {
        if (response?.data?.success) {
          setIsValidated(true);

          setTimeout(async () => {
            onOrderComplete(response.data);
            setShowOrderModal(true);
            sessionStorage.removeItem('cartId');
            setCartId(null);
            queryClient.invalidateQueries(['cart']);
          }, 2000);
        }
      },
      onError: () => {
        Toast('Unable to process order. Please try again.');
        setIsSubmitting(false);
      },
      onSettled: () => {
        setIsSubmitting(false);
      },
    });
  };

  setTimeout(() => {
    if (orderResponse) {
      onOrderComplete(orderResponse);
    }
    setIsValidated(false);
    setIsSubmitting(false);
  }, 8000);

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100) {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-[2001] lg:w-full w-[30rem] mx-auto"
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={modalRef}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{
          type: 'tween',
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="bg-body w-full rounded-t-[2.5rem] relative md:min-h-[50vh] touch-pan-y"
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
                transition={{ type: 'spring' }}
                className="mx-auto w-24 h-24 flex justify-center items-center"
              >
                <div className="w-[6rem] h-[6rem] bg-dark-cocoa rounded-[1.5rem] rotate-12 absolute" />
                <div className="w-[6rem] h-[6rem] bg-dark-cocoa/80 rounded-[1.5rem] -rotate-12 absolute" />
                <div className="w-[6rem] h-[6rem] bg-dark-cocoa rounded-[1.5rem] flex items-center justify-center relative">
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
              <h2 className="text-dark-cocoa text-3xl font-bold mb-3">
                برای سفارش اماده ای؟
              </h2>
              <p className="text-dark-cocoa/70">
                برای تأیید انتخاب خوشمزه‌تان اینجا را لمس کنید
              </p>
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                disabled={isLoading}
                className={`w-full bg-white/50 text-dark-cocoa py-4 rounded-xl font-medium ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                لغو سفارش
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-dark-cocoa text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-dark-cocoa/20 relative ${
                  isSubmitting ? 'opacity-90' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: 'linear',
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>در حال پردازش</span>
                  </div>
                ) : (
                  'ثبت سفارش'
                )}
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
                <CheckMarkIcon />
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
              <h3 className="text-dark-cocoa text-3xl font-bold mb-4">
                ! سفارش شما تکمیل شد
              </h3>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default OrderFormModal;
