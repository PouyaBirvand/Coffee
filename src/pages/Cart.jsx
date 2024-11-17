import Header from "../components/Header/Header";
import ProductTitle from "../components/ProductTitle";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect, useRef, useState } from "react";
import { cartService } from "../services/cartService";
import { useCartCalculations } from "../hooks/useCartCalculations";
import BottomNavigation from "../components/Footer/BottomNavigation";


// eslint-disable-next-line react/prop-types
const OrderFormModal = ({ isOpen, onClose }) => {
  const [isValidated, setIsValidated] = useState(false);
  const modalRef = useRef(null);

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100) {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => {
    setIsValidated(true);
    setTimeout(() => {
      onClose();
      setIsValidated(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-[2001]"
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={modalRef}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-[#CBB89D] w-full rounded-t-[2.5rem] relative min-h-[50vh] touch-pan-y"
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#412F26]/20 rounded-full" />
        
        {!isValidated ? (
          <motion.div 
            className="p-8 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0.5, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring" }}
                className="w-24 h-24 mx-auto"
              >
                <div className="w-full h-full bg-[#412F26] rounded-[1.5rem] rotate-12 absolute" />
                <div className="w-full h-full bg-[#412F26]/80 rounded-[1.5rem] -rotate-12 absolute" />
                <div className="w-full h-full bg-[#412F26] rounded-[1.5rem] flex items-center justify-center relative">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 12V22H4V12" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.3284 7 18 6.32843 18 5.5V3.5C18 2.67157 17.3284 2 16.5 2H7.5C6.67157 2 6 2.67157 6 3.5V5.5C6 6.32843 6.67157 7 7.5 7H12Z"/>
                  </svg>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-[#412F26] text-3xl font-bold mb-3">Ready to Order?</h2>
              <p className="text-[#412F26]/70">Tap below to confirm your delicious selection</p>
            </motion.div>

            <div className=" flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="w-full bg-[#412F26] text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-[#412F26]/20"
              >
                Place Order
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-white/50 text-[#412F26] py-4  rounded-xl font-medium"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="p-8 pt-12 h-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <motion.svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 28 22" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <path 
                    d="M2.1875 11.6875L10.0625 19.5625L25.8125 2.6875" 
                    stroke="#5D2510" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -right-2 -top-2 w-8 h-8 bg-[#412F26] rounded-full flex items-center justify-center"
              >
                <span className="text-white text-xl">✨</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-[#412F26] text-3xl font-bold mb-4">Order Confirmed!</h3>
              <p className="text-[#412F26]/70 text-lg leading-relaxed">
                Your delicious treats will arrive in 4 minutes
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};





function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateCartQuantity, cartId } =
    useAppContext();
  const [cartTotals, setCartTotals] = useState({
    totalPrice: 0,
    discountedAmount: 0,
  });

  const { totalAmount, discountedAmount } = useCartCalculations(cartItems);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsOrderModalOpen(true);
  };


  let formatPrice = (price) => Number(price ?? 0).toFixed(0);

  useEffect(() => {
    if (cartId) {
      const fetchCart = async () => {
        try {
          const response = await cartService.viewCart(cartId);
          setCartTotals({
            totalPrice: response.data.total_price,
            discountedAmount: response.data.discounted_amount,
          });
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
      await updateCartQuantity({
        itemId: parseInt(itemId),
        change: change,
      });
    } catch (error) {
      console.error("Update quantity error:", error);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const EmptyCartAnimation = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-[60vh]"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5D2510"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </motion.svg>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-dark-cocoa text-2xl mt-4 text-center"
      >
        Your cart is empty
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-dark-cocoa text-lg mt-2 text-center"
      >
        Add some delicious items to your cart!
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-6 bg-deep-mahogany text-white px-6 py-2 rounded-full text-lg font-semibold"
      >
        <button onClick={() => navigate("/")}>Back to menu</button>
      </motion.div>
    </motion.div>
  );

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-dark-cocoa"
          >
            <EmptyCartAnimation />
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="-mt-[2rem] w-[92%] mx-auto sm:mt-[1rem] h-[22rem] sm:h-[18.4rem] xs:h-[16.7rem] overflow-auto relative z-[1]"
            >
              <AnimatePresence>
                {cartItems?.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-translucent-coffee bg-opacity-40 rounded-2xl px-4 py-3 mb-4 
                            flex flex-wrap items-center shadow-lg
                            w-full min-w-0 
                            sm:flex-col sm:items-start sm:!p-4
                            xs:p-2"
                  >
                    <div className="flex-shrink-0 mr-3 sm:mb-3 sm:mr-0 sm:w-full">
                      <motion.img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-[139px] h-[136px] object-contain bg-translucent-coffee bg-opacity-40 rounded-2xl
                              sm:w-full sm:h-[110px] xs:h-[90px] sm:py-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <div className="flex-1 min-w-0 sm:w-full">
                      <h2 className="sm:!text-xl text-xl lg:text-sm md:text-sm font-semibold text-dark-cocoa truncate">
                        {item.product.title}
                      </h2>
                      <div className="flex items-center">
                        <p className="text-white text-xs mt-1 truncate sm:w-full sm:text-xs">
                          {item.product.description &&
                            item.product.description
                              .split(" ")
                              .slice(0, 3)
                              .join(" ") + "..."}
                        </p>
                      </div>
                      <p
                        className="text-deep-mahogany text-xl font-extrabold flex items-center gap-2 mt-1 
                               md:text-lg sm:gap-[1rem] xs:text-base flex-wrap"
                      >
                        <span>${formatPrice(item.product.price)}</span>
                        {item.discount && (
                          <span className="text-green-400 font-extralight md:text-sm">
                            -{item.discount * 100}%
                          </span>
                        )}
                      </p>

                      <div className="flex items-center justify-between ">
                        <div className="flex items-center mt-2">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleQuantityUpdate(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl
                                   md:text-xl md:h-6 sm:text-lg sm:h-5"
                          >
                            -
                          </motion.button>
                          <motion.span
                            key={item.quantity}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-dark-cocoa px-3 py-1 font-extrabold md:text-lg sm:text-base"
                          >
                            {item.quantity || 1}
                          </motion.span>
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleQuantityUpdate(item.id, 1)}
                            className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl
                                   md:text-xl md:h-6 sm:text-lg sm:h-5"
                          >
                            +
                          </motion.button>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleRemoveItem(item.id)}
                          className="pb-2"
                        >
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="md:w-[22px] md:h-[22px] sm:w-[20px] sm:h-[20px] mt-2"
                          >
                            <path
                              d="M7.17 3.00001C7.3766 2.41448 7.75974 1.90744 8.2666 1.5488C8.77346 1.19015 9.37909 0.997559 10 0.997559C10.6209 0.997559 11.2265 1.19015 11.7334 1.5488C12.2403 1.90744 12.6234 2.41448 12.83 3.00001M18.5 5.00001H1.5M16.374 14.4C16.197 17.054 16.108 18.381 15.243 19.19C14.378 19.999 13.048 20 10.387 20H9.613C6.953 20 5.623 20 4.757 19.19C3.892 18.381 3.804 17.054 3.627 14.4L3.167 7.50001M16.833 7.50001L16.633 10.5M7.5 10L8 15M12.5 10L12 15"
                              stroke="#5D2510"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-[9.5rem] left-0 right-0 bg-translucent-coffee bg-opacity-40 shadow-md p-4 rounded-2xl mx-auto w-[80%] z-[1] sm:bottom-[5.5rem]"
            >
              <div className="w-[95%] mx-auto ">
                <div className="flex justify-between text-white mb-1">
                  <span className="text-[18px]">Item Amount:</span>
                  <motion.span className="text-xl">
                    ${formatPrice(cartTotals.totalPrice)}
                  </motion.span>
                </div>
                {cartTotals.discountedAmount &&
                  cartTotals.totalPrice !== cartTotals.discountedAmount && (
                    <div className="flex justify-between text-green-400 mb-1">
                      <span className="text-lg">Discount:</span>
                      <motion.span
                        key={cartTotals.discountedAmount}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-2xl"
                      >
                        -$
                        {formatPrice(
                          cartTotals.totalPrice - cartTotals.discountedAmount
                        )}
                      </motion.span>
                    </div>
                  )}
                <div className="flex justify-between items-center text-deep-mahogany text-lg font-bold  border-t-2 pt-2 border-deep-mahogany border-opacity-50">
                  <div className="flex items-center gap-1">
                    <svg
                      fill="#5D2510"
                      height="32px"
                      width="32px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 490.2 490.2"
                      stroke="#5D2510"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M368.4,245.1c0,12.9-10.5,23.4-23.4,23.4s-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4S368.4,232.2,368.4,245.1z M76.1,245.1 c0,12.9,10.5,23.4,23.4,23.4s23.4-10.5,23.4-23.4s-10.5-23.4-23.4-23.4S76.1,232.2,76.1,245.1z M38.5,382.7h268v-32.9H78.1 c0.4-2.3,0.7-4.7,0.7-7.2c0-21.5-17.5-39-39-39c-2.3,0-4.6,0.2-6.8,0.6V185.9c2.2,0.4,4.5,0.6,6.8,0.6c21.5,0,39-17.5,39-39 c0-2.5-0.2-4.8-0.7-7.2h286.1c-0.8,3-1.2,6.2-1.2,9.5c0,21.5,17.5,39,39,39c3.3,0,6.6-0.4,9.6-1.2v79.9h32.9V146 c0-21.2-17.3-38.5-38.5-38.5H38.5C17.3,107.5,0,124.8,0,146v198.2C0,365.4,17.3,382.7,38.5,382.7z M321.6,355.1 c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118c2.7,0,4.9-2.2,4.9-4.9V360c0-2.7-2.2-4.9-4.9-4.9H321.6z M467.4,339.1 v-17.8c0-2.7-2.2-4.9-4.9-4.9h-118c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118C465.2,344,467.4,341.8,467.4,339.1z M485.3,277.7h-118c-2.7,0-4.9,2.2-4.9,4.9v17.8c0,2.7,2.2,4.9,4.9,4.9h118c2.7,0,4.9-2.2,4.9-4.9v-17.8 C490.2,279.9,488,277.7,485.3,277.7z M222.3,160.7c46.6,0,84.4,37.8,84.4,84.4s-37.8,84.4-84.4,84.4s-84.4-37.8-84.4-84.4 S175.6,160.7,222.3,160.7z M229.7,182.4h-9.6c-1.5,0-2.6,1.2-2.6,2.6v11.5c-7.3,1.1-13.3,3.7-17.8,8.1c-5,4.8-7.5,10.9-7.5,18.4 c0,8.2,2.4,14.5,7.1,18.7c4.7,4.2,12.3,8.4,22.6,12.6c4.3,1.8,7.2,3.7,8.9,5.6c1.7,1.9,2.5,4.6,2.5,8.1c0,3-0.8,5.4-2.4,7.3 c-1.6,1.8-4,2.8-7.2,2.8c-3.8,0-6.9-1.2-9.2-3.6c-1.9-2-3.1-5-3.4-9c-0.1-1.6-1.5-2.8-3.1-2.7l-15.8,0.3c-1.7,0-3.1,1.5-3.1,3.2 c0.4,8.4,3.1,14.8,8.1,19.4c5.4,4.9,12.2,7.9,20.3,8.8v10.8c0,1.5,1.2,2.6,2.6,2.6h9.6c1.5,0,2.6-1.2,2.6-2.6v-11.2 c6.5-1.2,11.8-3.8,15.9-7.7c4.8-4.7,7.2-10.8,7.2-18.5c0-8-2.4-14.2-7.2-18.6c-4.8-4.3-12.3-8.7-22.5-13c-4.4-1.9-7.4-3.8-9-5.7 s-2.4-4.4-2.4-7.4s0.7-5.4,2.2-7.4c1.5-1.9,3.8-2.9,6.9-2.9c3.1,0,5.5,1.2,7.4,3.5c1.5,1.9,2.4,4.5,2.7,8c0.1,1.6,1.6,2.7,3.1,2.7 l15.8-0.2c1.7,0,3.2-1.5,3.1-3.2c-0.4-6.9-2.6-12.7-6.7-17.4c-4.2-4.9-9.7-8-16.6-9.4V185C232.3,183.5,231.1,182.4,229.7,182.4z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span className="text-[18px] xs:text-[18px]">
                      Total Amount:
                    </span>
                  </div>
                  <motion.span
                    key={discountedAmount}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-[20px] xs:text-[20px]"
                  >
                    ${formatPrice(discountedAmount)}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
      <OrderFormModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      <BottomNavigation onOrderClick={handleOrderClick} />
    </>
  );
}

export default Cart;
