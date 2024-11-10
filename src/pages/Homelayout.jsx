import { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNavigation from "../components/BottomNavigation";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";
import { useAppContext } from '../context/AppContext';
import TableForm from '../components/TableForm';
import { CATEGORIES, CATEGORY_NAMES } from '../utils/categoryMapping';

function Homelayout() {
  const { selectedCategory, setSelectedCategory, isExpanded, setIsExpanded } = useAppContext();
  const { categoryId } = useParams();
  const navigate = useNavigate();  

  const getCategoryId = useCallback((urlCategory) => {
    return Object.entries(CATEGORY_NAMES).find(
      ([_, name]) => name.replace(/\s+/g, '') === urlCategory
    )?.[0];
  }, []);

  useEffect(() => {
    if (categoryId) {
      const id = getCategoryId(categoryId);
      if (id) {
        setSelectedCategory(Number(id));
        const categoryName = CATEGORY_NAMES[id];
        navigate(`/${categoryName.replace(/\s+/g, '')}`, { replace: true });
      } else {
        navigate('/Coffee');
      }
    } else {
      setSelectedCategory(CATEGORIES.COFFEE);
      navigate('/Coffee');
    }
  }, [categoryId, navigate, setSelectedCategory, getCategoryId]);

  return (
    <div className='bg-body min-h-screen overflow-x-hidden w-full px-4 md:px-6 pt-6'>
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
      <main>
        <ProductTitle 
          categoryName={CATEGORY_NAMES[selectedCategory]} 
          isExpanded={isExpanded} 
        />
        <TableForm/>
        <Products 
          categoryId={selectedCategory} 
          isExpanded={isExpanded}
        />
        {!isExpanded && <Categories />}
      </main>
      <BottomNavigation 
        isExpanded={isExpanded} 
        toggleExpanded={() => setIsExpanded(!isExpanded)} 
      />
    </div>
  );
}

export default Homelayout;
