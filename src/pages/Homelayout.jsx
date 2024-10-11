import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNavigation from "../components/BottomNavigation";
import CartItems from "../components/CartItems";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";

function Homelayout() {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(getCategoryName(categoryId));
    } else {
      navigate('/Coffee');
    }
  }, [categoryId, navigate]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/${category}`);
  };

  function getCategoryName(id) {
    const categories = {
      'iceCreams': 'Ice Creams',
      'Drinks': 'Drinks',
      'SoftDrinks': 'Soft Drinks',
      'Coffee': 'Coffee',
      'Pizza': 'Pizza'
    };
    return categories[id] || 'Coffee';
  }

  return (
    <div className='bg-body h-screen overflow-auto scrollbar-hide w-full px-10 md:px-6 pt-5'>
      <Header />
      <main>
        <ProductTitle />
        <CartItems category={selectedCategory} />
        <Categories onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      </main>
      <BottomNavigation />
    </div>
  );
}

export default Homelayout;
