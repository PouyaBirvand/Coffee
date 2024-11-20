import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { CATEGORY_NAMES } from "../utils/categoryMapping";

export const useCategories = () => {
  const { selectedCategory, setSelectedCategory } = useAppContext();
  const navigate = useNavigate();

  const handleCategoryChange = useCallback(
    (categoryId) => {
      setSelectedCategory(categoryId);
      const categoryName = CATEGORY_NAMES[categoryId];
      navigate(`/${categoryName.replace(/\s+/g, "")}`, { replace: true });
    },
    [setSelectedCategory, navigate]
  );

  return {
    selectedCategory,
    handleCategoryChange,
  };
};
