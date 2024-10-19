import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();
// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');
  const [isExpanded, setIsExpanded] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    setTotalItems(newTotalItems);
  }, [cart]);



  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + 1
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    isExpanded,
    setIsExpanded,
    toggleExpanded,
    cart,
    addToCart,
    currentItem,
    setCurrentItem,
    setCart,
    removeItem,
    totalItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
