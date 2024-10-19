import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";
import { useAppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useAppContext();
  const [totalAmount, setTotalAmount] = useState(cart.reduce((total, item) => total + (item.price * item.quantity), 0));
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const navigate = useNavigate();

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, (item.quantity || 1) + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    let amount = 0;
    let discounted = 0;
    let items = 0;

    cart.forEach((item) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      amount += itemTotal;
      discounted += item.discount ? itemTotal * (1 - item.discount) : itemTotal;
      items += quantity;
    });

    setTotalAmount(amount);
    setDiscountedAmount(discounted);
  }, [cart]);

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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-dark-cocoa text-2xl mt-4 text-center"
      >
        Your cart is empty
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-dark-cocoa text-lg mt-2 text-center"
      >
        Add some delicious items to your cart!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-6 bg-deep-mahogany text-white px-6 py-2 rounded-full text-lg font-semibold"
      >
        <button onClick={() => navigate("/")}>Back to menu</button>
      </motion.button>
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
        {cart.length === 0 ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-dark-cocoa"
          >
            <EmptyCartAnimation />
          </motion.p>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="-mt-[2.5rem] w-[92%] mx-auto sm:mt-[1rem] h-[22rem] overflow-scroll relative z-[1]"
            >
              <AnimatePresence>
                {cart?.map((item) => (
                  <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-translucent-coffee bg-opacity-40 rounded-2xl px-4 py-4 md:py-3  mb-4 flex items-center shadow-lg
                             h-auto min-h-[140px] 
                             sm:flex-col sm:items-start sm:!p-4 sm:min-h-[auto]
                             xs:p-2"
                >
                  <div className="mr-3 sm:mb-3 sm:mr-0 sm:w-full">
                    <motion.img
                      src={item?.image}
                      alt={item.title}
                      className="w-[139px] h-[136px] object-contain bg-translucent-coffee bg-opacity-40 rounded-2xl
                                 sm:w-full sm:h-[110px] xs:h-[90px] sm:py-1 "
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="flex-grow sm:w-full">
                    <h2 className="text-3xl font-semibold text-dark-cocoa md:text-2xl sm:text-xl xs:text-lg">
                      {item.title}
                    </h2>
                    <div className="flex items-center">
                      <p className="text-white text-sm mt-1 w-[12rem] md:w-[10rem] sm:w-full sm:text-xs">
                        {item.fullText && item.fullText.split(' ').slice(0, 3).join(' ') + '...'}
                      </p>
                    </div>
                    <p className="text-deep-mahogany text-xl font-extrabold flex gap-[3rem] mt-1 
                                  md:text-lg md:gap-[2rem] sm:gap-[1rem] xs:text-base">
                      ${item.price.toFixed(2)}
                      {item.discount && (
                        <span className="ml-2 text-green-400 font-extralight md:text-sm">
                          -{(item.discount * 100).toFixed(0)}%
                        </span>
                      )}
                    </p>
                    <div className="flex items-center justify-between pb-1">
                      <div className="flex items-center">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateQuantity(item.id, -1)}
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
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl
                                     md:text-xl md:h-6 sm:text-lg sm:h-5"
                        >
                          +
                        </motion.button>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.id)}
                        className="pb-2"
                      >
                        <svg width="25" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" 
                             className="md:w-[22px] md:h-[22px] sm:w-[20px] sm:h-[20px]">
                          <path d="M7.17 3.00001C7.3766 2.41448 7.75974 1.90744 8.2666 1.5488C8.77346 1.19015 9.37909 0.997559 10 0.997559C10.6209 0.997559 11.2265 1.19015 11.7334 1.5488C12.2403 1.90744 12.6234 2.41448 12.83 3.00001M18.5 5.00001H1.5M16.374 14.4C16.197 17.054 16.108 18.381 15.243 19.19C14.378 19.999 13.048 20 10.387 20H9.613C6.953 20 5.623 20 4.757 19.19C3.892 18.381 3.804 17.054 3.627 14.4L3.167 7.50001M16.833 7.50001L16.633 10.5M7.5 10L8 15M12.5 10L12 15" stroke="#5D2510" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
                
                
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-[9rem] left-0 right-0 bg-translucent-coffee bg-opacity-40 shadow-md p-4 rounded-2xl mx-auto w-[80%] z-[1] sm:bottom-[5.5rem]"
            >
              <div className="w-[95%] mx-auto h-[104px]">
                <div className="flex justify-between text-white mb-1">
                  <span className="text-lg">Item Amount:</span>
                  <motion.span
                    key={totalAmount}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-2xl"
                  >
                    ${totalAmount.toFixed(2)}
                  </motion.span>
                </div>
                {totalAmount !== discountedAmount && (
                  <div className="flex justify-between text-green-400 mb-1">
                    <span className="text-lg">Discount:</span>
                    <motion.span
                      key={discountedAmount}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-2xl"
                    >
                      -${(totalAmount - discountedAmount).toFixed(2)}
                    </motion.span>
                  </div>
                )}
                <div className="flex justify-between text-deep-mahogany text-lg font-bold mb-2 border-t-2 pt-2 border-deep-mahogany border-opacity-50">
                  <span className="text-[20px]">Total Amount:</span>
                  <motion.span
                    key={discountedAmount}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-[23px]"
                  >
                    ${discountedAmount.toFixed(2)}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
      <BottomNavigation />
    </>
  );
}

export default Cart;
