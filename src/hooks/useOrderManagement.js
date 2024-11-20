import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orderService } from '../services/orderService';

export const useCompleteOrder = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: (tableNumber) => orderService.completeOrder(tableNumber),
      onSuccess: () => {
        queryClient.invalidateQueries(['cart']);
      }
    });
  };
  