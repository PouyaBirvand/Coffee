import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartService';
import { useAppContext } from '../context/AppContext';

export function useTableManagement() {
  const [showForm, setShowForm] = useState(
    () => !sessionStorage.getItem('tableNumber')
  );
  const [tableNumber, setTableNumber] = useState('');
  const { setCartId } = useAppContext();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('cartId');
      sessionStorage.removeItem('tableNumber');
      sessionStorage.removeItem('formSubmittedAt');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const createCartMutation = useMutation({
    mutationFn: () =>
      cartService.create({
        table_number: tableNumber,
        status: 'active',
      }),
    onSuccess: response => {
      setShowForm(false);
      const cartId = response.data.id;
      sessionStorage.setItem('cartId', cartId);
      sessionStorage.setItem('tableNumber', tableNumber);
      sessionStorage.setItem('formSubmittedAt', Date.now().toString());

      setCartId(cartId);
      queryClient.invalidateQueries(['cart', cartId]);
    },
  });

  useEffect(() => {
    const formSubmittedAt = sessionStorage.getItem('formSubmittedAt');
    const tableNumber = sessionStorage.getItem('tableNumber');

    if (formSubmittedAt && tableNumber) {
      setShowForm(false);
    }
  }, []);

  const handleSubmit = async () => {
    if (isLoading || !tableNumber.trim()) return;

    setIsLoading(true);
    try {
      await createCartMutation.mutateAsync();
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return {
    showForm,
    tableNumber,
    setTableNumber,
    handleSubmit,
    handleCancel,
    isLoading,
  };
}
