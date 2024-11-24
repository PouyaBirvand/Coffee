import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
};
// eslint-disable-next-line react/prop-types
export const SearchResults = ({ results, onProductClick }) => {
  return (
    <AnimatePresence>
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute w-full mt-2 bg-soft-cream rounded-2xl shadow-xl max-h-96 overflow-auto z-50"
        >
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
          >
            {results.map((product) => (
              <motion.div
                key={product.id}
                variants={itemAnimation}
                onClick={() => onProductClick(product)}
                whileHover={{
                  backgroundColor: "rgba(131, 90, 54, 0.1)",
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="p-4 border-b border-deep-mahogany/10 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`http://127.0.0.1:8000/storage/${product.image}`}
                    alt={product.title}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-dark-cocoa">
                      {product.title}
                    </h3>
                    <p className="text-sm text-deep-mahogany">
                      ${parseFloat(product.price).toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SearchResults.propTypes = {
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    onProductClick: PropTypes.func.isRequired,
  };