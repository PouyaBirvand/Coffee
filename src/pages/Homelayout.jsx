import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNavigation from "../components/BottomNavigation";
import CartItems from "../components/CartItems";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";

function Homelayout() {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');
  const [isExpanded, setIsExpanded] = useState(false);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      const category = getCategoryName(categoryId);
      setSelectedCategory(category);
      navigate(`/${category.replace(/\s+/g, '')}`);
    } else {
      navigate('/Coffee');
    }
  }, [categoryId, navigate]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/${category.replace(/\s+/g, '')}`);
  };

  function getCategoryName(id) {
    const categories = {
      'IceCreams': 'Ice Creams',
      'Drinks': 'Drinks',
      'SoftDrinks': 'Soft Drinks',
      'Coffee': 'Coffee',
      'Pizza': 'Pizza'
    };
    return categories[id] || 'Coffee';
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-body h-screen overflow-auto scrollbar-hide w-full px-10 md:px-6 pt-6 ${isExpanded ? 'px-0' : 'px-6'}`}>
      <header className={`${isExpanded ? 'px-6' : '' }`}>
      <Header/>
      </header>
      <main>
        <ProductTitle isExpanded={isExpanded} />
        <CartItems category={selectedCategory} isExpanded={isExpanded}/>
        {!isExpanded && (
          <Categories onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        )}
      </main>
      <BottomNavigation isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
    </div>
  );
}

export default Homelayout;
