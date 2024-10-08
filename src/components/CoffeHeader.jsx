const menuIcon = new URL('@/assets/images/eva_menu-2-outline.png', import.meta.url).href;
const searchIcon = new URL('@/assets/images/vector.png', import.meta.url).href;
const basketIcon = new URL('@/assets/images/lets-icons_basket-alt-3.png', import.meta.url).href;

function CoffeHeader() {
  return (
    <div className="flex justify-between items-center">
      <img
        src={menuIcon}
        alt="menu"
        className="w-8 h-8 relative top-[0.2rem] cursor-pointer"
      />
      <div className="flex space-x-4 items-center">
        <img
          src={searchIcon}
          alt="searchbar"
          className="w-6 h-6 cursor-pointer"
        />
        <img
          src={basketIcon}
          alt="basket"
          className="w-9 h-9 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CoffeHeader;