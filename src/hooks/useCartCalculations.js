import { useMemo } from 'react';

export function useCartCalculations(cartItems) {
  const calculations = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = item.product.price * item.quantity;
      const itemDiscount = item.discount ? itemPrice * item.discount : 0;
      
      return {
        totalAmount: acc.totalAmount + itemPrice,
        discountedAmount: acc.discountedAmount + (itemPrice - itemDiscount)
      };
    }, { totalAmount: 0, discountedAmount: 0 });
  }, [cartItems]);

  return calculations;
}
