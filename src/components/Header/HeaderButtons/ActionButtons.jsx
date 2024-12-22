import CartButton from "./CartButton";
import SearchButton from "../SearchBar/SearchButton";

const ActionButtons = ({ isCartPage, isExpanded, toggleSearch, goToCart, totalItems,
}) => {
  return (
    <div className="flex space-x-4 items-center z-10">
      {!isCartPage && !isExpanded && (
        <SearchButton toggleSearch={toggleSearch} />
      )}
      <CartButton goToCart={goToCart} totalItems={totalItems} />
    </div>
  );
};

export default ActionButtons;
