import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useCallback, useEffect } from "react";
import { CATEGORIES, CATEGORY_NAMES } from "../../utils/categoryMapping";
import Header from "../../components/Header/Index";
import BottomNavigation from "../../components/Footer/Index";
import TableForm from "../../ui/TableFormModal";
import Categories from "../../components/Main/Categories/Index";
import Products from "../../components/Main/Products/Index";
import ProductTitle from "../../components/Header/Logo";

function MenuPage() {
  const { selectedCategory, setSelectedCategory, isExpanded, setIsExpanded } =
    useAppContext();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const getCategoryId = useCallback((urlCategory) => {
    return Object.entries(CATEGORY_NAMES).find(
      ([, name]) => name.replace(/\s+/g, "") === urlCategory
    )?.[0];
  }, []);

  useEffect(() => {
    if (categoryId) {
      const id = getCategoryId(categoryId);
      if (id) {
        setSelectedCategory(Number(id));
        const categoryName = CATEGORY_NAMES[id];
        navigate(`/${categoryName.replace(/\s+/g, "")}`, { replace: true });
      } else {
        navigate("/Coffee" , {replace: true});
      }
    } else {
      setSelectedCategory(CATEGORIES.COFFEE);
      navigate("/Coffee" , {replace: true});
    }
  }, [categoryId, navigate, setSelectedCategory, getCategoryId]);

  return (
    <div className="bg-body min-h-screen overflow-x-hidden w-full px-4 md:px-6 pt-6">
            <div className="flex-shrink-0">
        <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <ProductTitle categoryName={CATEGORY_NAMES[selectedCategory]} isExpanded={isExpanded} />
      </div>

      <div className="flex-1 min-h-0 relative">
        {/* Products Container */}
        <div className="h-full">
          <Products categoryId={selectedCategory} isExpanded={isExpanded} />
        </div>
        <TableForm />

        {!isExpanded && (
          <div className="absolute top-[27rem] left-0 right-0">
            <Categories />
          </div>
        )}
      </div>

      <div className="flex-shrink-0">
        <BottomNavigation
          isExpanded={isExpanded}
          toggleExpanded={() => setIsExpanded(!isExpanded)}
        />
      </div>

    </div>
  );
}

export default MenuPage;
