import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Header from '../../components/Header/Index';
import BottomNavigation from '../../components/Footer/Index';
import Categories from '../../components/Main/Categories/Index';
import Products from '../../components/Main/Products/Index';
import ProductTitle from '../../components/Header/Logo';
import {
  CATEGORY_NAMES,
  generateSlug,
  normalizeSlug,
} from '../../utils/categoryMapping';
import { useCategoryData } from '../../hooks/useCategoryData';
import TableForm from '../../ui/TableFormModal/TableForm';

function MenuPage() {
  const { categoryId } = useParams();
  const { data: categories = [] } = useCategoryData();
  const { selectedCategory, setSelectedCategory, isExpanded, setIsExpanded } =
    useAppContext();

  useEffect(() => {
    if (categoryId && categories.length > 0) {
      const matchedCategory = categories.find(
        category =>
          normalizeSlug(generateSlug(category.name)) ===
          normalizeSlug(categoryId)
      );

      if (matchedCategory) {
        setSelectedCategory(matchedCategory.id);
      }
    }
  }, [categoryId, categories, setSelectedCategory]);

  return (
    <div className="bg-body min-h-screen overflow-x-hidden w-full px-4 md:px-6 pt-6 flex flex-col">
      <div className="flex-shrink-0 mb-4">
        <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <ProductTitle
          categoryName={CATEGORY_NAMES[selectedCategory]}
          isExpanded={isExpanded}
        />
      </div>

      <div className="flex-1 min-h-0 relative mb-20">
        <div className="h-full">
          <Products
            categoryId={selectedCategory}
            isExpanded={isExpanded}
            closeExpanded={() => setIsExpanded(false)}
          />
        </div>
        <TableForm />
      </div>

      <div className="flex-shrink-0">
        {!isExpanded && (
          <div className="fixed bottom-[6.5rem] left-0 right-0 z-[9] transition-all duration-300">
            <Categories />
          </div>
        )}
        <BottomNavigation
          isExpanded={isExpanded}
          toggleExpanded={() => setIsExpanded(!isExpanded)}
        />
      </div>
    </div>
  );
}

export default MenuPage;
