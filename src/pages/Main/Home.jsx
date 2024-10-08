import Header from "../../components/Header";
import ProductTitle from "../../components/ProductTitle";
import CartItems from "../../components/CartItems";
import Categories from "../../components/categories";
import BottomNavigation from "../../components/BottomNavigation";


function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductTitle />
        <CartItems />
        <Categories />
      </main>
        <BottomNavigation />
    </>
  );
}

export default Home;
