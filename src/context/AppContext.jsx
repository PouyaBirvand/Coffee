import { createContext, useState, useContext, useEffect } from 'react'
import { cartService } from '../services/cartService'
import { useCart } from '../hooks/useCart'

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
    // State Management
    const [selectedCategory, setSelectedCategory] = useState(4)
    const [selectionSource, setSelectionSource] = useState(null); // 'search' یا 'products'
    const [cartItems, setCartItems] = useState([])
    const [cartId, setCartId] = useState(() => localStorage.getItem('cartId'));

    const [tableNumber, setTableNumber] = useState(() => {
      return localStorage.getItem('tableNumber') || null;
  });

    const [searchResults, setSearchResults] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);

    const [currentItem, setCurrentItem] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    // Cart Hook
    const { cart, isLoading, addItem, updateQuantity, removeItem , deleteCart} = useCart(cartId)

    // Cart Initialization

    
    // Cart Operations
    const addToCart = async (product) => {
        if (!cartId) {
            throw new Error('Please select a table first');
        }
        return addItem(product);
    };
    // UI Operations
    const toggleExpanded = () => {
        setIsExpanded(prev => !prev)
    }




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
        totalItems: cart?.items?.length || 0,
        selectedCategory,
        setSelectedCategory,
        tableNumber,
        toggleExpanded,
        setCartItems,
        totalAmount: cart?.total || 0,
        discountedAmount: cart?.discounted_total || 0,
        deleteCart,
        searchResults,
        setSearchResults,
        selectionSource,
        setSelectionSource,
        setCartId,
        orderDetails,
        setOrderDetails,
        setTableNumber
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext)
}
