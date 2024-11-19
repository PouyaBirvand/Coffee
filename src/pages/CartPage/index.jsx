import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { cartService } from "../../services/cartService";

import Header from "../../components/Header/Index";
import ProductTitle from "../../components/Header/Logo";
import BottomNavigation from "../../components/Footer/Index";
import OrderFormModal from "../../ui/OrderFormModal";
import EmptyCart from "../../components/Main/Carts/EmptyCart";
import CartTotal from "../../components/Main/Carts/CartTotal";
import CartItemsList from "../../components/Main/Carts/CartItemsList";

function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity, cartId } = useAppContext();
  const [cartTotals, setCartTotals] = useState({ totalPrice: 0 });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const formatPrice = (price) => Number(price ?? 0).toFixed(0);

  useEffect(() => {
    if (cartId) {
      const fetchCart = async () => {
        try {
          const response = await cartService.viewCart(cartId);
          setCartTotals({ totalPrice: response.data.total_price });
        } catch (error) {
          console.log("Cart fetch error:", error.response);
        }
      };
      fetchCart();
    }
  }, [cartId, cartItems]);

  const handleQuantityUpdate = async (itemId, change) => {
    if (!itemId || !cartId) return;
    try {
      await updateCartQuantity({ itemId: parseInt(itemId), change });
    } catch (error) {
      console.error("Update quantity error:", error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-body min-h-screen w-full px-10 md:px-6 pt-6"
      >
        <Header />
        <ProductTitle />
        
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartItemsList
              items={cartItems}
              onQuantityUpdate={handleQuantityUpdate}
              onRemove={removeFromCart}
              formatPrice={formatPrice}
            />
            <CartTotal 
              totalPrice={cartTotals.totalPrice} 
              formatPrice={formatPrice} 
            />
          </>
        )}
      </motion.div>

      <OrderFormModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
      <BottomNavigation onOrderClick={() => setIsOrderModalOpen(true)} />
    </>
  );
}

export default CartPage;