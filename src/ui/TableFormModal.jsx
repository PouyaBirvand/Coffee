import { useEffect } from 'react';
import { useTableManagement } from '../hooks/useTableManagement';
import { motion } from 'framer-motion';
import { InfoIcon, HashIcon, TableIcon } from '../components/Icons';

function TableForm() {
  const { showForm, tableNumber, setTableNumber, handleSubmit, isLoading } =
    useTableManagement();

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  if (!showForm) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-[2001]"
    >
      <motion.form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{
          type: 'tween',
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="bg-body w-full rounded-t-[2.5rem] relative min-h-[50vh] touch-pan-y"
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-dark-cocoa/20 rounded-full" />

        <motion.div
          className="p-8 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative mb-8 w-24 h-24 flex justify-center items-center mx-auto">
            <motion.div
              initial={{ scale: 0.5, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring' }}
              className="w-24 h-24 mx-auto"
            >
              <div className="w-full h-full rounded-[1.5rem] rotate-12 absolute" />
              <div className="w-full h-full rounded-[1.5rem] -rotate-12 absolute" />
              <div className="w-full h-full rounded-[1.5rem] flex items-center justify-center relative">
                <img
                  className="rounded-full w-full mt-5 scale-[1.2]"
                  src="./icon.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4"
          >
            <div className="flex justify-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <TableIcon />
              </motion.div>
              <p className="text-base text-center font-medium text-deep-mahogany xs:text-sm">
                کافه کهن
              </p>
            </div>

            <h2 className="text-3xl sm:text-lg md:text-[1.3rem] xs:text-base text-dark-cocoa text-center font-extrabold">
              اول , شماره میز خود را وارد کنید
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mb-6"
          >
            <span className="absolute right-6 -top-3">
              <HashIcon />
            </span>
            <motion.input
              dir="rtl"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-translucent-coffee/30 p-3 placeholder-dark-cocoa rounded-lg outline-none py-3 pl-7 w-full xs:text-sm border-solid border-red-900 border-separate"
              type="tel"
              pattern="[0-9]*"
              placeholder="برای مثال 12 ..."
              value={tableNumber}
              onChange={e => setTableNumber(e.target.value)}
            />
          </motion.div>

          <motion.div
            dir="rtl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start mb-8"
          >
            <InfoIcon />
            <h3 className="text-base xs:text-sm text-deep-mahogany font-normal mr-2 relative bottom-1">
              سفارش شما به این میز تحویل داده می شود.
            </h3>
          </motion.div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            className={`w-full bg-dark-cocoa text-white py-3 rounded-xl font-semibold text-lg shadow-xl shadow-dark-cocoa/20 relative ${
              isLoading ? 'opacity-90' : ''
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>در حال ارسال...</span>
              </div>
            ) : (
              'تایید'
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

export default TableForm;
