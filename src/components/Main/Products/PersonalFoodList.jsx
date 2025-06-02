import { motion } from 'framer-motion';
import { useAppContext } from '../../../context/AppContext';
import { memo, useCallback, useMemo } from 'react';
import { useImagePreload } from '../../../hooks/useImagePreload';

const animations = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  item: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  },
};

function PersonalFoodsListComponent({ items }) {
  const { addToCart, cartItems } = useAppContext();

  const itemsInCart = useMemo(
    () => new Set(cartItems.map(item => item.product.id)),
    [cartItems]
  );

  const handleAddToCart = useCallback(
    async item => {
      try {
        await addToCart(item);
      } catch (error) {
        console.error('Failed to add item to cart:', error);
      }
    },
    [addToCart]
  );

  const isLoaded = useImagePreload(
    `https://bittercaffeine.ir/CafeApi/storage/${items[0]?.image}`
  );

  return (
    <motion.div
      {...animations.container}
      className={`h-[360px] overflow-y-auto custom-scrollbar px-4 relative top-10
        ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="space-y-4 pb-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            {...animations.item}
            transition={{ delay: index * 0.05 }}
            className="bg-translucent-coffee bg-opacity-50 rounded-lg p-3 flex items-start gap-3"
          >
            <img
              src={`http://127.0.0.1:8000/storage/${item.image}`}
              alt={item.title}
              loading="lazy"
              className="w-20 h-20 object-contain flex-shrink-0"
              style={{
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
            />

            <div className="flex-1 min-w-0">
              <h3 className="text-soft-cream font-bold text-base">
                {item.title}
              </h3>

              <p className="text-soft-cream/80 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-2 gap-2">
                <p className="text-soft-cream font-bold text-sm">
                  ${parseFloat(item.price).toLocaleString()}
                </p>

                <button
                  onClick={() => handleAddToCart(item)}
                  className={`${
                    itemsInCart.has(item.id)
                      ? 'bg-dark-cocoa'
                      : 'bg-deep-mahogany'
                  } text-soft-cream px-3 py-1.5 rounded-lg text-sm whitespace-nowrap
                    transition-colors duration-300`}
                  disabled={itemsInCart.has(item.id)}
                >
                  {itemsInCart.has(item.id) ? 'In Cart' : 'Add'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

PersonalFoodsListComponent.displayName = 'PersonalFoodsList';

export const PersonalFoodsList = memo(PersonalFoodsListComponent);
