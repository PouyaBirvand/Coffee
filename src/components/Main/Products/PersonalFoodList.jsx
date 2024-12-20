import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';

export function PersonalFoodsList({ items }) {

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 50
        }
      }
    };
    const { addToCart, cartItems } = useAppContext();
    const [addedItems, setAddedItems] = useState({});
    
    const handleAddToCart = async (item) => {
      try {
        await addToCart(item);
        setAddedItems(prev => ({ ...prev, [item.id]: true }));        
          setAddedItems(prev => ({ ...prev, [item.id]: false }));
        
      } catch (error) {
        // console.error("Failed to add item to cart:", error);
      }
    };
  
    const isItemInCart = (itemId) => {
      return cartItems.some(cartItem => cartItem.product.id === itemId);
    };
  
    return (
      <motion.div 
        className="h-[360px] overflow-y-auto custom-scrollbar px-4 relative top-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4 pb-4">
          {items.map(item => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="bg-translucent-coffee bg-opacity-50 rounded-lg p-3 
                       flex items-start gap-3"
            >
              <motion.img 
                src={`http://127.0.0.1:8000/storage/${item.image}`}
                alt={item.title}
                className="w-20 h-20 object-contain flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
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
  
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(item)}
                    className={`${
                      addedItems[item.id] || isItemInCart(item.id)
                        ? 'bg-dark-cocoa'
                        : 'bg-deep-mahogany'
                    } text-soft-cream px-3 py-1.5 
                      rounded-lg text-sm whitespace-nowrap
                      transition-colors duration-300`}
                    disabled={isItemInCart(item.id)}
                  >
                    {addedItems[item.id] 
                      ? 'Added!' 
                      : isItemInCart(item.id)
                        ? 'In Cart'
                        : 'Add'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }
  
  
  PersonalFoodsList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  

