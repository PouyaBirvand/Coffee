import { categoryIcons } from "./categoryIcons";
import { CategoryIcon } from "./CategoryIcon";
import { useCategories } from "../../../hooks/useCategories";
import { memo } from "react";

const Categories = memo(function Categories() {
  const { selectedCategory, handleCategoryChange } = useCategories();

  return (
    <div className="mx-auto md:w-min w-[70%]">
      <div className="bg-warm-wood bg-opacity-60 rounded-full sm:scale-[0.9] scale-[0.95] flex py-1 px-1 gap-1 justify-between xs:gap-[0.5rem]">
        {categoryIcons.map((category) => (
          <CategoryIcon
            key={category.categoryId}
            icon={category.icon}
            isSelected={selectedCategory === category.categoryId}
            onClick={() => handleCategoryChange(category.categoryId)}
          />
        ))}
      </div>
    </div>
  );
});

export default Categories;
