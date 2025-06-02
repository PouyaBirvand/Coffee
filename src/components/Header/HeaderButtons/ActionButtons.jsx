import CartButton from './CartButton';
import SearchButton from '../SearchBar/SearchButton';

const ActionButtons = ({ toggleSearch, goToCart, totalItems }) => {
  return (
    <div className="flex gap-4 items-center z-10">
      <SearchButton toggleSearch={toggleSearch} />
      <CartButton goToCart={goToCart} totalItems={totalItems} />
    </div>
  );
};

export default ActionButtons;
