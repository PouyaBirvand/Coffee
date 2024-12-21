import { memo } from "react";
import { motion } from "framer-motion";
import { CartIcons } from "./CartIcons";

// eslint-disable-next-line react/prop-types
const CartTotal = memo(function CartTotal({ totalPrice, formatPrice }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-[6.5rem] left-0 right-0 bg-translucent-coffee bg-opacity-40 shadow-md p-4 rounded-2xl mx-auto w-[80%] z-[1]"
    >
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center text-deep-mahogany text-lg font-bold pt-2">
          <div className="flex items-center gap-1">
            {CartIcons.totalAmountIcon}
            <span className="text-[18px] xs:text-[16px]">Total Amount:</span>
          </div>
          <motion.span
            key={totalPrice}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-[20px] xs:text-[19px]"
          >
            ${formatPrice(totalPrice)}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
});

CartTotal.displayName = 'CartTotal';
export default CartTotal;
