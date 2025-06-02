import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CATEGORY_NAMES, generateSlug } from '../utils/categoryMapping';
import { useCategoryData } from './useCategoryData';

export const useCategories = () => {
  const { selectedCategory, setSelectedCategory } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: categories = [] } = useCategoryData();

  const handleCategoryChange = useCallback(
    categoryId => {
      if (selectedCategory === categoryId) return;

      setSelectedCategory(categoryId);
      const category = categories.find(cat => cat.id === categoryId);
      const categoryPath = category
        ? generateSlug(category.name)
        : CATEGORY_NAMES[categoryId];

      const newPath = `/${categoryPath}`;

      if (location.pathname !== newPath) {
        navigate(newPath, { replace: true });
      }
    },
    [
      selectedCategory,
      setSelectedCategory,
      navigate,
      location.pathname,
      categories,
    ]
  );

  return {
    selectedCategory,
    handleCategoryChange,
  };
};
