import { memo } from "react";
import { motion } from "framer-motion";
import QuantityControls from "./QuantityControls";
import RemoveButton from "./RemoveButton";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const CartImage = memo(({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    className="w-[139px] h-[136px] object-contain bg-translucent-coffee bg-opacity-40 rounded-2xl sm:w-full sm:h-[110px] xs:h-[90px] sm:py-1"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  />
));

const CartItem = memo(function CartItem({
  item,
  onQuantityUpdate,
  onRemove,
  formatPrice,
}) {
  const description =
    item.product.description?.split(" ").slice(0, 3).join(" ") + "...";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-translucent-coffee bg-opacity-40 rounded-2xl px-4 py-3 mb-4 flex flex-wrap items-center shadow-lg w-full min-w-0 sm:flex-col sm:items-start sm:!p-4 xs:p-2"
    >
      <div className="flex-shrink-0 mr-3 sm:mb-3 sm:mr-0 sm:w-full">
        <CartImage
          src={`http://127.0.0.1:8000/storage/${item.product.image}`}
          alt={item.product.title}
        />
      </div>

      <div className="flex-1 min-w-0 sm:w-full">
        <h2 className="sm:!text-xl text-xl lg:text-xl md:text-sm font-semibold text-dark-cocoa truncate">
          {item.product.title}
        </h2>

        <div className="flex items-center">
          <p className="text-white text-xs mt-1 truncate sm:w-full sm:text-xs">
            {description}
          </p>
        </div>

        <p className="text-deep-mahogany text-xl font-extrabold flex items-center gap-2 mt-1 md:text-lg sm:gap-[1rem] xs:text-base flex-wrap">
          <span>${formatPrice(item.product.price)}</span>
          {item.discount && (
            <span className="text-green-400 font-extralight md:text-sm">
              -{item.discount * 100}%
            </span>
          )}
        </p>

        <div className="flex items-center justify-between">
          <QuantityControls
            quantity={item.quantity}
            onUpdate={(change) => onQuantityUpdate(item.id, change)}
          />
          <RemoveButton onRemove={() => onRemove(item.id)} />
        </div>
      </div>
    </motion.div>
  );
});
CartImage.displayName = 'CartImage';
export default CartItem;

const ProductPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});

// Define the item shape
const ItemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  discount: PropTypes.number,
  product: ProductPropType.isRequired,
});

CartItem.propTypes = {
  item: ItemPropType.isRequired,
  onQuantityUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired,
};
