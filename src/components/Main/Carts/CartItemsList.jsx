import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartItem from './CartItem';

const CartItemsList = memo(function CartItemsList({
  items,
  onQuantityUpdate,
  onRemove,
  formatPrice,
}) {
  return (
    <motion.div className="-mt-[2rem] w-[92%] mx-auto sm:mt-[1rem] h-[22rem] sm:h-[18.4rem] xs:h-[16.7rem] overflow-auto relative z-[1]">
      <AnimatePresence>
        {(items || []).map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityUpdate={onQuantityUpdate}
            onRemove={onRemove}
            formatPrice={formatPrice}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

CartItemsList.displayName = 'CartItemsList';
export default CartItemsList;
