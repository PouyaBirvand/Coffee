import { createContext, useState, useContext, useEffect } from 'react'
import { cartService } from '../services/cartService'
import { useCart } from '../hooks/useCart'

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
    // State Management
    const [selectedCategory, setSelectedCategory] = useState(4)

    const [cartItems, setCartItems] = useState([])
    const [cartId, setCartId] = useState(() => localStorage.getItem('cartId'))
    const [tableNumber, setTableNumber] = useState(() => localStorage.getItem('tableNumber'))
    const [searchResults, setSearchResults] = useState(null);

    const [currentItem, setCurrentItem] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    // Cart Hook
    const { cart, isLoading, addItem, updateQuantity, removeItem , deleteCart} = useCart(cartId)

    // Cart Initialization
    const initCart = async () => {
        const existingCartId = localStorage.getItem('cartId');
        
        if (existingCartId) {
            setCartId(existingCartId);
            return existingCartId;
        }
    
        const response = await cartService.create({ 
            table_number: tableNumber || "1",
            status: "active"
        });
        
        const newCartId = response.data.id;
        setCartId(newCartId);
        localStorage.setItem('cartId', newCartId);
        return newCartId;
    }
    
    // Cart Operations
    const addToCart = async (product) => {
        try {
            let currentCartId = cartId
            
            if (!currentCartId) {
                const storedTableNumber = localStorage.getItem('tableNumber')
                const cart = await cartService.create({
                    table_number: storedTableNumber,
                    status: 'active'
                })
                currentCartId = cart.data.id
                setCartId(currentCartId)
            }

            const response = await cartService.addItem(currentCartId, product)
            return response
        } catch (error) {
            console.error('Add to cart error:', error)
            throw error
        }
    }

    // UI Operations
    const toggleExpanded = () => {
        setIsExpanded(prev => !prev)
    }
    
    // Effects
    useEffect(() => {
        if (!cartId) {
            initCart()
        }
    }, [])

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
        

    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext)
}
