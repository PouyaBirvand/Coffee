import { createContext, useState, useContext, useEffect, useMemo, useCallback } from "react";
import { cartService } from "../services/cartService";
import { useCart } from "../hooks/useCart";

const AppContext = createContext();

export function AppProvider({ children }) {
  // State Management
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectionSource, setSelectionSource] = useState(null); // 'search' یا 'products'
  const [currentItem, setCurrentItem] = useState(null);

  const [cartId, setCartId] = useState(() => sessionStorage.getItem("cartId"));
  const [tableNumber, setTableNumber] = useState(() => {
    return sessionStorage.getItem("tableNumber") || null;
  });

  // Cart Hook
  const { cart, isLoading, addItem, updateQuantity, removeItem, deleteCart } =
    useCart(cartId);

  // Cart Initialization
  const totalItems = useMemo(() => cart?.items?.length || 0, [cart?.items]);
  const totalAmount = useMemo(() => cart?.total || 0, [cart?.total]);

  // Cart Operations
  const addToCart = useCallback(async (product) => {
    if (!cartId) throw new Error("Please select a table first");
    return addItem(product);
  }, [cartId, addItem]);
  // UI Operations
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  // Context Value
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
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
