function CoffeHeader() {
  return (
      <div className="flex justify-between items-center">
        <img
          src="/public/assets/images/menu.png"
          alt="menu"
          className="w-8 h-8 relative top-[0.2rem] cursor-pointer"
        />
        <div className="flex space-x-4 items-center">
          <img
            src="/public/assets/images/vector.png"
            alt="searchbar"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="/public/assets/images/basket.png"
            alt="basket"
            className="w-9 h-9 cursor-pointer"
          />
        </div>
      </div>

  );
}

export default CoffeHeader;
