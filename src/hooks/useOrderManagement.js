import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orderService } from '../services/orderService';

export const useCompleteOrder = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: async (tableNumber) => {
        // First check status
        const statusResponse = await orderService.getStatus(tableNumber);
        if (statusResponse.data.success) {
          // Then complete order
          const orderResponse = await orderService.completeOrder(tableNumber);
          // Finally clear cart
          // await orderService.clearCart(tableNumber);
          return orderResponse;
        }
        throw new Error('Order status check failed');
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['cart']);
      }
    });
};