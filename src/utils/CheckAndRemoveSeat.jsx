import { useEffect } from "react";
import { cartService } from '../services/cartService';

const CheckAndRemoveSeat = () => {
    const storageKey = "tableNumber";
    
    const checkAndRemove = async () => {
        const tableNumber = localStorage.getItem(storageKey);
        
        if (!tableNumber) return;

        try {
            const response = await cartService.viewCart(tableNumber);
            
            // Keep the table number if cart is active and valid
            if (response.data.success && 
                response.data.cart && 
                response.data.message === 'View cart') {
                return;
            }
            
            localStorage.removeItem(storageKey);
        } catch (error) {
            if (error.response?.status === 404) {
                localStorage.removeItem(storageKey);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(checkAndRemove, 3000);
        return () => clearInterval(interval);
    }, []);

    return null;
};

export default CheckAndRemoveSeat;