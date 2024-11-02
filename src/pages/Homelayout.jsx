import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNavigation from "../components/BottomNavigation";
import CartItems from "../components/Products";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";
import { useAppContext } from '../context/AppContext';
import TableForm from '../components/TableForm';
import { useTableForm } from '../hooks/useTableForm';

function Homelayout() {
  const { selectedCategory, setSelectedCategory, isExpanded, setIsExpanded } = useAppContext();
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
  }, [categoryId, navigate, setSelectedCategory]);

  function getCategoryName(id) {
    const categories = {
      'Icecreams': 'Ice creams',
      'Dessert': 'Dessert',
      'Shake': 'Shake',
      'Coffee': 'Coffee',
      'Foods': 'Foods'
    };
    return categories[id] || 'Coffee';
  }
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const { showForm, handleClose } = useTableForm();
  
  return (
    <div className='bg-body min-h-screen overflow-x-hidden w-full px-4 md:px-6 pt-6'>
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
      <main>
        <ProductTitle isExpanded={isExpanded} />
        <TableForm isVisible={showForm} onClose={handleClose} />
        <CartItems category={selectedCategory} isExpanded={isExpanded}/>
        {!isExpanded && (
          <Categories />
        )}
      </main>
      <BottomNavigation isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
    </div>
  );
}

export default Homelayout;
