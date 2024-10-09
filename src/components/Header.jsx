import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative">
      <div className="flex justify-between items-center p-4">
        <button
          aria-label="Menu"
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            src="/assets/images/eva_menu-2-outline.png"
            alt="HamburgerMenu"
            className="w-8 h-8 cursor-pointer"
          />
        </button>

        <div className="flex space-x-4 items-center">
          <HeaderButton
            ariaLabel="Search"
            imageSrc="/assets/images/Vector.png"
            className="w-6 h-6"
          />
          <HeaderButton
            ariaLabel="Basket"
            imageSrc="/assets/images/lets-icons_basket-alt-3.png"
            className="w-9 h-9"
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && <Menu closeMenu={closeMenu} />}
      </AnimatePresence>
    </header>
  );
}
// eslint-disable-next-line react/prop-types
const HeaderButton = ({ ariaLabel, imageSrc, className }) => (
  <button aria-label={ariaLabel} className="focus:outline-none">
    <img src={imageSrc} alt="" className={`cursor-pointer ${className}`} />
    <p>asb</p>
  </button>
);

export default Header;
