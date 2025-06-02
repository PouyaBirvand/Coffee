import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ActionButtons from './HeaderButtons/ActionButtons';
import SearchOverlay from './SearchBar/SearchOverlay';
import Menu from './HamburgerMenu/Index';
import SearchBar from './SearchBar/Index';
import { useAppContext } from '../../context/AppContext';
import BackButton from './HeaderButtons/BackButton';
import CartButton from './HeaderButtons/CartButton';
import MenuButton from './HeaderButtons/MenuButton';

function Header() {
  // State Management
  const { isExpanded, setIsExpanded, totalItems } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hooks
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  // Event Handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeSearch = () => setIsSearchOpen(false);
  const goToCart = () => navigate('/cart', { replace: true });

  // Outside Click Handler
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  return (
    <header className="relative">
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-4 items-center z-10">
          {isCartPage ? (
            <CartButton goToCart={goToCart} totalItems={totalItems} />
          ) : isExpanded ? (
            <CartButton goToCart={goToCart} totalItems={totalItems} />
          ) : (
            <MenuButton toggleMenu={toggleMenu} />
          )}
        </div>

        {isSearchOpen && !isCartPage ? (
          <div className="absolute inset-0 z-20" ref={searchRef}>
            <SearchBar onClose={closeSearch} />
          </div>
        ) : (
          <div className="flex gap-4 items-center z-10">
            {isCartPage ? (
              <BackButton
                isCartPage={isCartPage}
                navigate={navigate}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
              />
            ) : isExpanded ? (
              <BackButton
                isCartPage={isCartPage}
                navigate={navigate}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
              />
            ) : (
              <ActionButtons
                isCartPage={isCartPage}
                isExpanded={isExpanded}
                toggleSearch={toggleSearch}
                goToCart={goToCart}
                totalItems={totalItems}
              />
            )}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />}
      </AnimatePresence>

      <SearchOverlay isSearchOpen={isSearchOpen} />
    </header>
  );
}

export default Header;
