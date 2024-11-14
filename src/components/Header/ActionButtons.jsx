import CartButton from "./CartButton";
import SearchButton from "./SeachButton";


// eslint-disable-next-line react/prop-types
const ActionButtons = ({ isCartPage, isExpanded, toggleSearch, goToCart, totalItems }) => {
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

