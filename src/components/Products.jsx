import iceCream from '/../assets/images/ph_ice-cream-light.png';
import drinks from '/../assets/images/hugeicons_drink.png';
import icePack from '/../assets/images/hugeicons_soft-drink-01.png';
import coffee from '/../assets/images/ph_coffee-light.png';
import pizza from '/../assets/images/fluent_food-pizza-20-regular.png';

function Products() {
  return (
    <div className="flex justify-between items-center shadow-md mt-[4rem] bg-warm-wood bg-opacity-60 rounded-[50rem] py-1 px-3 mx-auto w-[70%] md:w-[75%] max-w-md overflow-scroll gap-[0.5rem]">
      <img
        src={iceCream}
        alt="iceCream"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src={drinks}
        alt="Drinks"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src={icePack}
        alt="icePack"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src={coffee}
        alt="Coffes"
        className="hover:bg-deep-mahogany p-2  rounded-full transition duration-300 bg-deep-mahogany cursor-pointer"
      />
      <img
        src={pizza}
        alt="Pizzas"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
    </div>
  );
}

export default Products;