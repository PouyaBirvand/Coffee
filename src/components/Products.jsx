function Products() {
  return (
    <div className="flex justify-between items-center shadow-md mt-[4rem] bg-warm-wood bg-opacity-60 rounded-[50rem] py-1 px-3 mx-auto w-[70%] md:w-[75%] max-w-md overflow-scroll gap-[0.5rem]">
      <img
        src="/public/assets/images/icecream.png"
        alt="iceCream"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src="/public/assets/images/drink.png"
        alt="Drinks"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src="/public/assets/images/softdrink.png"
        alt="icePack"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src="/public/assets/images/coffee.png"
        alt="Coffes"
        className="hover:bg-deep-mahogany p-2  rounded-full transition duration-300 bg-deep-mahogany cursor-pointer"
      />
      <img
        src="/public/assets/images/pizza.png"
        alt="Pizzas"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
    </div>
  );
}

export default Products;
