import { createContext, useState, useContext, useEffect } from 'react'
import { cartService } from '../services/cartService'
import { useCart } from '../hooks/useCart'

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
    // State Management
    const [selectedCategory, setSelectedCategory] = useState(4)
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [cartId, setCartId] = useState(() => localStorage.getItem('cartId'))
    const [tableNumber, setTableNumber] = useState(() => localStorage.getItem('tableNumber'))

    // Cart Hook
    const { cart, isLoading, addItem, updateQuantity, removeItem , deleteCart} = useCart(cartId)

    // Cart Initialization
    const initCart = async () => {
        if (!cartId) {
            try {
                const response = await cartService.create({ 
                    table_number: "1",
                    status: "active"
                })
                
                if (response?.data?.id) {
                    setCartId(response.data.id)
                    localStorage.setItem('cartId', response.data.id)
                    return response.data.id
                }
            } catch (error) {
                console.error('Failed to create cart:', error)
            }
        }
        return cartId
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
        cartItems: cart?.items || [],
        isLoading,
        addToCart: addItem,
        updateCartQuantity: updateQuantity,
        removeFromCart: removeItem,
        cartId,
        totalItems: cart?.items?.length || 0,
        selectedCategory,
        setSelectedCategory,
        isExpanded,
        tableNumber,
        setIsExpanded,
        toggleExpanded,
        currentItem,
        setCurrentItem,
        setCartItems,
        totalAmount: cart?.total || 0,
        discountedAmount: cart?.discounted_total || 0,
        deleteCart
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext)
}
