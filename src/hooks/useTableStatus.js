import { useEffect } from 'react';

import { orderService } from '../services/orderService';

export const useTableStatus = () => {
  useEffect(() => {
    const tableNumber = localStorage.getItem('tableNumber');
    console.log('Current Table Number:', tableNumber);
  
    if (!tableNumber) {
      console.log('No table number found');
      return;
    }
  
    const checkTableStatus = async () => {
      try {
        console.log('Checking table status...');
        const response = await orderService.getStatus(tableNumber);
        console.log('Status Response:', response.data);
  
        if (!response.data.success) {
          await orderService.clearCart(tableNumber);
          localStorage.removeItem('cartId');
          localStorage.removeItem('tableNumber');
          window.location.reload();
      }
      } catch (error) {
        console.error('Table status check failed:', error);
      }
    };
  
    const interval = setInterval(checkTableStatus, 30000);
    return () => clearInterval(interval);
  }, []);
};