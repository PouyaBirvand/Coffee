import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');
  const [isExpanded, setIsExpanded] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);

  useEffect(() => {
    const newTotalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    setTotalItems(newTotalItems);

    let amount = 0;
    let discounted = 0;

    cart.map((item) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      amount += itemTotal;
      discounted += item.discount ? itemTotal * (1 - item.discount) : itemTotal;
    });

    setTotalAmount(amount);
    setDiscountedAmount(discounted);
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

  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, (item.quantity || 1) + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
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
    totalAmount,
    discountedAmount,
    updateQuantity,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}