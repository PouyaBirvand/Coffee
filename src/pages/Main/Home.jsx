import BottomNavigation from "../../components/BottomNavigation";
import CartItems from "../../components/CartItems";
import CoffeHeader from "../../components/CoffeHeader";
import CoffeTitle from "../../components/CoffeTitle";
import Products from "../../components/Products";

function Home() {
  return (
    <>
      <header>
        <CoffeHeader />
      </header>
      <main>
        <CoffeTitle />
        <CartItems />
        <Products />
      </main>
      <nav>
        <BottomNavigation />
      </nav>
    </>
  );
}

export default Home;
