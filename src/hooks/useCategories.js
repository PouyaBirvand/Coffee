import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { CATEGORY_NAMES } from "../utils/categoryMapping";

export const useCategories = () => {
  const { selectedCategory, setSelectedCategory } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryChange = useCallback(
    (categoryId) => {
      if (selectedCategory === categoryId) return;

      setSelectedCategory(categoryId);
      const categoryName = CATEGORY_NAMES[categoryId];
      const newPath = `/${categoryName.replace(/\s+/g, "")}`;

      if (location.pathname !== newPath) {
        navigate(newPath, { replace: true });
      }
    },
    [selectedCategory, setSelectedCategory, navigate, location.pathname]
  );

  return {
    selectedCategory,
    handleCategoryChange,
  };
};
