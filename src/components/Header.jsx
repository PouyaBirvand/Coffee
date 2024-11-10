import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { useAppContext } from "../context/AppContext";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const { isExpanded, setIsExpanded, totalItems } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeSearch = () => setIsSearchOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const goToCart = () => {
    navigate("/cart");
  };

  const isCartPage = location.pathname === "/cart";

  return (
    <header className="relative">
      <div className="flex justify-between items-center p-4">
        {!isCartPage && !isExpanded && (
          <button
            aria-label="Menu"
            className="focus:outline-none z-10"
            onClick={toggleMenu}
          >
            <lord-icon
              src="https://cdn.lordicon.com/eouimtlu.json"
              trigger="loop"
              delay="0"
              colors="primary:#412f26"
              style={{ width: "35px", height: "35px" }}
            />
          </button>
        )}

        {(isCartPage || isExpanded) && (
          <button
            aria-label="Arrow"
            className="focus:outline-none z-10"
            onClick={() =>
              isCartPage ? navigate(-1) : setIsExpanded(!isExpanded)
            }
          >
            <lord-icon
              src="https://cdn.lordicon.com/vduvxizq.json"
              trigger="loop"
              delay="0"
              colors="primary:#412f26"
              style={{
                width: "35px",
                height: "35px",
                transform: "rotate(180deg)",
              }}
            />
          </button>
        )}

        {isSearchOpen && !isCartPage ? (
          <div className="absolute inset-0 z-20" ref={searchRef}>
            <SearchBar onClose={closeSearch} />
          </div>
        ) : (
          <div className="flex space-x-4 items-center z-10">
            {!isCartPage && !isExpanded && (
              <button
                aria-label="Search"
                className="focus:outline-none"
                onClick={toggleSearch}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/kkvxgpti.json"
                  trigger="loop"
                  delay="0"
                  colors="primary:#412f26"
                  style={{ width: "35px", height: "35px" }}
                />
              </button>
            )}

            <button
              aria-label="Basket"
              className="focus:outline-none"
              onClick={goToCart}
            >
              <lord-icon
                src="https://cdn.lordicon.com/evyuuwna.json"
                trigger="loop"
                delay="0"
                colors="primary:#412f26"
                style={{ width: "35px", height: "35px" }}
              />
            </button>
            {totalItems > 0 && (
              <div className="absolute top-2 -right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[0.65rem] text-center font-bold">
                {totalItems}
              </div>
            )}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
          />
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
