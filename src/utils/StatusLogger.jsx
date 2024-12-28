import { useEffect } from 'react';
// import { orderService } from '../services/orderService';

export function StatusLogger() {
  const cartId = sessionStorage.getItem('cartId');
  
  useEffect(() => {
    const logStatus = async () => {
      // const tableNumber = localStorage.getItem('tableNumber');

      try {
        // const response = await orderService.getnewCart(tableNumber);
        // console.log('madarjende ro', await orderService.getnewCart(tableNumber));
        // console.log('🔄 Status Check:', {
        //   time: new Date().toLocaleTimeString(),
        //   tableNumber,
        //   details: response.data,
        //   status: response.data.cart.status,
        //   success: response.data.success,
        //   items: response.data.cart.items
        // });
      } catch (error) {
        // console.log('❌ Status Check Failed:', {
        //   time: new Date().toLocaleTimeString(),
        //   error: error.message
        // });
      }
    };

    logStatus();
    const interval = setInterval(logStatus, 5000);
    return () => clearInterval(interval);
  }, [cartId]);

  return null;
}
