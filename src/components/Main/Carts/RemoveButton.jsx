import { memo } from 'react';
import { motion } from 'framer-motion';
import { CartIcons } from './CartIcons';
import { useDebounce } from '../../../hooks/useDebounce';

const RemoveButton = memo(function RemoveButton({ onRemove }) {
  const [handleRemove, isRemoving] = useDebounce(onRemove, 2000);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleRemove}
      className={`pb-2 ${isRemoving ? 'opacity-50' : ''}`}
    >
      {isRemoving ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-4 h-4 border-2 border-dark-cocoa border-t-transparent rounded-full"
        />
      ) : (
        CartIcons.deleteIcon
      )}
    </motion.div>
  );
});

export default RemoveButton;
