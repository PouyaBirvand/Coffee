import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useCategoryNavigation = (categories, closeMenu) => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    const currentCategory = categories?.find(
      (category) => category.name.replace(/\s+/g, "") === currentPath
    );
    if (currentCategory) {
      setActiveItem(currentCategory.name); 
    }
  }, [location, categories]);

  const handleItemClick = (category) => {
    navigate(`/${category.name.replace(/\s+/g, "")}`);
    setActiveItem(category.name);
    closeMenu();
  };

  return { activeItem, handleItemClick };
};
