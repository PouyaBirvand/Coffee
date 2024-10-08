function Header() {
  return (
    <header className="flex justify-between items-center">
      <button aria-label="Menu" className="focus:outline-none">
        <img
          src="/assets/images/eva_menu-2-outline.png"
          alt=""
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
    </header>
  );
}

export default Header;
