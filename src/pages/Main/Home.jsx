import BottomNavigation from "../../components/BottomNavigation";
import CartItems from "../../components/CartItems";
import CoffeTitle from "../../components/CoffeTitle";
import Header from "../../components/Header";
import Products from "../../components/Products";

function Home() {
  return (
    <>
      <Header />
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
