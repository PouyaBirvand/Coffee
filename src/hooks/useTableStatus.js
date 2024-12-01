import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { orderService } from '../services/orderService';

export const useTableStatus = () => {
  // Let's log the context to see what's available
  const context = useAppContext();
  console.log('Available context:', context);

  useEffect(() => {
    const tableNumber = localStorage.getItem('tableNumber');
    if (!tableNumber) return;

    const checkTableStatus = async () => {
      try {
        const response = await orderService.getStatus(tableNumber)
        if (!response.data.success) {
          // Clear local storage
          localStorage.removeItem('cartId');
          localStorage.removeItem('tableNumber');
          
          // Force page reload to reset state
          window.location.reload();
        }
      } catch (error) {
        console.error('Table status check failed:', error);
      }
    };

    const interval = setInterval(checkTableStatus, 5000);
    return () => clearInterval(interval);
  }, []);
};
