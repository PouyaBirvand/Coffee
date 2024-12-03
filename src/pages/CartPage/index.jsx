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
// import { usePreventRefresh } from "../../hooks/usePreventRefresh";


function CartPage() {
  // usePreventRefresh();
  const { cartItems, removeFromCart, updateCartQuantity, cartId } = useAppContext();
  const { showOrderModal, setShowOrderModal } = useModal();
  const [cartTotals, setCartTotals] = useState({ totalPrice: 0 });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const {orderDetails , setOrderDetails , tableNumber} = useAppContext()
  const [tableStatus, setTableStatus] = useState('active');
  const queryClient = useQueryClient()
  const [completedOrderItems, setCompletedOrderItems] = useState([]);
  useBackButton();
  

  console.log("Table Number in CartPage:", tableNumber); // Add this line

  const formatPrice = (price) => Number(price ?? 0).toFixed(0);

  const handleOrderComplete = (response) => {
    setCompletedOrderItems([...cartItems]);
    setOrderDetails(response);
    setIsOrderModalOpen(false);
  };

  useEffect(() => {
    const tableNumber = localStorage.getItem('tableNumber');
    console.log('Table Number:', tableNumber);
    
    if (tableNumber) {
        // Fetch cart data
        queryClient.invalidateQueries(['cart']);
    }
}, []);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!cartId) return;
      try {
        const response = await cartService.getCartOrder(cartId);
        if (response.data?.success) {
          setOrderDetails(response.data);
        }
      } catch (error) {
        console.log("Order not completed yet");
      }
    };
    fetchOrderDetails();
  }, [cartId]);

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
      console.error("Update quantity error:", error);
    }
  };

//   useEffect(() => {
//     const checkStatus = async () => {
//         try {
//             const response = await orderService.getStatus(tableNumber);
//             setTableStatus(response.data.status);
            
//             if (response.data.status === 1) {
//                 setCompletedOrderItems(cartItems);
//                 setOrderDetails(response.data);
//             }
//         } catch (error) {
//             console.error('Status check failed:', error);
//         }
//     };

//     const interval = setInterval(checkStatus, 10000);
//     return () => clearInterval(interval);
// }, [cartItems]);

//   useEffect(() => {
//     const handleCartRemoved = (event) => {
//       console.log('Cart removed event received:', event.detail);
//       localStorage.removeItem('tableNumber');
//       alert('Your table number has been cleared. Please enter a new one.');
//     };
//     window.addEventListener('cart-removed', handleCartRemoved);
//     return () => {
//       window.removeEventListener('cart-removed', handleCartRemoved);
//     };
// }, []);

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

        {orderDetails?.success ? (
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
