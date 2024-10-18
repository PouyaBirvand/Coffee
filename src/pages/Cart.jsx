import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";
import { useAppContext } from "../context/AppContext";
import { useState, useEffect } from "react";

function Cart() {
  const { cart, setCart } = useAppContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, (item.quantity || 1) + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  useEffect(() => {
    let amount = 0;
    let discounted = 0;
    let items = 0;

    cart.forEach(item => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      amount += itemTotal;
      discounted += item.discount ? itemTotal * (1 - item.discount) : itemTotal;
      items += quantity;
    });

    setTotalAmount(amount);
    setDiscountedAmount(discounted);
  }, [cart]);

  return (
    <>
      <div className="bg-body min-h-screen w-full px-10 md:px-6 pt-6">
        <Header />
        <ProductTitle />
        {cart.length === 0 ? (
          <p className="text-dark-cocoa">Your cart is empty.</p>
        ) : (
<>
  <div className="-mt-[1.5rem] w-[92%] mx-auto sm:mt-[1rem] h-[29rem] overflow-scroll relative z-[1]">
    {cart?.map((item) => (
      <div
        key={item.id}
        className="bg-translucent-coffee bg-opacity-40 rounded-2xl p-4 mb-4 h-[140px] pt-4 flex items-center shadow-lg"
      >
        <div className="mr-4">
          <img
            src={item?.image}
            alt={item.title}
            className="w-[139px] py-3 h-[120px] object-cover bg-translucent-coffee bg-opacity-40 rounded-2xl"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold text-dark-cocoa">
            {item.title}
          </h2>
          <div className="flex items-center">
          <p className="text-white text-sm mt-1 w-[12rem]">
            {item.fullText && item.fullText.split(' ').slice(0, 5).join(' ') + '...'}
          </p>
          </div>
            <p className="text-deep-mahogany text-xl font-extrabold flex gap-[3rem] mt-1">
              ${item.price.toFixed(2)}
            {item.discount && (
              <span className="ml-2 text-green-400 font-extralight">
                -{(item.discount * 100).toFixed(0)}%
              </span>
            )}
            </p>
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl"
              >
                -
              </button>
              <span className="text-dark-cocoa px-3 py-1 font-extrabold">
                {item.quantity || 1}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="bg-translucent-coffee bg-opacity-60 text-dark-cocoa px-2 h-7 flex items-center rounded-md font-extrabold text-2xl"
              >
                +
              </button>
            </div>
            <button onClick={() => removeItem(item.id)} className="pb-2">
              <svg width="25" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.17 3.00001C7.3766 2.41448 7.75974 1.90744 8.2666 1.5488C8.77346 1.19015 9.37909 0.997559 10 0.997559C10.6209 0.997559 11.2265 1.19015 11.7334 1.5488C12.2403 1.90744 12.6234 2.41448 12.83 3.00001M18.5 5.00001H1.5M16.374 14.4C16.197 17.054 16.108 18.381 15.243 19.19C14.378 19.999 13.048 20 10.387 20H9.613C6.953 20 5.623 20 4.757 19.19C3.892 18.381 3.804 17.054 3.627 14.4L3.167 7.50001M16.833 7.50001L16.633 10.5M7.5 10L8 15M12.5 10L12 15" stroke="#5D2510" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="fixed bottom-[6.5rem] left-0 right-0 bg-translucent-coffee bg-opacity-40 shadow-md p-4 rounded-2xl mx-auto w-[80%] z-[1]">
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between text-white mb-1">
        <span className="text-lg">Item Amount:</span>
        <span className="text-2xl">${totalAmount.toFixed(2)}</span>
      </div>
      {totalAmount !== discountedAmount && (
        <div className="flex justify-between text-green-400 mb-1">
          <span className="text-lg">Discount:</span>
          <span className="text-2xl">-${(totalAmount - discountedAmount).toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between text-deep-mahogany text-lg font-bold mb-2 border-t-2 pt-2 border-deep-mahogany border-opacity-50">
        <span className="text-[20px]">Total Amount:</span>
        <span className="text-[23px]">${discountedAmount.toFixed(2)}</span>
      </div>
    </div>
  </div>
</>


        )}
      </div>
      <BottomNavigation/>
    </>
  );
}

export default Cart;

// className="w-[140px] h-[130px] py-4  object-cover mr-4 bg-translucent-coffee bg-opacity-60 rounded-2xl "