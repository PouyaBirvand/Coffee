import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { CartIcons } from "./CartIcons";

function CompletedOrderView({ items, formatPrice }) {
  const totalAmount = items.reduce((total, item) => 
    total + (Number(item.product.price) * item.quantity), 0
  );

  return (
    <div className="flex flex-col">
      <div className="text-center mt-2 mb-8 sm:mt-8 sm:mb-2">
        <h2 className="text-lg font-bold text-dark-cocoa sm:text-base xs:text-sm">
          Your order has been successfully placed
        </h2>
        <p className="text-deep-mahogany mt-2 sm:mb-2 mb-8 text-sm sm:text-xs">
          Your order will be ready in 20 minutes
        </p>
      </div>

      <motion.div 
        className="-mt-[2rem] scale-[1.02] w-[92%] mx-auto sm:mt-[1rem] h-[20.5rem] sm:h-[17.6rem] xs:h-[16.5rem] overflow-y-auto relative z-[1]"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-translucent-coffee bg-opacity-40 rounded-2xl p-4 mb-4 flex items-start gap-3 shadow-lg w-full"
          >
            <div className="w-[120px] h-[120px] flex-shrink-0 sm:w-[100px] sm:h-[100px] xs:w-[90px] xs:h-[90px]">
              <motion.img
                src={`http://127.0.0.1:8000/storage/images/${item.product.image}`}
                alt={item.product.title}
                className="w-full h-full object-contain bg-translucent-coffee bg-opacity-40 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-dark-cocoa truncate sm:text-sm">
                {item.product.title}
              </h2>
              
              <p className="text-white text-xs mt-1 truncate">
                {item.product.description && 
                  item.product.description.split(" ").slice(0, 3).join(" ") + "..."}
              </p>

              <p className="text-deep-mahogany font-bold text-base mt-1 flex items-center gap-2 sm:text-sm">
                <span>${formatPrice(item.product.price)}</span>
                {item.discount && (
                  <span className="text-green-400 text-xs">
                    -{item.discount * 100}%
                  </span>
                )}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-dark-cocoa text-sm">Quantity:</span>
                <span className="text-dark-cocoa font-semibold text-sm">{item.quantity}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-[2.5rem] left-0 right-0 bg-translucent-coffee bg-opacity-40 shadow-md p-4 rounded-2xl mx-auto w-[80%] z-[1] sm:bottom-[5.5rem]"
      >
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center text-deep-mahogany font-bold">
            <div className="flex items-center gap-1">
              {CartIcons.totalAmountIcon}
              <span className="text-base xs:text-sm">Total Amount:</span>
            </div>
            <motion.span
              key={totalAmount}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-lg xs:text-base"
            >
              ${formatPrice(totalAmount)}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ProductPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  image: PropTypes.string.isRequired,
});

const ItemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  discount: PropTypes.number,
  product: ProductPropType.isRequired,
});

CompletedOrderView.propTypes = {
  items: PropTypes.arrayOf(ItemPropType).isRequired,
  formatPrice: PropTypes.func.isRequired,
};

export default CompletedOrderView;
