import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { useCart } from '../hooks/useCart';
import { Toast } from '../ui/Toast';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [toastVisible, setToastVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectionSource, setSelectionSource] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const [cartId, setCartId] = useState(() => sessionStorage.getItem('cartId'));
  const [tableNumber, setTableNumber] = useState(() => {
    return sessionStorage.getItem('tableNumber') || null;
  });

  const { cart, isLoading, addItem, updateQuantity, removeItem, deleteCart } =
    useCart(cartId);

  const totalItems = useMemo(() => cart?.items?.length || 0, [cart?.items]);
  const totalAmount = useMemo(() => cart?.total || 0, [cart?.total]);

  const addToCart = useCallback(
    async product => {
      if (!cartId) throw new Error('Please select a table first');

      try {
        await addItem(product);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000);
      } catch (error) {
        // handle error
      }
    },
    [cartId, addItem]
  );
  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const contextValue = {
    currentItem,
    setCurrentItem,
    isExpanded,
    setIsExpanded,
    cartItems: cart?.items || [],
    isLoading,
    addToCart: addItem,
    updateCartQuantity: updateQuantity,
    removeFromCart: removeItem,
    cartId,
    selectedCategory,
    setSelectedCategory,
    tableNumber,
    toggleExpanded,
    setCartItems,
    totalItems,
    totalAmount,
    discountedAmount: cart?.discounted_total || 0,
    deleteCart,
    searchResults,
    setSearchResults,
    selectionSource,
    setSelectionSource,
    setCartId,
    orderDetails,
    setOrderDetails,
    setTableNumber,
    toastVisible,
    setToastVisible,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Toast
        message="!با موفقیت به سبد خرید اضافه شد"
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
