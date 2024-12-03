import { useEffect } from 'react';
import { orderService } from '../services/orderService';

export function StatusLogger() {
  useEffect(() => {
    const logStatus = async () => {
      const tableNumber = localStorage.getItem('tableNumber');
      if (!tableNumber) {
        console.log('📋 No Table Number');
        return;
      }
      
      try {
        const response = await orderService.getStatus(tableNumber);
        console.log('🔄 Status Check:', {
          time: new Date().toLocaleTimeString(),
          tableNumber,
          status: response.data.status,
          success: response.data.success
        });
      } catch (error) {
        console.log('❌ Status Check Failed:', {
          time: new Date().toLocaleTimeString(),
          error: error.message
        });
      }
    };

    logStatus();
    const interval = setInterval(logStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
