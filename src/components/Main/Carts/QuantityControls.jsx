import PropTypes from 'prop-types';
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function QuantityControls({ quantity, onUpdate }) {
    return (
      <div className="flex items-center mt-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onUpdate(-1)}
          disabled={quantity <= 1}
          className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl md:text-xl md:h-6 sm:text-lg sm:h-5"
        >
          -
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
          onClick={() => onUpdate(1)}
          className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl md:text-xl md:h-6 sm:text-lg sm:h-5"
        >
          +
        </motion.button>
      </div>
    );
  }
  
  QuantityControls.propTypes = {
    quantity: PropTypes.number.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };
  
export default QuantityControls;