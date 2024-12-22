import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useQueryClient } from "@tanstack/react-query";
import { OrderIcon } from "./BottomIcons/OrderIcon";
import { AddIcon } from "./BottomIcons/AddIcon";
import { RestaurantIcon } from "./BottomIcons/RestaurantIcon";

function BottomNavigation({ onOrderClick }) {
  const { isExpanded, toggleExpanded, addToCart, currentItem, cartId } = useAppContext();
  const location = useLocation();
  const queryClient = useQueryClient();

  const handleAddToCart = async () => {
    if (currentItem) {
      try {
        await addToCart(currentItem);
        queryClient.invalidateQueries(["cart", cartId]);
        toggleExpanded();
      } catch (error) {
        // console.log("Add to cart failed:", error);
      }
    }
  };

  const isCartPage = location.pathname === "/cart";

  return (
    <>
      {isExpanded && (
        <div className="fixed bottom-[3.2rem] left-1/2 transform -translate-x-1/2 w-[5rem] h-[2.3rem] bg-body rounded-t-full z-[1999]" />
      )}
      <nav className="fixed bottom-0 left-0 right-0 bg-dark-cocoa z-[2000]">
        <div className="flex justify-around items-center h-[3.2rem] relative">
          <div className="relative w-[100px] h-[52px] bg-dark-cocoa rounded-t-[2.6rem] bottom-[0.7rem] -z-50" />
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-dark-cocoa p-2 rounded-full shadow-lg border border-white">
              <div className="bg-dark-cocoa w-[4.7rem] h-[3rem] -z-20 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-full" />
              {isCartPage ? (
                <div onClick={onOrderClick}>
                  <OrderIcon />
                </div>
              ) : isExpanded ? (
                <div
                  className="w-10 h-10 flex items-center justify-center cursor-pointer relative z-10 text-white text-3xl font-bold"
                  onClick={handleAddToCart}
                >
                  <AddIcon />
                </div>
              ) : (
                <RestaurantIcon onClick={toggleExpanded} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BottomNavigation;
