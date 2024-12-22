 const CartButton = ({ goToCart, totalItems }) => (
  <div className="relative">
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
      <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[0.65rem] text-center font-bold">
        {totalItems}
      </div>
    )}
  </div>
);

export default CartButton;
