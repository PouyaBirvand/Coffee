import { memo } from 'react';
import { motion } from 'framer-motion';
import { useDebounce } from '../../../hooks/useDebounce';

const QuantityControls = memo(function QuantityControls({
  quantity,
  onUpdate,
}) {
  const [handleUpdate, isUpdating] = useDebounce(onUpdate);

  const buttonClass = `bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl md:text-xl md:h-6 sm:text-lg sm:h-5 ${
    isUpdating ? 'opacity-50' : ''
  }`;

  const LoadingIndicator = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="w-4 h-4 border-2 border-dark-cocoa border-t-transparent rounded-full"
    />
  );

  return (
    <div className="flex items-center mt-2">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => handleUpdate(-1)}
        disabled={quantity <= 1 || isUpdating}
        className={buttonClass}
      >
        {isUpdating ? <LoadingIndicator /> : '-'}
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
        className={buttonClass}
      >
        {isUpdating ? <LoadingIndicator /> : '+'}
      </motion.button>
    </div>
  );
});

export default QuantityControls;
