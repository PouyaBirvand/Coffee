import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartService';

export function useCart(cartId) {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart', cartId],
    queryFn: async () => {
      if (!cartId) return { items: [] };
      const response = await cartService.viewCart(cartId);
      console.log('Cart Response:', response.data);
      return response.data.cart;
    },
    enabled: Boolean(cartId),
  });

  const addItemMutation = useMutation({
    mutationFn: product => {
      return cartService.addItem(cartId, product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', cartId]);
      queryClient.refetchQueries(['cart', cartId]);
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: ({ itemId, change }) =>
      cartService.updateQuantity(cartId, itemId, change),
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', cartId]);
    },
    onError: error => {
      console.error('Failed to update quantity:', error);
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: itemId => cartService.removeItem(cartId, itemId),
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', cartId]);
    },
  });

  return {
    cart,
    isLoading,
    addItem: addItemMutation.mutate,
    updateQuantity: updateQuantityMutation.mutate,
    removeItem: removeItemMutation.mutate,
  };
}
