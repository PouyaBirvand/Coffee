import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');
  const [isExpanded, setIsExpanded] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
