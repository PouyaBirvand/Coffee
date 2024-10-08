import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <div className="flex justify-between items-center p-4">
        <button aria-label="Menu" className="focus:outline-none" onClick={toggleMenu}>
          <img
            src="/assets/images/eva_menu-2-outline.png"
            alt="HamburgerMenu"
            className="w-8 h-8 cursor-pointer"
          />
        </button>

        <div className="flex space-x-4 items-center">
          <button aria-label="Search" className="focus:outline-none">
            <img
              src="/assets/images/Vector.png"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
          </button>
          <button aria-label="Basket" className="focus:outline-none">
            <img
              src="/assets/images/lets-icons_basket-alt-3.png"
              alt=""
              className="w-9 h-9 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute -left-10 -top-7 h-[50rem]  w-[17rem] bg-red-500 shadow-md z-[1000] rounded-r-[4rem]">
          <nav className="py-2">
            <ul>
              <li><a href="/" className="block px-4 py-2 hover:bg-gray-100">Home</a></li>
              <li><a href="/about" className="block px-4 py-2 hover:bg-gray-100">About us</a></li>
              <li><a href="/products" className="block px-4 py-2 hover:bg-gray-100">Products</a></li>
              <li><a href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact us</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
