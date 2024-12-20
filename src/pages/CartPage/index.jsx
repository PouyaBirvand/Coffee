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
import CompletedOrderView from "../../components/Main/Carts/CompletedOrderView";
import { useModal } from "../../context/ModalContext";
import OrderConfirmationModal from "../../ui/OrderConfirmationModal";
import { useBackButton } from "../../hooks/useBackButton";
import { orderService } from "../../services/orderService";
import { useQueryClient } from "@tanstack/react-query";


function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity, cartId, orderDetails, setOrderDetails, tableNumber } = useAppContext();
  const { showOrderModal, setShowOrderModal } = useModal();
  const [cartTotals, setCartTotals] = useState({ totalPrice: 0 });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [completedOrderItems, setCompletedOrderItems] = useState([]);
  const queryClient = useQueryClient();

  useBackButton();

  const formatPrice = (price) => Number(price ?? 0).toFixed(0);

  const handleOrderComplete = async (response) => {
    const currentTableNumber = parseInt(localStorage.getItem("tableNumber"));
    
    if (!currentTableNumber) return;

    try {
        const statusResponse = await orderService.getnewCart(currentTableNumber);
        if (statusResponse.data.cart.items) {
            setCompletedOrderItems(statusResponse.data.cart.items);
            setOrderDetails(response);
            setIsOrderModalOpen(false);
        }
    } catch (error) {
        // console.error("Error fetching completed order:", error);
    }
};

  // Check order status on mount and when tableNumber changes
  useEffect(() => {
    const checkOrderStatus = async () => {
      if (tableNumber && !isNaN(tableNumber)) {
        try {
          const response = await orderService.getnewCart(tableNumber);
          if (response.data.success) {
            setCompletedOrderItems(response.data.cart.items);
            setOrderDetails(response.data);
          }
        } catch (error) {
          // console.error("Error fetching order status:", error);
        }
      }
    };
    checkOrderStatus();
  }, [tableNumber, setOrderDetails]);

  // Invalidate cart queries when table number changes
  useEffect(() => {
    if (tableNumber) {
      queryClient.invalidateQueries(['cart']);
    }
  }, [tableNumber, queryClient]);

  // Fetch cart totals when cartId or cartItems change
  useEffect(() => {
    if (cartId) {
      const fetchCart = async () => {
        try {
          const response = await cartService.viewCart(cartId);
          setCartTotals({ totalPrice: response.data.total_price });
        } catch (error) {
          // console.log("Cart fetch error:", error.response);
        }
      };
      fetchCart();
    }
  }, [cartId, cartItems]);

  const handleOpenOrderModal = () => {
    if (cartItems?.length > 0) {
      setIsOrderModalOpen(true);
    }
  };

  const handleQuantityUpdate = async (itemId, change) => {
    if (!itemId || !cartId) return;
    try {
      await updateCartQuantity({ itemId: parseInt(itemId), change });
    } catch (error) {
      // console.error("Update quantity error:", error);
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

        {(completedOrderItems.length > 0) ? (
          <CompletedOrderView
            items={completedOrderItems}
            formatPrice={formatPrice}
          />
        ) : cartItems.length === 0 ? (
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

      {!orderDetails?.success && (
        <>
          <OrderFormModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            onOrderComplete={handleOrderComplete}
          />
          <BottomNavigation onOrderClick={handleOpenOrderModal} />
        </>
      )}
      
      <OrderConfirmationModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        tableNumber={parseInt(tableNumber)}
        estimatedTime={20}
      />
    </>
  );
}

export default CartPage;
