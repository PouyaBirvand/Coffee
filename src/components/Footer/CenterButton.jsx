import { AddIcon } from "./AddIcon";
import { OrderIcon } from "./OrderIcon";
import { RestaurantIcon } from "./RestaurantIcon";

// eslint-disable-next-line react/prop-types
export const CenterButton = ({ isCartPage, isExpanded, handleAddToCart, toggleExpanded, handleOrderClick }) => (
    <div className="bg-dark-cocoa p-2 rounded-full shadow-lg border border-white">
      <div className="bg-dark-cocoa w-[4.7rem] h-[3rem] -z-20 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-full" />
      {isCartPage ? (
        <OrderIcon 
          className="w-10 h-10 cursor-pointer relative z-10 p-[0.1rem] left-1/2 transform -translate-x-[1.1rem]"
          onClick={handleOrderClick}
        />
      ) : isExpanded ? (
        <div 
          className="w-10 h-10 flex items-center justify-center cursor-pointer relative z-10 text-white text-3xl font-bold" 
          onClick={handleAddToCart}
        >
          <AddIcon />
        </div>
      ) : (
        <RestaurantIcon 
          className="w-10 h-10 cursor-pointer relative z-12" 
          onClick={toggleExpanded}
        />
      )}
    </div>
  );
  