import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { cartService } from '../services/cartService';

export function useTableManagement() {
  const [showForm, setShowForm] = useState(() => !localStorage.getItem('tableNumber'));
  const [tableNumber, setTableNumber] = useState("");

  const createCartMutation = useMutation({
    mutationFn: () => cartService.create({ 
      table_number: tableNumber,
      status: 'active'
    }),
    onSuccess: (response) => {
      setShowForm(false);
      localStorage.setItem('cartId', response.data.id);
      localStorage.setItem('tableNumber', tableNumber);
      localStorage.setItem('formSubmittedAt', Date.now().toString());
    }
  });

  useEffect(() => {
    const formSubmittedAt = localStorage.getItem('formSubmittedAt');
    const tableNumber = localStorage.getItem('tableNumber');
    
    if (formSubmittedAt && tableNumber) {
      setShowForm(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tableNumber.trim()) {
      createCartMutation.mutate();
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
    isLoading: createCartMutation.isLoading
  };
}
