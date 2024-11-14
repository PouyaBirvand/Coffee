import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useCallback, useEffect } from "react";
import { CATEGORIES, CATEGORY_NAMES } from "../utils/categoryMapping";
import Header from "../components/Header/Header";
import BottomNavigation from "../components/Footer/BottomNavigation";
import TableForm from "../components/TableForm";
import Categories from "../components/Categories";
import Products from "../components/Products";
import ProductTitle from "../components/ProductTitle";

function Homelayout() {
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
        navigate("/Coffee");
      }
    } else {
      setSelectedCategory(CATEGORIES.COFFEE);
      navigate("/Coffee");
    }
  }, [categoryId, navigate, setSelectedCategory, getCategoryId]);

  return (
    <div className="bg-body min-h-screen overflow-x-hidden w-full px-4 md:px-6 pt-6">
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main>
        <ProductTitle
          categoryName={CATEGORY_NAMES[selectedCategory]}
          isExpanded={isExpanded}
        />
        <TableForm />
        <Products categoryId={selectedCategory} isExpanded={isExpanded} />
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
