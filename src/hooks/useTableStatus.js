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
          const response = await orderService.getStatus(tableNumber);
          // فقط در صورت عدم موفقیت پاک کنه
          if (!response?.data?.success) {
              await orderService.clearCart(tableNumber);
              localStorage.removeItem('cartId');
              localStorage.removeItem('tableNumber');
              window.location.href = '/';
          }
      } catch (error) {
          if (error.response?.status === 404) {
              localStorage.removeItem('cartId');
              localStorage.removeItem('tableNumber');
              window.location.href = '/';
          }
      }
  };
  
  
    const interval = setInterval(checkTableStatus, 30000);
    return () => clearInterval(interval);
  }, []);
};