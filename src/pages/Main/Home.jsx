import Header from "../../components/Header";
import ProductTitle from "../../components/ProductTitle";
import CartItems from "../../components/CartItems";
import BottomNavigation from "../../components/BottomNavigation";
import Categories from "../../components/Categories.jsx";


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
